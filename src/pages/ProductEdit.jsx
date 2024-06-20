import React, { useState } from "react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import MyCombobox from "./Select";

function EditProduct({ categories, handleClose, item, onSave }) {
  const [formData, setFormData] = useState({
    id: item ? item.id : "",
    category_id: item ? item.category_id : "",
    name: item ? item.name : "",
    price: item ? item.price : "",
    description: item ? item.description : "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCategoryChange = (categoryId) => {
    setFormData({ ...formData, category_id: categoryId });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.category_id) {
      alert("Chưa chọn loại cho món");
    } else if (!parseFloat(formData.price)) {
      alert("Vui lòng kiểm tra mục giá sản phẩm");
    } else {
      onSave(formData);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <Card
        color="white"
        shadow={true}
        className="p-6 rounded-lg shadow-lg w-full h-full max-w-md mx-4 md:mx-0"
      >
        <form
          style={{
            justifyContent: "space-evenly",
          }}
          onSubmit={handleSubmit}
          className="flex flex-col justify-evenly space-y-4 p-5 h-full"
        >
          <MyCombobox
            listCategories={categories}
            id={formData.category_id}
            onCategoryChange={handleCategoryChange}
          />
          <div>
            <Typography
              color="blue-gray"
              className="mb-1 text-lg md:text-xl lg:text-2xl"
            >
              Tên
            </Typography>
            <Input
              style={{
                fontSize: "32px",
                padding: "32px",
              }}
              type="text"
              name="name"
              value={formData.name || ""}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded text-base md:text-lg lg:text-2xl"
            />
          </div>
          <div>
            <Typography
              color="blue-gray"
              className="mb-1 text-lg md:text-xl lg:text-2xl"
            >
              Giá
            </Typography>
            <Input
              style={{
                fontSize: "20px",
                padding: "20px",
              }}
              type="text"
              name="price"
              value={formData.price || ""}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded text-base md:text-lg lg:text-2xl"
            />
          </div>
          <div>
            <Typography
              color="blue-gray"
              className="mb-1 text-lg md:text-xl lg:text-2xl"
            >
              Mô tả
            </Typography>
            <Input
              style={{
                fontSize: "20px",
                padding: "20px",
              }}
              type="text"
              name="description"
              value={formData.description || ""}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded text-base md:text-lg lg:text-2xl"
            />
          </div>
          <div className="flex  md:flex-row md:items-center md:justify-between md:space-x-2">
            <Button
              style={{
                fontSize: "23px",
                padding: "32px",
              }}
              color="gray"
              onClick={handleClose}
              className="p5 rounded w-full md:w-auto md:text-lg lg:text-xl"
            >
              Trở lại
            </Button>
            <Button
              style={{
                fontSize: "23px",
                padding: "32px",
              }}
              color="blue"
              type="submit"
              className="p5 rounded w-full md:w-auto mt-2 md:mt-0 md:text-lg lg:text-xl"
            >
              Lưu
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default EditProduct;
