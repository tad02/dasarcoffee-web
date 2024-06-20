import React, { useEffect, useState } from "react";
import EditProduct from "./ProductEdit";
import useAppUtils from "../utils/AppUtils"; // Import the custom hook
import AppUtils from "../utils/AppUtils";
import { set } from "animejs";

function ProductList() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState(
    categories.find((value) => value.name == "Coffee").id || 1
  );

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
    await AppUtils.handleAddProduct(newProduct);
    const newProducts = [...products, newProduct];
    setProducts(newProducts);
    handleCloseModal();
  };

  const onUpdate = async (updatedProduct) => {
    try {
      await AppUtils.handleUpdateProduct(updatedProduct);
      const newProducts = products.map((product) =>
        product.id !== updatedProduct.id ? product : updatedProduct
      );
      setProducts(newProducts);
      handleCloseModal();
    } catch (error) {
      console.error("Error updating product:", error);
    }
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
          <div className="border-b border-gray-200 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
              {categories &&
                categories.map((value) => (
                  <li
                    className="me-2 text-4xl"
                    key={value.id}
                    onClick={() => {
                      setCategory(value.id);
                    }}
                  >
                    <a
                      href="#"
                      className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                    >
                      <svg
                        className="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      ></svg>
                      {value.name}
                    </a>
                  </li>
                ))}
            </ul>
          </div>

          <ul className="list-none p-0">
            {products
              .filter((value) => value.category_id == category)
              .map((product) => (
                <li
                  key={product.id}
                  className="flex justify-between items-center bg-white p-4 mb-2 rounded shadow"
                >
                  <span>
                    {product.name} - {product.price}
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
