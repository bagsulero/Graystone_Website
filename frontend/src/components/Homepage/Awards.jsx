import React from "react";

const awards = [
  {
    title: "Best Educational Institute 2024",
    description: "Awarded by National Education Board for outstanding academic excellence.",
    image: "https://via.placeholder.com/150x100?text=Certificate+1",
  },
  {
    title: "Innovation in Teaching 2023",
    description: "Recognized for innovative teaching methods and student engagement.",
    image: "https://via.placeholder.com/150x100?text=Certificate+2",
  },
  {
    title: "Community Service Award",
    description: "Honored for significant contributions to local community development.",
    image: "https://via.placeholder.com/150x100?text=Certificate+3",
  },
];

const Awards = () => (
  <section className="max-w-4xl mx-auto my-12 px-4">
    <h2 className="text-3xl font-bold mb-8 text-center">Awards & Recognition</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {awards.map((award, idx) => (
        <div
          key={idx}
          className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center border hover:shadow-lg transition"
        >
          <img
            src={award.image}
            alt={award.title}
            className="mb-4 w-36 h-24 object-cover rounded"
          />
          <div className="text-xl font-semibold text-red-700 mb-2">{award.title}</div>
          <div className="text-gray-600">{award.description}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Awards;