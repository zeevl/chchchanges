import { TriggerProvider } from "@trigger.dev/react";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "AutoChangelog",
  description:
    "Automatically generate changelogs from a public GitHub repo URL using OpenAI, Supabase and Trigger.dev.",
  openGraph: {
    type: "website",
    url: "https://autochangelog.dev",
    title: "AutoChangelog",
    description:
      "Automatically generate changelogs from a public GitHub repo URL using OpenAI, Supabase and Trigger.dev.",
    siteName: "AutoChangelog",
    images: [
      {
        url: "/og-image.jpg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <TriggerProvider
          publicApiKey={process.env.NEXT_PUBLIC_TRIGGER_PUBLIC_API_KEY ?? ""}
          apiUrl={process.env.NEXT_PUBLIC_TRIGGER_API_URL}
        >
          {children}
        </TriggerProvider>
      </body>
    </html>
  );
}
