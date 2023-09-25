import React from 'react';
import { useState } from "react"
import { Button } from 'flowbite-react';
import { PencilSquareIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/solid';
import Modal from "../components/Modal"

const Properties = ({ getData })  => {
    const [showModal, setShowModal]  = useState(false)

    return (
        <div>
            <div class="flex mb-4 rounded bg-gray-50 dark:bg-gray-800">
                <div class="flex items-center justify-between w-full p-4">
                    <h1 class="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
                        Properties
                    </h1>
                    <div class="flex space-x-4">
                        <Button color="success" size="sm" onClick={() => setShowModal(true)}>
                            <PlusIcon className="mr-2 h-5 w-5" />
                            Add Propety
                        </Button>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-2 gap-4 mb-4">
                <div class="rounded bg-gray-50 dark:bg-gray-800">
                    <div class="m-4">
                        <span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Résidence Principale</span>
                        <h2 class="text-xl font-semibold leading-none text-gray-900 md:text-2xl dark:text-white mt-2">Loft Roubaix </h2>
                        <a href="#" class="mb-4 inline-flex items-center text-blue-600 hover:underline">
                            18 Rue Molière, 59100 Roubaix
                        </a>
                        <dl>
                            <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Description</dt>
                            <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">Loft contemporain de 130 m² à Roubaix, style industriel moderne, lumineux, espaces ouverts, emplacement pratique.</dd>
                        </dl>
                        <dl class="flex items-center space-x-6">
                            <div>
                                <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Date d'achat</dt>
                                <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">14/12/2022</dd>
                            </div>
                            <div>
                                <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Prix</dt>
                                <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">230,000€</dd>
                            </div>
                            <div>
                                <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Surface</dt>
                                <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">130m²</dd>
                            </div>
                            <div>
                                <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Prix/m²</dt>
                                <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">2000€</dd>
                            </div>
                            <div>
                                <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Cashflow</dt>
                                <dd class="mb-4 font-light text-red-500 sm:mb-5 dark:text-red-400">0€/mois</dd>
                            </div>
                        </dl>
                        <dl class="flex items-center space-x-6">
                            <div>
                                <a href="#" class="mb-4 inline-flex items-center hover:underline font-semibold text-gray-900 dark:text-white">
                                    👪 Location 
                                </a>
                            </div>
                            <div>
                                <a href="#" class="mb-4 inline-flex items-center hover:underline font-semibold text-gray-900 dark:text-white">
                                    🏦 Prêt
                                </a>
                            </div>
                            <div>
                                <a href="#" class="mb-4 inline-flex items-center hover:underline font-semibold text-gray-900 dark:text-white">
                                 👷‍♂️ Travaux
                                </a>
                            </div>
                        </dl>
                        <div class="flex items-center space-x-4">
                            <Button color="warning" size="sm">
                                <PencilSquareIcon className="mr-2 h-5 w-5" />
                                Edit
                            </Button>
                            <Button color="failure" size="sm">
                                <TrashIcon className="mr-2 h-5 w-5" />
                                Delete
                            </Button>
                        </div>
                    </div>
                </div>

                <div class="rounded bg-gray-50 dark:bg-gray-800">
                    <div class="m-4">
                        <span class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Loué</span>
                        <h2 class="text-xl font-semibold leading-none text-gray-900 md:text-2xl dark:text-white mt-2">Studio Colmar </h2>
                        <a href="#" class="mb-4 inline-flex items-center text-blue-600 hover:underline">
                            18 Square Fouchet, 68000 Colmar
                        </a>
                        <dl>
                            <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Description</dt>
                            <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">Ce studio de charme, situé en plein cœur de la pittoresque ville de Colmar, offre une expérience de vie urbaine des plus agréables.</dd>
                        </dl>
                        <dl class="flex items-center space-x-6">
                            <div>
                                <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Date d'achat</dt>
                                <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">04/01/2019</dd>
                            </div>
                            <div>
                                <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Prix</dt>
                                <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">112,000€</dd>
                            </div>
                            <div>
                                <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Surface</dt>
                                <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">30m²</dd>
                            </div>
                            <div>
                                <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Prix/m²</dt>
                                <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">3000€</dd>
                            </div>
                            <div>
                                <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Cashflow</dt>
                                <dd class="mb-4 font-light text-green-500 sm:mb-5 dark:text-green-400">150€/mois</dd>
                            </div>
                        </dl>
                        <dl class="flex items-center space-x-6">
                            <div>
                                <a href="#" class="mb-4 inline-flex items-center hover:underline font-semibold text-gray-900 dark:text-white">
                                    👪 Location 
                                </a>
                            </div>
                            <div>
                                <a href="#" class="mb-4 inline-flex items-center hover:underline font-semibold text-gray-900 dark:text-white">
                                    🏦 Prêt
                                </a>
                            </div>
                            <div>
                                <a href="#" class="mb-4 inline-flex items-center hover:underline font-semibold text-gray-900 dark:text-white">
                                 👷‍♂️ Travaux
                                </a>
                            </div>
                        </dl>
                        <div class="flex items-center space-x-4">
                            <Button color="warning" size="sm">
                                <PencilSquareIcon className="mr-2 h-5 w-5" />
                                Edit
                            </Button>
                            <Button color="failure" size="sm">
                                <TrashIcon className="mr-2 h-5 w-5" />
                                Delete
                            </Button>
                        </div>
                    </div>
                </div>

                <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                    <p class="text-2xl text-gray-400 dark:text-gray-500">
                        <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 18 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 1v16M1 9h16" />
                        </svg>
                    </p>
                </div>
            </div>
            {showModal && <Modal mode={'Create'} setShowModal={setShowModal} getData={getData}/>}
        </div>
    )
}

export default Properties