export default function Add(){
  return(
<div className="bg-white dark:bg-gray-800 ">
    <div className="text-center w-full mx-auto px-4 sm:px-6  lg:px-8 z-20">
       <img className="w-60 mx-auto" src={'http://localhost:3000/' + '/images/campaign-image.png'} alt="" />
        <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span className="block">
               Let’s get ready to start your campaign! 
            </span>
            
        </h2>
        <p className="text-xl mt-4 w-1/2 mx-auto text-gray-400">
           We want to create the best onboarding for you – please fill out the information below. Your answers will be locked for this campaign and can’t be changed later.
        </p>

        
    </div>
    <div className="mx-auto max-w-7xl px-4 sm:px-6  lg:px-8 h-full">
      <div className="w-1/2 mx-auto space-y-12 p-4">
        <div className="mt-4">
            <p>Who are you raising money for?</p>
            <p> Please choose the type of account that will be receiving your funds. </p>
            <div className="flex items-center gap-8">
                <label className="inline-flex items-center">
                    <input type="radio" name="vehicle" className="h-5 w-5 text-red-600"/>
                    <span className="ml-2 text-gray-700">
                        Individual
                    </span>
                </label>
                <label className="inline-flex items-center">
                    <input type="radio" name="vehicle" className="h-5 w-5 text-red-600"/>
                    <span className="ml-2 text-gray-700">
                        Business or NonProfit
                    </span>
                </label>
            </div>
        </div>

        <div className="mt-4">
            <p> Where are you located? </p>
            <p> If you are raising funds as an individual, what is your country of legal residence? If you are raising funds for a business, where is the business headquartered?  </p>
            
            <select className="block w-52 text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="animals">
                <option value="">
                    Select an option
                </option>
                <option value="parrot">
                    USA
                </option>
                <option value="spider">
                    UK
                </option>
                <option value="goldfish">
                    Nigeria
                </option>
            </select>

        </div>

        <button type="button" className="block w-52  py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
        START MY CAMPAIGN
    </button>
    </div>
    </div>
</div>

  )
}