export function UserProfile({user}) { // each item in array is {user: {data}}, so destructure to just get the user object
    return (
        <div className="userProfile">
            <img
                src={user.picture.medium}
                alt={"Image of " + user.name.first}
                style={{
                    height: 100,
                    width: 100,
                    borderRadius: 200
                }}
            />
            <p><b>Name:</b> {user.name.first + ' ' +user.name.first}</p>
            <p><b>Country:</b> {user.location.country}</p>
        </div>
    );

}