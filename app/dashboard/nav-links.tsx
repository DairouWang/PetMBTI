import Link from 'next/link';
import { ROUTES, NAVIGATION, getNextQuestionPath } from '@/app/links';
import { useRouter } from 'next/router';

export default function SomeComponent() {
    const router = useRouter();

    return (
        <div>
            {/* Navigation menu */}
            <nav>
                {NAVIGATION.map((item) => (
                    <Link key={item.path} href={item.path}>
                        {item.name}
                    </Link>
                ))}
            </nav>

            {/* Direct link to a specific page */}
            <Link href={ROUTES.QUESTION_1}>Go to Question 1</Link>

            {/* Button to go to the next question */}
            <button onClick={() => router.push(getNextQuestionPath(router.pathname))}>
                Next Question
            </button>
        </div>
    );
}