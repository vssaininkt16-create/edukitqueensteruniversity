export default function Calendar() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-center text-blue-900 mb-12">Academic Calendar</h1>
          <p className="text-center text-gray-600 mb-8">
            Stay updated with important dates, deadlines, and academic events.
          </p>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Upcoming Events</h2>

            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold">Semester Start</h3>
                <p className="text-gray-600">January 15, 2024</p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold">Mid-term Exams</h3>
                <p className="text-gray-600">March 10-20, 2024</p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold">Spring Break</h3>
                <p className="text-gray-600">April 1-7, 2024</p>
              </div>

              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-semibold">Final Exams</h3>
                <p className="text-gray-600">May 15-30, 2024</p>
              </div>
            </div>

            <div className="mt-8">
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700">
                Download Full Calendar
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
