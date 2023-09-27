import React, {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
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

  const addProduct = (newProduct) => {
    if (
      !newProduct.nom ||
      !newProduct.description ||
      !newProduct.prix ||
      !newProduct.categorie
    ) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    if (editMode) {
      const updatedProducts = products.map((p) =>
        p.id === editProductId ? { ...p, ...newProduct } : p
      );
      setProducts(updatedProducts);
      setEditMode(false);
      setEditProductId(null);
    } else {
      const newProductObj = { ...newProduct, id: uuidv4() };
      setProducts([...products, newProductObj]);
    }

    setProduct({ id: "", nom: "", description: "", prix: "", categorie: "" });
  };

  const editProduct = (id) => {
    const productToEdit = products.find((p) => p.id === id);
    setProduct(productToEdit);
    setEditMode(true);
    setEditProductId(id);
  };

  const deleteProduct = (id) => {
    const updatedProducts = products.filter((p) => p.id !== id);
    setProducts(updatedProducts);
    setEditMode(false);
    setEditProductId(null);
  };


  return (
    <>
        <div className="col-md-6">
          <AddProduit
            product={product}
            onAddProduct={addProduct}
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