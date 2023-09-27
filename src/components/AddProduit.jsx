import React,{useState, useEffect} from 'react'

function AddProduit({product, onAddProduct, editMode}) {

    const [newProduct, setNewProduct] = useState(product);
    
    useEffect(() => {
        setNewProduct(product);
      }, [product]);
    
      const handleAddProduct = () => {
        onAddProduct(newProduct);
      };

      return (
        <div className="container mt-3 mb-3">
          <h2>{editMode ? 'Modifier un Produit' : 'Ajouter un Produit'}</h2>
          <div className="form-group">
            <label htmlFor="nom">Nom</label>
            <input
              type="text"
              className="form-control"
              id="nom"
              placeholder="Nom du produit"
              value={newProduct.nom}
              onChange={(e) =>
                setNewProduct({ ...newProduct, nom: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              placeholder="Description du produit"
              value={newProduct.description}
              onChange={(e) =>
                setNewProduct({ ...newProduct, description: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="prix">Prix</label>
            <input
              type="number"
              className="form-control"
              id="prix"
              placeholder="Prix du produit"
              value={newProduct.prix}
              onChange={(e) =>
                setNewProduct({ ...newProduct, prix: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="categorie">Categorie</label>
            <input
              type="text"
              className="form-control"
              id="categorie"
              placeholder="Categorie du Produit"
              value={newProduct.categorie}
              onChange={(e) =>
                setNewProduct({ ...newProduct, categorie: e.target.value })
              }
            />
          </div>
          <button className="btn btn-primary mt-2" onClick={handleAddProduct}>
            {editMode ? 'Mettre a jour' : 'Ajouter'}
          </button>
        </div>
      );
    }

export default AddProduit