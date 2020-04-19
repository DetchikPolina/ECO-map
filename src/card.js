import {withScriptjs,withGoogleMap, GoogleMap, Marker, InfoWindow, SearchBox} from "react-google-maps";
import React, {useState} from 'react'
import * as recycleData from "./data/recycle.json"

export default withScriptjs(withGoogleMap(((props) => {
    const [selectedPoint, setSelectedPoint] = useState(null);
    let favourites = JSON.parse(localStorage.getItem("favourites"));

    // ожидаем получить массив координат из ответа гугл карт
    alert("props.cord=" + props.cord);
    // ожидаем получить форматированный адресс из ответа гугл карт
    alert("props.address=" + props.address);

    // координаты по умлочанию
    let lat = 55.025377;
    let lng = 82.920857;

    if (!favourites) {
        localStorage.setItem("favourites", JSON.stringify([]));
        favourites = [];
    }

    let points = recycleData.features;

    if (props.type !== "ALL") { // обработка типов для маркеров
        points = [];
        for (let i = 0; i < recycleData.features.length; i++) {
            for (let j = 0; j < recycleData.features[i].type.length; j++) {
                if (recycleData.features[i].type[j] === props.type) {
                    points.push(recycleData.features[i]);
                    break;
                }
            }
        }
    }

    function addFavouritePoint(point) {
        favourites.push({"address": point.ADDRESS, "name": point.NAME});
        localStorage.setItem("favourites", JSON.stringify(favourites));
        document.getElementById("star").src = "https://img.icons8.com/small/16/000000/filled-star.png";
    }

    function inFavourites(point) {
        for (let i = 0; i < favourites.length; i++) {
            if (favourites[i].address === point.ADDRESS && favourites[i].name === point.NAME) {
                return true
            }
        }
        return false
    }

    return (
        <GoogleMap // сама карта
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyBW2Li7ZGekVpZOqsNJc53OKMm_xFrxcHw`}

            defaultZoom={10}
            defaultCenter={{lat: lat, lng: lng}}
        >
            {points.map((point) => (
                <Marker key={point.ID}
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
                        <h6>{selectedPoint.NAME}
                            <img className={"Star"} id="star" src={
                                    !inFavourites(selectedPoint)
                                    ? "https://img.icons8.com/small/16/000000/star.png"
                                    : "https://img.icons8.com/small/16/000000/filled-star.png"
                                }
                                onClick={() =>
                                    addFavouritePoint(selectedPoint)
                                }
                            />
                        </h6>
                        <p>{selectedPoint.ADDRESS}</p>

                    </div>
                </InfoWindow>
            )}
        </GoogleMap>
    );
})));

















