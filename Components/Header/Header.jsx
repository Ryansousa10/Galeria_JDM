
import styles from "./Header.module.css"

import ContainerCard from '../ContainerCard/ContainerCard';
import Nav from "../Nav/Nav"
import BrickLayout from "../BrickLayout/BrickLayout";

const Header = () => {
  return (
    <header className={`${styles.header} flex justify-content-center`}>
        <ContainerCard className="flex flex-column">
          <div className={styles["blur-circle-shape"]}></div>

          <Nav />
          <BrickLayout />
          
          <div className={`${styles["headings-header"]} flex justify-content-center flex-column `}>
            <h2 className={styles["heading-header-title"]}>Seja quem vai mudar o mundo 😎🤘</h2>
            <h1 className={styles["heading-header-second-title"]}>
              Curvas tornam a arte melhor <br />
              O Drift torna o <span>mundo</span> melhor
            </h1>
          </div>
        </ContainerCard>
    </header>
  )
}

export default Header