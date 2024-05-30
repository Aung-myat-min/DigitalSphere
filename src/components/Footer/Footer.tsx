import Logo from "../NavBar/utils/Logo";
import facebookIcon from "@/../public/icons/facebook.svg";
import viberIcon from "@/../public/icons/viber.svg";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#d9d9d9] h-[209px] mt-10 flex flex-col justify-center px-12 dark:bg-[#000]">
      <Logo />
      <div className="flex flex-row justify-between ml-16">
        <p className="text-[16px]">Transforming Digitally, Together</p>
        <div className="flex flex-row gap-3">
          <Link href="#">
            <Image
              src={facebookIcon}
              alt="Our Facebook Page"
              width={13}
              height={26}
              className="hover:fill-primary dark:invert"
            />
          </Link>
          <Link href="#">
            <Image
              src={viberIcon}
              alt="Our Viber"
              width={23}
              height={26}
              className="hover:fill-primary dark:invert"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
