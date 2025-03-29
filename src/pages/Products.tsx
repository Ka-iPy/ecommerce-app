import { Link } from 'react-router-dom'

const products = [
  {
    id: 1,
    name: 'Premium Wireless Headphones',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    description: 'High-quality wireless headphones with noise cancellation.',
    category: 'Electronics',
  },
  {
    id: 2,
    name: 'Smart Watch Pro',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    description: 'Advanced smartwatch with health tracking features.',
    category: 'Electronics',
  },
  {
    id: 3,
    name: 'Ultra HD Camera',
    price: 799.99,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    description: 'Professional-grade camera for stunning photos.',
    category: 'Electronics',
  },
  {
    id: 4,
    name: 'Classic Leather Wallet',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    description: 'Handcrafted leather wallet with multiple card slots.',
    category: 'Accessories',
  },
  {
    id: 5,
    name: 'Running Shoes',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    description: 'Comfortable running shoes with superior cushioning.',
    category: 'Sports',
  },
  {
    id: 6,
    name: 'Coffee Maker',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1517663154410-3d881b7e1c7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    description: 'Programmable coffee maker with thermal carafe.',
    category: 'Home',
  },
]

const categories = ['All', 'Electronics', 'Accessories', 'Sports', 'Home']

export default function Products() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">All Products</h2>
        
        {/* Categories */}
        <div className="mt-6 flex space-x-4">
          {categories.map((category) => (
            <button
              key={category}
              className="rounded-md bg-gray-100 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link to={`/products/${product.id}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                  <p className="mt-1 text-xs text-gray-400">{product.category}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 