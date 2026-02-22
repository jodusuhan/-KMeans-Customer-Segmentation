import { useState } from "react";
import { ChevronDown } from "lucide-react";

const questions = [
  { q: "What is clustering?", a: "Clustering is an unsupervised learning technique that groups similar data points together based on their features, without using predefined labels." },
  { q: "Why does scaling matter in KMeans?", a: "KMeans uses distance (usually Euclidean) to assign points to clusters. If features have different scales, the one with larger values will dominate. Scaling ensures all features contribute equally." },
  { q: "What is inertia in KMeans?", a: "Inertia is the sum of squared distances between each point and its assigned cluster center. Lower inertia means tighter, better-defined clusters." },
  { q: "What is the Elbow Method?", a: "The Elbow Method plots inertia for different values of K. The 'elbow' point — where inertia starts decreasing slowly — suggests the optimal number of clusters." },
  { q: "What are the limitations of KMeans?", a: "KMeans assumes spherical clusters, is sensitive to initialization and outliers, requires you to specify K in advance, and doesn't work well with non-convex shapes." },
];

const InterviewSection = () => (
  <section className="px-4 py-14" style={{ background: "hsl(var(--question-bg))" }}>
    <div className="mx-auto max-w-3xl">
      <h2 className="mb-6 text-2xl font-bold">Interview Questions</h2>
      <div className="space-y-3">
        {questions.map((item, i) => (
          <QuestionCard key={i} question={item.q} answer={item.a} />
        ))}
      </div>
    </div>
  </section>
);

const QuestionCard = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="rounded-xl border bg-card p-4 shadow-sm cursor-pointer"
      style={{ borderColor: "hsl(var(--question-border))" }}
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between gap-3">
        <h3 className="font-semibold">{question}</h3>
        <ChevronDown className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
      </div>
      {open && <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{answer}</p>}
    </div>
  );
};

export default InterviewSection;
