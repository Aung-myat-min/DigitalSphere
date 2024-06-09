"use server";
import { PrismaClient, Profile, Message } from "@prisma/client";

const prisma = new PrismaClient();
export const getMessage = async (data: FormData) => {
  try {
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const phone = data.get("phone") as string;
    const message = data.get("message") as string;

    if (!name || !email || !phone || !message) {
      throw new Error("All fields are required.");
    }

    let profile = await prisma.profile.findUnique({
      where: { email },
    });

    if (!profile) {
      console.log(
        `Profile doesn't exist. Creating new profile for ${email}...`
      );
      await createProfile({ name, email, phone })
        .then(async () => {
          const newProfile = await prisma.profile.findUnique({
            where: { email },
          });
          if (newProfile) {
            await createMessage({ profileId: newProfile.id, message });
          }
        })
        .catch((error) => {
          console.error("Error creating profile or message:", error);
          throw error;
        });
    } else {
      console.log(
        `Profile already existed. Inserting new message from ${email}...`
      );
      await createMessage({ profileId: profile.id, message }).catch((error) => {
        console.error("Error creating message:", error);
        throw error;
      });
    }
  } catch (error) {
    console.error("Error in getMessage:", error);
    throw error;
  }
};

const createProfile = async ({ name, email, phone }: Omit<Profile, "id">) => {
  try {
    const profile = await prisma.profile.create({
      data: { name, email, phone },
    });
    return profile;
  } catch (error) {
    console.error("Error creating profile:", error);
    throw error;
  }
};

const createMessage = async ({
  profileId,
  message,
}: Omit<Message, "id" | "time"> & { time?: Date }) => {
  try {
    const time = new Date();
    const newMessage = await prisma.message.create({
      data: {
        profileId,
        message,
        time,
      },
    });
    return newMessage;
  } catch (error) {
    console.error("Error creating message:", error);
    throw error;
  }
};
