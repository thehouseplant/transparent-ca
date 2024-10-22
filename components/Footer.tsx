export function Footer() {
  return (
    <footer class="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 py-6 mt-8">
      <div class="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div class="mb-4 md:mb-0">
          <p class="text-sm mt-1">
            © 2024 Transparent California. All rights reserved.
          </p>
        </div>

        <div class="space-x-4 text-sm">
          <a href="/contact" class="hover:text-blue-500">
            Contact
          </a>
          <a href="/blog" class="hover:text-blue-500">
            Blog
          </a>
          <a href="/disclaimer" class="hover:text-blue-500">
            Disclaimer
          </a>
          <a href="/privacy" class="hover:text-blue-500">
            Privacy Policy
          </a>
          <a href="/faq" class="hover:text-blue-500">
            FAQ
          </a>
          <a href="/donate" class="hover:text-blue-500">
            Donate
          </a>
        </div>
      </div>
    </footer>
  );
}
