import packageJson from '../../package.json'; // Assurez-vous de spécifier le chemin correct


const currentYear = new Date().getFullYear();
const version = packageJson.version;

export default function DefaultFooter() {
  return (
    <footer class="w-full rounded-lg  dark:bg-gray-800 ">
      <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {currentYear} <a href="#" class="hover:underline">RealEstateApp (v{version}) </a>
        </span>
        <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">About</a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">Github</a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">Discord</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}


