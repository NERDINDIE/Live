import React, { useState } from 'react';
import axios from 'axios';

const Payment = () => {
  const [amount, setAmount] = useState('');

  const handlePayment = async () => {
    try {
      const response = await axios.post('https://yourapi.com/create-payment-intent', { amount });
      console.log(response.data);
    } catch (error) {
      console.error('Payment error', error);
    }
  };

  return (
    <div>
      <h2>Payment</h2>
      <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <button onClick={handlePayment}>Pay</button>
    </div>
  );
};

export default Payment;
