"use client";
import React from "react";
import Image from "next/image";

export default function AboutUs() {
  const stats = [
    { label: "Plants", value: "10", icon: "🏭" },
    { label: "Metric Tons Capacity", value: "110000+", icon: "📦" },
    { label: "Team Strength", value: "4000+", icon: "👥" },
  ];

  const industryData = [
    {
      title: "Technology",
      value: "1.2M",
      growth: "+12%",
      description: "AI, SaaS, Cloud services",
      image: "/c1.jpeg",
    },
    {
      title: "Healthcare",
      value: "860K",
      growth: "+8%",
      description: "Hospitals, Pharma, Biotech",
      image: "/c2.jpg",
    },
    {
      title: "Finance",
      value: "2.1M",
      growth: "+5%",
      description: "Banking, FinTech, Insurance",
      image: "/c3.jpeg",
    },
    {
      title: "Manufacturing",
      value: "740K",
      growth: "+6%",
      description: "Automobile, Electronics",
      image: "/c4.jpeg",
    },
    {
      title: "Retail",
      value: "1.5M",
      growth: "+9%",
      description: "E-commerce, FMCG",
      image: "/c5.jpeg",
    },
    {
      title: "Energy",
      value: "520K",
      growth: "+4%",
      description: "Renewables, Oil & Gas",
      image: "/c6.jpeg",
    },
  ];

  return (
    <>
      {/* ===== ABOUT SECTION ===== */}
      <section className="max-w-7xl mx-auto p-8 font-sans text-gray-800">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div>
            <header className="mb-8">
              <h2 className="text-3xl font-bold">
                Our{" "}
                <span className="text-orange-500 underline underline-offset-8 decoration-2">
                  Founder
                </span>
              </h2>
            </header>

            <div className="flex gap-6 mb-6">
              <span className="text-7xl font-bold text-orange-500 leading-none">
                28
              </span>
              <div className="pt-2">
                <h3 className="font-bold text-lg tracking-tight">
                  YEARS IN CLOSED DIE HOT FORGINGS
                </h3>
              </div>
            </div>

            <div className="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
              <p>
                Founded on the tradition and philosophy of steadfast commitment
                to achieving <strong>"Total Customer Satisfaction"</strong>{" "}
                through excellent quality, on time deliveries and competitive
                pricing.
              </p>
              <p>
                The Company has grown steadily in strength and stature to attain
                its present recognition of being one of the largest exporters of
                forgings in India in its product range and has created a niche
                in the global market.
              </p>
              <p>
                With its presence pan India and near to the customers, MMF is
                placing itself as a one stop shop for the closed die forgings
                needs of both domestic and international customers.
              </p>
              <p className="italic">
                "Forging Excellence" – in terms of quality of products and
                relationship with stakeholders is the theme of the company.
              </p>
            </div>

            <hr className="my-10 border-gray-200" />

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl text-orange-500">
                      {stat.icon}
                    </span>
                    <span className="text-2xl md:text-3xl font-extrabold text-gray-900">
                      {stat.value}
                    </span>
                  </div>
                  <p className="text-xs md:text-sm text-gray-500 mt-1 uppercase tracking-wide">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative group">
            <div className="relative w-full h-175 overflow-hidden shadow-2xl">
              <Image
                src="/pro.jpeg"
                alt="Vidyashankar Krishnan - Chairman"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-orange-400 text-white text-center py-3">
              <p className="font-bold text-sm">
                Vidyashankar Krishnan
              </p>
              <p className="text-xs uppercase tracking-widest">
                Chairman & Managing Director
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== INDUSTRY OVERVIEW ===== */}
      <section className="p-8 max-w-7xl mx-auto">
        <h1 className="mb-6 text-5xl font-bold">Company Overview</h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industryData.map((item, index) => (
            <div
              key={index}
              className="group relative h-64 overflow-hidden rounded-xl shadow-lg"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/50" />

              <div className="absolute inset-0 flex flex-col justify-end p-5 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <h3 className="text-xl font-semibold">{item.title}</h3>

                <div className="mt-1 flex justify-between items-center">
                  <span className="text-lg font-bold">{item.value}</span>
                  <span className="text-green-400 text-sm">
                    {item.growth}
                  </span>
                </div>

                <p className="mt-2 text-sm text-gray-200">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== SUSTAINABILITY SECTION ===== */}
      <section className="relative min-h-125 w-full flex items-center justify-center py-16 px-4 sm:px-8">
        {/* Background Image Layer */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/n1.jpeg')",
          }}
        >
          <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]" />
        </div>

        {/* Content Card */}
        <div className="relative z-10 max-w-6xl w-full bg-white/80 backdrop-blur-md p-8 md:p-12 shadow-sm border border-white/20">
          <h1 className="text-2xl md:text-3xl font-normal text-slate-800 mb-8 border-b border-slate-200 pb-4">
            Sustainability and Corporate Social Responsibility -{" "}
            <span className="italic">The Journey of Hope</span>
          </h1>

          <div className="space-y-6 text-slate-700 leading-relaxed text-base md:text-lg">
            <p>
              The experience of joy of sharing is beyond description. Beyond
              work, many ABI Associates are actively associated with various
              formal and informal initiatives wherein they participate in
              community reach out.
            </p>

            <p>
              As a company, we embrace our responsibility to leave a trail of
              happiness and sustainability in the communities in which we work
              and live. More than 50% of our campus is maintained green. One of
              the recent efforts is growing up <strong>Miyawaki forest</strong>{" "}
              adjacent to our plants. At a formal level, we run a Grammer
              school, <strong>Vidya Peetam</strong> to impart primary and
              secondary education to children.
            </p>

            <p>
              Our Technical school, <strong>Matrix</strong>, is open to all
              youth in the neighbourhood. Here we impart the basics and nuances
              of modern manufacturing methods. In addition, we run a 32-bed
              hospital near our plants. As a matter of abundant care, we adhere
              to several non-mandatory policies.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}