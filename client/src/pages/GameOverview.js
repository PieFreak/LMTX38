import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SettingPopup from '../components/SettingPopup'


export default function GameOverview() {


  const [showPopup, setShowPopup] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedText, setSelectedText] = useState("");

  let cat = [{title: "ORD", text:"Prövar din förmåga att förstå ord och begrepp"},
    {title: "LÄS", text:"Prövar din förmåga att förstå innehållet i svenska texter"},
    {title: "MEK", text:"Prövar din förmåga att förstå ord och begrepp i sitt sammanhang"},
    {title: "XYZ", text:"Prövar din förmåga att lösa matematiska problem inom aritmetik, algebra, geometri, funktionslära och statistik"},
    {title: "KVA", text:"Prövar din förmåga att göra kvantitativa jämförelser inom aritmetik, algebra, geometri, funktionslära och statistik"},
    {title: "NOG", text:"Prövar din förmåga att hantera matematiska och logiska problem inom aritmetik, algebra, geometri, funktionslära och statistik"},
    {title: "DTK", text:"Prövar din förmåga att hämta och tolka information ur diagram, tabeller och kartor"}
  ];

  const handleButtonClick = (title, text) => {
    setSelectedTitle(title);
    setSelectedText(text);
    setShowPopup(true);
  };

  return (
    <div className="min-h-screen w-full bg-indigo-50">
        <SettingPopup title={selectedTitle} text={selectedText} show={showPopup} onClose={()=> setShowPopup(false)}/>
        <Navbar />

        <div className="w-full bg-white mb-2 flex justify-center items-center flex-col">
          
          <p className="font-semibold text-base md:text-lg mt-16 w-auto text-center" >VÄLJ VILKEN TYP AV UPPGIFT DU VILL ÖVA PÅ</p>
          <p className="font-semibold text-base md:text-lg mb-12 w-auto text-center" >ELLER SCROLLA NED FÖR KOMPLETTA DELPROV</p>

          
          <p className="anim-textAppear font-extrabold text-xl md:text-3xl m-10 mb-12 text-center" >VERBALA UPPGIFTER</p>
          
          <div className="grid grid-cols-3 grid-rows-1">

              <div className="mx-4 justify-self-center bg-indigo-50 w-60 h-60 rounded-full
                                  space-y-6 flex flex-col justify-center items-center">
                <p className="text-sm md:text-xl font-extrabold text-center" >{cat[0].title}</p>
                <p className="text-xs md:text-sm text-center mx-2" >{cat[0].text}</p>
                <button to="/creategame" className="border-2 border-b-4 border-r-slate-500 border-b-slate-400 bg-[#ffffff] px-4 hover:bg-[#abe9f03a] border-indigo-200 hover:shadow-xl shadow-2xl transition-all duration-500"
                                                       onClick={()=> handleButtonClick(cat[0].title, cat[0].text)}>
                  <h2 className="font-extrabold text-center text-small md:text-base mx-2 my-1">Välj</h2>
                </button>
              </div>

              <div className="mx-4 justify-self-center bg-indigo-50 w-60 h-60 rounded-full 
                                  space-y-6 flex flex-col justify-center items-center">
                <p className="text-sm md:text-xl font-extrabold text-center" >{cat[1].title}</p>
                <p className="text-xs md:text-sm text-center mx-2" >{cat[1].text}</p>
                <button to="/creategame" className="border-2 border-b-4 border-r-slate-500 border-b-slate-400 bg-[#ffffff] px-4 hover:bg-[#abe9f03a] border-indigo-200 hover:shadow-xl shadow-2xl transition-all duration-500"
                                                       onClick={()=> handleButtonClick(cat[1].title, cat[1].text)}>
                  <h2 className="font-extrabold text-center text-small md:text-base mx-2 my-1">Välj</h2>
                </button>
              </div>

              <div className="mx-4 justify-self-center bg-indigo-50 w-60 h-60 rounded-full 
                                  space-y-6 flex flex-col justify-center items-center mb-16">
                <p className="text-sm md:text-xl font-extrabold text-center" >{cat[2].title}</p>
                <p className="text-xs md:text-sm text-center mx-2" >{cat[2].text}</p>
                <button to="/creategame" className="border-2 border-b-4 border-r-slate-500 border-b-slate-400 bg-[#ffffff] px-4 hover:bg-[#abe9f03a] border-indigo-200 hover:shadow-xl shadow-2xl transition-all duration-500"
                                                       onClick={()=> handleButtonClick(cat[2].title, cat[2].text)}>
                  <h2 className="font-extrabold text-center text-small md:text-base mx-2 my-1">Välj</h2>
                </button>
              </div>

          </div>

          <p className="anim-textAppear font-extrabold text-xl md:text-3xl m-10 mb-12 w-82 text-center" >KVANTITATIVA UPPGIFTER</p>
          
          <div className="grid grid-cols-2 grid-rows-2">

              <div className="mx-12 mb-8 justify-self-center bg-indigo-50 w-60 h-60 rounded-full 
                                  space-y-6 flex flex-col justify-center items-center">
                <p className="text-sm md:text-xl font-extrabold text-center" >{cat[3].title}</p>
                <p className="text-xs md:text-sm text-center mx-2" >{cat[3].text}</p>
                <button to="/creategame" className="border-2 border-b-4 border-r-slate-500 border-b-slate-400 bg-[#ffffff] px-4 hover:bg-[#abe9f03a] border-indigo-200 hover:shadow-xl shadow-2xl transition-all duration-500"
                                                       onClick={()=> handleButtonClick(cat[3].title, cat[3].text)}>
                  <h2 className="font-extrabold text-center text-small md:text-base mx-2 my-1">Välj</h2>
                </button>
              </div>

              <div className="mx-12 mb-8 justify-self-center bg-indigo-50 w-60 h-60 rounded-full 
                                  space-y-6 flex flex-col justify-center items-center">
                <p className="text-sm md:text-xl font-extrabold text-center" >{cat[4].title}</p>
                <p className="text-xs md:text-sm text-center mx-2" >{cat[4].text}</p>
                <button to="/creategame" className="border-2 border-b-4 border-r-slate-500 border-b-slate-400 bg-[#ffffff] px-4 hover:bg-[#abe9f03a] border-indigo-200 hover:shadow-xl shadow-2xl transition-all duration-500"
                                                       onClick={()=> handleButtonClick(cat[4].title, cat[4].text)}>
                  <h2 className="font-extrabold text-center text-small md:text-base mx-2 my-1">Välj</h2>
                </button>
              </div>

              <div className="mx-12 mb-8 justify-self-center bg-indigo-50 w-60 h-60 rounded-full 
                                  space-y-6 flex flex-col justify-center items-center">
                <p className="text-sm md:text-xl font-extrabold text-center" >{cat[5].title}</p>
                <p className="text-xs md:text-sm text-center mx-2" >{cat[5].text}</p>
                <button to="/creategame" className="border-2 border-b-4 border-r-slate-500 border-b-slate-400 bg-[#ffffff] px-4 hover:bg-[#abe9f03a] border-indigo-200 hover:shadow-xl shadow-2xl transition-all duration-500"
                                                       onClick={()=> handleButtonClick(cat[5].title, cat[5].text)}>
                  <h2 className="font-extrabold text-center text-small md:text-base mx-2 my-1">Välj</h2>
                </button>
              </div>

              <div className="mx-12 mb-8 justify-self-center bg-indigo-50 w-60 h-60 rounded-full 
                                  space-y-6 flex flex-col justify-center items-center">
                <p className="text-sm md:text-xl font-extrabold text-center" >{cat[6].title}</p>
                <p className="text-xs md:text-sm text-center mx-2" >{cat[6].text}</p>
                <button to="/creategame" className="border-2 border-b-4 border-r-slate-500 border-b-slate-400 bg-[#ffffff] px-4 hover:bg-[#abe9f03a] border-indigo-200 hover:shadow-xl shadow-2xl transition-all duration-500"
                                                       onClick={()=> handleButtonClick(cat[6].title, cat[6].text)}>
                  <h2 className="font-extrabold text-center text-small md:text-base mx-2 my-1">Välj</h2>
                </button>
              </div>

          </div>
      </div>

      <div className="w-full h-96 mx-auto bg-[#1d807975] mb-2">
          <h1 className="mt-2 pt-8 mb-16 flex justify-center items-center w-full 
                        text-white text-xl md:text-3xl p-2">FÖRFRÅGNINGAR</h1>
      </div>

      <div className="w-full h-96 mx-auto bg-[#b2991b81]  mb-2">
          <h1 className="mt-2 pt-8 mb-16 flex justify-center items-center w-full 
                        text-white text-xl md:text-3xl p-2">RESULTAT</h1>
      </div>
      <Footer/>
    </div>
  );
}