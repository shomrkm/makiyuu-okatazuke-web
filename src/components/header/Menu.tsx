import { useDisclosure } from '../../hooks/useDisclosure';
import clsx from 'clsx';

export const Menu = () => {
  const { isOpen, toggle: toggleMenu } = useDisclosure();

  return (
    <>
      <button type="button" onClick={toggleMenu} className="z-10 space-y-2 bg-primary">
        <div className={clsx("w-8 h-0.5 bg-accent transition duration-400 ease-in-out", isOpen && "translate-y-2.5 rotate-45")} />
        <div className={clsx("w-8 h-0.5 bg-accent transition duration-400 ease-in-out", isOpen && "opacity-0")} />
        <div className={clsx("w-8 h-0.5 bg-accent transition duration-400 ease-in-out", isOpen && "-translate-y-2.5 -rotate-45")} />
      </button>
      <nav className={
        clsx("flex flex-col justify-center w-screen py-4 top-16 fixed bg-primary text-center ease-linear duration-100 ",
          isOpen ? "fixed top-16 right-0" : "fixed top-16 right-[-100%]")
      }>
        <ul className="flex-col justify-start text-start ml-4 gap-10 text-sm text-accent">
          <li className='pb-4'><a href="/services">SERVICE</a></li>
          <li className='pb-4'><a href="/contact">お申し込み</a></li>
          <li className='pb-4'><a href="/examples">サポート実例</a></li>
          <li className='pb-2'><a href="/about_me">ABOUT ME</a></li>
        </ul>
      </nav>
    </>
  )
}
