export default function Home() {
  return (
    <div>
      <div class="pb-8">
        <h1 class="text-3xl font-semibold">Transparent California</h1>
        <p class="mt-4">California's largest public pay and pension database</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 class="text-2xl font-semibold mb-4">Salaries</h2>
          <p class="text-gray-700 dark:text-gray-300">
            <form action="#" method="POST">
              <div class="max-w-lg mx-auto">
                <label
                  for="search"
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Search California public employee salaries:
                </label>
                <div class="flex">
                  <input
                    type="input"
                    id="search"
                    name="search"
                    class="p-2 flex-grow border border-gray-300 dark:border-gray-600 rounded-l-md focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-gray-300"
                    placeholder="Name or job title"
                    required
                  />

                  <button
                    type="submit"
                    class="px-4 py-2 bg-indigo-600 text-white rounded-r-md hover:bg-indigo-700"
                  >
                    Search
                  </button>
                </div>
              </div>
            </form>
          </p>
          <p>
            <div class="text-lg font-bold mt-4">
              <a href="#" class="text-gray-900 dark:text-white">
                View salary records by agency type:
              </a>
            </div>
            <ul class="list-disc list-inside mt-4 ml-4 text-gray-700 dark:text-gray-300">
              <li>
                <a
                  href="#"
                  class="text-gray-700 dark:text-gray-300 hover:text-blue-500"
                >
                  View all salary records
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-700 dark:text-gray-300 hover:text-blue-500"
                >
                  Cities
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-700 dark:text-gray-300 hover:text-blue-500"
                >
                  Counties
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-700 dark:text-gray-300 hover:text-blue-500"
                >
                  University System
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-700 dark:text-gray-300 hover:text-blue-500"
                >
                  Community Colleges
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-700 dark:text-gray-300 hover:text-blue-500"
                >
                  K-12 Schools
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-700 dark:text-gray-300 hover:text-blue-500"
                >
                  Charter Schools
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-700 dark:text-gray-300 hover:text-blue-500"
                >
                  Special Districts
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-700 dark:text-gray-300 hover:text-blue-500"
                >
                  State of California
                </a>
              </li>
            </ul>
          </p>
        </div>

        <div class="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 class="text-2xl font-semibold mb-4">Pensions</h2>
          <p class="text-gray-700 dark:text-gray-300">
            <form action="#" method="POST">
              <div class="max-w-lg mx-auto">
                <label
                  for="search"
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Search California public employee pensions:
                </label>
                <div class="flex">
                  <input
                    type="input"
                    id="search"
                    name="search"
                    class="p-2 flex-grow border border-gray-300 dark:border-gray-600 rounded-l-md focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-gray-300"
                    placeholder="Name or job title"
                    required
                  />

                  <button
                    type="submit"
                    class="px-4 py-2 bg-indigo-600 text-white rounded-r-md hover:bg-indigo-700"
                  >
                    Search
                  </button>
                </div>
              </div>
            </form>
          </p>
          <p>
            <div class="text-lg font-bold mt-4">
              <a href="#" class="text-gray-900 dark:text-white">
                View pension records:
              </a>
            </div>
            <ul class="list-disc list-inside mt-4 ml-4 text-gray-700 dark:text-gray-300">
              <li>
                <a
                  href="#"
                  class="text-gray-700 dark:text-gray-300 hover:text-blue-500"
                >
                  View all pension records
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-700 dark:text-gray-300 hover:text-blue-500"
                >
                  View individual pension plans
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-700 dark:text-gray-300 hover:text-blue-500"
                >
                  View pension data by last employer
                </a>
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}
