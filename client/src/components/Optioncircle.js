        
const Optioncircle = ({category, buttonActivate}) => {
    
    return (
        <div className="mx-auto justify-self-center bg-indigo-50 w-60 h-60 rounded-full
        space-y-6 flex flex-col justify-center items-center">
        <p className="text-sm md:text-xl font-extrabold text-center" >{category.title}</p>
        <p className="text-xs md:text-sm text-center mx-2" >{category.text}</p>
        <button to="/creategame" className="border-2 border-b-4 border-r-slate-500 border-b-slate-400 bg-[#ffffff] px-4 hover:bg-[#abe9f03a] border-indigo-200 hover:shadow-xl shadow-2xl transition-all duration-500"
                            onClick={buttonActivate}>
        <h2 className="font-extrabold text-center text-small md:text-base mx-2 my-1">Välj</h2>
        </button>
        </div>
    )
};

export default Optioncircle
