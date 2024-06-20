import React, { useEffect, useState } from "react";
import EditProduct from "./ProductEdit";
import useAppUtils from "../utils/AppUtils"; // Import the custom hook
import AppUtils from "../utils/AppUtils";

function ProductList() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    AppUtils.fetchCategories().then((response) => setCategories(response));
    AppUtils.fetchProducts().then((response) => setProducts(response));
  }, []);

  const handleShowModal = (product) => {
    setSelectedItem(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setAddModal(false);
    setSelectedItem(null);
  };

  const onAdd = async (newProduct) => {
    AppUtils.handleAddProduct(newProduct).then(
      AppUtils.fetchProducts().then((response) => setProducts(response))
    );
    handleCloseModal();
  };

  const onUpdate = async (updatedProduct) => {
    AppUtils.handleUpdateProduct(updatedProduct);
    AppUtils.fetchProducts().then((response) => setProducts(response));
    handleCloseModal();
  };

  const onDelete = async (productId) => {
    await AppUtils.handleDeleteProduct(productId);
    AppUtils.fetchProducts().then((response) => setProducts(response));
  };

  return (
    <div>
      {showModal && (
        <EditProduct
          handleClose={handleCloseModal}
          categories={categories}
          onSave={onUpdate}
          item={selectedItem}
        />
      )}

      {addModal && (
        <EditProduct
          handleClose={handleCloseModal}
          categories={categories}
          onSave={onAdd}
          item={null}
        />
      )}

      {!showModal && !addModal && (
        <>
          <button
            className="bg-blue-500 text-white w-full py-2 rounded mb-4"
            onClick={() => setAddModal(true)}
          >
            Thêm sản phẩm
          </button>
          <ul className="list-none p-0">
            {products.map((product) => (
              <li
                key={product.id}
                className="flex justify-between items-center bg-white p-4 mb-2 rounded shadow"
              >
                <span>
                  {product.name} - {product.price} -{" "}
                  {
                    categories.find((value) => value.id === product.category_id)
                      ?.name
                  }
                </span>
                <div className="flex space-x-2">
                  <button
                    className="bg-blue-500 text-white py-1 px-3 rounded"
                    onClick={() => handleShowModal(product)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white py-1 px-3 rounded"
                    onClick={() => onDelete(product.id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default ProductList;
