import mapboxgl from “mapbox-gl”
import ‘mapbox-gl/dist/mapbox-gl.css’
import { useEffect, useRef } from ‘react’

const Map = ({ coords }) => {
       mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX       
       console.log(coords)
       const mapContainer = useRef(null)
       const map = useRef(null)

       useEffect(() => {
              if (map.current) return
                     if(coords[0]? .longitude && coords[0]? .latitude) {
                            map.current = new mapboxgl.Map({
                                   container: mapContainer.current,
                                   style:‘mapbox://styles/mapbox/streets-v12’,
                                   center: [coords[0]?.longitude, coords[0]?.latitude],
                                   zoom: 13
                     })
              }
       }, [coords[0]?.longitude, coords[0]?.latitude])

       return (
              <div className=“map-container”>
                    <div ref={mapContainer}></div>
             </div>
       )
}

export default Map
