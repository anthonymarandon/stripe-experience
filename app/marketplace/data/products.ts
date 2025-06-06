export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  icon: string;
  color: string;
}

export const products: Product[] = [
  {
    id: 'templates-ui',
    name: 'Templates UI',
    description: 'Collection de templates React/Vue modernes',
    price: 15,
    icon: '🎨',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'guide-seo',
    name: 'Guide SEO',
    description: 'Optimisation complète pour les moteurs de recherche',
    price: 25,
    icon: '📈',
    color: 'from-green-500 to-blue-500'
  },
  {
    id: 'pack-icons',
    name: 'Pack d\'Icônes',
    description: '500+ icônes vectorielles premium',
    price: 10,
    icon: '⭐',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    id: 'formation-js',
    name: 'Formation JS',
    description: 'Cours avancé JavaScript ES6+',
    price: 40,
    icon: '💻',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'ebook-design',
    name: 'eBook Design',
    description: 'Principes fondamentaux du design UI/UX',
    price: 30,
    icon: '📚',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    id: 'preset-lightroom',
    name: 'Presets Photo',
    description: 'Pack de presets Lightroom professionnels',
    price: 20,
    icon: '📷',
    color: 'from-pink-500 to-red-500'
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
}; 