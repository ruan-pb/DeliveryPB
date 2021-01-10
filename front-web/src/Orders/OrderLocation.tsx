import { type } from 'os'
import { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import AsynSelect from 'react-select/async'
import { fetchLocalMapbox } from '../api'
import { OrderLocationdate } from './types'

const initialposition = {
    lat:51.505,
    lng:-0.09 
}

type Place = {
    label?:string;
    value?:string;
    position:{
        lat:number;
        lng:number;
    }
}

type Props = {
    onChangeLocation:(location:OrderLocationdate)=>void;
}
function OrderLocation({onChangeLocation}:Props){
    const[address,setAddress] = useState<Place>({
        position:initialposition

    });

    const loadOptions = async (inputValue: string, callback: (places: Place[]) => void) => {
        const response = await fetchLocalMapbox(inputValue);
      
        const places = response.data.features.map((item: any) => {
          return ({
            label: item.place_name,
            value: item.place_name,
            position: {
              lat: item.center[1],
              lng: item.center[0]
            },
            place: item.place_name,
          });
        });
      
        callback(places);
      };
      
      const handleChangeSelect = (place: Place) => {
        setAddress(place);
        onChangeLocation({
            latiude: place.position.lat,
            longitude: place.position.lng,
            adderss:place.label!
        });
      };
    

    return(
        <div className="order-location-container">

            <div className = "order-location-content">
                <h3 className="order-location-title">
                    Selecione onde o pedido deve ser entregue
                </h3>
                <div className="filter-container">
                    <AsynSelect
                        placeholder="Digite um endereço para entregar o pedido"
                        className="filter"
                        loadOptions={loadOptions}
                        onChange={value => handleChangeSelect(value as Place)}
                        />


                </div>
                <MapContainer center={address.position} zoom={13}
                key={address.position.lat} scrollWheelZoom={false}>
                    <TileLayer
                         attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={address.position}>
                        <Popup>
                            {address.label}
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
            
        </div>
    )

    }

export default OrderLocation;