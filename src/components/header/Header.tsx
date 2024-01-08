import logo from '../../assets/logo.svg';
import menu from '../../assets/hambuger.svg';
import styles from './Header.module.scss';
import { motion as m } from 'framer-motion';

const Header = () => {
  return (
    <header>
      <m.img
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.9,
          type: 'spring',
          stiffness: 200,
          ease: 'linear',
        }}
        src={logo}
        alt='logo'
      />
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className={styles.menu}
      >
        <img src={menu} alt='hamburger' />
        <p>Menu</p>
      </m.div>
    </header>
  );
};

export default Header;
