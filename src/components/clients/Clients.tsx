import Button from '../button/Button';
import styles from './Clients.module.scss';
import tiktok from '../../assets/TikTok.svg';
import pinterest from '../../assets/Pinterest.svg';
import barclays from '../../assets/Barclays.svg';
import volvo from '../../assets/Volvo.svg';
import hsbc from '../../assets/Hsbc.svg';
import samsung from '../../assets/Samsung.svg';
import porsche from '../../assets/Porsche.svg';
import airbnb from '../../assets/Airbnb.svg';
import { motion as m } from 'framer-motion';

const Clients = () => {
  return (
    <section className={styles.client_container}>
      <m.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: 'anticipate' }}
        className={styles.client}
      >
        <h2>We’ve worked with exceptional clients.</h2>
        <Button color='wine' text='Check our client list' />
      </m.div>
      <div className={styles.client_list}>
        <m.img
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.3,
            type: 'spring',
            ease: 'anticipate',
          }}
          src={tiktok}
          alt='tiktok logo'
        />
        <m.img
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.4,
            type: 'spring',
            ease: 'anticipate',
          }}
          src={tiktok}
          alt='kayak logo'
        />
        <m.img
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.5,
            type: 'spring',
            ease: 'anticipate',
          }}
          src={pinterest}
          alt='pinterest logo'
        />
        <m.img
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.6,
            type: 'spring',
            ease: 'anticipate',
          }}
          src={barclays}
          alt='barclays logo'
        />
        <m.img
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.7,
            type: 'spring',
            ease: 'anticipate',
          }}
          src={volvo}
          alt='volvo logo'
        />
        <m.img
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.8,
            type: 'spring',
            ease: 'anticipate',
          }}
          src={hsbc}
          alt='hsbc logo'
        />
        <m.img
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.9,
            type: 'spring',
            ease: 'anticipate',
          }}
          src={samsung}
          alt='samsung logo'
        />
        <m.img
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
            delay: 1,
            type: 'spring',
            ease: 'anticipate',
          }}
          src={porsche}
          alt='porsche logo'
        />
        <m.img
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
            delay: 1.1,
            type: 'spring',
            ease: 'ease-in',
          }}
          src={airbnb}
          alt='airbnb logo'
        />
      </div>
    </section>
  );
};

export default Clients;
