export interface Painting {
  slug: string;
  title: string;
  year: number;
  medium: string;
  dimensions: string;
  description: string;
  image: string;
  featured: boolean;
  category: string;
}

export const paintings: Painting[] = [
  {
    slug: "azure-dreams",
    title: "Azure Dreams",
    year: 2024,
    medium: "Oil on Canvas",
    dimensions: '48" × 60"',
    description:
      "A sweeping exploration of movement and depth, Azure Dreams channels the raw energy of ocean currents through bold impasto strokes. Navy blue collides with burnt sienna and gold, creating a dynamic interplay that shifts with every viewing angle. The exposed linen canvas grounds the composition, offering moments of calm within the storm of color.",
    image: "/paintings/azure-dreams.png",
    featured: true,
    category: "Abstract",
  },
  {
    slug: "mountain-dawn",
    title: "Mountain Dawn",
    year: 2024,
    medium: "Oil on Canvas",
    dimensions: '36" × 48"',
    description:
      "Captured during a solitary retreat in the highlands, Mountain Dawn distills the ephemeral magic of first light breaking over mist-shrouded peaks. Soft violet gradients dissolve into rose and gold, while impressionistic brushwork preserves the spontaneity of the moment — a meditation on impermanence rendered in paint.",
    image: "/paintings/mountain-dawn.png",
    featured: true,
    category: "Landscape",
  },
  {
    slug: "still-life-with-pomegranates",
    title: "Still Life with Pomegranates",
    year: 2023,
    medium: "Oil on Canvas",
    dimensions: '30" × 30"',
    description:
      "Drawing from the Dutch Golden Age tradition, this still life reimagines the vanitas genre for a contemporary audience. Rich chiaroscuro lighting reveals the crimson seeds of split pomegranates alongside dried flowers — a quiet dialogue between abundance and decay, beauty and its inevitable passing.",
    image: "/paintings/still-life.png",
    featured: false,
    category: "Still Life",
  },
  {
    slug: "the-weight-of-blue",
    title: "The Weight of Blue",
    year: 2023,
    medium: "Oil on Linen",
    dimensions: '40" × 40"',
    description:
      "An introspective portrait study where gestural marks and deliberate drips trace the landscape of human emotion. Earth tones build a foundation of quiet gravity, while a single strike of cobalt blue tears through the composition — visible vulnerability made tangible through paint.",
    image: "/paintings/portrait.png",
    featured: true,
    category: "Portrait",
  },
  {
    slug: "crimson-fury",
    title: "Crimson Fury",
    year: 2024,
    medium: "Acrylic & Oil on Canvas",
    dimensions: '60" × 60"',
    description:
      "Born from a single, uninterrupted studio session, Crimson Fury captures the raw energy of action painting. Red, black, and white clash in violent splatters and bold geometric forms, each mark a record of physical movement and emotional release. The painting is a document of its own creation.",
    image: "/paintings/crimson-fury.png",
    featured: false,
    category: "Abstract Expressionism",
  },
  {
    slug: "twilight-sea",
    title: "Twilight Sea",
    year: 2022,
    medium: "Oil on Canvas",
    dimensions: '36" × 54"',
    description:
      "Minimalist in composition yet rich in atmosphere, Twilight Sea captures the liminal moment when day surrenders to night. A low horizon line divides sweeping bands of teal, indigo, and pale pink, while a solitary sailboat provides a point of contemplation. The luminous quality of the paint itself becomes the subject.",
    image: "/paintings/twilight-sea.png",
    featured: true,
    category: "Seascape",
  },
  {
    slug: "afternoon-reading",
    title: "Afternoon Reading",
    year: 2023,
    medium: "Oil on Canvas",
    dimensions: '32" × 32"',
    description:
      "Inspired by the golden-hour interiors of Edward Hopper, Afternoon Reading transforms an ordinary domestic scene into something luminous and timeless. Warm sunlight streams through sheer curtains, illuminating dust motes and casting long shadows across worn floorboards. The empty chair suggests a presence that has just stepped away.",
    image: "/paintings/afternoon-light.png",
    featured: false,
    category: "Interior",
  },
  {
    slug: "convergence-no-7",
    title: "Convergence No. 7",
    year: 2024,
    medium: "Acrylic on Canvas",
    dimensions: '44" × 56"',
    description:
      "Part of an ongoing series exploring the intersection of geometry and organic form, Convergence No. 7 layers translucent shapes in emerald, purple, and amber. Clean edges dissolve into textured grounds, creating a visual tension between precision and entropy — order emerging from and returning to chaos.",
    image: "/paintings/geometric.png",
    featured: false,
    category: "Geometric Abstract",
  },
];

export function getPainting(slug: string): Painting | undefined {
  return paintings.find((p) => p.slug === slug);
}

export function getFeaturedPaintings(): Painting[] {
  return paintings.filter((p) => p.featured);
}

export function getRelatedPaintings(slug: string, count: number = 3): Painting[] {
  const current = getPainting(slug);
  if (!current) return paintings.slice(0, count);
  
  return paintings
    .filter((p) => p.slug !== slug)
    .sort((a, b) => {
      // Prioritize same category
      const aMatch = a.category === current.category ? 1 : 0;
      const bMatch = b.category === current.category ? 1 : 0;
      return bMatch - aMatch;
    })
    .slice(0, count);
}
