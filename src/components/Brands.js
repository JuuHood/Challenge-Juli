import React,{Component} from "react"

class Brands extends Component{
    constructor(){
        super();
        this.state = {
            brands: []
        }
    }
    componentDidMount(){
        fetch("http://localhost:3000/api/brand")
        .then(res => res.json())
        .then(data => {
            this.setState({brands: data.data})
        })
        .catch(error => console.log(error))
    }
    render(){
        return(
                    <div className="div-brand">
                      <table className="table">
                                <tr>
                                    <th>Marca</th>
                                    <th>Stock</th>
                     </tr>
                     
                {this.state.brands.map((brand, i) =>
                    
                        
                                   
                                    <tr  key = {i + brand} className="">
                                    <td>{brand.name}</td>
                                    <td>{brand.products.length}</td>
                                    </tr>
                            


                        
                      
                    
                        )
                    }
                    </table>
                    </div>
                

        )
    }
}

export default Brands