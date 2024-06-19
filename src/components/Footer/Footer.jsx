export default function Footer () {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-gray-900">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="flex justify-center text-teal-600 sm:justify-start">
                        <a className="block text-cyan-400 font-bold text-2xl" href="/">
                            <span className="sr-only">Home</span>
                            Edu-Enroll
                        </a>
                    </div>

                    <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
                        Copyright &copy; {currentYear} <a href="https://github.com/InjamulCSE15" target="_blank" title="github.com/InjamulCSE15" className="text-cyan-600 hover:text-cyan-300">Injamul Alam</a>. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
