const tools = [
  { name: "Python", desc: "Programming language" },
  { name: "Scikit-learn", desc: "ML library for KMeans" },
  { name: "Matplotlib", desc: "Plotting charts" },
  { name: "Seaborn", desc: "Statistical visualizations" },
];

const ToolsSection = () => (
  <section className="px-4 py-14">
    <div className="mx-auto max-w-3xl">
      <h2 className="mb-6 text-2xl font-bold">Tools You'll Need</h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {tools.map((t) => (
          <div key={t.name} className="rounded-xl border border-border bg-card p-4 text-center shadow-sm">
            <p className="font-semibold">{t.name}</p>
            <p className="mt-1 text-xs text-muted-foreground">{t.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ToolsSection;
