import FaqCard from "./FaqCard";

const questions = [
  {
    title:
      "Care sunt cele mai potrivite condimente pentru fiecare tip de carne?",
    description:
      "Pentru carne de porc puteți folosi cu încredere rozmarin, busuioc, coriandru, cimbru, chimen sau mentă.",
  },
  {
    title:
      "Care materia primã se utilizeazã pentru producerea mezelurilor sau specialitãtilor afumate din carne?",
    description:
      "Pentru producerea mezelurilor sau specialitãtilor afumate din carne se utilizeazã carne de porc, carne de vitã, carne de gãinã, carne de miel, carne de pui, carne de curcan, carne de porc, carne de vitã, carne de gãinã, carne de miel, carne de pui, carne de curcan.",
  },
  {
    title: "Cum se afumă carnea si specialitätile din carne?",
    description:
      "Pentru producerea mezelurilor sau specialitãtilor afumate din carne se utilizeazã carne de porc, carne de vitã, carne de gãinã, carne de miel, carne de pui, carne de curcan, carne de porc, carne de vitã, carne de gãinã, carne de miel, carne de pui, carne de curcan.",
  },
  {
    title: "Care este diferenta între salamul semi-afumat si fiert-afumat?",
    description:
      "Salamul semi-afumat este un produs care este afumat, dar nu este fierbere, iar salamul fiert-afumat este un produs care este fierbere, dar nu este afumat.",
  },
  {
    title: "Care este diferenta între salamul semi-afumat si fiert-afumat?",
    description:
      "Salamul semi-afumat este un produs care este afumat, dar nu este fierbere, iar salamul fiert-afumat este un produs care este fierbere, dar nu este afumat.",
  },
  {
    title: "Cum se fierb corect crenvurstile si safaladele?",
    description:
      "Salamul semi-afumat este un produs care este afumat, dar nu este fierbere, iar salamul fiert-afumat este un produs care este fierbere, dar nu este afumat.",
  },
];

const Faq = () => {
  return (
    <section className="py-20">
      <div className="flex items-center justify-center">
        <div className="space-y-2 text-center">
          <span className="text-primary font-semibold text-lg">FAQ</span>
          <h3 className="font-bold text-[40px] leading-12">
            Întrebări Frecvente
          </h3>
          <span className="text-gray-500 font-normal">
            Cele mai frecvente întrebări adresate
          </span>
        </div>
      </div>
      <div className="mt-16 flex flex-col gap-5">
        {questions.map(question => (
          <FaqCard
            key={question.title}
            title={question.title}
            description={question.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Faq;
