import React,{Component} from "react"

class Producto extends Component{
    constructor(){
        super();
        this.state = {
            products: []
        }
    }
    componentDidMount(){
        fetch("http://localhost:3000/api/products")
        .then(res => res.json())
        .then(data => {
            this.setState({products: data.data})
        })
        .catch(error => console.log(error))
    }

    render(){
        return(
            <div className="row">
               {this.state.products.map((product, i) =>
                <div key = {i + product} className="col-lg-6 mb-4">
                    <div className="card bg-dark text-white shadow">
                                      
                    <table className="table">
                    <thead>
                <tr> 
                    <th>Nombre</th> 
                    <th>Marca</th> 
                    <th>Material</th> 
                    <th>Color</th> 
                    <th>Descripcion</th>
                    <th>Imagen</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{product.name}</td>
                    <td>{product.brands.name}</td> 
                    <td>{product.materials.name}</td> 
                    <td>{product.colors.name}</td> 
                    <td>{product.description}</td>
                    <td>{product && product.image && product.image.url}</td>
                </tr>

            </tbody>

                    </table>
                    </div>
                    
                </div>
                )
            }

            </div>
        )
    }

}

export default Producto