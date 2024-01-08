import Button from '../button/Button';
import styles from './Project.module.scss';
import { motion as m } from 'framer-motion';

interface ProjectProps {
  title: string;
  note1: string;
  note2: string;
  url: string;
}

const Project = ({ title, note1, note2, url }: ProjectProps) => {
  return (
    <div className={styles.project_container}>
      <div className={styles.image_container}>
        <div className={styles.image_overlay}>
          <img src={url} alt={title} />
          <div className={styles.text}>
            <h3>{title}</h3>
            <Button color='white' text='Explore' />
          </div>
        </div>
      </div>
      <m.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2, type: 'spring' }}
        className={styles.details_container}
      >
        <h2>{title}</h2>
        <p className={styles.note1}>{note1}</p>
        <p className={styles.note2}>{note2}</p>
      </m.div>
    </div>
  );
};

export default Project;
