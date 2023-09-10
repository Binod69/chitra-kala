import './globals.css';
import { League_Spartan } from 'next/font/google';
import { Providers } from './Providers';
import Navbars from './Components/Navbars/Navbars';
import { ToastContainer, toast } from 'react-toastify';
import Footer from './Components/Footer/Footer';

const leagueSpartan = League_Spartan({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

export const metadata = {
  title: 'Chitrakala Studio',
  description: 'Best photo and wedding studio in kakarvitta',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={leagueSpartan.className}>
        <ToastContainer />
        <Providers>
          <Navbars />
          <main>{children}</main>
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
