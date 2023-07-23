import { useEffect, useState } from "react";
import Request from "../Request/Request";
import './List.css';

export default function List(props) {
    const [userList, setUserList] = useState();

    useEffect(() => {
        const request = new Request();

        request.fetchData('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json')
            .then(
                result => setUserList(result)
            )
    }, []);

    return (
        <ul className="user__list">
            {userList ? userList.map(item => <li key={item.id} onClick={event => props.callback(event, item)} className="user__name">{item.name}</li>) : undefined}
        </ul>
    );
}