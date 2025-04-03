import React from "react";
import "./ServiceSection.css";

const services = [
  {
    icon: "📍",
    title: "Création de Fiches Google",
    description:
      "Nous créons votre fiche Google My Business de A à Z pour maximiser votre visibilité locale.",
  },
  {
    icon: "⚡",
    title: "Optimisation des Fiches Google",
    description:
      "Améliorez votre référencement et apparaissez en tête des résultats Google Maps.",
  },
  {
    icon: "💬",
    title: "Gestion des Avis & Réputation",
    description:
      "Nous vous aidons à gérer et obtenir plus d’avis positifs pour renforcer votre crédibilité.",
  },
  {
    icon: "📊",
    title: "Suivi & Mise à Jour Régulière",
    description:
      "Nous mettons à jour vos informations pour que votre fiche reste performante et à jour.",
  },
  {
    icon: "🔍",
    title: "Audit de Présence en Ligne",
    description:
      "Nous analysons votre présence en ligne pour identifier les axes d’amélioration et optimiser votre impact digital.",
  },
  {
    icon: "✍️",
    title: "Stratégie de Contenu Local",
    description:
      "Nous développons des stratégies de contenu ciblées pour engager votre audience locale et renforcer votre positionnement.",
  },
];


export default function ServiceSection() {
  return (
    <section className="services-section">
      <h1 className="services-section-title">Nos services</h1>

      {/* 📌 Section principale - Création et Optimisation de Fiches Google */}
      <div className="services-container">
        <div className="services-content">
          <h3 className="card-title">📈 Création et Optimisation de Fiches Google</h3>
          <p>
            Boostez votre présence en ligne avec une fiche Google My Business parfaitement optimisée.  
            Augmentez votre visibilité locale et attirez plus de clients !
          </p>
          <ul>
            <li className="list-text">
              ✅ <strong>Création de votre fiche :</strong> Mise en place complète et optimisée.
            </li>
            <li className="list-text">
              ✅ <strong>Optimisation SEO :</strong> Maximisez votre classement sur Google Maps.
            </li>
            <li className="list-text">
              ✅ <strong>Gestion des avis :</strong> Améliorez votre réputation et crédibilité.
            </li>
          </ul>
          <button className="cta-button-services">
            <a className="cta-button-text">Créer ou améliorer ma fiche Google</a>
          </button>
        </div>

        {/* Images flottantes */}
        <div className="floating-images">
          <img src="/google-maps.png" alt="Google Maps" className="img img1" />
          <img src="/business-profile.png" alt="Business Profile" className="img img2" />
          <img src="/seo-growth.png" alt="SEO Growth" className="img img3" />
        </div>
      </div>

      {/* 📌 Ajout de la grille des services Google My Business */}
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <span className="service-icon">{service.icon}</span>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
