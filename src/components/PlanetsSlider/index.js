// Write your code here
import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  return (
    <div className="bg-container" data-testid="planets">
      <h1 className="heading">Planets</h1>
      <Slider>
        {planetsList.map(eachPlanet => (
          <PlanetItem planetDetails={eachPlanet} key={eachPlanet.id} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
