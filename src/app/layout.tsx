import { Inter } from 'next/font/google';
import '/src/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="header">
          <h1 className="title">Wave Data Visualisation</h1>
        </div>
        <div className="content">{children}</div>
      </body>
    </html>
  );
}
