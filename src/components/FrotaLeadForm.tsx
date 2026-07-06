import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { trackConversion } from "@/lib/rdstation";
import { sanitizeInput } from "@/lib/sanitize";

const schema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Nome muito curto" })
    .max(100, { message: "Nome muito longo" }),
  email: z
    .string()
    .trim()
    .email({ message: "E-mail inválido" })
    .max(255, { message: "E-mail muito longo" }),
  phone: z
    .string()
    .trim()
    .regex(/^\+?[\d\s()-]{10,20}$/, { message: "Telefone inválido" }),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Consentimento obrigatório" }),
  }),
  // honeypot — must remain empty
  company_url: z.string().max(0).optional().or(z.literal("")),
});

type FormValues = z.infer<typeof schema>;

const FrotaLeadForm = () => {
  const { t } = useTranslation();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const mountedAt = useRef<number>(Date.now());

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", phone: "", consent: false as unknown as true, company_url: "" },
  });

  useEffect(() => {
    mountedAt.current = Date.now();
  }, []);

  const consentValue = watch("consent");

  const onSubmit = (data: FormValues) => {
    // Anti-bot: bloqueia submissão muito rápida (< 3s) ou honeypot preenchido
    if (Date.now() - mountedAt.current < 3000 || data.company_url) {
      setStatus("error");
      return;
    }
    setStatus("loading");

    const payload = {
      name: sanitizeInput(data.name),
      email: sanitizeInput(data.email),
      phone: sanitizeInput(data.phone),
      source: "pagina-frota",
      cf_segmento: "B2B-Frotas",
    };

    try {
      trackConversion("frota-lead-b2b", payload);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card rounded-2xl p-8 text-center max-w-xl mx-auto"
      >
        <CheckCircle2 className="w-12 h-12 text-accent mx-auto mb-4" />
        <h3 className="text-2xl font-extrabold text-primary-foreground mb-2">
          {t("fleet.form.successTitle")}
        </h3>
        <p className="text-primary-foreground/70 font-light">
          {t("fleet.form.successDesc")}
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="glass-card rounded-2xl p-6 md:p-8 max-w-xl mx-auto text-left space-y-4"
      noValidate
    >
      <div>
        <h3 className="text-xl md:text-2xl font-extrabold text-primary-foreground">
          {t("fleet.form.title")}
        </h3>
        <p className="text-sm text-primary-foreground/60 font-light mt-1">
          {t("fleet.form.subtitle")}
        </p>
      </div>

      {/* Honeypot — invisível para humanos */}
      <div aria-hidden="true" className="absolute -left-[9999px] opacity-0 pointer-events-none">
        <label htmlFor="company_url">Company URL</label>
        <input id="company_url" type="text" tabIndex={-1} autoComplete="off" {...register("company_url")} />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="frota-name" className="text-primary-foreground/80 text-xs uppercase tracking-wider">
          {t("fleet.form.nameLabel")}
        </Label>
        <Input
          id="frota-name"
          type="text"
          autoComplete="name"
          maxLength={100}
          {...register("name")}
          className="bg-background/40 border-border text-primary-foreground"
        />
        {errors.name && (
          <p className="text-xs text-destructive flex items-center gap-1">
            <AlertCircle className="w-3 h-3" /> {errors.name.message}
          </p>
        )}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="frota-email" className="text-primary-foreground/80 text-xs uppercase tracking-wider">
          {t("fleet.form.emailLabel")}
        </Label>
        <Input
          id="frota-email"
          type="email"
          autoComplete="email"
          maxLength={255}
          {...register("email")}
          className="bg-background/40 border-border text-primary-foreground"
        />
        {errors.email && (
          <p className="text-xs text-destructive flex items-center gap-1">
            <AlertCircle className="w-3 h-3" /> {errors.email.message}
          </p>
        )}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="frota-phone" className="text-primary-foreground/80 text-xs uppercase tracking-wider">
          {t("fleet.form.phoneLabel")}
        </Label>
        <Input
          id="frota-phone"
          type="tel"
          autoComplete="tel"
          maxLength={20}
          placeholder="(11) 99999-9999"
          {...register("phone")}
          className="bg-background/40 border-border text-primary-foreground"
        />
        {errors.phone && (
          <p className="text-xs text-destructive flex items-center gap-1">
            <AlertCircle className="w-3 h-3" /> {errors.phone.message}
          </p>
        )}
      </div>

      <div className="flex items-start gap-2 pt-2">
        <Checkbox
          id="frota-consent"
          checked={!!consentValue}
          onCheckedChange={(v) => setValue("consent", v === true ? true : (false as unknown as true), { shouldValidate: true })}
          className="mt-0.5 border-border"
        />
        <Label
          htmlFor="frota-consent"
          className="text-xs text-primary-foreground/70 font-light leading-relaxed cursor-pointer"
        >
          {t("fleet.form.consent")}
        </Label>
      </div>
      {errors.consent && (
        <p className="text-xs text-destructive flex items-center gap-1">
          <AlertCircle className="w-3 h-3" /> {errors.consent.message as string}
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={status === "loading"}
        className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-bold"
      >
        {status === "loading" ? (
          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
        ) : (
          <Send className="w-5 h-5 mr-2" />
        )}
        {t("fleet.form.submit")}
      </Button>

      {status === "error" && (
        <p className="text-xs text-destructive text-center flex items-center justify-center gap-1">
          <AlertCircle className="w-3 h-3" /> {t("fleet.form.error")}
        </p>
      )}
    </motion.form>
  );
};

export default FrotaLeadForm;
