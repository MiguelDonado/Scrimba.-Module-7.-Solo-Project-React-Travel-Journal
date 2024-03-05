import React from 'react'

export default function Card(props) {
    return (
        <section className="card-container">
            <div className="card-img-container">
                <img className="card-img-container-point" src={props.item.imageUrl} alt="point of interest"/>
            </div>
            <div className="card-inner-container">
                <div className="card-inner-top">
                    <img className="card-inner-top-img" src="../images/location.png" alt="geolocation"/>
                    <h2 className="card-inner-top-country">{props.item.location}</h2>
                    <a className="card-inner-top-view" href={props.item.googleMapsUrl}>View on Google Maps</a>
                </div>
                <div className="card-inner-medium">
                    <h1 className="card-inner-medium-title">{props.item.title}</h1>
                    <h3 className="card-inner-medium-date">{`${props.item.startDate} - ${props.item.endDate}`}</h3>
                </div>
                <div className="card-inner-bottom">
                    <p className="card-inner-bottom-descr">{props.item.description}</p>
                </div>
            </div>
        </section>
    )
}