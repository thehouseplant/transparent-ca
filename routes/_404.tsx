import { Head } from "$fresh/runtime.ts";

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 | Page Not Found</title>
      </Head>
      <div class="grid h-screen place-content-center bg-white px-4">
        <h1 class="uppercase tracking-widest text-gray-500">
          404 | Page Not Found
        </h1>
      </div>
    </>
  );
}
