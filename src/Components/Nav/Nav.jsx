
import styles from "./Nav.module.css"

const Nav = () => {
  return (
    <nav className={`${styles.nav} flex align-items-center`}>
        <h1 className={styles["nav-title"]}><a href="Home" className={styles["nav-link"]}>T JDM</a></h1>

        <ul className={`flex align-items-center ${styles["navbar-nav"]}`}>
            <li className={styles["nav-item"]}>
                <a href="Papéis-de-parede" className={styles["nav-link"]}>Papéis de parede</a>
            </li>
            <li className={styles["nav-item"]}>
                <a href="Coleções" className={styles["nav-link"]}>Coleções</a>
            </li>
            <li className={styles["nav-item"]}>
                <a href="Coleções" className={styles["nav-link"]}>Exemplo</a>
            </li>
        </ul>
        
        
    </nav>
  )
}


export default Nav