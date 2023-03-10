import styles from './Header.module.css';
import Button from './Button';
import Space from './Space';
import Tabs from './Tabs';

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.buttonContainer}>
        <Button
          style={{
            fontSize: '14px',
            backgroundColor: 'tansparent',
            color: 'black',
          }}
        >
          Watch
        </Button>
        <Space />
        <Button
          style={{
            fontSize: '14px',
            backgroundColor: 'tansparent',
            color: 'black',
          }}
        >
          Fork
          {' '}
          <div className={styles.circle}>5</div>
        </Button>
        <Space />
        <Button
          style={{
            fontSize: '14px',
            backgroundColor: 'tansparent',
            color: 'black',
          }}
        >
          Star
        </Button>
      </div>
      <Tabs />
    </div>
  );
}
