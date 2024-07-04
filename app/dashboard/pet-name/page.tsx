'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/app/links';

export default function PetNamePage() {
    const [petName, setPetName] = useState('');
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (petName.trim()) {
            localStorage.setItem('petName', petName.trim());
            router.push(ROUTES.RESULT);
        } else {
            alert("Please enter your pet's name.");
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">What's your pet's name?</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="petName" className="block mb-2">Pet's Name:</label>
                    <input
                        type="text"
                        id="petName"
                        value={petName}
                        onChange={(e) => setPetName(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    See Results
                </button>
            </form>
        </div>
    );
}