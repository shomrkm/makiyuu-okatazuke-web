import { ProfileIcon } from "../elements/ProfileIcon";
import { Menu } from "./Menu";

export const Header = () => {
  return (
    <nav className="text-bold sticky top-0 z-50 flex h-16 w-full items-center justify-start bg-primary p-4 text-xl text-accent">
      <div className="flex-1">
        <a href="/">
          <h1 className="flex items-center gap-4">
            <ProfileIcon />
            <span className="text-base sm:text-2xl">MAKI YUU</span>
            <span className="text-xs md:text-sm">- お片づけサポート -</span>
          </h1>
        </a>
      </div>
      <nav className="hidden list-none gap-6 text-base sm:flex">
        <li>
          <a href="/services">SERVICE</a>
        </li>
        <li>
          <a href="/contact">CONTACT</a>
        </li>
        <li>
          <a href="/examples">EXAMPLES</a>
        </li>
        <li>
          <a href="/about_me">ABOUT ME</a>
        </li>
      </nav>
      <div className="flex items-center justify-center sm:hidden">
        <Menu />
      </div>
    </nav>
  );
};
