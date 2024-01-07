import Button from '../button/Button';
import styles from './Hero.module.scss';
import { motion as m } from 'framer-motion';

const Hero = () => {
  return (
    <section className={styles.hero_container}>
      <div className={styles.hero_details}>
        <h1>EXPLORE THE IMPOSSIBLE.</h1>
        <div className={styles.para}>
          <p>
            Founders turn to us when failure is not an option. Our reputation is
            built on our design prowess and rapid execution abilities. Yet, more
            often than not, it's the recommendations of those they trust that
            lead them to us. Founders turn to us when failure is not an option.
            Our reputation is built on our design prowess and rapid.
          </p>
          <Button text='BOOK CONSULTATION' color='wine' />
        </div>
      </div>
      <m.div className={styles.image}></m.div>
    </section>
  );
};

export default Hero;
