import Footer from "./footer";
import Header from "./header";
import { ReactNode } from "react"; // Import ReactNode

interface LayoutProps {
  children: ReactNode; // Specify the correct type for children
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Header />
      <main className="h-screen">{children}</main>
      <Footer />
    </div>
  );
}
