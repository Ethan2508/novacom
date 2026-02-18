"use client";

import { useState, FormEvent } from "react";
import SectionHeader from "@/components/ui/SectionHeader";

/**
 * Page Contact — /contact
 * Formulaire de contact + coordonnées
 */
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Envoi via mailto en fallback (à remplacer par une API si besoin)
    const subject = encodeURIComponent(
      formData.subject || "Demande de contact — Novacom"
    );
    const body = encodeURIComponent(
      `Nom : ${formData.name}\nEmail : ${formData.email}\nEntreprise : ${formData.company}\nTéléphone : ${formData.phone}\n\nMessage :\n${formData.message}`
    );
    window.location.href = `mailto:contact@nova-com.fr?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-28 bg-creme">
        <div className="container-wide">
          <SectionHeader
            label="Contact"
            title="Parlons de votre<br/>prochain projet."
            description="Remplissez le formulaire ci-dessous et nous reviendrons vers vous dans les plus brefs délais."
          />
        </div>
      </section>

      {/* Formulaire + Coordonnées */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24">
            {/* Formulaire */}
            <div className="lg:col-span-3">
              {isSubmitted ? (
                <div className="text-center py-20">
                  <p className="font-serif text-display-sm italic text-bordeaux mb-4">
                    Merci !
                  </p>
                  <p className="font-sans text-body-md text-bordeaux/60">
                    Votre message a bien été préparé. Envoyez-le depuis votre
                    client mail pour finaliser.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Nom + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block font-sans text-xs uppercase tracking-widest text-bordeaux/50 mb-3"
                      >
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-bordeaux/20 pb-3 font-sans text-body-md text-bordeaux placeholder:text-bordeaux/30 focus:outline-none focus:border-bordeaux transition-colors duration-400"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block font-sans text-xs uppercase tracking-widest text-bordeaux/50 mb-3"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-bordeaux/20 pb-3 font-sans text-body-md text-bordeaux placeholder:text-bordeaux/30 focus:outline-none focus:border-bordeaux transition-colors duration-400"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  {/* Entreprise + Téléphone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="company"
                        className="block font-sans text-xs uppercase tracking-widest text-bordeaux/50 mb-3"
                      >
                        Entreprise
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-bordeaux/20 pb-3 font-sans text-body-md text-bordeaux placeholder:text-bordeaux/30 focus:outline-none focus:border-bordeaux transition-colors duration-400"
                        placeholder="Votre entreprise"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block font-sans text-xs uppercase tracking-widest text-bordeaux/50 mb-3"
                      >
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-bordeaux/20 pb-3 font-sans text-body-md text-bordeaux placeholder:text-bordeaux/30 focus:outline-none focus:border-bordeaux transition-colors duration-400"
                        placeholder="06 00 00 00 00"
                      />
                    </div>
                  </div>

                  {/* Sujet */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block font-sans text-xs uppercase tracking-widest text-bordeaux/50 mb-3"
                    >
                      Sujet *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-bordeaux/20 pb-3 font-sans text-body-md text-bordeaux focus:outline-none focus:border-bordeaux transition-colors duration-400 appearance-none cursor-pointer"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="Stratégie digitale">Stratégie digitale</option>
                      <option value="Social Media">Social Media</option>
                      <option value="Création de contenu">Création de contenu</option>
                      <option value="Identité visuelle">Identité visuelle</option>
                      <option value="Shooting photo/vidéo">Shooting photo/vidéo</option>
                      <option value="Accompagnement global">Accompagnement global</option>
                      <option value="Autre">Autre</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block font-sans text-xs uppercase tracking-widest text-bordeaux/50 mb-3"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-bordeaux/20 pb-3 font-sans text-body-md text-bordeaux placeholder:text-bordeaux/30 focus:outline-none focus:border-bordeaux transition-colors duration-400 resize-none"
                      placeholder="Décrivez votre projet..."
                    />
                  </div>

                  {/* Bouton */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-3 bg-bordeaux text-creme px-10 py-4 font-sans text-sm uppercase tracking-widest transition-all duration-400 hover:bg-bordeaux/90 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Envoi en cours..." : "Envoyer"}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="transition-transform duration-400"
                    >
                      <path
                        d="M1 8H15M15 8L8 1M15 8L8 15"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </button>
                </form>
              )}
            </div>

            {/* Coordonnées */}
            <div className="lg:col-span-2">
              <div className="space-y-10">
                <div>
                  <p className="font-sans text-xs uppercase tracking-widest text-nude mb-4">
                    Email
                  </p>
                  <a
                    href="mailto:contact@nova-com.fr"
                    className="font-sans text-body-lg text-bordeaux hover:text-nude transition-colors duration-400"
                  >
                    contact@nova-com.fr
                  </a>
                </div>

                <div>
                  <p className="font-sans text-xs uppercase tracking-widest text-nude mb-4">
                    Téléphone
                  </p>
                  <a
                    href="tel:+33778510655"
                    className="font-sans text-body-lg text-bordeaux hover:text-nude transition-colors duration-400"
                  >
                    07 78 51 06 55
                  </a>
                </div>

                <div>
                  <p className="font-sans text-xs uppercase tracking-widest text-nude mb-4">
                    Réseaux
                  </p>
                  <div className="flex flex-col gap-3">
                    <a
                      href="https://www.instagram.com/novacomm_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-body-md text-bordeaux/70 hover:text-bordeaux transition-colors duration-400"
                    >
                      Instagram
                    </a>
                    <a
                      href="https://www.linkedin.com/in/rackel-teboul-336403251/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-body-md text-bordeaux/70 hover:text-bordeaux transition-colors duration-400"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>

                <div>
                  <p className="font-sans text-xs uppercase tracking-widest text-nude mb-4">
                    Portfolio
                  </p>
                  <a
                    href="/portfolio-novacom.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-body-md text-bordeaux/70 hover:text-bordeaux transition-colors duration-400"
                  >
                    Voir le portfolio ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
