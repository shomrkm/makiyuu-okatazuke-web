import { useDisclosure } from "../../hooks/useDisclosure";
import clsx from "clsx";

export const Menu = () => {
  const { isOpen, toggle: toggleMenu } = useDisclosure();

  return (
    <>
      <button
        type="button"
        onClick={toggleMenu}
        className="z-10 space-y-2 bg-primary"
      >
        <div
          className={clsx(
            "duration-400 h-0.5 w-8 bg-accent transition ease-in-out",
            isOpen && "translate-y-2.5 rotate-45",
          )}
        />
        <div
          className={clsx(
            "duration-400 h-0.5 w-8 bg-accent transition ease-in-out",
            isOpen && "opacity-0",
          )}
        />
        <div
          className={clsx(
            "duration-400 h-0.5 w-8 bg-accent transition ease-in-out",
            isOpen && "-translate-y-2.5 -rotate-45",
          )}
        />
      </button>
      <nav
        className={clsx(
          "fixed top-16 flex w-screen flex-col justify-center bg-primary py-4 text-center duration-100 ease-linear ",
          isOpen ? "fixed right-0 top-16" : "fixed right-[-100%] top-16",
        )}
      >
        <ul className="ml-4 flex-col justify-start gap-10 text-start text-sm text-gray-700">
          <li className="pb-4">
            <a href="/services">
              SERVICE<span className="ml-4 text-xs">- サービス一覧 - </span>
            </a>
          </li>
          <li className="pb-4">
            <a href="/contact">
              CONTACT<span className="ml-4 text-xs">- お申し込み - </span>
            </a>
          </li>
          <li className="pb-4">
            <a href="/examples">
              EXAMPLES<span className="ml-4 text-xs">- サポート実例 - </span>
            </a>
          </li>
          <li className="pb-2">
            <a href="/about_me">
              ABOUT ME<span className="ml-4 text-xs">- 私について - </span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
