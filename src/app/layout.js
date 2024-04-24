import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IngeniousByte - 提高业务效率的先进人工智能解决方案",
  description: "IngeniousByte 提供尖端的人工智能分析技术，以推动业务增长。了解我们在预测建模、消费者行为分析和运营效率优化方面的服务。",
  icons: {
    icon: '/favicon.ico', // /public path
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head><link rel="icon" href="/favicon.ico" sizes="any" /></head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
