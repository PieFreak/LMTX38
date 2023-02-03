
export default function About() {
  return (
    <div className="border-2">

        <div className="flex justify-center items-center text-3xl border-2 m-4">
            <h1>Om Högskoleprovet</h1>
        </div>

        <div className="flex justify-center items-center text-center border-2 m-4">
            <p className="text-3xl">Högskoleprovet består av åtta delprov som testar dina kunskaper inom olika områden.
                Antalet uppgifter är 160 varav 80 är kvantitativa och innehåller matematiska uppgifter
                och uppgifter som kräver logiskt och analytiskt tänkande och 80 är verbala frågor
                som bland annat innehåller texter, ord och läsförståelse.</p>
        </div>

        <div className="mt-8">
            <h1 className="text-center">Högskoleprovets 8 delar:</h1>
        </div>

        <div className="grid grid-cols-4 grid-rows-2 border-2 m-4">

            <button className="border-2 m-1 hover:bg-slate-300">
                <h4>XYZ</h4>
                <p>Prövar din förmåga att lösa matematiska problem inom
                    aritmetik, algebra, geometri, funktionslära och
                    statistik. Rek provtid: 60 sek / uppg.</p>
            </button>
            <button className="border-2 m-1 hover:bg-slate-300">
                <h4>KVA</h4>
                <p>Prövar din förmåga att göra kvantitativa jämförelser
                    inom aritmetik, algebra, geometri, funktionslära
                    och statistik. Rek provtid: 60 sek / uppg.</p>
            </button>
            <button className="border-2 m-1 hover:bg-slate-300">
                <h4>NOG</h4>
                <p>Prövar din förmåga att hantera matematiska och
                    logiska problem inom aritmetik, algebra, geometri,
                    funktionslära och statistik. Rek provtid: 90 sek / uppg.</p>
            </button>
            <button className="border-2 m-1 hover:bg-slate-300">
                <h4>DTK</h4>
                <p>Prövar din förmåga att hämta och tolka information ur
                    diagram, tabeller och kartor. Rek provtid: 
                    115 sek / uppg.</p>
            </button>
            <button className="border-2 m-1 hover:bg-slate-300">
                <h4 className="align-baseline">ORD</h4>
                <p>Prövar din förmåga att förstå ord och begrepp.
                    Rek provtid: 18 sek / uppg.</p>
            </button>
            <button className="border-2 m-1 hover:bg-slate-300">
                <h4>LÄS</h4>
                <p>Prövar din förmåga att förstå innehållet i svenska
                    texter. Rek provtid: 132 sek / uppg.</p>
            </button>
            <button className="border-2 m-1 hover:bg-slate-300">
                <h4>MEK</h4>
                <p>Prövar din förmåga att förstå ord och begrepp i
                    sitt sammanhang. Rek provtid:  48 sek / uppg.</p>
            </button>
            <button className="border-2 m-1 hover:bg-slate-300">
                <h4>ELF</h4>
                <p>Prövar din förmåga att förstå innehållet i engelska texter.
                    ELF-uppgifter från tidigare prov är ej tillgängligt 
                    p.g.a rättigheter.</p>
            </button>
        </div>
        <div className="border-2 mt-20">
            <h1 className="text-2xl text-center m-4">Om appen</h1>
            <p className="text-center">Syftet med detta projekt är 
            att utveckla en webbapplikation där man kan tävla mot 
            andra användare på frågor från högskoleprovets alla 
            olika delar. På så vis ges fler personer möjligheten 
            att bredda sina kunskaper och höja sina resultat på 
            provet. Applikationen ska vara ett hjälpmedel för de 
            som vill öva inför högskoleprovet tillsammans med andra.
            </p>
        </div>
    </div>
    )
  }