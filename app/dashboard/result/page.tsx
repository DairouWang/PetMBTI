'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/app/links';

export default function ResultPage() {
    const [petName, setPetName] = useState('');
    const [mbti, setMbti] = useState('');
    const router = useRouter();

    useEffect(() => {
        // Retrieve pet name from localStorage
        const storedPetName = localStorage.getItem('petName');
        if (storedPetName) {
            setPetName(storedPetName);
        } else {
            // If no pet name is found, redirect to the pet-name page
            router.push(ROUTES.PET_NAME);
        }

        // In a real application, you would calculate the MBTI based on the user's answers
        // For this example, we'll just use a random MBTI type
        const mbtiTypes = ['ISTJ', 'ISFJ', 'INFJ', 'INTJ', 'ISTP', 'ISFP', 'INFP', 'INTP', 'ESTP', 'ESFP', 'ENFP', 'ENTP', 'ESTJ', 'ESFJ', 'ENFJ', 'ENTJ'];
        const randomMBTI = mbtiTypes[Math.floor(Math.random() * mbtiTypes.length)];
        setMbti(randomMBTI);
    }, [router]);

    if (!petName) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto p-4 max-w-2xl">
            <h1 className="text-3xl font-bold mb-6 text-center">Pet MBTI Result</h1>
            <div className="bg-white shadow-md rounded-lg p-6">
                <p className="text-xl mb-4 text-center">
                    {petName}'s MBTI is <span className="font-bold text-2xl">{mbti}</span>
                </p>
                <div className="mt-6">
                    <h2 className="text-2xl font-semibold mb-3">What this means:</h2>
                    <p className="mb-4">
                        {petName} exhibits traits commonly associated with the {mbti} personality type. This means:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Trait 1 description</li>
                        <li>Trait 2 description</li>
                        <li>Trait 3 description</li>
                        <li>Trait 4 description</li>
                    </ul>
                </div>
                <div className="mt-8">
                    <h2 className="text-2xl font-semibold mb-3">How to care for your {mbti} pet:</h2>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Care tip 1</li>
                        <li>Care tip 2</li>
                        <li>Care tip 3</li>
                    </ul>
                </div>
            </div>
            <div className="mt-8 text-center">
                <button
                    onClick={() => router.push(ROUTES.HOME)}
                    className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                >
                    Take Another Quiz
                </button>
            </div>
        </div>
    );
}