import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  FaCrown,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

const TOPBAR_H = 40;
const NAVBAR_H = 80;

const menuItems = [
  { title: "Home", path: "/", hasDropdown: false },
  { title: "Academics", path: "/academics", hasDropdown: false },
  {
    title: "Admissions",
    path: "/admissions",
    hasDropdown: true,
    subItems: [
      { title: "Apply to Queenster", path: "/apply" },
      { title: "Campus Tour", path: "/campus-tour" },
      { title: "Scholarships", path: "/scholarships" },
    ],
  },
  { title: "Courses", path: "/courses", hasDropdown: false },
  { title: "Athletics", path: "/athletics", hasDropdown: false },
  { title: "University Life", path: "/university-life", hasDropdown: false },
];

export default function Navbar() {
  const [open, setOpen] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState(null);
  const [hideTopBar, setHideTopBar] = useState(false);

  const router = useRouter();
  const navRef = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      const y = window.scrollY || 0;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const delta = y - lastScrollY.current;
          if (y < 60) setHideTopBar(false);
          else if (delta > 15) setHideTopBar(true);
          else if (delta < -15) setHideTopBar(false);
          lastScrollY.current = y;
          ticking = false;
        });
        ticking = true;
      }
    };
    lastScrollY.current = window.scrollY || 0;
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileAccordion(null);
    setOpen(null);
  }, [router.pathname]);

  useEffect(() => {
    const onDoc = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpen(null);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const goToCampusTour = () => router.push("/campus-tour");

  const linkClass = (active) =>
    `uppercase tracking-wide text-sm transition-colors ${
      active ? "text-[#F97316]" : "text-white/90 hover:text-[#c5aa6a]"
    }`;

  const HEADER_TOTAL = (hideTopBar ? 0 : TOPBAR_H) + NAVBAR_H;

  return (
    <>
      <header ref={navRef} className="fixed top-0 left-0 w-full z-[9999]">
        {/* TOP BAR */}
        <div
          className="fixed left-0 w-full bg-[#10233f] text-white text-xs"
          style={{
            top: 0,
            height: TOPBAR_H,
            transform: hideTopBar ? "translateY(-100%)" : "translateY(0)",
            opacity: hideTopBar ? 0 : 1,
            pointerEvents: hideTopBar ? "none" : "auto",
            transition: "transform 0.28s ease, opacity 0.2s ease",
            zIndex: 9999,
          }}
        >
          <div className="max-w-7xl mx-auto px-8 h-full flex items-center justify-between">
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

        {/* MAIN NAVBAR */}
        <nav
          className="fixed left-0 w-full bg-gradient-to-r from-[#0b1d3a] to-[#102f5a] text-white shadow-lg"
          style={{
            top: hideTopBar ? 0 : TOPBAR_H,
            height: NAVBAR_H,
            transition: "top 0.28s ease",
            zIndex: 9998,
          }}
        >
          <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
            <Link href="/" className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#1f3a63] to-[#254b89] flex items-center justify-center text-white">
                <FaCrown />
              </div>
              <div className="leading-tight">
                <div className="font-bold">Queenster</div>
                <div className="text-xs">University</div>
              </div>
            </Link>

            {/* DESKTOP MENU */}
            <ul className="hidden md:flex items-center gap-8">
              {menuItems.map((item) => (
                <li key={item.title} className="relative group">
                  <div className="flex items-center gap-1 cursor-pointer">
                    <Link
                      href={item.path}
                      className={linkClass(router.pathname === item.path)}
                    >
                      {item.title}
                    </Link>
                    {item.hasDropdown && (
                      <FaChevronDown className="text-xs mt-[2px]" />
                    )}
                  </div>

                  {item.hasDropdown && (
                    <div className="absolute top-full left-0 w-56 bg-[#0b1d3a] text-white border border-white/10 shadow-xl rounded-xl z-50 opacity-0 scale-95 invisible group-hover:opacity-100 group-hover:scale-100 group-hover:visible transition-all duration-200">
                      <ul className="py-2">
                        {item.subItems.map((sub) => (
                          <li key={sub.title}>
                            {sub.path === "/campus-tour" ? (
                              <button
                                onClick={goToCampusTour}
                                className="w-full text-left px-4 py-2 hover:bg-white/10 hover:text-[#c5aa6a] transition-colors"
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

            {/* RIGHT SIDE BUTTONS */}
            <div className="flex items-center gap-3">
              {/* LUXURY LOGIN BUTTON */}
              <Link
                href="/login"
                className="hidden md:inline-flex px-5 py-2 rounded-full font-semibold bg-gradient-to-r from-[#FF3E1A] via-[#ffb347] to-[#ffd27f] text-[#0b1d3a] shadow-[0_0_15px_rgba(255,215,0,0.5)] border border-white/20 hover:scale-105 transition-all duration-300"
              >
                Login
              </Link>

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

      <div style={{ height: HEADER_TOTAL }} />

      {/* MOBILE MENU */}
      <div
        className={`md:hidden fixed left-0 w-full bg-white shadow-lg transition z-[9997] ${
          mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{ top: HEADER_TOTAL }}
      >
        <div className="px-6 py-4 space-y-3">
          {/* MOBILE LOGIN BUTTON */}
          <Link
            href="/login"
            className="block w-full text-center py-2 rounded-lg font-semibold bg-gradient-to-r from-[#c5aa6a] to-[#ffd27f] text-[#0b1d3a] shadow-md"
          >
            Login
          </Link>

          {menuItems.map((item) => (
            <div key={item.title}>
              {item.hasDropdown ? (
                <>
                  <button
                    onClick={() =>
                      setMobileAccordion(
                        mobileAccordion === item.title.toLowerCase()
                          ? null
                          : item.title.toLowerCase()
                      )
                    }
                    className="flex justify-between w-full font-medium"
                  >
                    {item.title}
                    {mobileAccordion === item.title.toLowerCase() ? (
                      <FaChevronUp />
                    ) : (
                      <FaChevronDown />
                    )}
                  </button>

                  {mobileAccordion === item.title.toLowerCase() && (
                    <div className="pl-4 space-y-2 pt-2">
                      {item.subItems.map((sub) =>
                        sub.path === "/campus-tour" ? (
                          <button
                            key={sub.title}
                            onClick={goToCampusTour}
                            className="block text-left w-full"
                          >
                            {sub.title}
                          </button>
                        ) : (
                          <Link key={sub.title} href={sub.path} className="block">
                            {sub.title}
                          </Link>
                        )
                      )}
                    </div>
                  )}
                </>
              ) : (
                <Link href={item.path} className="block font-medium">
                  {item.title}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
