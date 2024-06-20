import React, { useEffect, useState } from "react";
import OrderForm from "./OrderForm";
import AppUtils from "../utils/AppUtils";

function OrderList() {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [orders, setOrders] = useState([]);
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [today, setToday] = useState(true);
  useEffect(() => {
    fetchItems();
    fetchCategories();
  }, []);

  useEffect(() => {
    if (today) fetchOrders();
    else fetchTodayOrders();
  }, [today]);

  const fetchOrders = async () => {
    const response = await AppUtils.fetchOrders();
    setOrders(response);
  };

  const fetchTodayOrders = async () => {
    const response = await AppUtils.fetchToDayOrders();
    setOrders(response);
  };

  const fetchItems = async () => {
    const response = await AppUtils.fetchProducts();
    setItems(response);
  };

  const fetchCategories = async () => {
    const response = await AppUtils.fetchCategories();
    setCategories(response);
  };

  const handleAddOrder = () => {
    setSelectedOrder({}); // Create a new empty order object
  };

  const handleOrderSave = async (order) => {
    try {
      if (order[0].order_id) {
        await AppUtils.handleUpdateOrder(order[0].order_id, order); // Update existing order
      } else {
        await AppUtils.handleAddOrder(order); // Add new order
      }
      await fetchOrders();
      setSelectedOrder(null);
    } catch (error) {
      console.error("Failed to save the order:", error);
    }
  };

  const handleUpdate = async () => {
    await fetchOrders();
    setSelectedOrder(null);
  };

  const onBack = () => {
    setSelectedOrder(null); // Clear selected order
  };

  return (
    items.length > 0 &&
    categories.length > 0 && (
      <div>
        {!selectedOrder ? (
          <>
            <div className="checkbox-container">
              <input
                hidden
                type="checkbox"
                id="todayCheckbox"
                checked={today}
                onChange={() => {
                  setToday(!today);
                  console.log(!today); // Giá trị mới của today sau khi thay đổi
                }}
              />
              <label htmlFor="todayCheckbox" className="checkbox-label">
                {today ? "Tất cả đơn hàng" : "Đơn hàng hôm nay"}
              </label>
            </div>
            <hr
              style={{
                margin: "10px",
              }}
            />
            <button
              onClick={handleAddOrder}
              className="bg-blue-500 text-white py-2 px-4 rounded mb-4"
            >
              Thêm đơn hàng
            </button>
            <ul>
              {orders.map((order) => (
                <li
                  key={order.id}
                  onClick={() => setSelectedOrder(order)}
                  className="bg-black text-white p-2 mb-2 cursor-pointer"
                >
                  <div>Order ID: {order.id}</div>
                  <div>Tổng: {order.total_price}</div>
                  <div>
                    {order.status ? "Đã thanh toán" : "Chưa thanh toán"}
                  </div>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <OrderForm
            update={handleUpdate}
            order={selectedOrder}
            categories={categories}
            items={items}
            onSave={handleOrderSave}
            onCancel={() => setSelectedOrder(null)}
            onBack={onBack}
          />
        )}
      </div>
    )
  );
}

export default OrderList;
