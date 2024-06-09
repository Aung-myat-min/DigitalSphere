"use server";
import { EmailTemplate } from "@/components/EmailTemplate/v1";
import { PrismaClient, Profile, Message } from "@prisma/client";
import { render } from "@react-email/components";
const nodemailer = require("nodemailer");

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
      profile = await createProfile({ name, email, phone });
    }

    console.log(`Inserting new message from ${email}...`);
    await createMessage({ profileId: profile.id, message });

    // Send email
    await sendEmail(email, name);
    return "Message sent successfully";
  } catch (error) {
    console.error("Error in getMessage:", error);
    throw new Error("Failed to process the message");
  }
};

const createProfile = async ({ name, email, phone }: Omit<Profile, "id">) => {
  try {
    return await prisma.profile.create({
      data: { name, email, phone },
    });
  } catch (error) {
    console.error("Error creating profile:", error);
    throw error;
  }
};

const createMessage = async ({
  profileId,
  message,
}: Omit<Message, "id" | "time">) => {
  try {
    const time = new Date();
    return await prisma.message.create({
      data: {
        profileId,
        message,
        time,
      },
    });
  } catch (error) {
    console.error("Error creating message:", error);
    throw error;
  }
};

const sendEmail = async (toEmail: string, name: string) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const emailHtml = render(EmailTemplate({ email: toEmail, name }));

  const mailOptions = {
    from: process.env.EMAIL,
    to: toEmail,
    subject: "Welcome to Digital Sphere",
    html: emailHtml,
  };

  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
};
