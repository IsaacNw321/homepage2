import { motion } from 'framer-motion';
import { UseT } from '../context/LanguageContext';
export default function About() {
  const {translations} = UseT();
  return (
    <section className="w-80 mt-10 mb-10 h-max md:w-auto md:h-4/6 lg:w-full lg:h-[calc(100vh-112px)]">
      <div className="max-w-6xl flex justify-center align-middle mx-4 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center align-middle items-center gap-12"
        >
          <div className="ml-12 sm:ml-16 lg:ml-20 w-72 max-w-3xl md:w-full lg:w-full">
            <h2 className="text-4xl font-bold mb-6 text-center">{translations.about.title}</h2>
            <div className="bg-gray-900 w-auto lg:w-auto p-6 rounded-lg flex flex-col items-center gap-4">
              <p className="text-gray-300 mb-4 text-center">
                {translations.about.paragraphs.slice(0, 1).join(' ')}
              </p>
              <p className="text-gray-300 mb-4 text-center">
              {translations.about.paragraphs.slice(1, 2).join(' ')}
              </p>
              <p className="text-gray-300 text-center">
              {translations.about.paragraphs.slice(2, 3).join(' ')}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}