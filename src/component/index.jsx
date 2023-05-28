import React, { useState, useEffect, useRef } from "react";
import L from 'leaflet';
import 'leaflet.heat';
import 'leaflet/dist/leaflet.css';
import Car1 from '../IMG/car1.jpg';
import Car2 from '../IMG/car2.jpg';
import Car3 from '../IMG/car3.jpg';
import './index.css';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;



export const Index = () => {

  const Center = [ 25.6866, -100.3161 ];
  const [map, setMap] = useState(null);
  const mapContainerRef = useRef(null);

  useEffect(() => {
    if (!map) {
      const mapInstance = L.map(mapContainerRef.current).setView(Center, 11);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; OpenStreetMap contributors'
      }).addTo(mapInstance);
      setMap(mapInstance);
    }
  }, [map, Center]);

  useEffect(() => {

    const requestInit = {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(),
    
    }

    fetch("http://localhost:5189/api/Csv/getall/tabla", requestInit)
    .then((res) => res.json())
    .then((data) => {
      if (map) {
        const heatmapData = data.map((point) => [point.lat, point.lng, point.value]);
        L.heatLayer(heatmapData).addTo(map);
      }
    })
    .catch((error) => {
      console.error("Error al obtener los datos del servidor:", error);
    });

  }, [map]);

  


  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevSlide = () => {
    setActiveIndex(prevIndex => prevIndex === 0 ? 2 : prevIndex - 1);
  };

  const handleNextSlide = () => {
    setActiveIndex(prevIndex => prevIndex === 2 ? 0 : prevIndex + 1);
  };

  useEffect(() => {
    const timer = setInterval(handleNextSlide, 10000); // Cambiar cada 10 segundos
    return () => {
      clearInterval(timer);
    };
  }, []);
  
  return (
    <div>
      <div className="carousel">
        <div className="carousel-inner">
          <div className={`carousel-item ${activeIndex === 0 ? 'active' : ''}`}>
            <img src={Car1} className="img d-block w-100" alt="car" />
            <div className="carousel-caption">
              <center-top><h1>LIFE-ENSURE</h1></center-top>
              <h5>Tu Confiable Pre-Evaluador de Siniestros Automovilisticos.</h5>
              <p>En Life-Ensure nos preocupa tu tiempo y tu salud.</p>
            </div>
          </div>
          <div className={`carousel-item ${activeIndex === 1 ? 'active' : ''}`}>
            <img src={Car2} className="img d-block w-100" alt="car1" />
            <div className="carousel-caption">
              <center-top><h1>TIEMPO</h1></center-top>
              <h5>La mejor aplicacion que se preocupa por tu tiempo</h5>
              <p>En life-ensure nos preocupa tu vida laboral y social y nos empeñamos en brindarte un servicio rapido e inovador 
                 para facilitarte hasta los mas pequeños inconvenientes.</p>
            </div>
          </div>
          <div className={`carousel-item ${activeIndex === 2 ? 'active' : ''}`}>
            <img src={Car3} className="img d-block w-100" alt="car2" />
            <div className="carousel-caption">
              <center-top><h1>SALUD</h1></center-top>
              <h5>¿Te encuentras bien? 
                Recuerda que en LIFE-ENSURE nos preocupa todo sobre ti y queremos lo mejor para ti.</h5>
              <p>Algun problema te ocurre no dudes en utilizar la aplicacion y resuelvelo de inmediato.</p>
            </div>
          </div>
        </div>
        
        <button className="carousel-control-prev" type="button" onClick={handlePrevSlide}>
           Previous
        </button>
        <button className="carousel-control-next" type="button" onClick={handleNextSlide}>
          Next
        </button>
      </div>

      <div className="margen"> </div>


      <div ref={mapContainerRef} style={{ height: '50vh', width: '100%' }}></div>

        {/* <MapContainer 
          center={Center}
          zoom={11}
          style={{width: '100%', height: '50vh'}}
          >
        <TileLayer
        url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=5KEzVnugORCVVSD25Qft"
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'/>

        
      </MapContainer> */}

      
      
      {/* <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: apiKey }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent lat={25.6866} lng={-100.3161} text="Monterrey" />
        </GoogleMapReact>
      </div> */}
    </div>
  )
}

export default Index;