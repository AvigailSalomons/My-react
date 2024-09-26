import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Customers = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/customer');
        setCustomers(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Customer List</h1>
      <ul>
        {customers.map(customer => (
          <li key={customer._id}>
            {customer.id} - {customer.email} - {customer.phone}-{"jhgfdsaz"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Customers;
