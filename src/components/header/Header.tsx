import { ProfileIcon } from '../elements/ProfileIcon';
import { Menu } from './Menu';

export const Header = () => {
  return (
    <nav className="sticky top-0 flex bg-primary w-full p-4 justify-start items-center text-xl text-bold text-accent h-16 z-50">
      <div className="flex-1">
        <a href="/">
          <h1 className='flex gap-4 items-center'>
            <ProfileIcon />
            <span className='sm:text-2xl text-base'>MAKI YUU</span>
            <span className='md:text-sm text-xs'>- お片づけサポート -</span>
          </h1>
        </a>
      </div>
      <nav className="hidden sm:flex text-base gap-6 list-none">
        <li><a href="/services">SERVICE</a></li>
        <li><a href="/contact">CONTACT</a></li>
        <li><a href="/examples">EXAMPLES</a></li>
        <li><a href="/about_me">ABOUT ME</a></li>
      </nav>
      <div className="flex justify-center items-center sm:hidden">
        <Menu />
      </div>
    </nav>
  )
}
