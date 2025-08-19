import Button from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
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
        alert("Mesajul a fost trimis cu succes!");
      }
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(
        "A apărut o eroare la trimiterea mesajului. Vă rugăm să încercați din nou."
      );
    }
  };

  return (
    <div className={`w-full max-w-2xl mx-auto ${className}`}>
      <div className="text-center mb-8">
        <h3 className="font-bold text-3xl text-dark">Contactează-ne</h3>
        <p className="mt-2.5 text-gray-400 font-lato font-normal text-sm">
          Hai să discutăm!
        </p>
      </div>

      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
        {/* Name and Email Row */}
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <Input
              {...register("name")}
              type="text"
              placeholder="Numele"
              className={getInputClassName(!!errors.name)}
              aria-invalid={errors.name ? "true" : "false"}
            />
            {renderFieldError(errors.name)}
          </div>

          <div>
            <Input
              {...register("email")}
              type="email"
              placeholder="Adresa de E-Mail"
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
              placeholder="Domiciliul"
              className={getInputClassName(!!errors.address)}
              aria-invalid={errors.address ? "true" : "false"}
            />
            {renderFieldError(errors.address)}
          </div>

          <div>
            <Input
              {...register("phone")}
              type="tel"
              placeholder="Telefon"
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
            placeholder="Subiect"
            className={getInputClassName(!!errors.subject)}
            aria-invalid={errors.subject ? "true" : "false"}
          />
          {renderFieldError(errors.subject)}
        </div>

        {/* Message */}
        <div>
          <Textarea
            {...register("message")}
            placeholder="Mesajul tău..."
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
            Sunt deacord cu{" "}
            <button
              type="button"
              onClick={() => window.open("/terms", "_blank")}
              className="text-primary hover:underline bg-transparent border-none p-0 cursor-pointer"
            >
              Termenii și Condițiile
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
            {isSubmitting ? "Se trimite..." : "Trimite Mesajul"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
