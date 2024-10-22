// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $about from "./routes/about.tsx";
import * as $api_joke from "./routes/api/joke.ts";
import * as $blog from "./routes/blog.tsx";
import * as $contact from "./routes/contact.tsx";
import * as $disclaimer from "./routes/disclaimer.tsx";
import * as $donate from "./routes/donate.tsx";
import * as $faq from "./routes/faq.tsx";
import * as $greet_name_ from "./routes/greet/[name].tsx";
import * as $index from "./routes/index.tsx";
import * as $news from "./routes/news.tsx";
import * as $privacy from "./routes/privacy.tsx";
import * as $sponsor from "./routes/sponsor.tsx";

import type { Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/about.tsx": $about,
    "./routes/api/joke.ts": $api_joke,
    "./routes/blog.tsx": $blog,
    "./routes/contact.tsx": $contact,
    "./routes/disclaimer.tsx": $disclaimer,
    "./routes/donate.tsx": $donate,
    "./routes/faq.tsx": $faq,
    "./routes/greet/[name].tsx": $greet_name_,
    "./routes/index.tsx": $index,
    "./routes/news.tsx": $news,
    "./routes/privacy.tsx": $privacy,
    "./routes/sponsor.tsx": $sponsor,
  },
  islands: {},
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
