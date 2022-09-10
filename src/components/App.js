import React from 'react';
import Asidebar from './Asidebar';
import Main from './Main';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      navClosed: false,
    }
  }

  render(){
    return(
      <div className='container'>       
        <Main/>
      </div>
    )
  }

}


export default App;
