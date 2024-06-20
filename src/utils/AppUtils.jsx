import axios from "axios";

const AppUtils = () => {
  const localLink = "http://localhost:3000"; // Ensure this matches your backend server URL
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTcsInJvbGUiOiJtYW5hZ2VyIiwiaWF0IjoxNzE4MTI1ODA2fQ.wm2vniquswlju7eHBtBSk6PNLjtbguRVV5P0n7jbGRk";

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${localLink}/api/items`);
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${localLink}/api/categories`);
      return response.data;
    } catch (error) {
      console.error("Error fetching categories:", error);
      return [];
    }
  };

  const handleAddProduct = async (product) => {
    const response = await axios.post(`${localLink}/api/items`, product, {
      headers: {
        Authorization: `${token}`,
      },
    });
    return response.data;
  };

  const handleUpdateProduct = async (updatedProduct) => {
    const response = await axios.put(
      `${localLink}/api/items/${updatedProduct.id}`,
      updatedProduct,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    return response.data;
  };

  const handleDeleteProduct = async (id) => {
    const response = await axios.delete(`${localLink}/api/items/${id}`, {
      headers: {
        Authorization: `${token}`,
      },
    });
    return response.data;
  };

  const handleAddCategory = async (category) => {
    const response = await axios.post(`${localLink}/api/categories`, category, {
      headers: {
        Authorization: `${token}`,
      },
    });
    return response.data;
  };

  const handleUpdateCategory = async (updatedCategory) => {
    const response = await axios.put(
      `${localLink}/api/categories/${updatedCategory.id}`,
      updatedCategory,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    return response.data;
  };

  const handleDeleteCategory = async (id) => {
    const response = await axios.delete(`${localLink}/api/categories/${id}`, {
      headers: {
        Authorization: `${token}`,
      },
    });
    return response.data;
  };

  const fetchOrders = async () => {
    const response = await axios.get(`${localLink}/api/orders`, {
      headers: {
        Authorization: `${token}`,
      },
    });
    return response.data;
  };

  const fetchToDayOrders = async () => {
    const response = await axios.get(`${localLink}/api/todayorders`, {
      headers: {
        Authorization: `${token}`,
      },
    });
    return response.data;
  };

  const fetchOrderDetail = async (orderId) => {
    try {
      const response = await axios.get(
        `${localLink}/api/orderdetails/${orderId}`,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching order detail:", error);
      throw error; // Re-throw the error after logging it
    }
  };

  const handleAddOrder = async (order) => {
    const response = await axios.post(
      `${localLink}/api/orders`,
      {
        newOrder: order,
      },
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    return response.data;
  };

  const handleUpdateOrder = async (id, updatedOrder) => {
    const response = await axios.put(
      `${localLink}/api/orderdetails/${id}`,
      { newOrderDetails: updatedOrder },
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    return response.data;
  };

  const handleDeleteOrder = async (id) => {
    const response = await axios.delete(`${localLink}/api/orders/${id}`, {
      headers: {
        Authorization: `${token}`,
      },
    });
    return response.data;
  };

  return {
    fetchProducts,
    fetchCategories,
    handleAddProduct,
    handleUpdateProduct,
    handleDeleteProduct,
    handleAddCategory,
    handleUpdateCategory,
    handleDeleteCategory,
    fetchOrders,
    fetchToDayOrders,
    fetchOrderDetail,
    handleAddOrder,
    handleUpdateOrder,
    handleDeleteOrder,
  };
};

export default AppUtils();
