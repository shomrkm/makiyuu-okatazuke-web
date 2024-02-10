import { Menu } from './Menu';

export const Header = () => {
  return (
    <nav className="sticky top-0 flex bg-primary w-full p-4 justify-start items-center text-xl text-bold text-gray-700 h-16 z-50">
      <div className="flex-1">
        <a href="/">
          <h1 className="text-lg sm:text-base">MAKI YUU  お片づけサポート</h1>
        </a>
      </div>
      <nav className="hidden sm:flex text-base gap-6 list-none">
        <li><a href="/services">SERVICE</a></li>
        <li><a href="/contact">お申し込み</a></li>
        <li><a href="/examples">サポート実例</a></li>
        <li><a href="/about_me">ABOUT ME</a></li>
      </nav>
      <div className="flex justify-center items-center sm:hidden">
        <Menu />
      </div>
    </nav>
  )
}
