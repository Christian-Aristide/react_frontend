import React, { useState } from 'react'
import "./Home"
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'

const Home = () => {

  // Mise en place du filtre de catégorie dynamique 
  const [categorie, setCategorie] = useState('All')

  return (
    <div>
      <Header/>
      <ExploreMenu categorie={categorie} setCategorie={setCategorie} />
      <FoodDisplay/>
    </div>
  )
}

export default Home
