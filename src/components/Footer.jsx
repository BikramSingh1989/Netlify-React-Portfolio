function Footer() {
    return (
      <footer className="bg-dark text-light p-4 text-center">
        <p>© {new Date().getFullYear()} Lernantino</p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="https://github.com/yourusername" target="_blank">GitHub</a>
          <a href="https://linkedin.com/in/yourusername" target="_blank">LinkedIn</a>
          <a href="https://stackoverflow.com/users/yourid" target="_blank">Stack Overflow</a>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  