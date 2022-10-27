import {UserProfile} from "./UserProfile";
import React from "react";

export function ProfileGallery() {
    const [isLoading, setIsLoading] = React.useState(true);
    const [users, setUsers] = React.useState([]);

    React.useEffect(() => {
        const fetchData = async () => {
            // get the data from the api
            const data = await fetch('https://randomuser.me/api/?results=15');
            // convert data to json
            const json = await data.json();
            const results = json.results; // results is the array that contains the user info
            setUsers(results)
        }
        fetchData().catch(console.error);
    }, []);

    React.useEffect(() => {
        if (users.length !== 0) {
            setIsLoading(false);
        }
    }, [users]);


    return (
    <div className="profileGallery">
        {isLoading ?
            (<h1>Loading...</h1>) :
            (users.map(user => <UserProfile user={user}/>))
        }
    </div>
    );
}