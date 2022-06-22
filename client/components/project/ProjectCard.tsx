function ProductCard (){

    return(

<div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
    <a href="#" className="w-full block h-full">
        <img alt="blog photo" src="https://www.tailwind-kit.com/images/blog/1.jpg" className="max-h-120 w-full object-cover"/>
        <div className="bg-white dark:bg-gray-800 w-full p-4">
            <div className="flex items-center">
                <div className="flex-1">
                    <p className="text-indigo-500 text-md font-medium">
                        Article
                    </p>

                </div>
                <div className="text-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                       <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                </div>

          </div>
           <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                Supercharged !
            </p>
            <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                The new supercar is here, 543 cv and 140 000$. This is best racing GT about 7 years on...
            </p>

            <div className="flex mt-4">
                <div className="flex-1"><strong>$44,275</strong> USD raised</div>
                <div className="">886%</div> 
            </div>

            <div className="w-full h-2 bg-gray-400 rounded-full mt-1">
                <div className="w-3/4 h-full text-center text-xs text-white bg-green-500 rounded-full">
                </div>
            </div>

            {/* <div className="flex items-center mt-4">
                <a href="#" className="block relative">
                    <img alt="profil" src="https://www.tailwind-kit.com/images/person/6.jpg" className="mx-auto object-cover rounded-full h-10 w-10 "/>
                </a>
                <div className="flex flex-col justify-between ml-4 text-sm">
                    <p className="text-gray-800 dark:text-white">
                        Jean Jacques
                    </p>
                    <p className="text-gray-400 dark:text-gray-300">
                        20 mars 2029 - 6 min read
                    </p>
                </div>

                
            </div> */}
            
            <div className="pt-4 flex items-center" >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                </svg> <span className="ml-1">30 days left</span>
            </div>
        </div>
    </a>
</div>

    )
}

export default ProductCard