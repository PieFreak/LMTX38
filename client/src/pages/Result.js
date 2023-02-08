import { useState } from 'react';

export default function Result() {

    const [showResult, setShowResult] = useState(false);

    return (

    <div className="h-screen flex justify-center items-center flex-col bg-[#6b8db9]">

        <div className="flex items-center text-white text-3xl max-md:text-sm">
            <h1 className="p-4">RESULTAT
            </h1>
        </div>
        
        <div className="h-5/6 w-full md:w-3/5 mb-4 bg-blue-600 border-2 rounded">

            <div className="mt-2 flex justify-center items-center">
                <div className="w-3/6 flex-row mb-2 flex justify-center"> 
                    <h1>Grattis du fick x/20 rätt</h1>
                </div>
            </div>

            <div className="w-full h-fit flex justify-center mt-2"> 
                <div className="w-1/2 flex justify-center items-center">
                    <p className="mr-4">Se dina svar</p>
                    <button className="h-fit w-fit px-2 rounded border-2 hover:bg-blue-700"
                        onClick={() => setShowResult(!showResult)}>IMG</button>
                </div>
            </div>

            <div className=" overflow-y-scroll flex justify-center items-center">
                {showResult && 
                    <div className="overflow-y-scroll m-2 bg-sky-700 h-full w-3/5 border-2 rounded">
                        <p>fråga 1:</p>
                        <p>fråga 2:</p>
                        <p>fråga 3:</p>
                        <p>fråga 1:</p>
                        <p>fråga 2:</p>
                        <p>fråga 3:</p>
                        <p>fråga 1:</p>
                        <p>fråga 2:</p>
                        <p>fråga 3:</p>
                        <p>fråga 1:</p>
                        <p>fråga 2:</p>
                        <p>fråga 3:</p>
                    </div>}
            </div>
            {!showResult && 

            (<> 
                <div className="my-8 h-fit w-full flex flex-col justify-start items-center"> 
                    <h1>Utmana dina vänner!</h1>
                    <div className="bg-sky-700 border-2 rounded h-fit w-3/5 p-2">

                        <div className="flex justify-center items-center pb-1 border-b-2">
                            <p className="pr-8">User1</p>
                            <button className="px-2 shadow-lg border-2 rounded bg-slate-400">
                                Utmana
                            </button>    
                        </div>
                        <div className="flex justify-center items-center py-1 border-b-2">
                            <p className="pr-8">User2</p>
                            <button className="px-2 shadow-lg border-2 rounded bg-slate-400">
                                Utmana
                            </button>    
                        </div>
                        <div className="flex justify-center items-center py-1 border-b-2">
                            <p className="pr-8">User3</p>
                            <button className="px-2 shadow-lg border-2 rounded bg-slate-400">
                                Utmana
                            </button>    
                        </div>
                    </div>
                </div>
            

                <div className="flex flex-col justify-center items-center mt-9">
                    <h1>Bjud in en vän att testa 'namn'!</h1>
                </div>

                <div className="flex justify-center items-center mt-4">
                    <div className="flex justify-center items-center w-3/4">
                        <button className="border-2 py-2 px-4 mx-6 rounded hover:bg-green-600 text-sm">SMS</button>
                        <button className="border-2 py-2 px-4 mx-6 rounded hover:bg-green-600 text-sm">E-mail</button>
                    </div>
                </div>
            </>)}

        </div> 

    </div>
    );
}