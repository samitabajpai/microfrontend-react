import React, { Component } from 'react';
import ProfileCard from './Profile-card/ProfileCard';
import Contact from './Contact/Contact';
import ProductList from './containers/ProductList';
import axios from 'axios';
import config from './config';
import Cart from './containers/Cart';



class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      profile: {},
      distribution: []
    }
  }

  componentDidMount() {
    const url = `${config.baseURL}${config.endPoint.profile}`;
    axios.get(url)
      .then(res => res.data)
      .then((response) => {
        this.setState({
          profile: response.profile,
          distribution: response.distribution
        })
      },
      (error) => {
        console.log('Error: ', error);
      })
  }

  render() {
    return (
     
        <div className="App">
          <header className="App-header">
            <ProfileCard profile={this.state.profile}/>
            <div className='d-none d-md-block'>
              <Contact conatcts={this.state.distribution}/>
            </div>
          </header>
		   <div className="row">
                <div className="col-md-8">
                    <ProductList />
                </div>
                <div className="col-md-4">
                    <Cart />
                </div>
            </div>
        </div>
      
    );
  }
}

export default App;
