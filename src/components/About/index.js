import React from 'react'
import User from '../User'
import UserClass from '../UserClass'


// * RENDER CYCLE OF CLASS BASED COMPONENTS WHEN THE CLASS HAS TWO CHLIDREN

/* 
*  - Parent Constructor()              -- Render Phase
*  - Parent Render()

*    - First Child Constructor()
*    - First Child Render()
*                                      -- Render Phase
*    - Second Child Constructor()
*    - Second Child Render()

*     <DOM UPDATED - IN SINGLE BATCH> -> Optimizes the Performance of App  -- Commit Phase
*    - First Child ComponentDidMount()
*    - Second Child ComponentDidMount()

*  - Parent ComponentDidMount()=
*/

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log('Parent Constructor');
  }

  componentDidMount() {
     console.log('Parent Component Did Mount');
  }

  render() {
     console.log('Parent Render');
    return (
      <div className="about-page">
        <h1>About Class Component</h1>
        <h2>This is About Page</h2>
        <UserClass name={'First'} location={'Faridabad'} />
        <UserClass name={'Second'} location={'Dehradun'} />
        <UserClass name={'Third'} location={'Gurgaon'} />
      </div>
    );
  }
}


// const About = () => {
//   return (
//     <div className='about-page'>
//         <User name={"Saurabh Kestwal"} location={"Faridabad"} contact={"@sauravkestwal21"} />

//         <UserClass name={"SAURABH KESTWAL"} location={"Faridabad"} contact={"@sauravkestwal21"}/>

//     </div>
//   )
// }

export default About