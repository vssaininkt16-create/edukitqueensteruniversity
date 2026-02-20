export async function getStaticProps() {
  try {
    const res = await fetch(
      "https://r1.edkt.net/api/s/dynamic-page/academics-page?contentBlock=Object",
      {
        headers: {
          apihost: "https://schooltheme1.institute.org.in",
          "Content-Type": "application/json",
        },
      }
    );
    const json = await res.json();
    const contentBlock = json.data.contentBlock;
    return {
      props: { contentBlock },
      revalidate: 60,
    };
  } catch (error) {
    console.error("Academics fetch error:", error);
    return { notFound: true };
  }
}

export default function Academics({ contentBlock }) {
  const hero = contentBlock?.["HERO-CONTANT"];
  const programs = contentBlock?.["POPLULAR_PROGRAMS"];
  const requirements = contentBlock?.["ADMISSIONS_REQUIREMENTS"];
  const howToApply = contentBlock?.["HOW_TO_APPLY"];
  const steps = howToApply?.advanceData?.data || [];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative w-full min-h-[560px] overflow-hidden">
        {hero?.media && (
          <img
            src={hero.media}
            alt="Academics Hero"
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-[100px] grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="text-white">
            <h1 className="text-[44px] md:text-[60px] font-black leading-[1.05]">
              {hero?.heading || 'Academics'}
            </h1>
            <div className="mt-5 w-24 h-[5px] rounded-full bg-orange-500" />
          </div>
          <div className="flex lg:justify-end">
            <div className="w-full max-w-[560px] p-7 md:p-9 rounded-2xl border border-white/15 bg-black/40 backdrop-blur-[10px]">
              <div className="text-white/90 leading-[1.75]" dangerouslySetInnerHTML={{ __html: hero?.content || '<p>Explore our academic programs...</p>' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Popular Programs */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-[44px] md:text-[60px] font-black leading-[1.05]">
          {programs?.heading || "Popular Programs"}
        </h2>
        <div dangerouslySetInnerHTML={{ __html: programs?.content || "<p>Programs content...</p>" }} />
      </section>

      {/* Admissions Requirements */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-[44px] md:text-[60px] font-black leading-[1.05]">
          {requirements?.heading || "Admissions Requirements"}
        </h2>
        <div dangerouslySetInnerHTML={{ __html: requirements?.content || "<p>Requirements content...</p>" }} />
      </section>

      {/* How to Apply Steps */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-[44px] md:text-[60px] font-black leading-[1.05]">
          {howToApply?.heading || "How to Apply"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div key={step.id || i} className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold">{step.title || "Step"}</h3>
              <div dangerouslySetInnerHTML={{ __html: step.desci || "<p>Description</p>" }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
