import styles from './Header.module.css'
import flLogo from '../assets/logo-fl.svg'

export function Header() {

    return (
        
        <header className={styles.header}>
            <img src={flLogo} alt="Logo do ignite" />
       </header>
    );
}