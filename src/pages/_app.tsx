import type { AppProps } from "next/app";
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google";
import Layout from "@/components/layout/Layout";
import "@/styles/global.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-bricolage", display: "swap" });
const body = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", display: "swap" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`font-body ${display.variable} ${body.variable}`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
