import React from 'react'

const Pagination = ({page, totalPages, total, setPage}) => {
  const setPageNumber = (e) => {
    setPage(e.target.innerHTML)
  }
  const renderPageNumbers = () => {
    let links = [];
    for(var i = 1; i <= totalPages; i++){
      links.push(<button type="button" aria-current="page" className={`${page == i ? 'bg-indigo-50 text-indigo-600 ' : ''} border-gray-300 inline-flex items-center px-4 py-2 border text-sm font-medium`} key={i} onClick={setPageNumber} > {i} </button>)
    }
    return links;
  }
  return (
    
<div className="bg-white px-4 py-3 flex items-center justify-between sm:px-6">
  <div className="flex-1 flex justify-between sm:hidden">
    <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"> Previous </a>
    <a href="#" className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"> Next </a>
  </div>
  <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
    <div>
      <p className="text-sm text-gray-700">
        <span className="font-medium">{total}{' '}</span>
         results
      </p>
    </div>
    <div>
      <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
        <button type="button" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50" onClick={() => setPage(page - 1)} disabled={page == 1}>
          <span className="sr-only">Previous</span>
          
          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
        </button>
        {renderPageNumbers()}
        <button type="button" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50" onClick={() => setPage(page + 1)} disabled={totalPages == page}>
          <span className="sr-only">Next</span>
          
          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>
        </button>
      </nav>
    </div>
  </div>
</div>

  )
}

export default Pagination