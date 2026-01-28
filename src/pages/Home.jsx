import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Globe, Zap, Shield, Users, BarChart } from 'lucide-react';
import Button from '../components/ui/Button';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import { Link } from 'react-router-dom';

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative flex items-center pt-16 pb-24 overflow-hidden bg-white">
                {/* Background Gradients - Optimized for Mobile GPUs */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div
                        className="absolute top-[-10%] right-[-5%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-sky-500/10 rounded-full blur-[60px] md:blur-[120px]"
                        style={{ willChange: 'filter' }}
                    />
                    <div
                        className="absolute bottom-[-10%] left-[-5%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-sky-300/10 rounded-full blur-[60px] md:blur-[120px]"
                        style={{ willChange: 'filter' }}
                    />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <motion.div
                            variants={fadeIn}
                            className="inline-block mb-4 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-sky-600 font-medium text-sm"
                        >
                            <motion.span
                                initial="hidden"
                                animate="visible"
                                variants={{
                                    hidden: { opacity: 1 },
                                    visible: { transition: { staggerChildren: 0.1 } }
                                }}
                            >
                                {"Innovating Future Technology...".split(" ").map((word, index) => (
                                    <motion.span
                                        key={index}
                                        variants={{
                                            hidden: { opacity: 0, y: 10 },
                                            visible: { opacity: 1, y: 0 }
                                        }}
                                        className="inline-block mr-1.5 last:mr-0"
                                        style={{ willChange: 'transform, opacity' }}
                                    >
                                        {word}
                                    </motion.span>
                                ))}
                            </motion.span>
                        </motion.div>
                        <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 mb-6 tracking-tight leading-tight">
                            Building Scalable <br />
                            <span className="text-sky-500">Digital Solutions</span> <br />
                            for Global Enterprises
                        </motion.h1>
                        <motion.p variants={fadeIn} className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Infra Tech Solution empowers businesses with next-gen IT consulting, enterprise software, and digital transformation services across the globe.
                        </motion.p>
                        <motion.div variants={fadeIn} className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button to="/contact" variant="primary">
                                Get Started
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                            <Button to="/services" variant="secondary">
                                Explore Services
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Services Overview */}
            <Section className="bg-sky-50/50">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Expertise</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Comprehensive IT solutions tailored for diverse industries.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Enterprise Solutions",
                            desc: "Scalable ERP, CRM, and SCM systems to streamline your business operations.",
                            icon: <BarChart className="h-8 w-8 text-blue-500" />
                        },
                        {
                            title: "BFSI & Fintech",
                            desc: "Secure banking solutions, payment gateways, and fraud detection systems.",
                            icon: <Shield className="h-8 w-8 text-blue-500" />
                        },
                        {
                            title: "Retail & E-Commerce",
                            desc: "Next-gen e-commerce platforms, POS integration, and loyalty systems.",
                            icon: <Globe className="h-8 w-8 text-blue-500" />
                        },
                        {
                            title: "Manufacturing & IoT",
                            desc: "Smart manufacturing with MES, PLM, and connected IoT ecosystems.",
                            icon: <Zap className="h-8 w-8 text-blue-500" />
                        },
                        {
                            title: "EdTech",
                            desc: "LMS, virtual classrooms, and analytics for educational institutions.",
                            icon: <Users className="h-8 w-8 text-blue-500" />
                        },
                        {
                            title: "Travel & Hospitality",
                            desc: "Booking engines, PMS, and customer experience platforms.",
                            icon: <Globe className="h-8 w-8 text-blue-500" />
                        }
                    ].map((service, index) => (
                        <Card key={index} className="group hover:border-sky-500/50 transition-colors bg-white">
                            <div className="bg-sky-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                            <p className="text-slate-600 mb-6">
                                {service.desc}
                            </p>
                            <Link to="/services" className="text-sky-600 font-medium flex items-center hover:translate-x-1 transition-transform">
                                Learn more <ArrowRight className="ml-1 h-4 w-4" />
                            </Link>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* Why Choose Us */}
            <Section className="bg-white">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                            Why Global Enterprises Trust Infra Tech
                        </h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            We combine deep industry expertise with cutting-edge technology to deliver tangible business outcomes. Our client-centric approach ensures your success is our priority.
                        </p>

                        <div className="space-y-4">
                            {[
                                "Global Presence (India, UK, Australia)",
                                "24/7 Support & Maintenance",
                                "Agile Development Methodology",
                                "Certificated Expert Developers",
                                "Scalable & Secure Architecture"
                            ].map((item, index) => (
                                <div key={index} className="flex items-center space-x-3">
                                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                                    <span className="text-slate-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10">
                            <Button to="/about" variant="primary">More About Us</Button>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="aspect-video bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl shadow-2xl overflow-hidden relative group">
                            <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors" />
                            <div className="absolute inset-0 flex items-center justify-center space-x-12">
                                <div className="text-white text-center">
                                    <h3 className="text-4xl md:text-5xl font-bold mb-2">5+</h3>
                                    <p className="text-lg opacity-90">Global Clients</p>
                                </div>
                                <div className="w-px h-24 bg-white/30"></div>
                                <div className="text-white text-center">
                                    <h3 className="text-4xl md:text-5xl font-bold mb-2">10+</h3>
                                    <p className="text-lg opacity-90">Employees</p>
                                </div>
                            </div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full blur-xl opacity-50" />
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-400 rounded-full blur-xl opacity-50" />
                    </div>
                </div>
            </Section>

            <section className="py-16 bg-sky-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
                    <p className="text-xl text-sky-100 mb-10 max-w-2xl mx-auto">
                        Partner with Infra Tech Solution for innovative digital strategies that drive growth and efficiency.
                    </p>
                    <Button to="/contact" className="!bg-white !text-sky-600 !hover:bg-sky-50 shadow-none">
                        Start Your Journey
                    </Button>
                </div>
            </section>
        </>
    );
}
