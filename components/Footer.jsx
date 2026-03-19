import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const QUICK_LINKS = [
  { title: "About Us",       url: "/about"          },
  { title: "Academics",      url: "/academics"      },
  { title: "Admissions",     url: "/admissions"     },
  { title: "Courses",        url: "/courses"        },
  { title: "Athletics",      url: "/athletics"      },
  { title: "Campus Tour",    url: "/campus-tour"    },
  { title: "Scholarships",   url: "/scholarships"   },
  { title: "Contact Us",     url: "/contact"        },
];

export default function Footer({ websiteData = {} }) {
  const website = websiteData?.website || {};
  const logo     = website?.logo     || "";
  const siteName = website?.title    || "Queenster University";
  const desc     = website?.description || "A leading institution dedicated to academic excellence, innovation, and global leadership.";
  const address  = website?.address  || "";
  const phones   = Array.isArray(website?.contactNumber) ? website.contactNumber : [];
  const emails   = Array.isArray(website?.email)         ? website.email         : [];
  const social   = website?.socialLinks || {};

  const socialLinks = [
    { icon: <FaFacebook  />, url: social.facebook,  label: "Facebook"  },
    { icon: <FaTwitter   />, url: social.twitter,   label: "Twitter"   },
    { icon: <FaInstagram />, url: social.instagram, label: "Instagram" },
    { icon: <FaLinkedin  />, url: social.linkedIn,  label: "LinkedIn"  },
    { icon: <FaYoutube   />, url: social.youTube,   label: "YouTube"   },
  ].filter((s) => s.url);

  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "#050f1e", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* BRAND */}
          <div className="lg:col-span-1">
            {logo ? (
              <img src={logo} alt={siteName} className="h-12 w-auto object-contain mb-5"
                onError={(e) => (e.currentTarget.style.display = "none")} />
            ) : (
              <div className="text-white font-black text-2xl mb-5">
                <span className="text-orange-500">Q</span>ueenster
              </div>
            )}
            <p className="text-white/55 text-sm leading-relaxed mb-6">{desc}</p>
            {socialLinks.length > 0 && (
              <div className="flex gap-3">
                {socialLinks.map((s, i) => (
                  <a key={i} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                    className="text-white/40 hover:text-orange-400 transition-colors duration-200 text-lg">
                    {s.icon}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-5 flex items-center gap-2">
              <span className="h-px w-5 bg-orange-500" />Quick Links
            </h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((l, i) => (
                <li key={i}>
                  <Link href={l.url}
                    className="text-white/50 hover:text-orange-400 text-sm transition-colors duration-150 flex items-center gap-2">
                    <span className="text-orange-500/50">›</span>{l.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* PROGRAMS */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-5 flex items-center gap-2">
              <span className="h-px w-5 bg-orange-500" />Programs
            </h4>
            <ul className="space-y-2.5">
              {["Engineering & Tech", "Business Administration", "Computer Science", "Liberal Arts", "Graduate Programs", "PhD Research", "Online Courses", "Certifications"].map((p, i) => (
                <li key={i}>
                  <Link href="/academics"
                    className="text-white/50 hover:text-orange-400 text-sm transition-colors duration-150 flex items-center gap-2">
                    <span className="text-orange-500/50">›</span>{p}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-5 flex items-center gap-2">
              <span className="h-px w-5 bg-orange-500" />Contact
            </h4>
            <ul className="space-y-4">
              {address && (
                <li className="flex items-start gap-3 text-white/50 text-sm">
                  <FaMapMarkerAlt className="text-orange-500 mt-0.5 shrink-0" />
                  <span>{address}</span>
                </li>
              )}
              {phones.map((p, i) => (
                <li key={i} className="flex items-center gap-3 text-white/50 text-sm">
                  <FaPhone className="text-orange-500 shrink-0" />
                  <a href={`tel:${p}`} className="hover:text-orange-400 transition-colors">{p}</a>
                </li>
              ))}
              {emails.map((e, i) => (
                <li key={i} className="flex items-center gap-3 text-white/50 text-sm">
                  <FaEnvelope className="text-orange-500 shrink-0" />
                  <a href={`mailto:${e}`} className="hover:text-orange-400 transition-colors">{e}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", background: "#030b16" }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">© {year} {siteName}. All rights reserved.</p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Use", "Sitemap"].map((t, i) => (
              <a key={i} href="#" className="text-white/25 hover:text-white/50 text-xs transition-colors">{t}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
