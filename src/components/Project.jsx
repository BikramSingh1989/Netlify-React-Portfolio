function Project({ title, image, appLink, repoLink }) {
    return (
      <div className="border p-2">
        <img src={image} alt={title} className="w-full" />
        <h3>{title}</h3>
        <a href={appLink} target="_blank" rel="noopener noreferrer">Live App</a> |{' '}
        <a href={repoLink} target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    );
  }
  
  export default Project;
  