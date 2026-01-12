import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function UserLayout({ children }) {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
}
