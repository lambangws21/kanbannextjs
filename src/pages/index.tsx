/** @format */
import Layout from "@/components/Layout";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Layout />
      <main>
        <h1>Hello world</h1>
      </main>
    </div>
  );
}
