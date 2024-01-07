import Button from '../button/Button';
import styles from './Possible.module.scss';
import bed from '../../assets/possible.svg';

const Possible = () => {
  return (
    <section className={styles.possible_container}>
      <div className={styles.possible_text}>
        <h2>WE MAKE EVERYTHING POSSIBLE.</h2>
        <p>
          We are proud of our expertise. Everything design and its complexities
          are a drive for us to provide better services and top notch designs.
        </p>
        <Button color='wine' text='Learn More' />
      </div>
      <img src={bed} alt='bed in view' />
    </section>
  );
};

export default Possible;
