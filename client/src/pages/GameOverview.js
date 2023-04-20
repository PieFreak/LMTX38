import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SettingPopup from '../components/SettingPopup'
import Optioncircle from "../components/Optioncircle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Pagination } from "swiper";


export default function GameOverview() {

  const [showPopup, setShowPopup] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedText, setSelectedText] = useState("");

  let cat = [{title: "ORD", text:"Ordförståelse som testar din förmåga att förstå ord och begrepp"},
    {title: "LÄS", text:"Läsförståelse som testar din förmåga att förstå innehållet i svenska texter"},
    {title: "MEK", text:"Meningskomplettering som testar din förmåga att förstå ord och begrepp i sitt sammanhang"},
    {title: "XYZ", text:"Testar din förmåga att lösa matematiska problem inom aritmetik, algebra, geometri, funktionslära och statistik"},
    {title: "KVA", text:"Testar din förmåga att göra kvantitativa jämförelser inom aritmetik, algebra, geometri, funktionslära och statistik"},
    {title: "NOG", text:"Testar din förmåga att hantera matematiska och logiska problem inom aritmetik, algebra, geometri, funktionslära och statistik"},
    {title: "DTK", text:"Testar din förmåga att hämta och tolka information ur diagram, tabeller och kartor"}
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
          
          <p className="font-medium md:font-lightbold text-base md:text-lg w-[18rem] md:w-[36rem] px-2 mt-8 md:mt-16 text-center mb-8">
            VÄLJ VILKEN TYP AV UPPGIFT DU VILL ÖVA PÅ ELLER SCROLLA NED FÖR KOMPLETTA DELPROV
          </p>

          
          <p className="font-extrabold text-2xl md:text-3xl md:m-8 mb-6 text-center" >VERBAL</p>
          

          <div className="hidden lg:grid lg:grid-cols-3 lg:grid-rows-1 lg:gap-6 lg:mb-12">

            <Optioncircle category={cat[0]} buttonActivate={()=> handleButtonClick(cat[0].title, cat[0].text)}/>
            <Optioncircle category={cat[1]} buttonActivate={()=> handleButtonClick(cat[1].title, cat[1].text)}/>
            <Optioncircle category={cat[2]} buttonActivate={()=> handleButtonClick(cat[2].title, cat[2].text)}/>
          
          </div>
          
          <div className={`lg:hidden w-full ${showPopup ? '-z-10':'z-0'}`}>
            <Swiper slidesPerView={"auto"} centeredSlides={true} freeMode={true} pagination={{ clickable: true,}} modules={[Pagination]} className="mySwiper w-full h-72">
            <SwiperSlide><Optioncircle className=""category={cat[0]} buttonActivate={()=> handleButtonClick(cat[0].title, cat[0].text)}/></SwiperSlide>
            <SwiperSlide><Optioncircle className=""category={cat[1]} buttonActivate={()=> handleButtonClick(cat[1].title, cat[1].text)}/></SwiperSlide>
            <SwiperSlide><Optioncircle className=""category={cat[2]} buttonActivate={()=> handleButtonClick(cat[2].title, cat[2].text)}/></SwiperSlide>

          </Swiper>
          </div>

          <p className=" w-auto font-extrabold text-2xl md:text-3xl m-8 mb-6 text-center" >KVANTITATIV</p>
          
          <div className="hidden lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-x-24 lg:gap-y-12 lg:mb-16">

            <Optioncircle className="mx-4 my-6"category={cat[3]} buttonActivate={()=> handleButtonClick(cat[3].title, cat[3].text)}/>
            <Optioncircle className="mx-4 my-6"category={cat[4]} buttonActivate={()=> handleButtonClick(cat[4].title, cat[4].text)}/>
            <Optioncircle className="mx-4 my-6"category={cat[5]} buttonActivate={()=> handleButtonClick(cat[5].title, cat[5].text)}/>
            <Optioncircle className="mx-4 my-6"category={cat[6]} buttonActivate={()=> handleButtonClick(cat[6].title, cat[6].text)}/>
          </div>
          <div className={`lg:hidden w-full ${showPopup ? '-z-10':'z-0'}`}>
            <Swiper slidesPerView={"auto"} centeredSlides={true} freeMode={true} pagination={{ clickable: true,}} modules={[Pagination]} className="mySwiper w-full h-72">
            <SwiperSlide><Optioncircle className=""category={cat[3]} buttonActivate={()=> handleButtonClick(cat[3].title, cat[3].text)}/></SwiperSlide>
            <SwiperSlide><Optioncircle className=""category={cat[4]} buttonActivate={()=> handleButtonClick(cat[4].title, cat[4].text)}/></SwiperSlide>
            <SwiperSlide><Optioncircle className=""category={cat[5]} buttonActivate={()=> handleButtonClick(cat[5].title, cat[5].text)}/></SwiperSlide>
            <SwiperSlide><Optioncircle className=""category={cat[6]} buttonActivate={()=> handleButtonClick(cat[6].title, cat[6].text)}/></SwiperSlide>
          </Swiper>
          </div>
          
      </div>

      <div className="w-full h-96 mx-auto bg-[#1d807975] mb-2">
          <h1 className="mt-2 pt-8 mb-4 flex justify-center items-center w-full 
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