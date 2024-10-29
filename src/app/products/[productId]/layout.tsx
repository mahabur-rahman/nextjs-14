import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hello product details...",
};

export default function ProductDetailLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div>{children}</div>

      <h3 className="text-yellow-500">Product details layout...</h3>
    </>
  );
}
