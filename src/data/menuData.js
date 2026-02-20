// src/data/menuData.js
export const menuData = {
  mainMenu: [
    { title: 'Home', path: '/' },
    { title: 'Pages', path: '/pages' }, // Placeholder for pages dropdown if needed
    {
      title: 'Academics',
      path: '/academics',
      isMega: true,
      megaContent: {
        columns: [
          {
            heading: 'Undergraduate',
            links: [
              { title: 'Business Administration', path: '/academics/undergraduate/business' },
              { title: 'School of Law', path: '/academics/undergraduate/law' },
              { title: 'Engineering', path: '/academics/undergraduate/engineering' },
              { title: 'Medicine', path: '/academics/undergraduate/medicine' },
              { title: 'Art & Science', path: '/academics/undergraduate/art-science' },
              { title: 'Hospitality Management', path: '/academics/undergraduate/hospitality' },
            ],
          },
          {
            heading: 'Graduate',
            links: [
              { title: 'MBA Programs', path: '/academics/graduate/mba' },
              { title: 'MSc Engineering', path: '/academics/graduate/msc-engineering' },
              { title: 'MSc Computer Science', path: '/academics/graduate/msc-cs' },
              { title: 'MSc Physics', path: '/academics/graduate/msc-physics' },
              { title: 'MSc Chemistry', path: '/academics/graduate/msc-chemistry' },
              { title: 'PhD Programs', path: '/academics/graduate/phd' },
            ],
          },
          {
            heading: 'Departments',
            links: [
              { title: 'Physics', path: '/departments/physics' },
              { title: 'Chemistry', path: '/departments/chemistry' },
              { title: 'Mathematics', path: '/departments/mathematics' },
              { title: 'Computer Science', path: '/departments/computer-science' },
              { title: 'Music', path: '/departments/music' },
              { title: 'Humanities', path: '/departments/humanities' },
            ],
          },
          {
            heading: 'Academic Pages',
            links: [
              { title: 'Department Page', path: '/academics/department' },
              { title: 'Major Page', path: '/academics/major' },
              { title: 'Faculty Page', path: '/faculty' },
              { title: 'Single Instructor', path: '/faculty/instructor' },
              { title: 'Single Course', path: '/courses/single' },
            ],
            buttons: [
              { title: 'View All Programs', path: '/programs' },
              { title: 'Download Prospectus', path: '/prospectus.pdf', external: true },
            ],
          },
        ],
      },
    },
    {
      title: 'Admissions',
      path: '/admissions',
      isMega: true,
      megaContent: {
        columns: [
          {
            heading: 'Apply',
            links: [
              { title: 'Apply to Queenster University', path: '/admissions/apply' },
              { title: 'Online Application', path: '/admissions/online-application' },
              { title: 'Application Status', path: '/admissions/status' },
              { title: 'Requirements', path: '/admissions/requirements' },
            ],
          },
          {
            heading: 'Financial Aid',
            links: [
              { title: 'Scholarships', path: '/admissions/scholarships' },
              { title: 'Tuition Fees', path: '/admissions/tuition' },
              { title: 'Payment Plans', path: '/admissions/payment-plans' },
            ],
          },
          {
            heading: 'Campus Life',
            links: [
              { title: 'Campus Tour', path: '/campus-tour' },
              { title: 'Housing', path: '/campus-life/housing' },
              { title: 'Athletics', path: '/campus-life/athletics' },
              { title: 'International Students', path: '/campus-life/international' },
            ],
          },
        ],
        ctaButton: { title: 'Start Application', path: '/admissions/apply' },
      },
    },
    {
      title: 'Resources',
      path: '/resources',
      isMega: true,
      megaContent: {
        columns: [
          {
            heading: 'Student Resources',
            links: [
              { title: 'Academic Calendar', path: '/resources/calendar' },
              { title: 'Library', path: '/resources/library' },
              { title: 'Student Services', path: '/resources/student-services' },
              { title: 'Career Services', path: '/resources/career-services' },
            ],
          },
          {
            heading: 'Faculty Resources',
            links: [
              { title: 'Faculty Portal', path: '/resources/faculty-portal' },
              { title: 'Research & Grants', path: '/resources/research' },
            ],
          },
          {
            heading: 'Alumni Resources',
            links: [
              { title: 'Alumni Network', path: '/alumni/network' },
              { title: 'Giving Back', path: '/alumni/donate' },
            ],
          },
          {
            heading: 'General Resources',
            links: [
              { title: 'News & Updates', path: '/news' },
              { title: 'Campus Map', path: '/campus-map' },
              { title: 'FAQs', path: '/faq' },
            ],
          },
        ],
      },
    },
    { title: 'Events', path: '/events' },
    { title: 'Alumni', path: '/alumni' },
    { title: 'Contact', path: '/contact' },
  ],
  applyButton: { title: 'Apply Now', path: '/admissions/apply' },
};