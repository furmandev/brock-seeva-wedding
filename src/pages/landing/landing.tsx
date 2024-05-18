import { TopBanner } from "./top-banner";

export default function LandingPage() {
    return (
        <section class="flex flex-col gap-4">
            <TopBanner />
            <h1 class="text-4xl font-bold text-center">
                Brock and Krahseeva 💖
            </h1>
            <p class="text-lg text-center">We're getting married!</p>
            <hr />
            <div class="p-4 flex flex-col gap-4">
                <h2 class="text-2xl font-bold">Details</h2>
                <p class="text-lg">Date: August!</p>
                <p class="text-lg">Location: Somewhere!</p>
                <p class="text-lg">Time: Sometime!</p>

                <hr />

                <h2 class="text-2xl font-bold">Images</h2>
                <a class="text-lg text-blue-500 hover:underline" href="/images">
                    click here to view and upload images!
                </a>
            </div>
        </section>
    );
}
