export default function About() {
  return (
    <div className="bg-white dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">About EShop</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            We are dedicated to providing the best shopping experience for our customers. Our mission is to offer high-quality products at competitive prices while ensuring excellent customer service.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Our Story</h3>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Founded in 2024, EShop has grown from a small online store to a leading e-commerce platform. We believe in making quality products accessible to everyone.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Our Mission</h3>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              To provide an exceptional shopping experience with a wide selection of products, competitive prices, and outstanding customer service.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Our Values</h3>
            <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Customer First</li>
              <li>• Quality Products</li>
              <li>• Fair Pricing</li>
              <li>• Sustainable Practices</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Contact Us</h3>
            <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
              <li>Email: support@eshop.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Address: 123 EShop Street, Digital City</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
} 