import React, { useEffect, useState } from "react";
import OrderEdit from "./OrderEdit";
import AppUtils from "../utils/AppUtils";

function OrderForm({ update, order, categories, items, onBack, onSave }) {
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      setLoading(true);
      try {
        const fetchedDetails = await AppUtils.fetchOrderDetail(order.id);
        console.log(fetchedDetails);
        setDetails(fetchedDetails);
      } catch (error) {
        console.error("Error fetching order details:", error);
      } finally {
        setLoading(false);
      }
    };
    if (order.id) {
      fetchOrderDetails();
    } else {
      setDetails([]);
      setLoading(false);
    }
  }, []);

  const handleDelete = async () => {
    if (order.id) {
      await AppUtils.handleDeleteOrder(order.id);
      setEditing(false);
      await update();
    } else {
      alert("Chưa tạo sao xóa?");
    }
  };

  const handleEditDetail = (detail) => {
    setDetails(detail);
    setEditing(true);
  };

  const handleDetailUpdate = (updatedDetail) => {
    setDetails(updatedDetail);
    setEditing(false);
  };

  const onProcess = () => {
    if (details.length > 0) onSave(details);
    else {
      alert("Hóa đơn rỗng?");
    }
  };

  return (
    <div>
      {!editing && details ? (
        <>
          <button
            onClick={onBack}
            className="bg-gray-500 text-white p-2 rounded"
          >
            Back
          </button>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
              <ul>
                {details.map((detail) => (
                  <li key={detail.id}>
                    <div>Món: {detail.name}</div>
                    <div>Số lượng: {detail.quantity}</div>
                    <div>Giá: {detail.price}</div>
                    <hr style={{ width: "100%" }} />
                  </li>
                ))}
              </ul>
              <div>
                Total:{" "}
                {details.reduce(
                  (total, value) =>
                    total + parseFloat(value.price) * value.quantity,
                  0
                )}
              </div>
            </>
          )}
          <div className="flex flex-col gap-3">
            <button
              onClick={() => handleEditDetail(details)}
              className="bg-blue-500 text-white p-2 rounded"
            >
              Edit
            </button>
            <button
              onClick={onProcess}
              className="bg-blue-500 text-white p-2 rounded"
            >
              Update Order
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white p-2 rounded"
            >
              Delete Order
            </button>
          </div>
        </>
      ) : (
        <OrderEdit
          orderDetails={details}
          lsItems={items}
          lsCategories={categories}
          onCancel={() => setEditing(null)}
          onSave={handleDetailUpdate}
        />
      )}
    </div>
  );
}

export default OrderForm;
