import {withScriptjs,withGoogleMap, GoogleMap, Marker, InfoWindow} from "react-google-maps";
import React, {useState} from 'react'
import * as recycleData from "./data/recycle.json"

export default withScriptjs(withGoogleMap(((props) => {
    const [selectedPoint, setSelectedPoint] = useState(null);
    let points = recycleData.features;
   // alert(props.type); - для тестов

    /* type берется из Map.js. В зависимости от его значения маркеры, которые должны быть отрисованы, складываются в points.
    Не получается из Map.js корректно передать type (передается значение по умолчанию (ALL), но не получется передать измененное значение)
     */

    if (props.type !== "ALL") { // обработка типов для маркеров
        /*for (let i = 1; i <= recycleData.features.length; i++) {
            if ((recycleData.features.properties.ID === i) && props.type) {
                pointList.push(recycleData.features.properties.ID)
            }
        }*/
    }
    return (
        <GoogleMap // сама карта
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyBW2Li7ZGekVpZOqsNJc53OKMm_xFrxcHw`}

            defaultZoom={10}
            defaultCenter={{lat:55.025377, lng: 82.920857}}
        >
            {points.map((point) => (
                <Marker key={point.properties.ID}
                        position={{lat: point.coordinates[0], lng: point.coordinates[1] }}
                        onClick={() => {
                            setSelectedPoint(point)
                        }}
                />
            ))}

            {selectedPoint && (
                <InfoWindow
                    position={{
                        lat: selectedPoint.coordinates[0],
                        lng: selectedPoint.coordinates[1]
                    }}
                    onCloseClick={() => {
                        setSelectedPoint(null)
                    }}
                >
                    <div>
                        <h6>{selectedPoint.NAME}</h6>
                        <p>{selectedPoint.ADDRESS}</p>
                    </div>
                </InfoWindow>
            )}
        </GoogleMap>
    );
})));
















