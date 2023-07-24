export function PageNav() {
    const currentPage = 1;
    const totalPages = 6;

    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(i);
        }
        return pageNumbers;
    };

    return(
        <div className="flex justify-center mt-2">
            {/* Pagination component */}
            {/* Previous page button */}
            <button className="px-2 py-1 rounded-md text-gray mr-2">
              &lt;&lt;
            </button>
            <button className="px-2 py-1 rounded-md text-gray mr-2">
              &lt;
            </button>

            {/* Page numbers */}
            {renderPageNumbers().map((pageNumber) => (
              <div
                key={pageNumber}
                className={`${pageNumber === currentPage
                  ? 'px-2 py-1 bg-blue-500 text-gray'
                  : 'px-2 py-1'
                  } mx-1`}
              >
                {pageNumber}
              </div>
            ))}

            {/* Ellipsis */}
            <div className="mx-1">...</div>

            {/* Last page number */}
            <div className="px-2 py-1 mx-1">{totalPages}</div>

            {/* Next page button */}
            <button className="px-2 py-1 rounded-md text-gray ml-2">
              &gt;
            </button>
            <button className="px-2 py-1 rounded-md text-gray ml-2">
              &gt;&gt;
            </button>
          </div>
    );
}