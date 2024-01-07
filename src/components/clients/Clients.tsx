import Button from '../button/Button';
import styles from './Clients.module.scss';
import tiktok from '../../assets/TikTok.svg';
import kayak from '../../assets/Kayak.svg';
import pinterest from '../../assets/Pinterest.svg';
import barclays from '../../assets/Barclays.svg';
import volvo from '../../assets/Volvo.svg';
import hsbc from '../../assets/Hsbc.svg';
import samsung from '../../assets/Samsung.svg';
import porsche from '../../assets/Porsche.svg';
import airbnb from '../../assets/Samsung.svg';

const Clients = () => {
  return (
    <section className={styles.client_container}>
      <div className={styles.client}>
        <h2>We’ve worked with exceptional clients.</h2>
        <Button color='wine' text='Check our client list' />
      </div>
      <div className={styles.client_list}>
        <img src={tiktok} alt='tiktok logo' />
        <img src={kayak} alt='kayak logo' />
        <img src={pinterest} alt='pinterest logo' />
        <img src={barclays} alt='barclays logo' />
        <img src={volvo} alt='volvo logo' />
        <img src={hsbc} alt='hsbc logo' />
        <img src={samsung} alt='samsung logo' />
        <img src={porsche} alt='porsche logo' />
        <img src={airbnb} alt='airbnb logo' />
      </div>
    </section>
  );
};

export default Clients;
