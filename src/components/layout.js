import { Header, Footer } from "@/components";
export default function Layout({ children }) {
  return (
    <div className="flex flex-col gap-[100px]">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
