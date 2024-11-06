import { Download, Mail } from "lucide-react"
import { Button, Section } from "../ui"
import Logo from "../svg/Logo"
import { configAnimate, homePage } from "../../const"
import { motion } from 'framer-motion';

const HeroSection = () => {
    const { heroSection } = homePage
    const {
        animateHeroSecion: {
            initial,
            animate
        }
    } = configAnimate
    return (
        <Section>
            <motion.div
                initial={{ opacity: initial.opacity, y: initial.y }}
                animate={{ opacity: animate.opacity, y: animate.y }}
                className="flex flex-col items-center text-center gap-6">
                <div className="flex items-center justify-center overflow-hidden">
                    <Logo />
                </div>
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                        {heroSection.title}
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl">
                        {heroSection.description}
                    </p>
                </div>
                <div className="flex gap-4">
                    <Button className="bg-blue-600 hover:bg-blue-700">
                        <Mail className="mr-2 h-4 w-4" />
                        {heroSection.contact}
                    </Button>
                    <a
                        href={heroSection.cv.to}
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <Button variant="outline" className="border-secondary">
                            <Download className="mr-2 h-4 w-4" />
                            {heroSection.cv.text}
                        </Button>
                    </a>
                </div>
            </motion.div>
        </Section>
    )
}
export default HeroSection