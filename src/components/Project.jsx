function Project({ title, image, appLink, repoLink }) {
    return (
      <div className="project-card">
        <img src={image} alt={`${title} screenshot`} />
        <h3 style={{ marginTop: '1rem', fontSize: '1.25rem' }}>{title}</h3>
        <p style={{ marginTop: '0.5rem' }}>
          <a href={appLink} target="_blank" rel="noreferrer">https://bikramsinghs-react-portfolio.netlify.app/</a> |{' '}
          <a href={repoLink} target="_blank" rel="noreferrer">https://github.com/BikramSingh1989/Netlify-React-Portfolio</a>
        </p>
      </div>
    );
  }
  
  export default Project;
  