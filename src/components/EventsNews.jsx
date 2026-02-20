export default function EventsNews() {
  return (
    <section className="bg-[#f5f7fa] py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14">
        <div>
          <h3 className="text-3xl font-bold text-[#1f3a63] mb-6">Upcoming Events</h3>
          <ul className="space-y-5">
            <li>
              <p className="font-semibold">Open Day 2025</p>
              <span className="text-gray-600 text-sm">March 18, 2025</span>
            </li>
            <li>
              <p className="font-semibold">Research Symposium</p>
              <span className="text-gray-600 text-sm">April 02, 2025</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-[#1f3a63] mb-6">Latest News</h3>
          <ul className="space-y-5">
            <li>
              <p className="font-semibold">Queenster ranked among top universities</p>
              <span className="text-gray-600 text-sm">Jan 2025</span>
            </li>
            <li>
              <p className="font-semibold">New AI Research Center launched</p>
              <span className="text-gray-600 text-sm">Dec 2024</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
