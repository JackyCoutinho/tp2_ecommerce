import React from 'react'
import IMG1 from '../assets/coffemachine.jpg'
import IMG2 from '../assets/notebook.jpg'
import IMG3 from '../assets/tv.jpg'

function Accueil() {
  return (
    <div className="container mt-5">
      <h1>Bienvenue sur Notre E-commerce</h1>
      <p>
        Dans notre e-commerce, nous proposons une large gamme de produits de haute
        qualité pour répondre à vos besoins. Explorez notre sélection de
        produits et découvrez nos meilleures offres.
      </p>
      <h2>Nos Produits</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4">
            <img
              src={IMG1}
              className="card-img-top"
              alt="Produit 1"
            />
            <div className="card-body">
              <h5 className="card-title">Produit 1</h5>
              <p className="card-text">
                Description du Produit 1. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </p>
              <a href="#" className="btn btn-primary">
                Voir les Détails
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <img
              src={IMG2}
              className="card-img-top"
              alt="Produit 2"
            />
            <div className="card-body">
              <h5 className="card-title">Produit 2</h5>
              <p className="card-text">
                Description du Produit 2. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </p>
              <a href="#" className="btn btn-primary">
                Voir les Détails
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <img
              src={IMG3}
              className="card-img-top"
              alt="Produit 3"
            />
            <div className="card-body">
              <h5 className="card-title">Produit 3</h5>
              <p className="card-text">
                Description du Produit 3. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </p>
              <a href="#" className="btn btn-primary">
                Voir les Détails
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accueil