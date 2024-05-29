import Link from "next/link";
import ThemeSwitcher from "../common/ThemeSwitcher";
import Links from "./utils/Links";
import Logo from "./utils/Logo";

export default function NavBar() {
  return (
    <nav className="w-full h-[100px] flex items-center justify-between px-[3dvw] fixed top-0 left-0 z-2">
      <div className="logo flex flex-row items-center">
        <Logo />
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-200">
          <Link href="/">Digital Sphere</Link>
        </h1>
      </div>
      <div className="responsive hidden"></div>
      <div className="links flex flex-row w-[40%] justify-between items-center">
        <Links text="Projects" to="#" />
        <Links text="Services" to="#" />
        <Links text="About" to="#" />
        <Links text="Contact" to="#" />
        <ThemeSwitcher />
      </div>
    </nav>
  );
}