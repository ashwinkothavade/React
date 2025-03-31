function User(props) {
    if(props.isLoggedIn) {
        return <p>Please log in. {props.username}</p>;
    }else{
        return (
            <p>Welcome {props.username}</p>
        )
    }
}
export default User;