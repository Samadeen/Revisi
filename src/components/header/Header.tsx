import logo from '../../assets/logo.svg';
import menu from '../../assets/hambuger.svg';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header>
      <img src={logo} alt='logo' />
      <div className={styles.menu}>
        <img src={menu} alt='hamburger' />
        <p>Menu</p>
      </div>
    </header>
  );
};

export default Header;
