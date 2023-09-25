import React from 'react';

import { DarkThemeToggle } from 'flowbite-react';

import {
    PresentationChartBarIcon,
    Squares2X2Icon,
    PowerIcon,
    ClipboardDocumentIcon,
    PaperClipIcon,
    UserIcon,
    Cog8ToothIcon,
} from "@heroicons/react/24/solid";

import { useEffect, useState, useCallback } from 'react'
import { useCookies } from 'react-cookie'
import { Link } from 'react-router-dom';


const Sidebar = () => {
    const [cookies, setCookie, removeCookie] = useCookies(null)
    const authToken = cookies.AuthToken
    const userEmail = cookies.Email
    const [userRole, setUserRole] = useState(null);

    const getUserRole = useCallback(async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_SERVERURL}/user/${userEmail}`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${authToken}`,
                },
            });
            const data = await response.json();
            if (data.userRole) {
                setUserRole(data.userRole);
            }
        } catch (error) {
            console.error('Erreur lors de la récupération du rôle de l\'utilisateur :', error);
        }
    }, [userEmail, authToken]);

    useEffect(() => {
        if (authToken) {
            getUserRole();
        }
    }, [authToken, getUserRole]);

    const signOut = () => {
        console.log('signOut')
        removeCookie('Email')
        removeCookie('AuthToken')
        window.location.reload()
    }

    return (
        <div>
            <nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <div class="px-3 py-3 lg:px-5 lg:pl-3">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center justify-start">
                            <a href="/" class="flex ml-2 md:mr-24">
                                <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">RealEstateBox</span>
                            </a>
                        </div>
                        <div class="flex items-center">
                            <div class="flex items-center ml-3">
                                <DarkThemeToggle />
                                <div class="flex items-center space-x-4 ml-3">
                                    <img class="w-1O h-10 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user"></img>
                                    <div class="font-medium dark:text-white">
                                        <div>{userEmail}</div>
                                        <div class="text-sm text-gray-500 dark:text-gray-400"> Role : {userRole}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <aside id="logo-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
                <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                    <ul class="space-y-2 font-medium">
                        <li>
                            <Link to="/" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <span className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">📊</span>
                                <span class="ml-3">Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Properties" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <span className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">🏘️</span>
                                <span class="flex-1 ml-3 whitespace-nowrap">Propriétés</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Contracts" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <span className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">🫱🏻‍🫲🏽</span>
                                <span class="flex-1 ml-3 whitespace-nowrap">Contrats de location</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Bank" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <span className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">🏦</span>
                                <span class="flex-1 ml-3 whitespace-nowrap">Documents bancaire</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Travaux" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <span className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">👷‍♂️</span>
                                <span class="flex-1 ml-3 whitespace-nowrap">Travaux</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Attachements" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <span className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">🗂️</span>
                                <span class="flex-1 ml-3 whitespace-nowrap">Documents</span>
                            </Link>
                        </li>
                    </ul>
                    <ul class="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
                        <li>
                            <Link to="/Profile" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <span className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">👤</span>
                                <span class="flex-1 ml-3 whitespace-nowrap">Profile</span>
                            </Link>
                        </li>
                        <li>
                            <a href="/" onClick={signOut} class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-red-500 hover:text-white dark:hover:bg-red-700 group">
                                <PowerIcon className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" />
                                <span class="flex-1 ml-3 whitespace-nowrap">Sign Out</span>
                            </a>
                        </li>
                    </ul>
                    <div id="dropdown-cta" class="p-4 mt-6 rounded-lg bg-gray-50 dark:bg-gray-900" role="alert">
                        <div class="flex items-center mb-3">
                            <span class="bg-orange-100 text-orange-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-orange-200 dark:text-orange-900">Beta</span>
                        </div>
                        <p class="mb-3 text-sm text-gray-800 dark:text-gray-400">
                            RealEstateApp preview dashboard ! You can try it for free, limitation of two properties per profile.
                        </p>
                    </div>
                </div>
            </aside>
        </div>
    )
}

export default Sidebar