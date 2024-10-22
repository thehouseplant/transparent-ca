export function NavBar() {
  return (
    <nav class="bg-gray-100 dark:bg-gray-800 p-4 shadow-md">
      <div class="container mx-auto flex justify-between items-center">
        <div class="text-lg font-bold">
          <a href="/" class="text-gray-900 dark:text-white">
            Transparent California
          </a>
        </div>

        <div class="md:hidden">
          <button
            onclick="toggleMenu()"
            class="text-gray-900 dark:text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <div class="hidden md:flex space-x-4 items-center">
          <a
            href="/"
            class="text-gray-700 dark:text-gray-300 hover:text-blue-500"
          >
            Home
          </a>
          <a
            href="/about"
            class="text-gray-700 dark:text-gray-300 hover:text-blue-500"
          >
            About
          </a>
          <a
            href="/donate"
            class="text-gray-700 dark:text-gray-300 hover:text-blue-500"
          >
            Donate
          </a>
          <a
            href="/sponsor"
            class="text-gray-700 dark:text-gray-300 hover:text-blue-500"
          >
            Sponsor
          </a>
          <a
            href="/news"
            class="text-gray-700 dark:text-gray-300 hover:text-blue-500"
          >
            News
          </a>
          <a
            href="/records"
            class="text-gray-700 dark:text-gray-300 hover:text-blue-500"
          >
            Records Request
          </a>
        </div>
      </div>

      <div id="mobile-menu" class="md:hidden hidden mt-2 space-y-2">
        <a
          href="#"
          class="block text-gray-700 dark:text-gray-300 hover:text-blue-500 px-4"
        >
          Home
        </a>
        <a
          href="#"
          class="block text-gray-700 dark:text-gray-300 hover:text-blue-500 px-4"
        >
          About
        </a>
        <a
          href="#"
          class="block text-gray-700 dark:text-gray-300 hover:text-blue-500 px-4"
        >
          Donate
        </a>
        <a
          href="#"
          class="block text-gray-700 dark:text-gray-300 hover:text-blue-500 px-4"
        >
          Sponsor
        </a>
        <a
          href="#"
          class="block text-gray-700 dark:text-gray-300 hover:text-blue-500 px-4"
        >
          News
        </a>
        <a
          href="#"
          class="block text-gray-700 dark:text-gray-300 hover:text-blue-500 px-4"
        >
          Records Request
        </a>
      </div>
    </nav>
  );
}
