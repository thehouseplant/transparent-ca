import { type PageProps } from "$fresh/server.ts";
import { NavBar } from "../components/NavBar.tsx";
import { Footer } from "../components/Footer.tsx";

export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Transparent California</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <NavBar />
        <div class="container mx-auto p-8">
          <Component />
        </div>
        <Footer />
      </body>
    </html>
  );
}
