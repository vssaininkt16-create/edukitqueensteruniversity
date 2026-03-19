import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import Image from "next/image";

/* Static fallback menu (used when no API menu is available) */
const STATIC_MENU = [
  { title: "Home",            url: "/"              },
  { title: "Academics",       url: "/academics"     },
  { title: "Admissions",      url: "/admissions",
    subItems: [
      { title: "Apply Now",     url: "/apply"         },
      { title: "Campus Tour",   url: "/campus-tour"   },
      { title: "Scholarships",  url: "/scholarships"  },
    ],
  },
  { title: "Courses",         url: "/courses"       },
  { title: "Athletics",       url: "/athletics"     },
  { title: "University Life", url: "/university-life" },
];

export default function Navbar({ websiteData = {} }) {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileAccordion, setMobileAccordion] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  /* Dynamic data from API */
  const website = websiteData?.website || {};
  const logo    = website?.logo || "";
  const siteName = website?.title || "Queenster University";
  const rawMenu  = websiteData?.menus?.PRIMARY_MENU?.items;
  const menuItems = Array.isArray(rawMenu) && rawMenu.length ? rawMenu : STATIC_MENU;

  /* Scroll detection */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close dropdown on outside click */
  useEffect(() => {
    const handle = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, []);

  /* Close mobile menu on route change */
  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [router.pathname]);

  const isActive = (url) => url && router.pathname === url;

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(7,20,40,0.97)"
          : "linear-gradient(to bottom, rgba(7,20,40,0.85), transparent)",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          {logo ? (
            <img
              src={logo}
              alt={siteName}
              className="h-10 md:h-12 w-auto object-contain"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
          ) : (
            <span className="text-white font-black text-xl tracking-tight">
              <span className="text-orange-500">Q</span>ueenster
            </span>
          )}
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex items-center gap-1">
          {menuItems.map((item, idx) => {
            const hasSub = Array.isArray(item.subItems) && item.subItems.length > 0;
            const active = isActive(item.url);
            return (
              <li key={idx} className="relative">
                {hasSub ? (
                  <button
                    onClick={() => setOpenDropdown(openDropdown === idx ? null : idx)}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-150 ${
                      active ? "text-orange-400" : "text-white/80 hover:text-white"
                    }`}
                  >
                    {item.title}
                    <FaChevronDown className={`text-xs transition-transform duration-200 ${openDropdown === idx ? "rotate-180" : ""}`} />
                  </button>
                ) : (
                  <Link
                    href={item.url || "#"}
                    className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-150 ${
                      active
                        ? "text-orange-400 bg-white/5"
                        : "text-white/80 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {item.title}
                  </Link>
                )}

                {/* Dropdown */}
                {hasSub && openDropdown === idx && (
                  <div className="absolute top-full left-0 mt-2 w-52 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                    style={{ background: "rgba(10,25,50,0.97)", backdropFilter: "blur(20px)" }}>
                    {item.subItems.map((sub, si) => (
                      <Link
                        key={si}
                        href={sub.url || "#"}
                        className="block px-5 py-3 text-sm text-white/75 hover:text-white hover:bg-white/10 transition-colors duration-150"
                      >
                        {sub.title}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/apply"
            className="px-5 py-2.5 rounded-full text-sm font-bold text-white transition-all duration-200 hover:scale-105 shadow-lg"
            style={{ background: "linear-gradient(135deg,#f97316,#ea580c)" }}
          >
            Apply Now
          </Link>
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white/80 hover:text-white p-2 rounded-xl transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div
          className="lg:hidden border-t border-white/10 px-4 py-4 space-y-1"
          style={{ background: "rgba(7,20,40,0.98)", backdropFilter: "blur(20px)" }}
        >
          {menuItems.map((item, idx) => {
            const hasSub = Array.isArray(item.subItems) && item.subItems.length > 0;
            return (
              <div key={idx}>
                {hasSub ? (
                  <>
                    <button
                      onClick={() => setMobileAccordion(mobileAccordion === idx ? null : idx)}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-white/80 font-medium text-sm hover:bg-white/5 transition-colors"
                    >
                      {item.title}
                      <FaChevronDown className={`text-xs transition-transform duration-200 ${mobileAccordion === idx ? "rotate-180" : ""}`} />
                    </button>
                    {mobileAccordion === idx && (
                      <div className="pl-4 mt-1 space-y-1">
                        {item.subItems.map((sub, si) => (
                          <Link key={si} href={sub.url || "#"}
                            className="block px-4 py-2.5 rounded-xl text-white/65 hover:text-white hover:bg-white/5 text-sm transition-colors">
                            {sub.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.url || "#"}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      isActive(item.url) ? "text-orange-400 bg-white/5" : "text-white/80 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            );
          })}
          <div className="pt-2">
            <Link href="/apply"
              className="block w-full text-center px-5 py-3 rounded-full text-sm font-bold text-white shadow-lg"
              style={{ background: "linear-gradient(135deg,#f97316,#ea580c)" }}>
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
