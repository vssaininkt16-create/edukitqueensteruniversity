import React, { useEffect, useState, useRef } from 'react';

const stats = [
  { number: 240, label: 'Majors' },
  { number: 3400, label: 'Students' },
  { number: 1200, label: 'Graduates' },
  { number: 350, label: 'Faculty' },
];

const CountUp = ({ end, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let startTime = null;
      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
};

const useInView = (ref, options) => {
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsInView(true);
                observer.disconnect();
            }
        }, options);
        
        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref, options]);

    return isInView;
};

const Stats = () => {
  const sectionRef = useRef(null);
  const sectionInView = useInView(sectionRef, { once: true, threshold: 0.1 });

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-cover bg-fixed bg-center relative"
      style={{ backgroundImage: `url('/about-university-bg.jpg')` }}
    >
      <div className="absolute inset-0 bg-blue-900/90"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-white">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`text-center transition-all duration-700 ease-out ${sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="text-6xl font-bold text-yellow-400 mb-2" style={{fontFamily: 'serif'}}>
                <CountUp end={stat.number} />+
              </div>
              <div className="text-xl font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;