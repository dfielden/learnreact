export default function UserProfile({employee}) {
    return (
        <>
            <img
                src={employee.imgSrc}
                alt={"Image of " + employee.name}
                style={{
                    height: 100,
                    width: 100,
                    borderRadius: 200
                }}
            />
            <p><b>Name:</b> {employee.name}</p>
            <p><b>Job:</b> {employee.jobTitle}</p>
        </>
    );

}