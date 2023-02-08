import { useState } from 'react';

export default function CreateGame() {

    const [showAdvancedSettings, setShowAdvancedSettings] = useState(false);


    return (

    <div className="h-screen flex justify-center items-center flex-col bg-[#6b8db9]">

        <div className="mt-4 text-white text-3xl max-md:text-sm">
            <h1 className=" p-4">SKAPA NYTT SPEL 
            </h1>
        </div>
        
        <div className="h-5/6 w-full grid md:w-3/5 mb-4 bg-blue-600 border-2 rounded">

            <div className=" h-full w-full">
                <div className="h-full relative">
                    <button className="absolute right-0 border-2 hover:bg-blue-700 rounded text-white text-sm text-start" onClick={() => setShowAdvancedSettings(!showAdvancedSettings)}>
                        Fler val</button>
                </div>
            </div>

            <div className=" w-full mt-4 flex justify-center"> 
                <div className="h-fit w-5/6 shadow-lg shadow-slate-800">
                    <div className="flex justify-center items-center text-white text-2xl max-md:text-base mx-4">     
                        <label className="pr-6">KVANTITATIVA FRÅGOR</label>
                        <input className="scale-150" type="checkbox" defaultChecked={true}></input> 
                    </div>
                    {showAdvancedSettings && 
                        <div className="flex justify-center mb-2 mr-4 grid-rows-1">
                            <label className="p-2 text-white text-base max-md:text-sm">XYZ</label>
                            <input id="1" type="checkbox" defaultChecked={true}></input>
                            <label className="pl-6 p-2 text-white text-base max-md:text-sm">KVA</label>
                            <input type="checkbox" defaultChecked={true}></input>
                            <label className="pl-6 p-2 text-white text-base max-md:text-sm">NOG</label>
                            <input type="checkbox" defaultChecked={true}></input>
                            <label className="pl-6 p-2 text-white text-base max-md:text-sm">DTK</label>
                            <input type="checkbox" defaultChecked={true}></input>
                        </div>}
                </div>
            </div>

            <div className="h-full w-full flex justify-center"> 
                <div className="h-fit max-h-5/6 w-5/6 shadow-lg shadow-slate-800"> 
                    <div className="flex justify-center items-center text-white text-2xl max-md:text-base mx-4">     
                        <label className="pr-6">VERBALA FRÅGOR</label>
                        <input className="scale-150" type="checkbox" defaultChecked={true}></input> 
                    </div>
                    {showAdvancedSettings && 
                        <div className="flex justify-center mb-2 mr-4 grid-rows-1">
                            <label className="p-2 text-white text-base max-md:text-sm">ORD</label>
                            <input type="checkbox" defaultChecked={true}></input>
                            <label className="pl-6 p-2 text-white text-base max-md:text-sm">LÄS</label>
                            <input type="checkbox" defaultChecked={true}></input>
                            <label className="pl-6 p-2 text-white text-base max-md:text-sm">MEK</label>
                            <input type="checkbox" defaultChecked={true}></input>
                        </div>}
                </div>
            </div>

            <div className="h-full w-full flex justify-center"> 
                <div className="h-5/6 w-5/6 shadow-lg shadow-slate-800"> 
                    <div className="flex justify-center items-center text-white text-2xl max-md:text-base mx-4">     
                        <label>ANTAL FRÅGOR</label>
                    </div>
                    <div className="flex justify-center mb-2 mr-4 grid-rows-1 grid-">
                        <label className="p-2 text-white text-base max-md:text-sm">10</label>
                        <input type="checkbox" defaultChecked={true}></input>
                        <label className="pl-6 p-2 text-white text-base max-md:text-sm">20</label>
                        <input type="checkbox"></input>
                        <label className="pl-6 p-2 text-white text-base max-md:text-sm">30</label>
                        <input type="checkbox"></input>
                        <label className="pl-6 p-2 text-white text-base max-md:text-sm">40</label>
                        <input type="checkbox"></input>
                    </div>
                </div>
            </div>

            <div className="text-white text-3xl max-md:text-sm flex justify-center items-center"> 
                <button className="h-fit p-4 border-2 hover:bg-blue-700 rounded">Starta!</button>
            </div>

        </div>  


    </div>
    );
  }