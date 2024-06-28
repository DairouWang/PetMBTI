import Image from "next/image";
import { ROUTES } from "@/app/links";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Image
            src="/main-page-dog1.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
            layout = "responsive"
        />
      <div className="container">
        <h1 className= "title">Pet MBTI</h1>
        <p className = "intro">What is your pet's MBTI? Discover their personality traits and how to best understand and care for them.</p>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
          href={ROUTES.QUESTION_1}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="start button">
            Start{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </a>

      </div>
    </main>
  );
}
