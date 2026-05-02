export default function NavBar() {
  return (
    <header className="w-full bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100">
      <nav className="grid grid-cols-3 items-center py-6 px-4 md:px-8">
        {/* Left: Optional space for menu/search */}
        <div className="flex items-center">
          {/* Placeholder for future left-side content */}
        </div>

        {/* Center: Brand Name */}
        <div className="text-center">
          <a
            href="/"
            className="text-2xl md:text-3xl font-black tracking-tighter text-slate-900 hover:text-blue-600 transition-all duration-300"
          >
            Yang Livestock
          </a>
        </div>

        {/* Right: Navigation Links */}
        <ul className="flex justify-end items-center gap-x-6 md:gap-x-10 text-[11px] md:text-[13px] font-bold uppercase tracking-[0.2em] text-slate-500">
          <li className="hover:text-blue-600 cursor-pointer transition-colors duration-300">
            Services
          </li>
          <li className="hover:text-blue-600 cursor-pointer transition-colors duration-300">
            Markets
          </li>
          <li className="hover:text-blue-600 cursor-pointer transition-colors duration-300">
            Cart
          </li>
        </ul>
      </nav>
    </header>
  );
}
