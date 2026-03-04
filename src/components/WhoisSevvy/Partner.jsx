const cards = [
  {
    title: "Centralized Workspace",
    description: "Projects, assets, feedback, and approvals unified in one system.",
  },
  {
    title: "Tool Stack Consolidation",
    description: "Replace fragmented apps with a single operational layer.",
  },
  {
    title: "Structured Project Intake",
    description: "Defined goals, assets, and context captured upfront.",
  },
  {
    title: "Accelerated Review Cycles",
    description: "In-context, timestamped feedback reduces revision loops.",
  },
  {
    title: "Controlled Client Access",
    description: "Share projects securely for review and approval.",
  },
  {
    title: "Parallel Workflow Control",
    description: "Manage multiple active projects with full oversight.",
  },
  {
    title: "Seamless Publishing",
    description: "Go from approval to publish without switching tools.",
  },
  {
    title: "Reusable Content Library",
    description: "Content retained, organized, and reusable.",
  },
];

const Partner = () => {
  return (
    <section className="relative bg-white py-12 overflow-hidden">
      {/* Gradient Overlay */}
      <div
        className="absolute top-0 left-0 right-0 h-80 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, #fffaf7 0%, rgba(254, 154, 75, 0.3) 60%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 40%, black 60%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 40%, black 60%, transparent 100%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-[28px] lg:text-4xl font-semibold text-gray-800">
            More Than Software
          </h2>
          <p className="mt-2 text-3xl md:text-[28px] lg:text-4xl font-Instrument italic text-orange-400 font-serif tracking-wide">
            A Creative Operations Partner
          </p>
          <p className="mt-4 text-gray-500 text-base">
            Here's why should you book a trial
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="border border-orange-400 rounded-lg p-6 bg-white hover:shadow-md transition duration-300"
            >
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12 flex justify-center">
          <button className="bg-gradient-to-r from-orange-500 to-orange-300 text-white font-semibold px-8 py-3 rounded-md transition duration-300 italic hover:scale-105 hover:shadow-xl hover:shadow-orange-200 cursor-pointer" onClick={() => { window.location.href = 'https://work.sevvy.app/login'; }}>
            Build the System Your Team Deserves
          </button>
        </div>
      </div>
    </section>
  );
};

export default Partner;
