import Link from "next/link";

export default function Footer() {
    return (
        <footer className=" py-10 mt-20 text-white/60">
            <div className="flex justify-between items-center">
                <p>© {new Date().getFullYear()} Rahim. All rights reserved.</p>
                <div className="flex gap-6">
                    <Link href="#" className="hover:text-white">Twitter</Link>
                    <Link href="#" className="hover:text-white">LinkedIn</Link>
                    <Link href="#" className="hover:text-white">GitHub</Link>
                </div>
            </div>
        </footer>
    );
}
