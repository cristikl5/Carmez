import { useTranslation } from "react-i18next";
import FaqCard from "./FaqCard";

const Faq = () => {
  const { t } = useTranslation();

  const questions = [
    {
      title: t("faq.questions.q1"),
      description: t("faq.questions.a1"),
    },
    {
      title: t("faq.questions.q2"),
      description: t("faq.questions.a2"),
    },
    {
      title: t("faq.questions.q3"),
      description: t("faq.questions.a3"),
    },
    {
      title: t("faq.questions.q4"),
      description: t("faq.questions.a4"),
    },
    {
      title: t("faq.questions.q5"),
      description: t("faq.questions.a5"),
    },
  ];

  return (
    <section className="py-20">
      <div className="flex items-center justify-center">
        <div className="space-y-2 text-center">
          <span className="text-primary font-semibold text-lg">
            {t("faq.title")}
          </span>
          <h3 className="font-bold text-[40px] leading-12">
            {t("faq.subtitle")}
          </h3>
          <span className="text-gray-500 font-normal">
            {t("faq.description")}
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
