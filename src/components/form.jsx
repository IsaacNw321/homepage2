import { UseT } from "../context/LanguageContext"
export const Form = () => {
  const {translations} = UseT();
  return (
    <div className="bg-gray-800 p-6 rounded-lg">
    <form className="space-y-4">
      <div>
        <input 
          type="text" 
          placeholder={translations.contact.form.namePlaceholder} 
          className="w-full p-2 bg-gray-700 rounded"
        />
      </div>
      <div>
        <input 
          type="email" 
          placeholder={translations.contact.form.emailPlaceholder}  
          className="w-full p-2 bg-gray-700 rounded"
        />
      </div>
      <div>
        <input 
          type="text" 
          placeholder={translations.contact.form.subjectPlaceholder}   
          className="w-full p-2 bg-gray-700 rounded"
        />
      </div>
      <div>
        <textarea 
          placeholder={translations.contact.form.messagePlaceholder} 
          className="w-full p-2 bg-gray-700 rounded min-h-[150px]"
        ></textarea>
      </div>
      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        {translations.contact.form.button}
      </button>
    </form>
  </div>
  )
}