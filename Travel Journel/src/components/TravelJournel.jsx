
export default function TravelJournel(props) {
    return (
        <div >

            <main className="main-content">
                <div className="hole">
                    <img className="img" src={props.item.imageUrl} alt="" />
                    <div className="content">
                        <span className="links">
                            <i className="material-icons">place</i>
                            <p>{props.item.location}</p>
                            <a href={props.item.googleMapsUrl}>View on Google Maps</a>
                        </span>
                        <h1>{props.item.title}</h1>
                        <p className="date">{props.item.startDate} - {props.item.endDate}</p>
                        <p>{props.item.description}</p>
                    </div>
                </div>
            </main>
        </div>
    );
}
