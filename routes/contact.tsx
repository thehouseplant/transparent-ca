export default function Contact() {
  return (
    <div>
      <h1 class="text-3xl font-semibold mb-4">Contact</h1>
      <p class="text-gray-700 dark:text-gray-300">
        Please read our <a href="/faq">Frequently Asked Questions (FAQ)</a> page
        to see if your question has already been answered.
        <br class="mb-4" />
        <a
          href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=7920.000.&lawCode=GOV"
          target="_blank"
          class="text-gray-700 dark:text-gray-300 hover:text-blue-500 underline"
        >
          California Government Code §§ 7920–7931
        </a>
        , the&nbsp;
        <a
          href="https://www.calcities.org/resource/the-people's-business-a-guide-to-the-california-public-records-act"
          target="_blank"
          class="text-gray-700 dark:text-gray-300 hover:text-blue-500 underline"
        >
          California Public Records Act
        </a>
        , makes public employee names and compensation and pension information
        public record.
        <br class="mb-4" />
        Transparent California provides these records as a public service. As
        such, Transparent California will not respond to requests asking for
        information to be removed.
        <br class="mb-4" />
        Transparent California does not create this information, we simply
        publish data obtained from the agencies shown. If you feel that data is
        inaccurate, we suggest you contact the agency - we do not make any
        alterations to this data unless requested by the agency, including name
        changes.
        <br class="mb-4" />
        Transparent California does not maintain contact information (email
        addresses, phone numbers, etc.) of those listed on the site. We have no
        way of getting in contact with anyone listed on Transparent California.
      </p>

      <form class="mt-6" action="#" method="POST">
        <div class="mb-4">
          <label
            for="message"
            class="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            class="mt-1 p-2 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-gray-300"
            required
          ></textarea>
        </div>

        <div class="mb-4">
          <label
            for="name"
            class="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            class="mt-1 p-2 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-gray-300"
            required
          />
        </div>

        <div class="mb-4">
          <label
            for="email"
            class="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            class="mt-1 p-2 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-gray-300"
            required
          />
        </div>

        <div class="flex justify-end">
          <button
            type="submit"
            class="px-4 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
