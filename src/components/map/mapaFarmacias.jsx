import { TileLayer } from 'react-leaflet'
import { MapContainer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from 'react';
import { api } from '../../services/api';


function MapaFarmacias() {
  
  const [data, setData] = useState([]);
  useEffect(() => {
    const load = async () => {
      const response = await api.get(`/farmacias`)
      setData(response.data)
    }
    load()
  })
         
  
  return (
    <MapContainer center={[-23.507514,-46.602831]} zoom={13} >
          <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright%22%3EOpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
             {
      data.map((res) => {
        <Marker position={[res.latitude, res.longitude]}>
             <Popup>
                 {res.logradouro}
              </Popup>
            </Marker>
      })
      }
    </MapContainer>
  );

}


export {MapaFarmacias }