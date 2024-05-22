import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../AuthContext';

const Home = () => {
  const [products, setProducts] = useState([]);
  const { user, logout } = useAuth();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Failed to fetch products', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Home</h2>
      <button onClick={logout} className="mb-4 py-2 px-4 bg-red-600 text-white rounded-md shadow-sm hover:bg-red-700">
        Logout
      </button>
      <div>
        {products.length > 0 ? (
          <ul>
            {products.map((product) => (
              <li key={product.id} className="mb-2 p-2 border rounded-md">
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p>{product.description}</p>
                <p className="text-gray-500">${product.price}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
};

export default Home;
