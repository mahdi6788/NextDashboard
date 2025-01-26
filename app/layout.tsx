import "@/app/ui/global.css"
import { inter } from "./ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* here the Inter font will be applied globally and other fonts that are imported and applied in the other pages can be used as needed */}
      {/* the Tailwind antialiased class which smooths out the font, which is not necessary. */}
      <body className={`antialiased ${inter.className}`}>{children}</body>
    </html>
  );
}
