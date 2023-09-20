import React from 'react';
import { Button, Avatar } from 'flowbite-react';
import { ArrowUpTrayIcon } from "@heroicons/react/24/solid";


const Profile = () => {
    return (
        <div>
            <div class="grid grid-cols-1 px-4 pt-6 xl:grid-cols-3 xl:gap-4 dark:bg-gray-900">
                <div class="col-span-full xl:col-auto">
                    <div
                        class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800"
                    >
                        <div
                            class="p-4 mb-4 items-center sm:flex xl:block 2xl:flex sm:space-x-4 xl:space-x-0 2xl:space-x-4"
                        >
                            <Avatar
                                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                                size="xl"
                                rounded
                            />
                        </div>
                        <h3 class="text-xl font-semibold dark:text-white">
                            Maxence Wurth
                        </h3>
                        <h4
                            for="role"
                            class="block mb-4 text-sm font-medium text-gray-900 dark:text-white"
                        >Role: </h4>
                        <Button>
                            <ArrowUpTrayIcon className="mr-2 h-5 w-5" />
                            <p>
                                Change Picture
                            </p>
                        </Button>
                    </div>
                    <div
                        class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800"
                    >
                        <h3 class="mb-4 text-xl font-semibold dark:text-white">
                            Language
                        </h3>
                        <div class="mb-4">
                            <label
                                for="settings-language"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >Select language</label
                            >
                            <select
                                id="settings-language"
                                name="countries"
                                class="bg-gray-50 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            >
                                <option>English (US)</option>
                                <option>Français (France)</option>
                                <option>Deutsch</option>
                            </select>
                        </div>
                        <div>
                            <Button> Save all </Button>
                        </div>
                    </div>
                </div>
                <div class="col-span-2">
                    <div
                        class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800"
                    >
                        <h3 class="mb-4 text-xl font-semibold dark:text-white">
                            General information
                        </h3>
                        <form action="#">
                            <div class="grid grid-cols-6 gap-6">
                                <div class="col-span-6 sm:col-span-3">
                                    <label
                                        for="first-name"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >First Name</label
                                    >
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Bonnie"
                                        required
                                    />
                                </div>
                                <div class="col-span-6 sm:col-span-3">
                                    <label
                                        for="last-name"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >Last Name</label
                                    >
                                    <input
                                        type="text"
                                        name="last-name"
                                        id="last-name"
                                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Green"
                                        required
                                    />
                                </div>
                                <div class="col-span-6 sm:col-span-3">
                                    <label
                                        for="email"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >Email</label
                                    >
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="example@company.com"
                                        required
                                    />
                                </div>
                                <div class="col-span-6 sm:col-span-3">
                                    <label
                                        for="role"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >Role</label
                                    >
                                    <input
                                        type="text"
                                        name="role"
                                        id="role"
                                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="React Developer"
                                        required
                                    />
                                </div>
                                <div class="col-span-6 sm:col-full">
                                    <Button> Save all </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div
                        class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800"
                    >
                        <h3 class="mb-4 text-xl font-semibold dark:text-white">
                            Password information
                        </h3>
                        <form action="#">
                            <div class="grid grid-cols-6 gap-6">
                                <div class="col-span-6 sm:col-span-3">
                                    <label
                                        for="current-password"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >Current password</label
                                    >
                                    <input
                                        type="text"
                                        name="current-password"
                                        id="current-password"
                                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="••••••••"
                                        required
                                    />
                                </div>
                                <div class="col-span-6 sm:col-span-3">
                                    <label
                                        for="password"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >New password</label
                                    >
                                    <input
                                        data-popover-target="popover-password"
                                        data-popover-placement="bottom"
                                        type="password"
                                        id="password"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="••••••••"
                                        required
                                    />
                                    <div
                                        data-popover
                                        id="popover-password"
                                        role="tooltip"
                                        class="absolute z-10 invisible inline-block text-sm font-light text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 w-72 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400"
                                    >
                                        <div class="p-3 space-y-2">
                                            <h3 class="font-semibold text-gray-900 dark:text-white">
                                                Must have at least 6 characters
                                            </h3>
                                            <div class="grid grid-cols-4 gap-2">
                                                <div class="h-1 bg-orange-300 dark:bg-orange-400"></div>
                                                <div class="h-1 bg-orange-300 dark:bg-orange-400"></div>
                                                <div class="h-1 bg-gray-200 dark:bg-gray-600"></div>
                                                <div class="h-1 bg-gray-200 dark:bg-gray-600"></div>
                                            </div>
                                            <p>It’s better to have:</p>
                                            <ul>
                                                <li class="flex items-center mb-1">
                                                    <svg
                                                        class="w-4 h-4 mr-2 text-green-400 dark:text-green-500"
                                                        aria-hidden="true"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    ><path
                                                        fill-rule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clip-rule="evenodd"></path></svg
                                                    >
                                                    Upper & lower case letters
                                                </li>
                                                <li class="flex items-center mb-1">
                                                    <svg
                                                        class="w-4 h-4 mr-2 text-gray-300 dark:text-gray-400"
                                                        aria-hidden="true"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    ><path
                                                        fill-rule="evenodd"
                                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                        clip-rule="evenodd"></path></svg
                                                    >
                                                    A symbol (#$&)
                                                </li>
                                                <li class="flex items-center">
                                                    <svg
                                                        class="w-4 h-4 mr-2 text-gray-300 dark:text-gray-400"
                                                        aria-hidden="true"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    ><path
                                                        fill-rule="evenodd"
                                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                        clip-rule="evenodd"></path></svg
                                                    >
                                                    A longer password (min. 12 chars.)
                                                </li>
                                            </ul>
                                        </div>
                                        <div data-popper-arrow></div>
                                    </div>
                                </div>
                                <div class="col-span-6 sm:col-span-3">
                                    <label
                                        for="confirm-password"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >Confirm password</label
                                    >
                                    <input
                                        type="text"
                                        name="confirm-password"
                                        id="confirm-password"
                                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="••••••••"
                                        required
                                    />
                                </div>
                                <div class="col-span-6 sm:col-full">
                                    <Button> Save all </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile