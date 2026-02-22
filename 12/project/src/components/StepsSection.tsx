import { CheckCircle2 } from "lucide-react";

const steps = [
  { title: "Load the Dataset", desc: "Import the Mall Customer Segmentation dataset and inspect income & spending score columns.", code: `import pandas as pd\ndf = pd.read_csv("Mall_Customers.csv")\nprint(df.head())` },
  { title: "Drop Unnecessary Columns", desc: "Remove CustomerID — it doesn't help with clustering.", code: `df = df.drop("CustomerID", axis=1)` },
  { title: "Scale the Features", desc: "Use StandardScaler so all features contribute equally to distance calculation.", code: `from sklearn.preprocessing import StandardScaler\nscaler = StandardScaler()\nX = scaler.fit_transform(df[["Annual Income (k$)", "Spending Score (1-100)"]])` },
  { title: "Find Optimal K (Elbow Method)", desc: "Run KMeans for K = 2 to 10 and record inertia values.", code: `from sklearn.cluster import KMeans\nimport matplotlib.pyplot as plt\n\ninertia = []\nfor k in range(2, 11):\n    km = KMeans(n_clusters=k, random_state=42)\n    km.fit(X)\n    inertia.append(km.inertia_)\n\nplt.plot(range(2, 11), inertia, marker='o')\nplt.xlabel("K")\nplt.ylabel("Inertia")\nplt.title("Elbow Method")\nplt.show()` },
  { title: "Train KMeans", desc: "Use the optimal K value from the elbow plot to train the model.", code: `km = KMeans(n_clusters=5, random_state=42)\ndf["Cluster"] = km.fit_predict(X)` },
  { title: "Visualize Clusters", desc: "Create a scatter plot showing the different customer segments.", code: `import seaborn as sns\nsns.scatterplot(x=X[:,0], y=X[:,1], hue=df["Cluster"], palette="viridis")\nplt.title("Customer Segments")\nplt.show()` },
  { title: "Interpret & Label", desc: "Analyze each cluster's characteristics and assign meaningful labels like 'High Income, Low Spending'.", code: `print(df.groupby("Cluster").mean())` },
  { title: "Export Results", desc: "Save the segmented dataset as a CSV file.", code: `df.to_csv("segmented_customers.csv", index=False)` },
];

const StepsSection = () => (
  <section className="px-4 py-14" style={{ background: "hsl(var(--step-bg))" }}>
    <div className="mx-auto max-w-3xl">
      <h2 className="mb-8 text-2xl font-bold">Step-by-Step Guide</h2>
      <div className="space-y-6">
        {steps.map((step, i) => (
          <div key={i} className="rounded-xl border bg-card p-5 shadow-sm" style={{ borderColor: "hsl(var(--step-border))" }}>
            <div className="mb-2 flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                {i + 1}
              </span>
              <h3 className="text-lg font-semibold">{step.title}</h3>
            </div>
            <p className="mb-3 text-sm text-muted-foreground">{step.desc}</p>
            <pre className="overflow-x-auto rounded-lg p-4 text-sm" style={{ background: "hsl(var(--code-bg))", color: "hsl(var(--code-foreground))" }}>
              <code>{step.code}</code>
            </pre>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StepsSection;
