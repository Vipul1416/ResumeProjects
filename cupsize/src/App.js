import React,{Component}from 'react';
import { Navbar, NavbarBrand , Button } from 'reactstrap';
import './App.css';
import {SIZES} from  './shared/Sizes';
import Menu from './components/MenuComponent';

class App extends Component{
  constructor(props)
  {
    super(props);
    this.state=
    {
      sizes:SIZES,
      
      value:0
    };
  }
  valueIncrement = () => {
    console.log('I have been clicked')
    this.setState({
      value: 1
    }, () => console.log(this.state.isClicked))

  }
  render()
  {
    return (
      <div>
          <Navbar dark  color="danger">
            <div className="container">
              <NavbarBrand href="/">Cup Size Management</NavbarBrand>
            </div>
          </Navbar>
          <div className="container spacer">
            <div className="row">
              <div className="col-6 col-sm-4">
                <Button>
                  Add Cup Size

                </Button>

              </div>
              <div className="col-6 col-sm-4">
              <Button>
                 View Cup Size
              </Button>
            </div>

          </div>
        </div>
        <hr></hr>
        <Menu  sizes={this.state.sizes}/>
        </div>
       
    );
 
  }
}

export default App;
