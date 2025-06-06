'use client';

import { useParams, useRouter } from 'next/navigation';
import { getProductById } from '../data/products';
import { usePurchase } from '../hooks/usePurchase';
import Link from 'next/link';

export default function ProductPage() {
  const params = useParams();
  const router = useRouter();
  const { loading, handlePurchase } = usePurchase();
  
  const productId = params.productId as string;
  const product = getProductById(productId);

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Produit introuvable</h1>
          <Link
            href="/marketplace"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            Retour au Marketplace
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link
            href="/marketplace"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            ← Retour au Marketplace
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className={`h-48 bg-gradient-to-r ${product.color} flex items-center justify-center`}>
            <div className="text-white text-center">
              <div className="text-8xl mb-4">{product.icon}</div>
              <h1 className="text-4xl font-bold">{product.name}</h1>
            </div>
          </div>

          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Description
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  {product.description}
                </p>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Caractéristiques</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-3">✓</span>
                      Téléchargement immédiat
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-3">✓</span>
                      Accès à vie
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-3">✓</span>
                      Support inclus
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-3">✓</span>
                      Mises à jour gratuites
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-center">
                  <div className="text-5xl font-bold text-blue-600 mb-2">
                    {product.price}€
                  </div>
                  <div className="text-gray-500 mb-6">Produit numérique</div>
                  
                  <button
                    onClick={() => handlePurchase(product.id)}
                    disabled={loading}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-4 px-6 rounded-xl transition-colors text-lg shadow-lg mb-4"
                  >
                    {loading ? 'Redirection...' : `🛒 Acheter maintenant - ${product.price}€`}
                  </button>

                  <div className="flex items-center justify-center text-sm text-gray-500">
                    <span className="mr-2">🔒</span>
                    Paiement sécurisé par Stripe
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 