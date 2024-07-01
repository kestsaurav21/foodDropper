import React from "react"


class UserClass extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            count:0,
        
        }
        console.log(this.props.name + " Child Constructor");


    }

    componentDidMount(){
        console.log(this.props.name +" Child component did mount");
    }
    render (){

        
        const {name, location, contact} = this.props;

        const {count, count2} = this.state;

        console.log(this.props.name +" Child render");
        return (
    
            <div className="user-card">
            <h3>Count: {count}</h3>

            <button
            onClick={()=> {
                // Never update state variable directly
                this.setState({
                    count: this.state.count + 1
                })
            }}>
                Count Increase
            </button>

            <button
            onClick={()=> {
                this.setState({
                    count: this.state.count -1
                })
            }}>Count Decrease</button>
            
            <h3>NAME: {name}</h3>
            <h3>LOCATION: {location}</h3>
            <h3>Contact: {contact}</h3>
            </div>
        )
    }
}


export default UserClass