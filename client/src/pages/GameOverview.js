import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SettingPopup from "../components/SettingPopup";
import Optioncircle from "../components/Optioncircle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import {Row, Col} from "react-bootstrap"
export default function GameOverview() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedText, setSelectedText] = useState("");

  let cat = [
    {
      title: "ORD",
      text: "Ordförståelse som testar din förmåga att förstå ord och begrepp",
    },
    {
      title: "LÄS",
      text: "Läsförståelse som testar din förmåga att förstå innehållet i svenska texter",
    },
    {
      title: "MEK",
      text: "Meningskomplettering som testar din förmåga att förstå ord och begrepp i sitt sammanhang",
    },
    {
      title: "XYZ",
      text: "Testar din förmåga att lösa matematiska problem inom aritmetik, algebra, geometri, funktionslära och statistik",
    },
    {
      title: "KVA",
      text: "Testar din förmåga att göra kvantitativa jämförelser inom aritmetik, algebra, geometri, funktionslära och statistik",
    },
    {
      title: "NOG",
      text: "Testar din förmåga att hantera matematiska och logiska problem inom aritmetik, algebra, geometri, funktionslära och statistik",
    },
    {
      title: "DTK",
      text: "Testar din förmåga att hämta och tolka information ur diagram, tabeller och kartor",
    },
  ];

  const handleButtonClick = (title, text) => {
    setSelectedTitle(title);
    setSelectedText(text);
    setShowPopup(true);
  };

  return (
    <div className="z-2 min-vh-100 w-100 bg-light">
      <SettingPopup
        title={selectedTitle}
        text={selectedText}
        show={showPopup}
        onClose={() => setShowPopup(false)}
      />
      <Navbar />

      <div className="w-100 bg-white mb-2 d-flex justify-content-center align-items-center flex-column">
        <div className="container">
          <Row className="justify-content-center">
            <Col xs={12} md={10} lg={8} xl={6}>
              <p className="fw-medium fs-6 w-auto px-2 mt-5 mb-4 text-center">
                VÄLJ VILKEN TYP AV UPPGIFT DU VILL ÖVA PÅ ELLER SCROLLA NED FÖR
                KOMPLETTA DELPROV
              </p>
            </Col>
          </Row>
        </div>
        <p className="w-auto fw-bold fs-2 mt-3 mb-4 text-center">
          VERBAL
        </p>

        <div className="d-none d-lg-flex flex-row gap-4 mt-5 mb-3">
          <Optioncircle
            className="col"
            category={cat[0]}
            buttonActivate={() => handleButtonClick(cat[0].title, cat[0].text)}
          />
          <Optioncircle
            className="col"
            category={cat[1]}
            buttonActivate={() => handleButtonClick(cat[1].title, cat[1].text)}
          />
          <Optioncircle
            className="col"
            category={cat[2]}
            buttonActivate={() => handleButtonClick(cat[2].title, cat[2].text)}
          />
        </div>

        <div className={`d-lg-none w-100`}>
          <Swiper
            slidesPerView={"auto"}
            centeredSlides={true}
            freeMode={true}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Optioncircle
                className=""
                category={cat[0]}
                buttonActivate={() =>
                  handleButtonClick(cat[0].title, cat[0].text)
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <Optioncircle
                className=""
                category={cat[1]}
                buttonActivate={() =>
                  handleButtonClick(cat[1].title, cat[1].text)
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <Optioncircle
                className=""
                category={cat[2]}
                buttonActivate={() =>
                  handleButtonClick(cat[2].title, cat[2].text)
                }
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <p className="w-auto fw-bold fs-2 mt-5 mb-4 text-center">
          KVANTITATIV
        </p>

        <div className="d-none d-lg-flex flex-wrap justify-content-center mb-4 mx-md-6">
          <div className="col-lg-6 p-lg-5">
            <Optioncircle
              category={cat[3]}
              buttonActivate={() =>
                handleButtonClick(cat[3].title, cat[3].text)
              }
            />
          </div>
          <div className="col-lg-6 p-lg-5">
            <Optioncircle
              category={cat[4]}
              buttonActivate={() =>
                handleButtonClick(cat[4].title, cat[4].text)
              }
            />
          </div>
          <div className="col-lg-6 p-lg-5">
            <Optioncircle
              category={cat[5]}
              buttonActivate={() =>
                handleButtonClick(cat[5].title, cat[5].text)
              }
            />
          </div>
          <div className="col-lg-6 p-lg-5">
            <Optioncircle
              category={cat[6]}
              buttonActivate={() =>
                handleButtonClick(cat[6].title, cat[6].text)
              }
            />
          </div>
        </div>

        <div className={`d-lg-none w-100 mb-2`}>
          <Swiper
            slidesPerView={"auto"}
            centeredSlides={true}
            freeMode={true}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="mySwiper w-100"
          >
            <SwiperSlide>
              <Optioncircle
                className=""
                category={cat[3]}
                buttonActivate={() =>
                  handleButtonClick(cat[3].title, cat[3].text)
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <Optioncircle
                className=""
                category={cat[4]}
                buttonActivate={() =>
                  handleButtonClick(cat[4].title, cat[4].text)
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <Optioncircle
                className=""
                category={cat[5]}
                buttonActivate={() =>
                  handleButtonClick(cat[5].title, cat[5].text)
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <Optioncircle
                className=""
                category={cat[6]}
                buttonActivate={() =>
                  handleButtonClick(cat[6].title, cat[6].text)
                }
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="w-100 mx-auto mb-2">
        <h1
          className="mt-2 pt-5 mb-4 d-flex justify-content-center align-items-center w-100 
                        h3 p-2"
        >
          FÖRFRÅGNINGAR
        </h1>
      </div>
      <div className="w-100 mx-auto mb-2">
        <h1
          className="mt-2 pt-5 mb-5 d-flex justify-content-center align-items-center w-100 
                         h3 p-2"
        >
          RESULTAT
        </h1>
      </div>
      <Footer />
    </div>
  );
}
