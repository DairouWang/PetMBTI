'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/app/links';

export default function Q1Page() {
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const router = useRouter();

    const handleNext = () => {
        if (selectedAnswer) {
            // Here you could save the answer if needed
            console.log('Selected answer:', selectedAnswer);
            router.push(ROUTES.QUESTION_2);
        } else {
            alert('Please select an answer before proceeding.');
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Question 1</h1>
            <p className="mb-4">What will your dog possibly do when you get home:</p>

            <div className="space-y-2">
                {[
                    'Jump up and down excitedly',
                    'Wag their tail and bring you a toy',
                    'Bark loudly',
                    'Calmly approach for pets'
                ].map((answer, index) => (
                    <div key={index} className="flex items-center">
                        <input
                            type="radio"
                            id={`answer${index}`}
                            name="dogBehavior"
                            value={answer}
                            checked={selectedAnswer === answer}
                            onChange={() => setSelectedAnswer(answer)}
                            className="mr-2"
                        />
                        <label htmlFor={`answer${index}`}>{answer}</label>
                    </div>
                ))}
            </div>

            <button
                onClick={handleNext}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Next
            </button>
        </div>
    );
}