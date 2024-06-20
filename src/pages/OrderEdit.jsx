import { de } from "date-fns/locale/de";
import React, { useState, useEffect, useMemo } from "react";

function OrderEdit({ lsCategories, lsItems, orderDetails, onCancel, onSave }) {
  const [categories, setCategories] = useState(lsCategories);
  const [items, setItems] = useState(lsItems);
  const [details, setDetails] = useState(orderDetails);
  const [category, setCategory] = useState(
    categories.find((value) => value.name == "Coffee").id
  );

  useEffect(() => {}, []);

  const handleAdd = (item) => {
    const index = details.findIndex((value) => value.item_id === item.id);

    if (index !== -1) {
      //Quanlity + 1
      const updatedDetails = [...details];
      updatedDetails[index] = {
        ...updatedDetails[index],
        quantity: updatedDetails[index].quantity + 1,
      };
      setDetails(updatedDetails);
    } else {
      // Item doesn't exist in details, add it

      const updatedDetails = [
        ...details,
        {
          order_id: item.order_id,
          item_id: item.id,
          quantity: 1, // Set initial quantity to 1
          price: item.price,
        },
      ];
      console.log(updatedDetails);
      setDetails(updatedDetails);
    }
  };

  const handleDrop = (item) => {
    const index = details.findIndex((value) => value.item_id === item.id);

    let updatedDetails = [...details];
    if (index !== -1) {
      if (updatedDetails[index].quantity == 1) {
        updatedDetails = updatedDetails.filter((value, idx) => idx !== index);
      } else {
        updatedDetails[index] = {
          ...updatedDetails[index],
          quantity: Math.max(updatedDetails[index].quantity - 1, 0),
        };
      }
    }
    setDetails(updatedDetails);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedDetails = details.map((value) => ({
      ...value,
      name: items.find((v) => v.id === value.item_id).name,
    }));
    onSave(updatedDetails);
  };

  return (
    <div>
      {items.length > 0 ? (
        <ul>
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

          {items
            .filter((value) => value.category_id == category)
            .map((item) => {
              const detail = details.find((value) => value.item_id == item.id);
              return (
                <li
                  key={item.id}
                  className="flex"
                  style={{
                    justifyContent: "space-around",
                  }}
                >
                  <span style={{ width: "200px" }}>{item.name}</span>
                  <button
                    onClick={() => {
                      handleDrop(item);
                    }}
                    className="bg-gray-300 p-1 rounded ml-2"
                  >
                    -
                  </button>
                  {detail ? detail.quantity : "0"}
                  <button
                    onClick={() => {
                      handleAdd(item);
                    }}
                    className="bg-gray-300 p-1 rounded ml-2"
                  >
                    +
                  </button>
                </li>
              );
            })}
        </ul>
      ) : (
        <p>No items available</p>
      )}

      <h2 className="text-xl font-bold mb-2">Edit Detail</h2>
      <form onSubmit={handleSubmit}>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded mr-2"
        >
          Save
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-500 text-white p-2 rounded"
        >
          Cancel
        </button>
      </form>
    </div>
  );
}

export default OrderEdit;
