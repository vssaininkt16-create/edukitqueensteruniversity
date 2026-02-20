export default function MegaMenu({ isOpen }) {
  if (!isOpen) return null;

  return (
    <div className="fixed left-0 top-[140px] w-screen bg-gray-50 shadow-2xl z-[9998]">
      <div className="max-w-[1400px] mx-auto px-20 py-20 grid grid-cols-4 gap-16 text-[15px]">
        <div>
          <h4 className="font-semibold mb-4">Undergraduate</h4>
          <ul className="space-y-3">
            <li>Business Administration</li>
            <li>Engineering</li>
            <li>Medicine</li>
            <li>Law</li>
            <li>Art & Science</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Graduate</h4>
          <ul className="space-y-3">
            <li>Computer Science</li>
            <li>Physics</li>
            <li>Chemistry</li>
            <li>Music</li>
            <li>Hospitality</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Resources</h4>
          <ul className="space-y-3">
            <li>Department Page</li>
            <li>Faculty</li>
            <li>Major Page</li>
            <li>Single Course</li>
          </ul>
        </div>

        <div className="flex flex-col items-center text-center">
          <img src="/university-life-hero.jpg" className="w-16 mb-4" alt="Logo" />
          <p className="text-gray-600">
            95 majors, 86 minors and 100+ specializations
          </p>
        </div>
      </div>
    </div>
  );
}
