import Button from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Numele trebuie să conțină cel puțin 2 caractere" })
    .max(50, { message: "Numele nu poate depăși 50 de caractere" }),
  email: z
    .string()
    .min(1, { message: "Emailul este obligatoriu" })
    .email({ message: "Adresa de email nu este validă" }),
  address: z
    .string()
    .min(5, { message: "Adresa trebuie să conțină cel puțin 5 caractere" })
    .max(100, { message: "Adresa nu poate depăși 100 de caractere" }),
  phone: z
    .string()
    .min(8, {
      message: "Numărul de telefon trebuie să conțină cel puțin 8 cifre",
    })
    .regex(/^[0-9+\-\s()]+$/, {
      message: "Numărul de telefon conține caractere nevalide",
    }),
  subject: z
    .string()
    .min(3, { message: "Subiectul trebuie să conțină cel puțin 3 caractere" })
    .max(100, { message: "Subiectul nu poate depăși 100 de caractere" }),
  message: z
    .string()
    .min(10, { message: "Mesajul trebuie să conțină cel puțin 10 caractere" })
    .max(1000, { message: "Mesajul nu poate depăși 1000 de caractere" }),
  termsAccepted: z.boolean().refine(val => val === true, {
    message: "Trebuie să accepți termenii și condițiile",
  }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => void;
  className?: string;
}

// Helper function for input field error styling
const getInputClassName = (hasError: boolean, baseClass = "w-full h-14") => {
  return `${baseClass} ${hasError ? "border-red-500" : ""}`;
};

// Helper function for rendering field errors
const renderFieldError = (error?: { message?: string }) => {
  if (!error) return null;
  return <p className="mt-1 text-sm text-red-600">{error.message}</p>;
};

const ContactForm = ({ onSubmit, className = "" }: ContactFormProps) => {
  const { t } = useTranslation();

  const contactFormSchema = z.object({
    name: z
      .string()
      .min(2, { message: t("contact.form.validation.nameMin") })
      .max(50, { message: t("contact.form.validation.nameMax") }),
    email: z
      .string()
      .min(1, { message: t("contact.form.validation.emailRequired") })
      .email({ message: t("contact.form.validation.emailInvalid") }),
    address: z
      .string()
      .min(5, { message: t("contact.form.validation.addressMin") })
      .max(100, { message: t("contact.form.validation.addressMax") }),
    phone: z
      .string()
      .min(8, {
        message: t("contact.form.validation.phoneMin"),
      })
      .regex(/^[0-9+\-\s()]+$/, {
        message: t("contact.form.validation.phoneInvalid"),
      }),
    subject: z
      .string()
      .min(3, { message: t("contact.form.validation.subjectMin") })
      .max(100, { message: t("contact.form.validation.subjectMax") }),
    message: z
      .string()
      .min(10, { message: t("contact.form.validation.messageMin") })
      .max(1000, { message: t("contact.form.validation.messageMax") }),
    termsAccepted: z.boolean().refine(val => val === true, {
      message: t("contact.form.validation.termsRequired"),
    }),
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      address: "",
      phone: "",
      subject: "",
      message: "",
      termsAccepted: false,
    },
  });

  const handleFormSubmit = async (data: ContactFormData) => {
    try {
      if (onSubmit) {
        await Promise.resolve(onSubmit(data));
      } else {
        // Default submission handler
        console.log("Form submitted:", data);
        alert(t("contact.form.successMessage"));
      }
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(t("contact.form.errorMessage"));
    }
  };

  return (
    <div className={`w-full max-w-2xl mx-auto ${className}`}>
      <div className="text-center mb-8">
        <h3 className="font-bold text-3xl text-dark">
          {t("contact.form.title")}
        </h3>
        <p className="mt-2.5 text-gray-400 font-lato font-normal text-sm">
          {t("contact.form.subtitle")}
        </p>
      </div>

      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
        {/* Name and Email Row */}
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <Input
              {...register("name")}
              type="text"
              placeholder={t("contact.form.fields.name")}
              className={getInputClassName(!!errors.name)}
              aria-invalid={errors.name ? "true" : "false"}
            />
            {renderFieldError(errors.name)}
          </div>

          <div>
            <Input
              {...register("email")}
              type="email"
              placeholder={t("contact.form.fields.email")}
              className={getInputClassName(!!errors.email)}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {renderFieldError(errors.email)}
          </div>
        </div>

        {/* Address and Phone Row */}
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <Input
              {...register("address")}
              type="text"
              placeholder={t("contact.form.fields.address")}
              className={getInputClassName(!!errors.address)}
              aria-invalid={errors.address ? "true" : "false"}
            />
            {renderFieldError(errors.address)}
          </div>

          <div>
            <Input
              {...register("phone")}
              type="tel"
              placeholder={t("contact.form.fields.phone")}
              className={getInputClassName(!!errors.phone)}
              aria-invalid={errors.phone ? "true" : "false"}
            />
            {renderFieldError(errors.phone)}
          </div>
        </div>

        {/* Subject */}
        <div>
          <Input
            {...register("subject")}
            type="text"
            placeholder={t("contact.form.fields.subject")}
            className={getInputClassName(!!errors.subject)}
            aria-invalid={errors.subject ? "true" : "false"}
          />
          {renderFieldError(errors.subject)}
        </div>

        {/* Message */}
        <div>
          <Textarea
            {...register("message")}
            placeholder={t("contact.form.fields.message")}
            rows={6}
            className={getInputClassName(!!errors.message, "min-h-[120px]")}
            aria-invalid={errors.message ? "true" : "false"}
          />
          {renderFieldError(errors.message)}
        </div>

        {/* Terms Checkbox */}
        <div className="flex items-center gap-3">
          <Controller
            name="termsAccepted"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Checkbox
                id="terms"
                checked={value}
                onCheckedChange={onChange}
                aria-invalid={errors.termsAccepted ? "true" : "false"}
                className={errors.termsAccepted ? "border-red-500" : ""}
              />
            )}
          />
          <label htmlFor="terms" className="text-sm text-gray-600 font-lato">
            {t("contact.form.terms.agree")}{" "}
            <button
              type="button"
              onClick={() => window.open("/terms", "_blank")}
              className="text-primary hover:underline bg-transparent border-none p-0 cursor-pointer"
            >
              {t("contact.form.terms.conditions")}
            </button>
          </label>
        </div>
        {renderFieldError(errors.termsAccepted)}

        {/* Submit Button */}
        <div className="flex justify-center pt-4">
          <Button
            type="submit"
            variant="primary"
            disabled={isSubmitting}
            className={`px-8 py-4 ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
          >
            {isSubmitting
              ? t("contact.form.submitting")
              : t("contact.form.submit")}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
