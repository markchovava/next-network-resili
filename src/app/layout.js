import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";




export const metadata = {
  title: "Network Resilience",
  description: "Network Resilience Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        
        <Header />
        {children}

        <Footer />
        
      </body>
    </html>
  );
}
