import Button from '../button/Button';
import styles from './Possible.module.scss';
import bed from '../../assets/possible.svg';
import { motion as m } from 'framer-motion';

const Possible = () => {
  return (
    <m.section
      initial={{ y: 200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 2, type: 'spring' }}
      className={styles.possible_container}
    >
      <m.div className={styles.possible_text}>
        <h2>WE MAKE EVERYTHING POSSIBLE.</h2>
        <p>
          We are proud of our expertise. Everything design and its complexities
          are a drive for us to provide better services and top notch designs.
        </p>
        <Button color='wine' text='Learn More' />
      </m.div>
      <m.img src={bed} alt='bed in view' />
    </m.section>
  );
};

export default Possible;
