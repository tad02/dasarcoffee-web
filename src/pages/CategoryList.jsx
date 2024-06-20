import React, { useEffect, useState } from "react";
import EditCategory from "./CategoryEdit"; // Make sure to import the EditModal component
import AppUtils from "../utils/AppUtils";

function CategoryList() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const response = await AppUtils().fetchCategories();
    setCategories(response);
  };

  useEffect(() => {
    getCategories();
  }, []);

  const handleEditClick = (category) => {
    setSelectedItem(category);
    setShowModal(true);
  };

  const handleAddClick = () => {
    setAddModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setAddModal(false);
    setSelectedItem(null);
  };

  const handleSave = async (updatedCategory) => {
    const response = await AppUtils.handleUpdateCategory(updatedCategory);
    if (response) {
      setCategories((prevCategories) =>
        prevCategories.map((category) =>
          category.id === updatedCategory.id ? updatedCategory : category
        )
      );
    }
    handleModalClose();
  };

  const handleAdd = async (newCategory) => {
    const response = await AppUtils.handleAddCategory(newCategory);
    if (response) {
      setCategories((prevCategories) => [...prevCategories, response]);
    }
    handleModalClose();
  };

  const handleDelete = async (id) => {
    const response = await AppUtils.handleDeleteCategory(id);

    if (response) {
      setCategories(categories.filter((category) => category.id !== id));
    } else {
      // Xử lý lỗi nếu cần, ví dụ: thông báo cho người dùng rằng việc xóa không thành công
      console.error("Failed to delete category");
    }
  };

  return (
    <div className="container mx-auto p-4">
      {selectedItem && (
        <EditCategory
          show={showModal}
          handleClose={handleModalClose}
          item={selectedItem}
          onSave={handleSave}
        />
      )}

      {addModal && (
        <EditCategory
          show={addModal}
          handleClose={handleModalClose}
          item={{ name: "", description: "", image: "" }}
          onSave={handleAdd}
        />
      )}

      <h2 className="text-2xl font-bold text-center my-4 text-black">
        Danh sách loại
      </h2>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleAddClick}
        type="button"
      >
        Thêm loại
      </button>

      {!addModal && !showModal && categories && (
        <ul className="space-y-4" style={{ listStyle: "none" }}>
          {categories.map((category) => (
            <li
              key={category.id}
              className="flex flex-col md:flex-row justify-between items-center bg-white shadow-md p-4 rounded-lg"
            >
              <span className="mb-2 md:mb-0">{category.name}</span>
              <div className="flex space-x-2">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded m-5"
                  onClick={() => handleEditClick(category)}
                >
                  Sửa
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
                  onClick={() => handleDelete(category.id)}
                >
                  Xóa
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CategoryList;
