import { notFound } from "next/navigation";
import { paintings, getPainting, getRelatedPaintings } from "@/data/paintings";
import type { Metadata } from "next";
import PaintingDetailClient from "./PaintingDetailClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return paintings.map((painting) => ({
    slug: painting.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const painting = getPainting(slug);
  if (!painting) return {};

  return {
    title: `${painting.title} — Moiz Khan`,
    description: painting.description,
    openGraph: {
      title: `${painting.title} — Moiz Khan`,
      description: painting.description,
      images: [painting.image],
    },
  };
}

export default async function PaintingPage({ params }: PageProps) {
  const { slug } = await params;
  const painting = getPainting(slug);

  if (!painting) {
    notFound();
  }

  const related = getRelatedPaintings(slug, 3);

  return <PaintingDetailClient painting={painting} related={related} />;
}
