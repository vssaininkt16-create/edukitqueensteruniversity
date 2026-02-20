import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-[#f5f7fa] py-20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#1f3a63] mb-6">
        Ready to Start Your Journey?
      </h2>

      <Link
        href="/apply"
        className="inline-block bg-[#1f3a63] text-white px-10 py-4 rounded font-semibold hover:bg-[#162b4a]"
      >
        Apply for Admission
      </Link>
    </section>
  );
}
