import styles from './Button.module.scss';

interface ButtonProps {
  text: string;
  color: string;
}

const Button = ({ text, color }: ButtonProps) => {
  return (
    <button
      className={styles.button}
      style={color === 'wine' ? { color: '#97602b' } : { color: '#fff' }}
    >
      {text}
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='40'
        height='40'
        viewBox='0 0 40 40'
        fill='none'
      >
        <path
          d='M33.3334 20H6.66675'
          stroke={color === 'wine' ? '#97602B' : '#ffffff'}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />

        <path
          d='M25 28.3334C25 28.3334 33.3333 22.196 33.3333 20C33.3333 17.804 25 11.6667 25 11.6667'
          stroke={color === 'wine' ? '#97602B' : '#ffffff'}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </button>
  );
};

export default Button;
