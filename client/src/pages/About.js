import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {

    let questionInfoPages = [
        { title: "XYZ", info: "Delprovet XYZ testar matematisk problemlösning och består av 12 uppgifter per provpass och alltså 24 uppgifter per högskoleprov.  Rekommenderad provtid är 12 minuter och den rekommenderade medeltiden per uppgift är därmed 1 minut per uppgift. I denna provdel ska du lösa matematiska uppgifter. De områden som är inkluderade är aritmetik, algebra, geometri, funktionslära och statistik." },
        { title: "KVA", info: "Delprovet KVA testar kvantitativa jämförelser och består av 10 uppgifter per provpass och alltså 20 uppgifter per högskoleprov. Den rekommenderad provtiden är 10 minuter vilket ger att den rekommenderade medeltiden per uppgift är 1 minut. I delprovet KVA får vi uppgifter med beskrivning av två kvantiteter, kvantitet I och kvantitet II." },
        { title: "NOG", info: "Delprovet NOG går ut på att med kvantitativa resonemang avgöra om det finns nog med information. Delprovet består av 6 uppgifter per provpass och alltså 12 uppgifter per högskoleprov. Rekommenderad provtid är 10 minuter och eftersom 6 uppgifter bör lösas på 10 minuter ger det en rekommenderad tid på cirka 1,5 minut per uppgift." },
        { title: "DTK", info: "Delprovet DTK består av diagram, tabeller, kartor och andra grafiska framställningar med 12 tillhörande uppgifter per provpass och alltså 24 uppgifter per högskoleprov. Den rekommenderad provtiden för de 12 uppgifterna är 23 minuter vilket ger cirka 115 sekunder (d.v.s. nästan 2 minuter) per fråga." },
        { title: "ORD", info: "Delprovet ORD testar din förmåga att förstå ord och begrepp utanför sitt sammanhang och består av 10 uppgifter per provpass och alltså 20 uppgifter per högskoleprov. Rekommenderad provtid är 3 minuter och den rekommenderade medeltiden per uppgift är därmed 18 sekunder per uppgift." },
        { title: "LÄS", info: "Delprovet LÄS består av svenska texter av varierande längd med två eller fyra flervalsfrågor. Varje fråga har fyra svarsalternativ. Delprovet består av 10 uppgifter per provpass och alltså 20 uppgifter per högskoleprov. Den rekommenderad provtiden är 22 minuter vilket ger att den rekommenderade medeltiden per uppgift är 2 minuter och 12 sekunder." },
        { title: "MEK", info: "Delprovet MEK består av korta textstycken där ord har ersatts av en lucka markerad med ____. Du ska välja det svarsförslag som innehållsligt och språkligt passar bäst i luckan. Delprovet består av 10 flervalsuppgifter per provpass och alltså 20 uppgifter per högskoleprov. Rekommenderad provtid är 8 minuter vilket ger en rekommenderad tid på cirka 48 sekunder." },
        { title: "ELF", info: "Delprovet ELF består av engelska texter av varierande längd med två eller fyra flervalsfrågor. Observera att du ska lösa uppgifterna med ledning av den information som ges i respektive text. Elf finns inte att öva på här på denna hemsida." },
    ];

    return (
        <div className="min-h-screen w-full">
            <Navbar />
            <div className="w-full flex flex-col justify-center items-center bg-white">
                <h1 className="md:mt-16 mt-12 mb-4 py-2 text-center text-black text-xl md:text-3xl">
                    Om Högskoleprovet
                </h1>
                <p className="mx-4 md:mx-32 md:text-base text-sm text-center max-w-[60rem]">Högskoleprovet består av åtta delprov som testar dina kunskaper inom olika områden.
                    Antalet uppgifter är 160 varav 80 är kvantitativa och innehåller matematiska uppgifter
                    och uppgifter som kräver logiskt och analytiskt tänkande och 80 är verbala frågor
                    som bland annat innehåller texter, ord och läsförståelse.</p>
                <h1 className="mt-32 mb-6 pb-2 text-center md:text-2xl text-base">Högskoleprovets 8 delar:</h1>
                <ul className="mx-2 md:mx-36 grid grid-cols-1 grid-rows-8 mt-4 mb-12 p-1 gap-2">{
                    questionInfoPages.map(({ title, info }) => (
                        <li className="hover:bg-blue-200 bg-gray-100 rounded-md border-2 p-2 m-1 mb-4 max-w-[60rem]" key={title}>
                            <NavLink to={""} className="">
                                <h1 className="pb-4 md:pb-8 pt-4 text-xl md:text-2xl text-center">{title}</h1>
                                <p className="pb-4 md:pb-8 text-center md:text-base text-sm md:px-40">{info}</p>
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <h1 className="md:mt-16 mt-12 mb-4 py-2 text-center text-black text-xl md:text-3xl"></h1>
                <p className="mx-4 md:mx-32 md:text-base text-xs text-center max-w-[50rem] mb-12 text-gray-500">
                    Syftet med detta projekt är att kunna tävla mot andra användare på frågor från högskoleprovets
                    olika delar. Applikationen ska vara ett hjälpmedel för de som vill öva
                    inför högskoleprovet tillsammans med andra på ett roligt sätt!
                </p>
            </div>
            <Footer />
        </div>
    )
}