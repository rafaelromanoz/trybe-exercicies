import { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render(){
    return(
      <div>
        <h2>Home</h2>

        <Link to='/login'>Ir para página de login</Link>
        
        
      </div>
    )
  }
}

export default Home;