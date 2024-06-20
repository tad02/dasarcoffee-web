import React, { useEffect, useState } from "react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";

function EditCategory({ item, onSave, handleClose }) {
  const [formData, setFormData] = useState(item);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(formData);
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <Card
        color="white"
        shadow={true}
        className="p-6 rounded-lg shadow-lg w-full h-full max-w-md mx-4 md:mx-0"
      >
        <Typography
          color="blue-gray"
          className="mb-4 text-2xl md:text-3xl lg:text-4xl"
        >
          Chỉnh sửa loại
        </Typography>
        <form
          style={{
            justifyContent: "space-evenly",
          }}
          onSubmit={handleSubmit}
          className=" flex flex-col justify-evenly space-y-4 p-5 h-full"
        >
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
          <div>
            <Typography
              color="blue-gray"
              className="mb-1 text-lg md:text-xl lg:text-2xl"
            >
              Image
            </Typography>
            <Input
              style={{
                fontSize: "20px",
                padding: "20px",
              }}
              type="text"
              name="image"
              value={formData.image || ""}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded text-base md:text-lg lg:text-2xl"
            />
          </div>
          <img
            style={{
              margin: "50px",
              width: "50px",
            }}
            src={formData.image}
            alt="Category"
          />
          <div
            style={{
              justifyContent: "space-around",
            }}
            className="flex flex-row justify-around space-x-2 mt-4"
          >
            <Button
              color="gray"
              onClick={handleClose}
              className="py-2 px-4 rounded text-9xl md:text-lg lg:text-xl"
            >
              Trở lại
            </Button>
            <Button
              color="blue"
              type="submit"
              className="py-2 px-4 rounded text-9xl md:text-lg lg:text-xl"
            >
              Lưu
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default EditCategory;
