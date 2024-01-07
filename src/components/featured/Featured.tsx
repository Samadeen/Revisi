import styles from './Featured.module.scss';
import arrow_down from '../../assets/arrow-down.svg';
import Project from '../project/Project';
import benna from '../../assets/benna.svg';
import santa from '../../assets/santa.svg';
import bay from '../../assets/bay.svg';

const projectData = [
  {
    title: 'Benna Notte',
    url: benna,
    note1: `Founders turn to us when failure is not an option. Our reputation is built on our design prowess and rapid execution abilities.
     Yet, more often than not, it's the recommendations of those they trust that lead them to us. Founders turn to us when failure is not an option. Our reputation is built on our design prowess and rapid execution abilities.
    Yet, more often than not, it's the recommendations of those they trust that lead them to us.Founders turn to us when failure is not an option. Our reputation is built on our design prowess and rapid execution abilities.`,
    note2: `Founders turn to us when failure is not an option. Our reputation is built on our design prowess and rapid execution abilities.
     Yet, more often than not, it's the recommendations of those they trust that lead them to us. Founders turn to us when failure is not an option. Our reputation is built on our design prowess and rapid execution abilities.
    Yet, more often than not, it's the recommendations of those they trust that lead them to us.Founders turn to us when failure is not an option. Our reputation is built on our design prowess and rapid execution abilities.`,
  },
  {
    title: 'Santa Fena',
    url: santa,
    note1: `Founders turn to us when failure is not an option. Our reputation is built on our design prowess and rapid execution abilities.
     Yet, more often than not, it's the recommendations of those they trust that lead them to us. Founders turn to us when failure is not an option. Our reputation is built on our design prowess and rapid execution abilities.
    Yet, more often than not, it's the recommendations of those they trust that lead them to us.Founders turn to us when failure is not an option. Our reputation is built on our design prowess and rapid execution abilities.`,
    note2: `Founders turn to us when failure is not an option. Our reputation is built on our design prowess and rapid execution abilities.
     Yet, more often than not, it's the recommendations of those they trust that lead them to us. Founders turn to us when failure is not an option. Our reputation is built on our design prowess and rapid execution abilities.
    Yet, more often than not, it's the recommendations of those they trust that lead them to us.Founders turn to us when failure is not an option. Our reputation is built on our design prowess and rapid execution abilities.`,
  },
  {
    title: 'Bay Area',
    url: bay,
    note1: `Founders turn to us when failure is not an option. Our reputation is built on our design prowess and rapid execution abilities.
     Yet, more often than not, it's the recommendations of those they trust that lead them to us. Founders turn to us when failure is not an option. Our reputation is built on our design prowess and rapid execution abilities.
    Yet, more often than not, it's the recommendations of those they trust that lead them to us.Founders turn to us when failure is not an option. Our reputation is built on our design prowess and rapid execution abilities.`,
    note2: `Founders turn to us when failure is not an option. Our reputation is built on our design prowess and rapid execution abilities.
     Yet, more often than not, it's the recommendations of those they trust that lead them to us. Founders turn to us when failure is not an option. Our reputation is built on our design prowess and rapid execution abilities.
    Yet, more often than not, it's the recommendations of those they trust that lead them to us.Founders turn to us when failure is not an option. Our reputation is built on our design prowess and rapid execution abilities.`,
  },
];

const Featured = () => {
  return (
    <section className={styles.featured_container}>
      <div className={styles.featured}>
        <p>OVER 100 PROJECTS COMPLETED</p>
        <h2>FEATURED PROJECTS.</h2>
        <img src={arrow_down} alt='arrow down' />
      </div>
      <div className={styles.project_list}>
        {projectData.map((project, idx) => (
          <Project
            note1={project.note1}
            note2={project.note2}
            title={project.title}
            url={project.url}
            key={idx}
          />
        ))}
      </div>
    </section>
  );
};

export default Featured;
