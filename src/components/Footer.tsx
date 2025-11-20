export default function Footer() {
    return (
        <footer className="border-t border-white/10 py-8 mt-20 bg-black/50 backdrop-blur-sm">
            <div className="container mx-auto px-6 text-center text-gray-500 text-sm">
                <p>&copy; {new Date().getFullYear()} Aplkalex. All rights reserved.</p>
            </div>
        </footer>
    );
}
