import React, { useState } from "react";
import ProductCard from "./ProductCard";
import ProductsData from "../../assets/freshStockMarketData";

export default function Products() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Calculate pagination variables
  const totalPages = Math.ceil(ProductsData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = ProductsData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Optional: smooth scroll to top of section when page changes
    window.scrollTo({ top: document.getElementById('products-section')?.offsetTop - 80, behavior: 'smooth' });
  };

  return (
    <section id="products-section" className="py-16 bg-gray-50/50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-sm font-bold tracking-widest text-emerald-600 uppercase mb-2">
            Our Offerings
          </h2>
          <h3 className="text-4xl md:text-5xl text-center font-extrabold text-gray-900 tracking-tight">
            Livestock Market
          </h3>
          <div className="w-24 h-1 bg-emerald-500 mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          {currentItems.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Stylistic Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-3 mt-8">
            <button
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className={`p-2 rounded-full flex items-center justify-center transition-all duration-300 ${
                currentPage === 1
                  ? "text-gray-400 bg-gray-100 cursor-not-allowed"
                  : "text-emerald-600 bg-emerald-50 hover:bg-emerald-100 hover:shadow-md"
              }`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-10 h-10 rounded-full font-bold text-sm transition-all duration-300 flex items-center justify-center ${
                      currentPage === page
                        ? "bg-emerald-600 text-white shadow-lg shadow-emerald-200 transform scale-110"
                        : "bg-white text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 border border-gray-200"
                    }`}
                  >
                    {page}
                  </button>
                )
              )}
            </div>

            <button
              onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className={`p-2 rounded-full flex items-center justify-center transition-all duration-300 ${
                currentPage === totalPages
                  ? "text-gray-400 bg-gray-100 cursor-not-allowed"
                  : "text-emerald-600 bg-emerald-50 hover:bg-emerald-100 hover:shadow-md"
              }`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
