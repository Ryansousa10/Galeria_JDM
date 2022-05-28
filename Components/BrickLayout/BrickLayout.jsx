import styles from "./BrickLayout.module.css"

const BrickLayout = () => {
  return (
    <div className={styles["brick-layout"]}>
      <div className={styles["brick-column"]}>
        <img src="img/header_images/1.jpg" alt="" />
        <img src="img/header_images/2.jpg" alt="" />
        <img src="img/header_images/3.jpg" alt="" />
      </div>
      <div className={styles["brick-column"]}>
        <img src="img/header_images/4.jpg" alt="" />
        <img src="img/header_images/5.jpg" alt="" />
        <img src="img/header_images/6.jpg" alt="" />
      </div>
      <div className={styles["brick-column"]}>
        <img src="img/header_images/7.jpg" alt="" />
        <img src="img/header_images/8.jpg" alt="" />
        <img src="img/header_images/9.jpg" alt="" />
      </div>      
    </div>
  )
}

export default BrickLayout