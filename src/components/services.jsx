import { motion } from "framer-motion"
import { Globe, Layout, Smartphone, Headphones, BriefcaseBusiness } from "lucide-react"
import { UseT } from "../context/LanguageContext"

const iconMap = {
  Globe,
  Layout,
  Smartphone,
  BriefcaseBusiness,
  Headphones,
}

export default function Services() {
  const { translations } = UseT()
  const services = translations.services.items

  return (
    <section className="w-full -mx-3 bg-transparent md:bg-gray-900 lg:-mx-0 lg:bg-gray-900">
      <div className="w-72 max-w-6xl mx-auto px-4 sm:px-6 lg:w-full lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">{translations.services.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon]
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex justify-center"
              >
                <div className="bg-gray-800 p-6 rounded-lg w-full max-w-sm text-center flex flex-col justify-between h-full lg:h-108">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-400 mb-4">{service.description}</p>
                    {IconComponent && <IconComponent className="mx-auto my-4" color="#2563EB" size={48} />}
                  </div>
                  {service.link && (
                <div className="mt-4">
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
                  >
                    {service.button}
                  </a>
                </div>
              )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}