import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {imageUrl, name, description} = planetDetails

  return (
    <div className="bg-planet">
      <img src={imageUrl} alt="planet" className="planet-image" />
      <h1 className="planet-name">{name}</h1>
      <p className="planet-description">{description}</p>
    </div>
  )
}

export default PlanetItem
