import React,{useState, useEffect} from 'react'

function AddProduit({product, onAddProduct, onUpdateProduct, editMode, setEditMode}) {

    const [newProduct, setNewProduct] = useState(product);
    
    useEffect(() => {
        setNewProduct(product);
      }, [product]);
    
      const handleAddProduct = () => {
        onAddProduct(newProduct);
      };

      const handleUpdateProduct = () => {
        fetch(`http://localhost:5000/products/${newProduct.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
      })
        .then((response) => response.json())
        .then((updatedProduct) => {
          // Chamar a função de callback para atualizar o estado na aplicação principal
          onUpdateProduct(updatedProduct);
          setEditMode(false);
        })
        .catch((error) => console.error('Erro ao editar produto:', error));
      };


      return (
        // Ajouter le formulaire d'ajout et de mise à jour de produits
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
          {editMode ?
          <button className="btn btn-primary mt-2" onClick={handleUpdateProduct}>Metre a jour</button> :
          <button className="btn btn-primary mt-2" onClick={handleAddProduct}>Ajouter</button>
          }
        </div>
      );
    }

export default AddProduit