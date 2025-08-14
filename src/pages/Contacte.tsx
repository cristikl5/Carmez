import { Link } from "react-router-dom";

const Contacte = () => {
  return (
    <div className="py-20">
      <div className="fluid-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-lg text-gray-600 mb-8">
              Suntem aici pentru a vă ajuta. Contactați-ne pentru orice
              întrebări.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-dark mb-4">
                  Informații de Contact
                </h2>
                <p className="text-base">
                  <strong>Adresă:</strong> R. Moldova, or. Chisinau, str. Calea
                  Basarabiei 36/4
                </p>
                <p className="text-base">
                  <strong>Telefon:</strong> 0 (22) 78 82 51
                </p>
                <p className="text-base">
                  <strong>Email:</strong> reception@farmmeatgroup.md
                </p>
                <p className="text-base">
                  <strong>Program:</strong> 08:00 - 18:00, Luni - Sâmbătă
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-dark mb-4">Locații</h2>
                <p className="text-base text-gray-600 mb-4">
                  Găsiți-ne în următoarele locații:
                </p>
                <Link
                  to="/contacte/magazine"
                  className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Vezi toate magazinele →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacte;
