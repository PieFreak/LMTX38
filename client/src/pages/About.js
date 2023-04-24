import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  let questionInfoPages = [
    { title: "XYZ", link: "/xyz" },
    { title: "KVA", link: "/kva" },
    { title: "NOG", link: "/nog" },
    { title: "DTK", link: "/dtk" },
    { title: "ORD", link: "/ord" },
    { title: "LÄS", link: "/las" },
    { title: "MEK", link: "/mek" },
    { title: "ELF", link: "/elf" },
  ];

  return (
    <div className="vh-screen bg-light">
      <Navbar />
      <div className="container lg:px-5">
        <h1 class="mt-5 mb-5 py-2 text-center text-dark h2">
          Om Högskoleprovet
        </h1>
          <p className="text-center">
            Högskoleprovet består av åtta delprov som testar dina kunskaper inom
            olika områden. Antalet uppgifter är 160 varav 80 är kvantitativa och
            innehåller matematiska uppgifter och uppgifter som kräver logiskt
            och analytiskt tänkande och 80 är verbala frågor som bland annat
            innehåller texter, ord och läsförståelse.
          </p>
        <h1 className="mt-5 mb-4 pb-2 text-center h3">
          Högskoleprovets 8 delar:
        </h1>
        <div className="row row-cols-2 row-cols-md-4">
          {questionInfoPages.map(({ title, link }) => (
            <div className="col mb-4" key={title}>
              <div
                className="card h-100 bg-light rounded"
                style={{ cursor: "pointer" }}
              >
                <div
                  className="card-body d-flex text-center flex-column justify-content-between"
                  onClick={() => console.log("Card clicked")}
                >
                  <h1 className="card-title text-center text-decoration-none">
                    {title}
                  </h1>
                  <p className="card-text text-center" style={{ fontSize: 11 }}>
                    Prövar din förmåga att lösa matematiska problem inom
                    aritmetik, algebra, geometri, funktionslära och statistik.
                    Rek provtid: 60 sek / uppg.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h1 className="mt-5 mb-4 py-2 text-center text-dark h1 max-w-600px">
          Om "namn"
        </h1>
        <p className="text-center">
          Syftet med detta projekt är att utveckla en webbapplikation där man
          kan tävla mot andra användare på frågor från högskoleprovets alla
          olika delar. På så vis ges fler personer möjligheten att bredda sina
          kunskaper och höja sina resultat på provet. Applikationen ska vara ett
          hjälpmedel för de som vill öva inför högskoleprovet tillsammans med
          andra.
        </p>
      </div>
      <Footer />
    </div>
  );
}
