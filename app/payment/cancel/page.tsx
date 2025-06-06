import Link from 'next/link';

export default function CancelPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 p-8 flex items-center justify-center">
      <div className="max-w-lg w-full">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          {/* Icône d'annulation */}
          <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </div>

          {/* Message d'annulation */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Paiement Annulé
          </h1>
          
          <p className="text-lg text-gray-600 mb-8">
            Votre paiement a été annulé. Aucun montant n'a été débité.
          </p>

          {/* Bouton retour */}
          <Link
            href="/marketplace"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            Retour au Marketplace
          </Link>
        </div>
      </div>
    </div>
  );
} 