import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone } from 'lucide-react'
import { UseT } from '../context/LanguageContext'


export default function Contact() {
  const {translations} = UseT();
  return (
    <section className="w-full -mx-3 md:w-auto lg:w-auto bg-transparent lg:-mx-0 md:bg-gray-900 lg:bg-gray-900">
      <div className="lg:p-4 w-72 md:w-auto lg:w-3/4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className=" mt-20 text-4xl font-bold text-center mb-6">{translations.contact.title}</h2>
          <div className=" grid md:grid-cols-1 gap-12">
            <div className="w-72 md:w-auto lg:w-auto bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6">{translations.contact.information.title}</h3>
              <div className="space-y-4">
              <div className="flex items-center gap-4">
               <Phone className="w-5 h-5 text-blue-500" />
                   <p className="flex items-center text-blue-500 text-base">+58 416 257-2870</p>
                 </div>
                <div className="flex items-center gap-4">
                <Github className="w-5 h-5 text-blue-500"/> 
                  <a href="https://github.com/IsaacNw321" target="_blank" 
                      rel="noopener noreferrer"  className="hover:text-blue-500">
                  {translations.contact.information.github}
                  </a>
                </div>
                <div className="flex items-center gap-4">
                <Linkedin className="w-5 h-5 text-blue-500" />  
                  <a href="https://www.linkedin.com/in/isaac-pereira-271a66285/" target="_blank" 
                      rel="noopener noreferrer"  className="hover:text-blue-500">
                  {translations.contact.information.linkedin}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

