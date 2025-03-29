import { Link } from 'react-router-dom'

const featuredProducts = [
  {
    id: 1,
    name: 'Premium Wireless Headphones',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    description: 'High-quality wireless headphones with noise cancellation.',
  },
  {
    id: 2,
    name: 'Smart Watch Pro',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    description: 'Advanced smartwatch with health tracking features.',
  },
  {
    id: 3,
    name: 'Ultra HD Camera',
    price: 799.99,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    description: 'Professional-grade camera for stunning photos.',
  },
]

const popularProducts = [
  {
    id: 1,
    name: 'Gaming Laptop Pro',
    price: 1299.99,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1000&auto=format&fit=crop',
    description: 'High-performance gaming laptop with RTX 3080',
    rating: 4.9,
    reviews: 128
  },
  {
    id: 2,
    name: 'Wireless Earbuds Plus',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop',
    description: 'Premium wireless earbuds with noise cancellation',
    rating: 4.8,
    reviews: 256
  },
  {
    id: 3,
    name: 'Smart Home Hub',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1558089687-f282ffcbc126?q=80&w=1000&auto=format&fit=crop',
    description: 'Control your entire home with voice commands',
    rating: 4.7,
    reviews: 89
  },
  {
    id: 4,
    name: 'Ultra HD 4K Monitor',
    price: 399.99,
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=1000&auto=format&fit=crop',
    description: '32-inch 4K display with HDR support',
    rating: 4.8,
    reviews: 167
  },
  {
    id: 5,
    name: 'Mechanical Gaming Keyboard',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=1000&auto=format&fit=crop',
    description: 'RGB mechanical keyboard with custom switches',
    rating: 4.6,
    reviews: 203
  }
]

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-800">
      <div className="relative overflow-hidden py-16">
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Most Popular Products</h2>
          <Link to="/products" className="text-sm font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">
            View all products <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="relative mt-6">
          <div className="flex animate-scroll space-x-4">
            {popularProducts.map((product) => (
              <div key={product.id} className="group relative w-[300px] flex-shrink-0 overflow-hidden rounded-lg">
                <div className="h-[200px] w-full overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 translate-y-full transform bg-white/95 dark:bg-gray-800/95 p-6 transition-transform duration-300 ease-in-out group-hover:translate-y-0">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    <Link to={`/products/${product.id}`} className="hover:text-indigo-600 dark:hover:text-indigo-400">
                      {product.name}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{product.description}</p>
                  <div className="mt-2 flex items-center">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400'
                              : 'text-gray-300 dark:text-gray-600'
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="ml-2 text-sm text-gray-500 dark:text-gray-400">({product.reviews} reviews)</p>
                  </div>
                  <p className="mt-2 text-lg font-medium text-gray-900 dark:text-white">${product.price}</p>
                </div>
              </div>
            ))}
            {popularProducts.map((product) => (
              <div key={`${product.id}-duplicate`} className="group relative w-[300px] flex-shrink-0 overflow-hidden rounded-lg">
                <div className="h-[200px] w-full overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 translate-y-full transform bg-white/95 dark:bg-gray-800/95 p-6 transition-transform duration-300 ease-in-out group-hover:translate-y-0">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    <Link to={`/products/${product.id}`} className="hover:text-indigo-600 dark:hover:text-indigo-400">
                      {product.name}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{product.description}</p>
                  <div className="mt-2 flex items-center">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400'
                              : 'text-gray-300 dark:text-gray-600'
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="ml-2 text-sm text-gray-500 dark:text-gray-400">({product.reviews} reviews)</p>
                  </div>
                  <p className="mt-2 text-lg font-medium text-gray-900 dark:text-white">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative isolate px-6 pt-4 lg:px-8">
        <div className="mx-auto max-w-2xl py-8 sm:py-12 lg:py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              Welcome to EShop
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Discover our curated collection of premium products at unbeatable prices.
              Shop the latest trends with confidence.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/products"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Shop Now
              </Link>
              <Link to="/about" className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Featured Products</h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="group relative overflow-hidden rounded-lg">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 translate-y-full transform bg-white/95 dark:bg-gray-800/95 p-6 transition-transform duration-300 ease-in-out group-hover:translate-y-0">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  <Link to={`/products/${product.id}`} className="hover:text-indigo-600 dark:hover:text-indigo-400">
                    {product.name}
                  </Link>
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{product.description}</p>
                <p className="mt-2 text-lg font-medium text-gray-900 dark:text-white">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 