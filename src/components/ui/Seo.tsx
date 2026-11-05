import Head from "next/head";
import { site } from "@/data/site";

export default function Seo({ title, description }: { title?: string; description: string }) {
  const full = title ? `${title} | ${site.name} Edu` : `${site.name} Edu | Study Abroad Guidance for Asian Students`;
  return (
    <Head>
      <title>{full}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={full} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
    </Head>
  );
}
