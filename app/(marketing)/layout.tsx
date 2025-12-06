import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ClerkProvider } from '@clerk/nextjs';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
        <ClerkProvider appearance={{ variables: { colorPrimary: '#000000' } }}>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </ClerkProvider>
  );
}