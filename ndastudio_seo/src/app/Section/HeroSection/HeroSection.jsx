import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="Hero-text">
        Boostez votre visibilité avec des fiches Google optimisées.
        </h1>
        <div className="Hero-subtitle-div">
        <a className="Hero-subtitle">
        Une fiche Google bien optimisée, c’est plus de visibilité, plus d’appels, et plus de clients. Laissez-nous nous en charger. 
        </a>
        </div>
        <div className="badge-section">
          <div className="badge-view">livraison en 7 jours</div>
          <div className="badge-view">100% clients satisfaits</div>
          <div className="badge-view">Révisions illimitées</div>
        </div>
      </div>
      <button className="cta-button">
        <a className="cta-button-text">Créer ma fiche Google maintenant</a>
      </button>
      <div className="image-view"></div>
    </section>
  );
}
