import React from 'react'
import { menu_list } from '../../assets/assets'
import './ExploreMenu.css'

// Je passe les props pour le filtre
const ExploreMenu = ({categorie, setCategorie}) => { 
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">
      Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time. </p>

      {/* un MAP() sur le tableau d'objet pour ramené un autre tableau | cela permet de bouclé sur les objets  */}

      <div className="explore-menu-list">
        {
          menu_list.map((item,index) => {
            return (
              <div onClick={()=>setCategorie(prev=> prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                <img className={categorie===item.menu_name?"active":""} src={item.menu_image} alt="" />
                <p> {item.menu_name} </p>
              </div>
            )
          })
        }
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
