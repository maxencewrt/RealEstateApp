import React from 'react';
import { Button } from 'flowbite-react';
import { PencilSquareIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/solid';

const Bank = () => {
    return (
        <div>
            <div class="flex mb-4 rounded bg-gray-50 dark:bg-gray-800">
                <div class="flex items-center justify-between w-full p-4">
                    <h1 class="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
                        Bank Contracts
                    </h1>
                    <div class="flex space-x-4">
                        <Button color="success" size="sm">
                            <PlusIcon className="mr-2 h-5 w-5" />
                            Add Contracts
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bank