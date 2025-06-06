'use client';

import { ProductCard } from './components/ProductCard';
import { usePurchase } from './hooks/usePurchase';
import { products } from './data/products';

export default function Marketplace() {
  const { loading, handlePurchase } = usePurchase();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🛍️ Marketplace Numérique
          </h1>
          <p className="text-xl text-gray-600">
            Découvrez nos produits numériques premium
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              loading={loading}
              onPurchase={handlePurchase}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 