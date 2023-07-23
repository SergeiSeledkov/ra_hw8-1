import { useEffect, useState } from "react";
import Request from "../Request/Request";
import './Details.css';

export default function Details(props) {
    const [userDetailsObject, setUserDetailsObject] = useState();

    useEffect(() => {
        const request = new Request();

        if (props.info.id) {
            request.fetchData(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${props.info.id}.json`)
            .then(
                result => setUserDetailsObject(result)
            )
        }
    }, [props.info.id]);

    return (
        userDetailsObject ?
        <ul className="details__list">
            <li className="details__img"><img src={userDetailsObject.avatar} key={userDetailsObject.id} alt={userDetailsObject.name}></img></li>
            <li className="details__name">{userDetailsObject.name}</li>
            <li className="details__city">City: {userDetailsObject.details.city}</li>
            <li className="details__company">Company: {userDetailsObject.details.company}</li>
            <li className="details__position">Position: {userDetailsObject.details.position}</li>
        </ul>
        : undefined
    )
}