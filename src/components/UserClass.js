import React from "react"
import { USER_API } from "../utils/constants";


class UserClass extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            userInfo: {
                name: "default",
                location: "default",
                login: "@dummy",
                avatar_url: "http://dummy.com"
            }
            
        }
        console.log(this.props.name + " Child Constructor");


    }

    async componentDidMount(){
        console.log(this.props.name +" Child component did mount");
        const data = await fetch(USER_API)

        const json = await data.json();

        this.setState({
            userInfo: json
        })

        console.log(json);

    }

    componentDidUpdate(){
        console.log(this.props.name +" Child component did update");
    }

    componentWillUnmount(){
        console.log(this.props.name +" Child component did unmount");

    }

    render (){

        
        const {name, location, login, avatar_url} = this.state.userInfo;


        console.log(this.props.name +" Child render");
        return (
    
            <div className="user-card">
            
            <img src={avatar_url}/>
            <h3>NAME: {name}</h3>
            <h3>LOCATION: {location}</h3>
            <h3>Github: {login}</h3>
            </div>
        )
    }
}


export default UserClass