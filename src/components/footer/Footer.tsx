import styles from './Footer.module.scss';
import logo from '../../assets/footer-logo.svg';
import user from '../../assets/user.svg';
import mail from '../../assets/mail.svg';
import arrow from '../../assets/arrow-tilt.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src={logo} alt='footer logo' className={styles.logo_footer} />
      <div className={styles.footer_wrapper}>
        <div className={styles.contact}>
          <h3>Got a project for us?</h3>
          <h5>What type of work?</h5>
          <ul>
            <li>Home</li>
            <li>Office</li>
            <li>Hotel</li>
            <li>Restaurant</li>
          </ul>
          <form action=''>
            <label htmlFor='name'>
              <input type='text' name='name' id='' placeholder='Your name' />
              <img src={user} alt='user' />
            </label>
            <label htmlFor='email'>
              <input type='text' name='email' id='' placeholder='Your mail' />
              <img src={mail} alt='user' />
            </label>
            <label htmlFor='project'>
              <input
                type='text'
                name='project'
                id=''
                placeholder='Project description'
              />
            </label>
          </form>
        </div>
        <div className={styles.address}>
          <h4>Address</h4>
          <p>#90, Hogwarts Avenue, Birmingham, United Kingdom. LSS 1229</p>
          <ul>
            <li>Instagram</li>
            <li>LinkedIn</li>
          </ul>
          <p>Careers</p>
        </div>
      </div>
      <div className={styles.talk}>
        <h3>
          Let's talk <img src={arrow} alt='arrow tilt' />
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
