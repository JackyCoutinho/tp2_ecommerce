import React, {useState, useEffect} from 'react'
import AddProduit from '../components/AddProduit'


function Produits() {

  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({
    id: "",
    nom: "",
    description: "",
    prix: "",
    categorie: "",
  });
  const [editMode, setEditMode] = useState(false);
  const [editProductId, setEditProductId] = useState(null);

  // Récupérer les produits du serveur JSON
  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Erro ao buscar produtos:', error));
  }, [products]);

  // Envoyer un nouveau produit au serveur JSON
  const addProduct = (newProduct) => {
    fetch('http://localhost:5000/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    })
      .then((response) => response.json())
      .then((data) => {
        setProducts([...products, data]);
        setProduct({ id: '', nom: '', description: '', prix: '', categorie: '' });
      })
      .catch((error) => console.error('Erreur pour ajouter un produit:', error));
  };

  // Remplit les informations pour une mise à jour
  const editProduct = (id) => {
    const productToEdit = products.find((p) => p.id === id);
    setProduct(productToEdit);
    setEditMode(true);
    setEditProductId(id);
  };

  // Mettre a jour un produit dans le serveur JSON
  const updateProduct = (newProduct) =>{
    fetch(`http://localhost:5000/products/${newProduct.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    })
      .then((response) => response.json())
      .then((updatedProduct) => {
        setProducts((prevProducts)=> prevProducts.map((product) => product.id === newProduct.id ? {...product, updatedProduct}: product ))
        setProduct({ id: '', nom: '', description: '', prix: '', categorie: '' });
        setEditMode(false);
      })
      .catch((error) => console.error('Erreur pour mettre a jour le produit:', error));
  }
  
  // Supprimer le produit du serveur JSON
  const deleteProduct = (id) => {  
    fetch(`http://localhost:5000/products/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        const updatedProducts = products.filter((p) => p.id !== id);
        setProducts(updatedProducts);
        setEditMode(false);
        setEditProductId(null);
      })
      .catch((error) => console.error('Erreur lors de la suppression du produit:', error));
  };


  return (
    <>
        <div className="col-md-6">
          <AddProduit
            product={product}
            onAddProduct={addProduct}
            onUpdateProduct={updateProduct}
            editMode={editMode}
            setEditMode={setEditMode}
          />
        </div>

    <table className="table">
      <thead className="table-dark">
        <tr>
          <th>#</th>
          <th>Nom</th>
          <th>Description</th>
          <th>Prix</th>
          <th>Categorie</th>
          <th>Modifier</th>
          <th>Supprimer</th>
        </tr>
      </thead>
      {products && products.map(p => {
        return(
        <tbody key={p.id}>
          <tr>
            <td>{p.id}</td>
            <td>{p.nom}</td>
            <td>{p.description}</td>
            <td>$ {p.prix}</td> 
            <td>{p.categorie}</td>
            <td><button className='btn btn-warning' onClick={() => editProduct(p.id)}>Modifier</button></td>
            <td><button className='btn btn-danger' onClick={() => deleteProduct(p.id)}>Supprimer</button></td>
          </tr>
        </tbody>
        )
      })}
    </table>
    </>
  )
}

export default Produits