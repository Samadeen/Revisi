import Button from '../button/Button';
import styles from './Hero.module.scss';
import { motion as m } from 'framer-motion';

const Hero = () => {
  return (
    <section className={styles.hero_container}>
      <div className={styles.hero_details}>
        <m.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: 'anticipate' }}
        >
          EXPLORE THE IMPOSSIBLE.
        </m.h1>
        <div className={styles.para}>
          <m.p
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.5, ease: 'anticipate' }}
          >
            Founders turn to us when failure is not an option. Our reputation is
            built on our design prowess and rapid execution abilities. Yet, more
            often than not, it's the recommendations of those they trust that
            lead them to us. Founders turn to us when failure is not an option.
            Our reputation is built on our design prowess and rapid.
          </m.p>
          <Button text='BOOK CONSULTATION' color='wine' />
        </div>
      </div>
      <m.div className={styles.image}></m.div>
    </section>
  );
};

export default Hero;
