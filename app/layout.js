import Header from "./_components/Header";
import Logo from "./_components/Logo";
import Navigation from "./_components/Navigation";
import { ReservationProvider } from "./_components/ReservationContext";
import "./_styles/globals.css";
import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s | The Hotel",
    default: "Home | The Hotel",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={josefin.className}>
      <body className="min-h-screen bg-primary-950 text-primary-100 flex flex-col">
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
