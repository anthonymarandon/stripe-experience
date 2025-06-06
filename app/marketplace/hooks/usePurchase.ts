import { useState } from 'react';

export const usePurchase = () => {
  const [loading, setLoading] = useState(false);

  const handlePurchase = async (productId: string) => {
    setLoading(true);
    
    try {
      const response = await fetch('/payment/api/stripe/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId }),
      });
      
      const { url } = await response.json();
      if (url) {
        window.location.href = url;
      }
    } catch (error) {
      setLoading(false);
    }
  };

  return { loading, handlePurchase };
}; 