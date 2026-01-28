import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo2 from '../../assets/logo2.webp';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        {
            name: 'Services',
            path: '/services',
            dropdown: [
                { name: 'Enterprise Solutions', path: '/services#enterprise' },
                { name: 'Fintech', path: '/services#finance' },
                { name: 'Retail & E-Commerce', path: '/services#retail' },
                { name: 'Manufacturing & IoT', path: '/services#manufacturing' },
                { name: 'Cloud Computing', path: '/services#cloud' },
                { name: 'Cybersecurity', path: '/services#cybersecurity' },
            ]
        },
        { name: 'Mission', path: '/mission' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 bg-white shadow-md ${scrolled ? 'py-1' : 'py-2'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-3 items-center h-12 md:h-16">
                    {/* Left: Menu Toggle + Brand */}
                    <div className="flex justify-start items-center gap-2">
                        <button
                            onClick={() => setIsOpen(true)}
                            className="p-2 -ml-2 text-slate-700 hover:text-sky-600 focus:outline-none transition-colors"
                            aria-label="Open menu"
                        >
                            <Menu className="h-7 w-7" />
                        </button>
                        <Link to="/" className="text-xl md:text-2xl font-bold bg-gradient-to-r from-sky-500 to-green-500 bg-clip-text text-transparent whitespace-nowrap">
                            Infra Tech
                        </Link>
                    </div>

                    {/* Center: Logo */}
                    <div className="flex justify-center">
                        <Link to="/" className="flex items-center">
                            <img src={logo2} alt="Infra Tech Solution" className="h-12 md:h-16 w-auto" loading="lazy" />
                        </Link>
                    </div>

                    {/* Right: Actions */}
                    <div className="flex-1 flex justify-end">
                        <Link
                            to="/contact"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 md:px-6 md:py-2.5 rounded-full font-medium text-sm md:text-base transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 active:scale-95 whitespace-nowrap"
                        >
                            Book A Call
                        </Link>
                    </div>
                </div>
            </div>

            {/* Side Drawer Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[110]"
                        />

                        {/* Drawer */}
                        <motion.div
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 left-0 bottom-0 w-[300px] sm:w-[350px] bg-white dark:bg-slate-900 shadow-2xl z-[120] overflow-y-auto"
                        >
                            <div className="flex flex-col h-full">
                                {/* Drawer Header */}
                                <div className="p-6 flex items-center justify-between border-b border-slate-100 dark:border-slate-800">
                                    <div className="flex items-center gap-2">
                                        <img src={logo2} alt="Logo" className="h-10 w-auto" />
                                        <span className="font-bold text-lg bg-gradient-to-r from-sky-500 to-green-500 bg-clip-text text-transparent">
                                            Infra Tech
                                        </span>
                                    </div>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="p-2 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
                                    >
                                        <X className="h-6 w-6" />
                                    </button>
                                </div>

                                {/* Drawer Links */}
                                <div className="flex-1 px-4 py-6 space-y-2">
                                    {navLinks.map((link) => (
                                        <div
                                            key={link.name}
                                            className="space-y-1"
                                            onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                                            onMouseLeave={() => setActiveDropdown(null)}
                                        >
                                            <div
                                                className={`flex items-center justify-between px-4 py-3 rounded-xl text-lg font-medium transition-colors cursor-pointer ${location.pathname === link.path || activeDropdown === link.name
                                                    ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400'
                                                    : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800'
                                                    }`}
                                                onClick={() => {
                                                    if (link.dropdown) {
                                                        setActiveDropdown(activeDropdown === link.name ? null : link.name);
                                                    } else {
                                                        setIsOpen(false);
                                                    }
                                                }}
                                            >
                                                <Link to={link.path} className="flex-1" onClick={(e) => link.dropdown && e.preventDefault()}>
                                                    {link.name}
                                                </Link>
                                                {link.dropdown && (
                                                    <ChevronDown className={`h-4 w-4 opacity-50 transition-transform duration-200 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                                                )}
                                            </div>

                                            <AnimatePresence>
                                                {link.dropdown && activeDropdown === link.name && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.2 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="ml-4 pl-4 border-l-2 border-slate-100 dark:border-slate-800 space-y-1 py-1">
                                                            {link.dropdown.map((item) => (
                                                                <Link
                                                                    key={item.name}
                                                                    to={item.path}
                                                                    onClick={() => setIsOpen(false)}
                                                                    className="block px-4 py-2.5 text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                                                >
                                                                    {item.name}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ))}
                                </div>

                                {/* Drawer Footer */}
                                <div className="p-6 border-t border-slate-100 dark:border-slate-800">
                                    <Link
                                        to="/contact"
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-center justify-center w-full bg-blue-600 text-white py-3 rounded-xl font-semibold shadow-lg shadow-blue-500/30"
                                    >
                                        Free Consultation
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
