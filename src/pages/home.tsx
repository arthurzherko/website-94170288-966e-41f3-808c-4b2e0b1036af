import { useState } from "react";
import { Coffee } from "lucide-react";
import { Typography } from "@/components/ui/typography";
import { ModeToggle } from "@/components/mode-toggle";
import { RecommendationForm } from "@/components/recommendation-form";
import { FeaturedCoffees } from "@/components/featured-coffees";

const FEATURED_COFFEES = [
  {
    id: "1",
    title: "Ethiopian Yirgacheffe",
    description: "Bright and complex with floral notes and citrus undertones. A perfect light roast for pour-over brewing.",
    rating: 4.8,
  },
  {
    id: "2",
    title: "Colombian Supremo",
    description: "Medium roast with balanced sweetness, caramel notes, and a smooth finish. Great for any brewing method.",
    rating: 4.6,
  },
  {
    id: "3",
    title: "Sumatra Mandheling",
    description: "Dark roast with full body, earthy tones, and subtle spice notes. Excellent for French press.",
    rating: 4.7,
  },
];

export function Home() {
  const [recommendations, setRecommendations] = useState<string[]>([]);

  const handleGetRecommendations = (preferences: {
    roastLevel: string;
    brewMethod: string;
    flavor: string;
  }) => {
    // Simulate AI recommendations based on preferences
    const mockRecommendations = [
      `Based on your preference for ${preferences.roastLevel} roast and ${preferences.flavor} flavors, we recommend trying our ${preferences.roastLevel} roasted Brazilian Santos.`,
      `For ${preferences.brewMethod} brewing, our ${preferences.roastLevel} roasted Costa Rican Tarrazu would be an excellent choice.`,
    ];
    setRecommendations(mockRecommendations);
  };

  return (
    <div className="min-h-screen bg-background px-4 pb-12 pt-6">
      <header className="mx-auto mb-12 flex max-w-6xl items-center justify-between">
        <div className="flex items-center gap-2">
          <Coffee className="size-8 text-primary" />
          <Typography.H3>AI Coffee Recommender</Typography.H3>
        </div>
        <ModeToggle />
      </header>

      <main className="mx-auto grid max-w-6xl gap-12">
        <section className="grid gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <Typography.H1 className="mb-4">
              Find Your Perfect Coffee Match
            </Typography.H1>
            <Typography.Lead>
              Let our AI guide you to your ideal brew based on your taste preferences
              and brewing style.
            </Typography.Lead>
          </div>
          <RecommendationForm
            onSubmit={handleGetRecommendations}
            className="lg:max-w-md"
          />
        </section>

        {recommendations.length > 0 && (
          <section className="rounded-lg bg-muted p-6">
            <Typography.H2 className="mb-4">Your Personalized Recommendations</Typography.H2>
            <Typography.List>
              {recommendations.map((rec, index) => (
                <li key={index}>{rec}</li>
              ))}
            </Typography.List>
          </section>
        )}

        <FeaturedCoffees
          coffees={FEATURED_COFFEES}
          className="pt-8"
        />
      </main>
    </div>
  );
}