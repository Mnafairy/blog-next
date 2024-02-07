import { Work_Sans } from "next/font/google";
import "@/styles/globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Layout from "../components/layout";
const WorkSans = Work_Sans({ subsets: ["latin"] });
export default function App({ Component, pageProps }) {
  return (
    <main className={WorkSans.className}>
      <SpeedInsights>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SpeedInsights>
    </main>
  );
}
