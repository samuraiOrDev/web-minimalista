import { Github, Linkedin, Mail } from "lucide-react"
import { Card, Section } from "../ui"
import { FormSendEmail } from "./formSendEmail"

const ContactSection = () => {
    return (
        <Section className="rounded-lg">
            <h2 className="text-3xl font-bold mb-10 text-blue-500">Contacto</h2>
            <Card className="p-6 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold mb-4">¡Hablemos!</h3>
                        <h4 className="text-xl text-blue-500 font-bold">Gracias por visitar mi sitio web !!</h4>
                        <p className="text-zinc-400">
                            Espero que hayas disfrutado explorando mi trabajo y que hayas obtenido una idea clara de mis habilidades y experiencia.
                        </p>
                        <div className="flex items-center justify-strart gap-4">
                            <a  href="mailto:vmordiales@gmail.com">
                                <Mail className="h-5 w-5" />
                            </a>
                            <a  href="https://github.com/samuraiOrDev" target="_blank">
                                <Github className="h-5 w-5" />
                            </a>
                            <a href="https://www.linkedin.com/in/víctor-manuel-ordiales-garcía/" target="_blank">
                                <Linkedin className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <FormSendEmail />
                    </div>
                </div>
            </Card>
        </Section>
    )
}
export default ContactSection