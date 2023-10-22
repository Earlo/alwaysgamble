import Image from "next/image";
import RouletteWheel from "@/components/RouletteWheel";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <RouletteWheel />
        </main>
    );
}
