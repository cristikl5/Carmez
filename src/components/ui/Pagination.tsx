import { ChevronRight } from "lucide-react";

const Pagination = ({
  currentPage = 1,
  totalPages = 10,
  onPageChange = () => {},
  visiblePages = 3,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  visiblePages: number;
}) => {
  const generatePageNumbers = () => {
    const pages = [];
    const start = Math.max(1, currentPage - Math.floor(visiblePages / 2));
    const end = Math.min(totalPages, start + visiblePages - 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  const pages = generatePageNumbers();

  return (
    <div className="flex items-center gap-2">
      {/* Page Numbers */}
      {pages.map(page => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-10 h-10 rounded-full cursor-pointer flex items-center justify-center font-semibold text-lg transition-all duration-200 ${
            page === currentPage
              ? "bg-primary text-white shadow-md"
              : "bg-white text-gray-700 hover:bg-gray-50 "
          }`}
        >
          {page}
        </button>
      ))}

      {/* Next/Arrow Button */}
      {currentPage < totalPages && (
        <button
          onClick={() => onPageChange(currentPage + 1)}
          className="w-10 h-10 rounded-full bg-white text-gray-700 hover:bg-gray-50 flex items-center justify-center transition-all duration-200"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default Pagination;
