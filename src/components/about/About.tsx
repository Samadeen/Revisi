import styles from './About.module.scss';
import arrow from '../../assets/arrow-tilt.svg';

const About = () => {
  return (
    <section className={styles.about_container}>
      <div className={styles.image}></div>
      <div className={styles.about_details}>
        <p>
          Founders turn to us when failure is not an option. Our reputation is
          built on our design prowess and rapid execution abilities. Yet, more
          often than not, it's the recommendations of those they trust that lead
          them to us. Founders turn to us when failure is not an option. Our
          reputation is built on our design prowess and rapid execution
          abilities.
        </p>
        <h3>
          About Us <img src={arrow} alt='arrow tilt' />
        </h3>
      </div>
    </section>
  );
};

export default About;
