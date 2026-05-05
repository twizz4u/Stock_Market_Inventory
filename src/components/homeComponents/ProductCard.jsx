export default function ProductCard({
  id,
  name,
  category,
  price,
  weight,
  rating,
  image,
}) {
  const getImageUrl = (cat) => {
    switch (cat?.toLowerCase()) {
      case "poultry":
        return "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=500&q=80";
      case "beef":
        return "https://images.unsplash.com/photo-1603048297172-c92544798d5e?w=500&q=80";
      case "red meat":
        return "https://images.unsplash.com/photo-1602812429406-810a90aa185e?w=500&q=80";
      case "pork":
        return "https://images.unsplash.com/photo-1602491453631-e2a56cb1d0f7?w=500&q=80";
      case "seafood":
        return "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=500&q=80";
      default:
        return "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=500&q=80";
    }
  };

  const imageUrl = image === "placeholder" ? getImageUrl(category) : image;

  return (
    <div className="group flex flex-col bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative h-56 w-full overflow-hidden bg-gray-100">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
          <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">
            {category}
          </span>
        </div>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg shadow-sm flex items-center gap-1">
          <svg
            className="w-4 h-4 text-yellow-400 fill-current"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="text-sm font-bold text-gray-700">{rating}</span>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h4 className="text-lg font-bold text-gray-900 line-clamp-1">
            {name}
          </h4>
        </div>

        <div className="flex items-center text-gray-500 text-sm mb-4">
          <svg
            className="w-4 h-4 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
            />
          </svg>
          <span>{weight}</span>
        </div>

        <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex flex-col">
            <span className="text-xs text-gray-500 uppercase tracking-wider mb-1">
              Price
            </span>
            <span className="text-xl font-extrabold text-gray-900">
              ₦{price.toLocaleString()}
            </span>
          </div>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white p-3 rounded-xl shadow-md shadow-emerald-200 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
