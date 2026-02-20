import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from 'next/router';
import { FaCrown } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

const MENU = [
  { name: "Home", to: "/" },
  { name: "Pages", to: "/pages" },
  { name: "Academics", to: "/academics", mega: true },
  { name: "Admissions", to: "/admissions", mega: true },
  { name: "Courses", to: "/courses" },
  { name: "Athletics", to: "/athletics" },
  { name: "University Life", to: "/life" },
];

export default function Navbar() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileMega, setMobileMega] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Academics data for mega menu
  const academicsMenu = {
    undergraduate: [
      "Business Administration",
      "School of Law",
      "Engineering",
      "Medicine",
      "Art & Science",
    ],
    graduate: [
      "Hospitality Management",
      "Physics",
      "Chemistry",
      "Music",
      "Computer Science",
    ],
    resources: [
      "Department Page",
      "Major Page",
      "Faculty Page",
      "Single Instructor",
      "Single Course",
    ],
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white">
      {/* Top thin bar */}
      <div className="bg-[#1f3a63] text-white text-sm">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline">📞 +91 9351946070</span>
          </div>
          <div className="text-sm hidden md:block">QUEENSTER UNIVERSITY</div>
        </div>
      </div>

      {/* Main nav */}
      <nav className={`${scrolled ? "shadow-md" : ""} bg-white`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="h-40 flex items-center justify-between">

            {/* Logo (use public/logo-crest.png if exists; fallback to FaCrown) */}
            <Link href="/" className="flex items-center gap-3">
              <div className="flex items-center">
                {/* try image in public, else fallback icon */}
                <img
                  src="/university-life-hero.jpg"
                  alt="logo"
                  onError={(e) => { e.currentTarget.style.display = "none"; }}
                  className="h-9 w-auto"
                />
                {/* fallback crest (shows if image hidden) */}
                <div className="h-9 w-9 flex items-center justify-center text-[#1f3a63]">
                  <FaCrown className="h-6 w-6" />
                </div>
              </div>

              <div className="ml-2">
                <div className="font-serif text-2xl text-[#1f3a63] font-bold">
                  Queenster
                </div>
                <div className="text-sm text-gray-600">University</div>
              </div>
            </Link>

            {/* Desktop menu */}
            <ul className="hidden lg:flex items-center gap-8">
              {MENU.map((item) => (
                <li
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.mega ? setOpenMenu(item.name.toLowerCase()) : setOpenMenu(null)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <Link
                    href={item.to}
                    className={`px-2 py-1 text-sm font-medium ${router.pathname === item.to ? "text-green-600" : "text-[#0f2b4b] hover:text-[#0f2b4b]/90"}`}
                  >
                    {item.name}
                  </Link>

                  {/* green underline indicator for active/hover (kingster feel) */}
                  {openMenu === item.name.toLowerCase() && item.mega && (
                    <span className="absolute -bottom-6 left-0 w-full h-1.5 bg-green-500"></span>
                  )}

                  {/* Mega menus */}
                  {item.name === "Academics" && openMenu === "academics" && (
                    <div className="absolute left-0 top-full w-screen bg-[#f3f3f3] border-t shadow-xl">
                      <div className="max-w-7xl mx-auto px-10 py-12 grid grid-cols-4 gap-12 text-sm text-gray-700">
                        <div>
                          <h4 className="font-bold text-[#1f3a63] mb-6">Undergraduate</h4>
                          <ul className="space-y-3">
                            {academicsMenu.undergraduate.map((x) => <li key={x} className="hover:text-green-600 cursor-pointer">{x}</li>)}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-bold text-[#1f3a63] mb-6">Graduate Program</h4>
                          <ul className="space-y-3">
                            {academicsMenu.graduate.map((x) => <li key={x} className="hover:text-green-600 cursor-pointer">{x}</li>)}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-bold text-[#1f3a63] mb-6">Resources</h4>
                          <ul className="space-y-3">
                            {academicsMenu.resources.map((x) => <li key={x} className="hover:text-green-600 cursor-pointer">{x}</li>)}
                          </ul>
                        </div>

                        <div className="bg-white p-6 flex flex-col justify-center">
                          <h4 className="font-bold text-[#1f3a63] mb-3">Queenster University</h4>
                          <p className="text-gray-600 leading-relaxed">
                            Academic offerings include many majors, minors and specializations to support global careers.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {item.name === "Admissions" && openMenu === "admissions" && (
                    <div className="absolute left-auto right-0 top-full bg-white border-t shadow-xl w-72">
                      <ul className="p-6 space-y-3 text-sm text-gray-700">
                        <li className="hover:text-green-600 cursor-pointer">Apply to Queenster</li>
                        <li className="hover:text-green-600 cursor-pointer">Campus Tour</li>
                        <li className="hover:text-green-600 cursor-pointer">Scholarships</li>
                        <li className="hover:text-green-600 cursor-pointer">Athletics</li>
                        <li className="hover:text-green-600 cursor-pointer">Alumni</li>
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>

            {/* right actions */}
            <div className="flex items-center gap-4">
              <button className="hidden lg:inline-flex items-center gap-2 text-gray-600 hover:text-[#0f2b4b]">
                <FiSearch className="w-5 h-5" />
              </button>

              {/* mobile toggle */}
              <button
                className="lg:hidden text-2xl"
                onClick={() => setMobileOpen((s) => !s)}
                aria-label="Toggle menu"
              >
                ☰
              </button>
            </div>
          </div>
        </div>

        {/* mobile panel */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t shadow-lg">
            <div className="px-6 py-4">
              {MENU.map((m) => (
                <div key={m.name} className="py-2 border-b last:border-b-0">
                  <div className="flex justify-between items-center">
                    <Link href={m.to} onClick={() => setMobileOpen(false)} className="font-semibold">
                      {m.name}
                    </Link>
                    {m.mega && (
                      <button
                        onClick={() => setMobileMega((s) => (s === m.name.toLowerCase() ? null : m.name.toLowerCase()))}
                        className="text-sm text-gray-600"
                      >
                        {mobileMega === m.name.toLowerCase() ? "−" : "+"}
                      </button>
                    )}
                  </div>

                  {/* mobile mega content */}
                  {m.mega && mobileMega === m.name.toLowerCase() && (
                    <div className="mt-3 pl-4 text-sm text-gray-600 space-y-2">
                      {m.name === "Academics" && (
                        <>
                          <div className="font-semibold">Undergraduate</div>
                          {academicsMenu.undergraduate.map((x) => (<div key={x}>{x}</div>))}
                          <div className="font-semibold mt-2">Graduate Program</div>
                          {academicsMenu.graduate.map((x) => (<div key={x}>{x}</div>))}
                        </>
                      )}
                      {m.name === "Admissions" && (
                        <>
                          <div>Apply to Queenster</div>
                          <div>Campus Tour</div>
                          <div>Scholarships</div>
                        </>
                      )}
                    </div>
                  )}
                </div>
              ))}

              {/* small contact block */}
              <div className="mt-4">
                <div className="text-sm text-gray-600">📞 +91 9351946070</div>
                <div className="mt-2">
                  <button className="bg-[#1f3a63] text-white px-4 py-2 rounded">Request Info</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}