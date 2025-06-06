import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { getProductById } from '../../marketplace/data/products';

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const productId = searchParams.get('product_id');
  
  const product = productId ? getProductById(productId) : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            🎉 Paiement Réussi !
          </h1>
          
          <p className="text-lg text-gray-600 mb-6">
            Merci pour votre achat ! Votre paiement a été traité avec succès.
          </p>

          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-gray-900 mb-3">Détails de votre commande</h3>
            <div className="space-y-2 text-sm text-gray-600">
              {product ? (
                <>
                  <p><strong>Produit :</strong> {product.icon} {product.name}</p>
                  <p><strong>Description :</strong> {product.description}</p>
                  <p><strong>Montant :</strong> {product.price}€</p>
                </>
              ) : (
                <p><strong>Produit :</strong> Produit numérique</p>
              )}
              {sessionId && <p><strong>ID de session :</strong> {sessionId}</p>}
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <Link
              href="/marketplace"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              Retour au Marketplace
            </Link>
            <Link
              href="/"
              className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              Accueil
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 