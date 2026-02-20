import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  FaCrown,
  FaSearch,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

const menuItems = [
  { title: 'Home', path: '/', hasDropdown: false },
  { title: 'Academics', path: '/academics', hasDropdown: false },
  {
    title: 'Admissions',
    path: '/admissions',
    hasDropdown: true,
    subItems: [
      { title: 'Apply to Queenster', path: '/apply' },
      { title: 'Campus Tour', path: '/campus-tour' },
      { title: 'Scholarships', path: '/scholarships' }
    ]
  },
  { title: 'Courses', path: '/courses', hasDropdown: false },
  { title: 'Athletics', path: '/athletics', hasDropdown: false },
  { title: 'University Life', path: '/university-life', hasDropdown: false }
];

export default function Navbar() {
  const [open, setOpen] = useState(null);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [hideTopBar, setHideTopBar] = useState(false);

  const router = useRouter();
  const navRef = useRef(null);
  const lastScrollY = useRef(0);

  /* scroll styles */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* hide top bar on scroll down */
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      if (y < 60) setHideTopBar(false);
      else if (y > lastScrollY.current) setHideTopBar(true);
      else setHideTopBar(false);
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* close menus on route change */
  useEffect(() => {
    setMobileOpen(false);
    setMobileAccordion(null);
    setOpen(null);
  }, [router.pathname]);

  /* close on outside click */
  useEffect(() => {
    const onDoc = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpen(null);
      }
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const goToCampusTour = () => {
    router.push("/campus-tour");
  };

  const linkClass = (active) =>
    `uppercase tracking-wide text-sm transition-colors ${
      active ? "text-[#1f3a63]" : ""
    }`;

  return (
    <>
      <header ref={navRef} className="fixed top-0 left-0 w-full z-[9999]">
        {/* TOP BAR */}
        <div
          className="bg-blue-600 text-white text-xs transition-all"
          style={{
            maxHeight: hideTopBar ? 0 : 80,
            opacity: hideTopBar ? 0 : 1,
            overflow: "hidden",
          }}
        >
          <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between">
            <div className="flex gap-4">
              <span>📞 +91 9351946070</span>
              <span>|</span>
              <span>info@queenster.edu</span>
            </div>
            <div className="flex gap-4">
              <Link href="/apply" className="hover:underline">
                Apply Now
              </Link>
              <button onClick={goToCampusTour} className="hover:underline">
                Visit Campus
              </button>
            </div>
          </div>
        </div>

        {/* MAIN NAV */}
        <nav
          className={`transition-all duration-300 ${
            scrolled
              ? "bg-white/90 backdrop-blur shadow-md"
              : "bg-gradient-to-r from-[#10233f]/70 to-[#1f3a63]/60"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#1f3a63] to-[#254b89] flex items-center justify-center text-white">
                <FaCrown />
              </div>
              <div className="leading-tight">
                <div className="font-bold">Queenster</div>
                <div className="text-xs">University</div>
              </div>
            </Link>

            {/* DESKTOP MENU */}
           {/* DESKTOP MENU */}
<ul className="hidden md:flex items-center gap-8">
  {menuItems.map(item => (
    <li key={item.title} className="relative group">
      {/* MENU ITEM */}
      <div className="flex items-center gap-1 cursor-pointer">
        <Link
          href={item.path}
          className={router.pathname === item.path ? linkClass(true) : linkClass(false)}
        >
          {item.title}
        </Link>

        {item.hasDropdown && (
          <FaChevronDown className="text-xs mt-[2px]" />
        )}
      </div>

      {/* DROPDOWN */}
      {item.hasDropdown && (
        <div
          className="
            absolute top-full left-0 mt-2 w-56
            bg-white rounded-xl shadow-lg z-50
            opacity-0 scale-95 invisible
            group-hover:opacity-100
            group-hover:scale-100
            group-hover:visible
            transition-all duration-200
          "
        >
          <ul className="py-2">
            {item.subItems.map(sub => (
              <li key={sub.title}>
                {sub.path === "/campus-tour" ? (
                  <button
                    onClick={goToCampusTour}
                    className="w-full text-left px-4 py-2 text-white/90 hover:bg-white/10 hiver:text-[#c5aa6a] transition-colurs"
                  >
                    {sub.title}
                  </button>
                ) : (
                  <Link
                    href={sub.path}
                    className="block px-4 py-2 hover:bg-white/10 hover:text-[#c5aa6a] transition-colors"
                  >
                    {sub.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  ))}
</ul>
            {/* RIGHT */}
            <div className="flex items-center gap-3">
              <Link
                href="/apply"
                className="hidden md:inline-flex bg-[#ff7a00] text-white px-4 py-2 rounded-full font-semibold"
              >
                Apply Now
              </Link>
              <button
                className="md:hidden text-xl"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden fixed left-0 w-full bg-white shadow-lg transition z-[10000] ${
          mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{ top: hideTopBar ? '96px' : '176px' }}
      >
        <div className="px-6 py-4 space-y-3">
          {menuItems.map(item => (
            <div key={item.title}>
              {item.hasDropdown ? (
                <>
                  <button
                    onClick={() =>
                      setMobileAccordion(
                        mobileAccordion === item.title.toLowerCase() ? null : item.title.toLowerCase()
                      )
                    }
                    className="flex justify-between w-full"
                  >
                    {item.title} {mobileAccordion === item.title.toLowerCase() ? <FaChevronUp /> : <FaChevronDown />}
                  </button>

                  {mobileAccordion === item.title.toLowerCase() && (
                    <div className="pl-4 space-y-2">
                      {item.subItems.map(sub => (
                        sub.path === '/campus-tour' ? (
                          <button key={sub.title} onClick={goToCampusTour}>{sub.title}</button>
                        ) : (
                          <Link key={sub.title} href={sub.path}>{sub.title}</Link>
                        )
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link href={item.path} className="block">{item.title}</Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
