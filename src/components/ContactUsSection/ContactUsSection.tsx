import ContactUsImg from "@/../public/photos/contact.png";
import Image from "next/image";
import Input from "./utils/Input";
import Button from "../common/Buttons";
import TextArea from "./utils/TextArea";

export default function ContactUsSection() {
  return (
    <section
      id="contact"
      className="w-full flex flex-col items-center justify-around gap-8 px-14 tablet:flex-row"
    >
      <form action="" method="post" className="min-w-[450px] max-w-[550px]">
        <h1 className="text-[40px] font-bold mb-7">Let's Talk</h1>
        <div className="flex flex-col gap-5 mb-8">
          <Input
            labelText="Full Name"
            name="name"
            id="fullName"
            required={true}
            type="text"
          />
          <Input
            labelText="Email"
            name="email"
            id="email"
            required={true}
            type="email"
          />
          <Input
            labelText="Phone Number"
            name="phone"
            id="phoneNumber"
            required={false}
            type="tel"
          />
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
    </section>
  );
}
