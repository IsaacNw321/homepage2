import { UseT } from '../context/LanguageContext';

export default function Hero() {
  const {translations, switchLanguage, language} = UseT();
  const onClick = () => {
    switchLanguage(language === 'en' ? 'es' : 'en');
  }
  return (
    <section
  className="w-full h-full m-auto flex justify-center align-middle my-8 sm:-mx-0 lg:-mx-0 md:w-auto md:h-96 lg:w-full lg:h-[calc(100vh-112px)]">
  <div className="w-72 rounded-2xl md:w-auto p-8 lg:w-4/5 relative bg-gray-900 z-10 flex flex-col items-center justify-center h-full text-center">
    <h1 className="flex justify-center items-center text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 h-48">
      {translations.hero.title}
    </h1>
    <p className="text-3xl md:text-2xl mb-8 text-gray-300 max-w-2xl h-32 ">
      {translations.hero.description}
    </p>
    <button
      onClick={onClick}
      className=" mb-24 mt-20 md:mt-0 lg:mt-0 md:mb-0 lg:mb-0 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-base sm:text-lg"
    >
      {translations.hero.buttonC}
    </button>
  </div>
</section>
  );
}