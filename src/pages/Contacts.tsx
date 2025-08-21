import ContactForm from "@/components/contact/ContactForm";
import GoogleMap from "@/components/contact/GoogleMap";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Contacts = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="py-24 sm:py-36">
      <div className="fluid-container">
        <Breadcrumbs />
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-16">
          <GoogleMap
            width="100%"
            className="rounded-3xl object-cover border border-gray-400 overflow-visible "
          />
          <div className="flex flex-col justify-between h-full gap-4">
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl font-bold text-primary">
                {t("contacts.office")}
              </h4>
              <p className="text-gray-600 font-normal font-lato">
                {t("contacts.address")}
                <br />
                {t("contacts.phone")}
                <br />
                {t("contacts.email")}
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl font-bold text-primary">
                {t("contacts.factory")}
              </h4>
              <p className="text-gray-600 font-normal font-lato">
                {t("contacts.address")}
                <br />
                {t("contacts.phone")}
                <br />
                {t("contacts.email")}
              </p>
            </div>
            <Button
              variant="primary"
              className="w-fit"
              onClick={() => navigate("/contacte/magazine")}
              icon={<ArrowRight size={20} />}
            >
              {t("contacts.allStores")}
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
