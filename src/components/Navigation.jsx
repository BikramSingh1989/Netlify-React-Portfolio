function Navigation({ currentPage, handlePageChange }) {
    const pages = ['About', 'Portfolio', 'Contact', 'Resume'];
  
    return (
      <nav>
        <ul className="flex gap-6">
          {pages.map((page) => (
            <li
              key={page}
              onClick={() => handlePageChange(page)}
              className={`cursor-pointer ${currentPage === page ? 'active' : ''}`}
            >
              {page}
            </li>
          ))}
        </ul>
      </nav>
    );
  }
  
  export default Navigation;
  