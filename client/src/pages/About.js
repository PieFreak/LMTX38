import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {

    let questionInfoPages = [
        {title:"XYZ", link:"/xyz"},
        {title:"KVA", link:"/kva"},
        {title:"NOG", link:"/nog"},
        {title:"DTK", link:"/dtk"},
        {title:"ORD", link:"/ord"},
        {title:"LÄS", link:"/las"},
        {title:"MEK", link:"/mek"},
        {title:"ELF", link:"/elf"},
      ]
    
    return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-indigo-50">
        <Navbar/>
        <h1 className="md:mt-16 mt-12 mb-4 py-2 text-center text-black text-xl md:text-3xl">
            Om Högskoleprovet
        </h1>
        <p className="md:w-96 w-72 md:text-sm text-xs text-center">Högskoleprovet består av åtta delprov som testar dina kunskaper inom olika områden.
            Antalet uppgifter är 160 varav 80 är kvantitativa och innehåller matematiska uppgifter
            och uppgifter som kräver logiskt och analytiskt tänkande och 80 är verbala frågor
            som bland annat innehåller texter, ord och läsförståelse.</p>
        <h1 className="mt-32 mb-6 pb-2 text-center md:text-2xl text-base border-b-2">Högskoleprovets 8 delar:</h1>
        <ul className="md:max-w-2xl max-w-sm grid md:grid-cols-4 md:grid-rows-2 grid-cols-2 grid-rows-4 mt-4 mb-12 p-1 gap-2">{
            questionInfoPages.map(({title, link}) => (
                <li className="hover:bg-blue-200 rounded-xl border-2 p-2 m-1" key={title}>
                    <NavLink to={link} className="">
                    <h1 className="text-center">{title}</h1>
                    <p className="text-center" style={{fontSize:11}}>Prövar din förmåga att lösa matematiska problem inom
                    aritmetik, algebra, geometri, funktionslära och
                    statistik. Rek provtid: 60 sek / uppg.</p>
                    </NavLink>
                </li>
            ))}
        </ul>
        <h1 className="md:mt-16 mt-12 mb-4 py-2 text-center text-black text-xl md:text-3xl">Om "namn"</h1>
            <p className="md:w-96 w-72 mx-2 md:text-sm text-xs text-center mb-16">Syftet med detta projekt är 
            att utveckla en webbapplikation där man kan tävla mot 
            andra användare på frågor från högskoleprovets alla 
            olika delar. På så vis ges fler personer möjligheten 
            att bredda sina kunskaper och höja sina resultat på 
            provet. Applikationen ska vara ett hjälpmedel för de 
            som vill öva inför högskoleprovet tillsammans med andra.
            </p>
        <Footer/>
    </div>
    )
  }