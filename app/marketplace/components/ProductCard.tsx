import { Product } from '../data/products';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
  loading: boolean;
  onPurchase: (productId: string) => void;
}

export const ProductCard = ({ product, loading, onPurchase }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden h-80 group">
      <Link href={`/marketplace/${product.id}`}>
        <div className={`h-24 bg-gradient-to-r ${product.color} flex items-center justify-center cursor-pointer group-hover:opacity-90 transition-opacity`}>
          <div className="text-white text-center">
            <div className="text-3xl">{product.icon}</div>
          </div>
        </div>
      </Link>

      <div className="p-4 flex flex-col h-56">
        <div className="flex-1">
          <Link href={`/marketplace/${product.id}`}>
            <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors cursor-pointer">
              {product.name}
            </h3>
          </Link>
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">
            {product.description}
          </p>
        </div>

        <div className="mt-auto">
          <div className="flex justify-between items-center mb-4">
            <div className="text-2xl font-bold text-blue-600">{product.price}€</div>
            <div className="text-xs text-gray-500">numérique</div>
          </div>

          <button
            onClick={() => onPurchase(product.id)}
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-2.5 px-4 rounded-lg transition-colors text-sm"
          >
            {loading ? 'Redirection...' : '🛒 Acheter'}
          </button>
        </div>
      </div>
    </div>
  );
}; 