import { Work_Sans } from "next/font/google";
import "@/styles/globals.css";
import Layout from "../components/layout";
const WorkSans = Work_Sans({ subsets: ["latin"] });
export default function App({ Component, pageProps }) {
  return (
    <main className={WorkSans.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
