import Project from '../components/Project';

const projects = [
  {
    title: 'Cool Project 1',
    image: '/assets/project1.png',
    appLink: 'https://example.com/project1',
    repoLink: 'https://github.com/yourusername/project1',
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
