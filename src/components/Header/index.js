import styles from './styles.module.scss';
import Logo from '../../assets/logo.png';

export function Header() {
  return (
    <div className={styles.container}>
      <img src={Logo} alt="Logotipo da BlueX" />
    </div>
  );
}
