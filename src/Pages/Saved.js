import React, {Component} from 'react'

export default class Saved extends Component {

    render() {
        let favourites = JSON.parse(localStorage.getItem("favourites"));
        return(
            <div className={"savedPoints"}>
                <div className={"header"}> Мои места: </div>
                {favourites.length === 0 ? <h6 className={"nullPoints"}> Пока ничего нет :( <br/> Добавьте места прямо сейчас!</h6> :
                favourites.map((point) => (
                    <h5 className={"selectedPoint"}>
                        {point.name} <br/> {point.address}
                        <button className={"btn"} type={"submit"}
                                onClick={function () {
                                    for (let i = 0; i < favourites.length; i++) {
                                        if (favourites[i].address === point.address && favourites[i].name === point.name) {
                                            favourites.splice(i, 1);
                                            localStorage.setItem("favourites", JSON.stringify(favourites));
                                            document.location.reload();
                                        }
                                    }

                        }}>удалить</button>
                    </h5>
                ))}
            </div>
        )
    }
}