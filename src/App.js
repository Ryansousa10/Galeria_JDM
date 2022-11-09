import { useState } from "react";


import styles from "./App.module.css"


import Header from './Components/Header/Header';
import ContainerCard from './Components/ContainerCard/ContainerCard';
import Dropdown from './Components/Elements/Dropdown/Dropdown';
import MansoryLayout from './Components/MasonryLayout/MasonryLayout';

import images from "./Components/Jsons/Images.json";


const App = () => {
                      // Dropdown aqui
  const ddItems = [
    {
      id: 1,
      title: "Mazda",
      active: true
    },
    {
      id: 2,
      title: "Nissan",
      active: false
    },
    {
      id: 3,
      title: "Toyota",
      active: false
    },
    {
      id: 4,
      title: "Subaru",
      active: false
    },
    {
      id: 5,
      title: "Honda",
      active: false
    },
    {
      id: 6,
      title: "Todos",
      active: false
    }
  ]

  const [categoryImage, setCategoryImage] = useState(images.categories.all)

  const takeDdTitle = (ddTitle) => {
    setCategoryImage(() => {
      let categoryChoose = Object.keys(images.categories).filter(item => {
        const titleSplited = ddTitle.toLowerCase().split(" ")[0]
        return item.toLowerCase().includes(titleSplited)
      })
      return [ ...images.categories[categoryChoose] ]
    })
  }

  return (
    <>
        <Header />

        <div className="flex justify-content-center" style={{ marginTop: "50px", padding: '50px' }}>

       


          <ContainerCard>

              <div className={`${styles["gallery-setting"]} flex justify-content-between align-items-center`}>
                
                <Dropdown title="Todos" items={ddItems} liftingDdTextUp={takeDdTitle} />

              </div>
              <MansoryLayout images={categoryImage} />

          </ContainerCard>
          
        </div>
    </>
  )
}

export default App