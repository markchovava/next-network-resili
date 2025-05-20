import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

/* ToastContainer */
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { cookies } from "next/headers";
import MainContextProvider from "@/contexts/MainContext";


export const metadata = {
  title: "Network Resilience",
  description: "Network Resilience Website",
};

export default async function RootLayout({ children }) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('NETWORK_RESILIENCE_AUTH_COOKIE');
    const adminToken = await cookieStore.get('NETWORK_RESILIENCE_ADMIN_COOKIE');

  return (
    <html lang="en">
      <body className={`antialiased`}>
        <MainContextProvider>

          <Header authToken={authToken} adminToken={adminToken} />
          {children}
          <Footer />

        </MainContextProvider>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored" 
        />
        
      </body>
    </html>
  );
}
