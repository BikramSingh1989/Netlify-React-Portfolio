function Footer() {
    return (
      <footer className="bg-dark text-light p-4 text-center">
        <p>© {new Date().getFullYear()} Lernantino</p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="https://github.com/BikramSingh1989" target="_blank">GitHub</a>
          <a href="https://linkedin.com/in/bikram-singh-660b09311" target="_blank">LinkedIn</a>
          <a href="https://home-inventory-app.onrender.com" target="_blank">Project in work</a>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  