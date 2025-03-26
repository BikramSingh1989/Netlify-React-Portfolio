import Project from '../components/Project';

const projects = [
  {
    title: 'React Portfolio',
    image: '/assets/React Portfolio.png',
    appLink: 'https://bikramsinghs-react-portfolio.netlify.app/',
    repoLink: 'https://github.com/BikramSingh1989/Netlify-React-Portfolio',
  },
  ];

function Portfolio() {
  return (
    <section>
      <h2>Portfolio</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((proj) => (
          <Project key={proj.title} {...proj} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
