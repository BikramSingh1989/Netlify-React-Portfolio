import Navigation from './Navigation';

function Header({ currentPage, handlePageChange }) {
  return (
    <header className="bg-dark text-light p-4">
      <h1 className="text-3xl font-bold">Bikram Singh</h1>
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
    </header>
  );
}

export default Header;
