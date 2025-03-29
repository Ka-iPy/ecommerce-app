import { Link } from 'react-router-dom'

const categories = [
  {
    id: 'electronics',
    name: 'Electronics',
    description: 'Latest gadgets and electronic devices',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    productCount: 12,
  },
  {
    id: 'accessories',
    name: 'Accessories',
    description: 'Fashion accessories and personal items',
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    productCount: 8,
  },
  {
    id: 'sports',
    name: 'Sports',
    description: 'Sports equipment and athletic gear',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    productCount: 15,
  },
  {
    id: 'home',
    name: 'Home',
    description: 'Home goods and kitchen appliances',
    image: 'https://images.unsplash.com/photo-1517663154410-3d881b7e1c7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    productCount: 10,
  },
]

export default function Categories() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Shop by Category</h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {categories.map((category) => (
            <div key={category.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link to={`/products?category=${category.id}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {category.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{category.description}</p>
                  <p className="mt-1 text-xs text-gray-400">{category.productCount} products</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 