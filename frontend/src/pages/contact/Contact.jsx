import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import styles from "./contact.module.css";
import heroImg from "../../assets/hero/hero_04.jpg";
import ContactModal from "../../components/contactModal/ContactModal.jsx";

const schema = yup.object({
  name: yup.string().required("Navn er påkrævet"),
  email: yup.string().email("Ugyldig email").required("Email er påkrævet"),
  subject: yup.string().required("Emne er påkrævet"),
  message: yup
    .string()
    .min(10, "Mindst 10 tegn")
    .required("Besked er påkrævet"),
});

const Contact = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [submittedName, setSubmittedName] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    setSubmittedName(data.name);
    setIsContactModalOpen(true);
    reset();
  };

  const closeContactModal = () => setIsContactModalOpen(false);

  return (
    <div className={styles.content}>
      {isContactModalOpen ? (
        <ContactModal close={closeContactModal}>
          <h2>Tak {submittedName}!</h2>
          <p>Tak for din besked!</p>
          <p>Du hører fra os snarest.</p>
        </ContactModal>
      ) : (
        <>
          <header
            className={styles.header}
            style={{ backgroundImage: `url(${heroImg})` }}
          >
            <h1>Kontakt Gitte</h1>
          </header>

          <section className={styles.contactInfo}>
            <h2>Vil du booke et ophold? Eller har du blot et spørgsmål?</h2>
            <p>
              Så tøv ikke med at tage kontakt til os herunder. Vi bestræber os
              på at svare på henvendelser indenfor 24 timer, men op til ferier
              kan der være travlt, og svartiden kan derfor være op til 48 timer.
            </p>
          </section>

          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <label>Navn</label>
            <input {...register("name")} />
            {errors.name && (
              <p className={styles.error}>{errors.name.message}</p>
            )}

            <label>Email</label>
            <input type="email" {...register("email")} />
            {errors.email && (
              <p className={styles.error}>{errors.email.message}</p>
            )}

            <label>Hvad drejer henvendelsen sig om?</label>
            <input {...register("subject")} />
            {errors.subject && (
              <p className={styles.error}>{errors.subject.message}</p>
            )}

            <label>
              Besked (Skriv dato'er, hvis det drejer sig om en booking)
            </label>
            <textarea rows="10" {...register("message")} />
            {errors.message && (
              <p className={styles.error}>{errors.message.message}</p>
            )}

            <button type="submit">Indsend</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Contact;
