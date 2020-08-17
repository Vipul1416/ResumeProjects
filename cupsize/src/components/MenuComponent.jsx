import React,{Component} from 'react';
import {Label,Input,Form} from 'reactstrap';
import { Table } from 'reactstrap';



class Menu extends Component{
    constructor(props)
    { 
        super(props);
        this.state={
            cupSize:[{
                id:1,
                name:"70 ml",
                value:0
            },
        {
            id:2,
            name:"20 ml",
            value:0
        }],
        
           

        };
    }
    handleIncrement = (cup) => {
        const cupSize = [...this.state.cupSize];
        const index=cupSize.indexOf(cup);
        cupSize[index]={...cup};
        cupSize[index].value=1;
        this.setState({cupSize});
    };
    handleChange =async (e) => {
        let city = e.target.value;
        const cmts=this.state.cupSize.filter((c)=>c.name===city)[0];
        this.handleIncrement(cmts);
        
      };


    
    render()
    { const menu= this.props.sizes.map((cup)=>
        {
            return(<option key={cup.id} value={cup.name}>
                {cup.name}
                </option>);
                
            
        });
        const table=this.state.cupSize.map((c)=>{
            if(c.value>0)
            {
                return(<tr className="row">
                    <td className="col-12 col-sm-3">{c.id}</td>
                    <td className="col-12 col-sm-3">{c.name}</td>
                    <td></td>
                    <td></td>
                </tr>)
            }
            return(<div>No Cupsize Added</div>);
        });
        
      
        
        
        return(
            <div className="container">
                <Form>
            <div className="row">
                
                    
                    <Label for="exampleSelect" className="col-md-2">Add Cup Size</Label>
                    <Input className="col-md-6" type="select" name="select" value={this.state.cupSize.name} onChange={this.handleChange}>
                    <option  className="placeholder" defaultValue>
                    Choose Cup Size
                </option>
                       {menu}
                    
                    </Input>
                    
            
            </div>
            <div className="spacer" style={{margin:"200px"}}></div>
            <div className="row">
                <div className="col-12">
                    
                </div>
            </div>
            </Form>
            <Table>
      <thead>
        <tr className="row">
          <th className="col-12 col-sm-3">S.no</th>
          <th className="col-12 col-sm-3">Cup Size</th>
          <th className="col-12 col-sm-3">Make Inactive</th>
          <th className="col-12 col-sm-3">Edit</th>
        </tr>
      </thead>
      <tbody>
       {table}
       </tbody>
    </Table>
            </div>);
            
    }
}

export default Menu;