import React from 'react';
import './WhySection.css';

const sections = [
  {
    title: "Visibilité accrue dans Maps",
    text: "Votre entreprise apparaît dans les résultats géolocalisés, ce qui augmente considérablement vos chances d’être trouvé.",
    img: "/images/maps1.jpg",
  },
  {
    title: "Plus d’appels et de clics",
    text: "Une fiche bien optimisée incite les utilisateurs à passer à l'action plus facilement.",
    img: "/images/img2.png"
  },
  {
    title: "Renforcement de la crédibilité",
    text: "Des informations complètes, des photos et des avis clients inspirent confiance instantanément.",
    img: "/images/trust.jpg"
  },
  {
    title: "SEO local boosté",
    text: "Votre entreprise gagne en position dans les résultats locaux grâce à une fiche bien structurée.",
    img: "/images/seo2.jpg"
  }
];

const WhySection = () => {
  return (
    <section className="why-section-split">
      <h2 className="section-title">Pourquoi une fiche Google optimisée ?</h2>
      {sections.map((item, index) => (
        <div className={`why-block ${index % 2 === 1 ? 'reverse' : ''}`} key={index}>
          <div className="why-text">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
          <div className="why-img">
            <img src={item.img} alt={item.title} />
          </div>
        </div>
      ))}
    </section>
  );
};

export default WhySection;
