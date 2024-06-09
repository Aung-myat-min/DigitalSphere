import ContactUsImg from "@/../public/photos/contact.png";
import Image from "next/image";
import Input from "./utils/Input";
import Button from "../common/Buttons";
import TextArea from "./utils/TextArea";
import React, { useRef, useState } from "react";
import { getMessage } from "@/app/api/sendEmail";
import toast, { Toaster } from "react-hot-toast";

export default function ContactUsSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;

    // Remove all non-digit characters except the dash
    inputValue = inputValue.replace(/[^\d-]/g, "");

    // Insert a dash after the first two digits if not already present
    if (inputValue.length > 2 && inputValue[2] !== "-") {
      inputValue = `${inputValue.slice(0, 2)}-${inputValue.slice(2)}`;
    }

    // Validate the format
    const isValid = /^\d{2}-\d{6,9}$/.test(inputValue);
    if (isValid || inputValue === "" || /^\d{1,2}$/.test(inputValue)) {
      setError("");
      setValue(inputValue);
    } else {
      setError("Invalid format. Should be 09-XXXXXX.");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(formRef.current!);
    try {
      await toast.promise(getMessage(form), {
        loading: "Sending Message...",
        success: "Message sent successfully",
        error: "Failed to send message",
      });
      formRef.current!.reset();
      setValue("");
    } catch (error) {
      console.error("Error in handleSubmit:", error);
    }
  };

  return (
    <section
      id="contact"
      className="w-full flex flex-col items-center justify-around gap-8 px-14 tablet:flex-row"
    >
      <form
        method="post"
        className="flex-1"
        onSubmit={handleSubmit}
        id="form"
        ref={formRef}
      >
        <h1 className="text-[40px] font-bold mb-7">Let's Talk</h1>
        <div className="flex flex-col gap-5 mb-8">
          <Input
            labelText="Full Name"
            name="name"
            id="fullName"
            required={true}
            type="text"
            placeholder="John Doe"
          />
          <Input
            labelText="Email"
            name="email"
            id="email"
            required={true}
            type="email"
            placeholder="yourexampleemail.com"
          />
          <Input
            labelText="Phone Number"
            name="phone"
            id="phoneNumber"
            required={true}
            type="tel"
            onChange={handleChange}
            value={value}
            placeholder="09-757184004"
          />
          {error && <div style={{ color: "red" }}>{error}</div>}
          <TextArea
            labelText="How can we help?"
            name="message"
            id="message"
            required={true}
          />
        </div>
        <Button text="Send Message" type="primary" className="w-[200px]" />
      </form>
      <Image
        src={ContactUsImg}
        alt="Contact Us"
        width={721}
        height={721}
        className="hidden w-[50%] tablet:block"
      />
      <Toaster />
    </section>
  );
}
