import React from "react";

const Apply = () => {
  return (
    <div className="w-full bg-white text-gray-800">
      {/* HERO */}
      <header
        className="relative min-h-[60vh] flex items-end"
        style={{
          backgroundImage: "url(https://plus.unsplash.com/premium_photo-1663051238732-d6246f747dab?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTd8fHVuaXZlcnNpdHl8ZW58MHx8MHx8fDA%3D)",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 py-16 text-white">
          <nav className="text-sm text-gray-200 mb-6">
             
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-extrabold leading-tight mb-4">
            Apply to Queenster
          </h1>
          <p className="max-w-3xl text-base md:text-lg text-gray-200 leading-relaxed">
            Embark on your academic journey at Queenster University. Our comprehensive application process is designed to identify passionate and talented individuals ready to contribute to our vibrant community.
          </p>
        </div>
      </header>

      {/* PAGE BODY */}
      <main className="max-w-7xl mx-auto px-8 py-16 lg:py-24 space-y-20">

        {/* Why Apply to Queenster */}
        <section className="space-y-8">
          <h2 className="text-4xl font-serif font-bold text-[#1f3a63] text-center">Why Apply to Queenster</h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Queenster University offers a transformative educational experience that blends rigorous academics with real-world applications. Our diverse community fosters innovation, critical thinking, and personal growth.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With state-of-the-art facilities, expert faculty, and extensive research opportunities, Queenster prepares students for leadership roles in an ever-changing global landscape.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-[#1f3a63] mb-6">Key Benefits</h3>
              <ul className="space-y-3 text-gray-700 text-lg">
                <li>• Comprehensive academic programs</li>
                <li>• Cutting-edge research facilities</li>
                <li>• Dedicated faculty mentorship</li>
                <li>• Vibrant campus life</li>
                <li>• Career development support</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Admission Process */}
        <section className="space-y-8">
          <h2 className="text-4xl font-serif font-bold text-[#1f3a63] text-center">Admission Process</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#1f3a63] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold shadow-lg">1</div>
              <h3 className="text-2xl font-bold mb-4">Submit Application</h3>
              <p className="text-lg text-gray-600 leading-relaxed">Complete the online application form with all required documents and personal information.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[#1f3a63] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold shadow-lg">2</div>
              <h3 className="text-2xl font-bold mb-4">Review & Evaluation</h3>
              <p className="text-lg text-gray-600 leading-relaxed">Our admissions team reviews your application, academic records, and supporting materials.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[#1f3a63] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold shadow-lg">3</div>
              <h3 className="text-2xl font-bold mb-4">Decision & Enrollment</h3>
              <p className="text-lg text-gray-600 leading-relaxed">Receive your admission decision and complete enrollment to begin your Queenster journey.</p>
            </div>
          </div>
        </section>

        {/* Admission Requirements */}
        <section className="space-y-8">
          <h2 className="text-4xl font-serif font-bold text-[#1f3a63] text-center">Admission Requirements</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-bold text-[#1f3a63] mb-6">Undergraduate Requirements</h3>
              <ul className="space-y-3 text-lg text-gray-600">
                <li>• High school diploma or equivalent</li>
                <li>• Minimum GPA of 3.0 (or equivalent)</li>
                <li>• Standardized test scores (SAT/ACT)</li>
                <li>• Letters of recommendation</li>
                <li>• Personal statement</li>
                <li>• English proficiency (for international students)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#1f3a63] mb-6">Graduate Requirements</h3>
              <ul className="space-y-3 text-lg text-gray-600">
                <li>• Bachelor's degree from accredited institution</li>
                <li>• Minimum GPA of 3.2 in undergraduate studies</li>
                <li>• GRE/GMAT scores (program-specific)</li>
                <li>• Professional resume</li>
                <li>• Letters of recommendation</li>
                <li>• Statement of purpose</li>
              </ul>
            </div>
          </div>
        </section>

        {/* How to Apply */}
        <section className="space-y-8">
          <h2 className="text-4xl font-serif font-bold text-[#1f3a63] text-center">How to Apply</h2>
          <div className="bg-gray-50 p-10 rounded-lg shadow-md">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-2xl font-bold text-[#1f3a63] mb-6">Online Application</h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Start your application online through our secure portal. The process takes approximately 30-45 minutes to complete.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  You'll need to provide personal information, academic history, and upload required documents. Save your progress and return anytime.
                </p>
              </div>
              <div className="text-center">
                <a
                  href="#"
                  className="inline-block bg-[#1f3a63] text-white px-10 py-4 rounded-lg font-semibold hover:bg-[#1f3a63]/90 transition-colors shadow-lg hover:shadow-xl"
                >
                  Start Application
                </a>
                <p className="text-sm text-gray-500 mt-4">Application Fee: $50</p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <p className="text-lg text-gray-600">
              Need help? Contact our admissions office at <a href="mailto:admissions@queenster.edu" className="text-[#1f3a63] hover:underline font-semibold">admissions@queenster.edu</a> or call +91 9351946070.
            </p>
          </div>
        </section>

      </main>
    </div>
  );
};

export default Apply;
