import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Bienvenue
        </h1>
        <Link 
          href="/marketplace"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
        >
          Voir le Marketplace
        </Link>
      </div>
    </div>
  );
}
