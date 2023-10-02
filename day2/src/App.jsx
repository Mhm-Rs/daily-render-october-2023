import { useEffect, useState } from 'react'
import './App.css'
import Weather from './components/Weather'
import { Dimmer, Loader } from 'semantic-ui-react'


function App() {
  const [lat, setLat] = useState([])
  const [long, setLong] = useState([])
  const [data, setData] = useState({})

  useEffect(() => {
    getWeather()
  }, [lat, long])


  const getWeather = async () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude)
      setLong(position.coords.longitude)
    })
    await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${import.meta.env.VITE_REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result)
      })
  }

  return (
    <>
      <div className='App'>
        {(typeof data.main != "undefined") ?
          <Weather weatherData={data} />

          : <>
          <Dimmer active>
            <Loader>Loading..</Loader>
          </Dimmer>
          </>}
      </div>
    </>
  )
}

export default App
