import ContactForm from "@/components/contact/ContactForm";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Contacts = () => {
  const navigate = useNavigate();

  return (
    <div className="py-24 sm:py-36">
      <div className="fluid-container">
        <Breadcrumbs />
        <div className="grid sm:grid-cols-2 gap-16">
          <img
            src="/images/contacts/map-with-pin.png"
            alt="Contact us"
            className="rounded-3xl object-cover h-full border border-gray-400 overflow-visible"
          />
          <div className="flex flex-col justify-between h-full gap-4">
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl font-bold text-primary">Oficiu</h4>
              <p className="text-gray-600 font-normal font-lato">
                R. Moldova, or. Chișinău, str. Calea Basarabiei, 36/4
                <br />
                Telefon: 0(22) 78 82 51
                <br />
                Email: reception@carmez.md
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl font-bold text-primary">Fabrica</h4>
              <p className="text-gray-600 font-normal font-lato">
                R. Moldova, or. Chișinău, str. Calea Basarabiei, 36/4
                <br />
                Telefon: 0(22) 78 82 51
                <br />
                Email: reception@carmez.md
              </p>
            </div>
            <Button
              variant="primary"
              className="w-fit"
              onClick={() => navigate("/contacte/magazine")}
              icon={<ArrowRight size={20} />}
            >
              Toate magazinele
            </Button>
          </div>
        </div>
        <div className="mt-24">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
