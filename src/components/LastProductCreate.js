import React,{Component} from "react"
import LastProduct from "./LastProduct";

class LastProductCreate extends Component{
    constructor(){
        super();
        this.state = {
            products: null
        }
    }
    componentDidMount(){
        fetch("http://localhost:3000/api/lastProduct")
        .then(res => res.json())
        .then(data => {
            this.setState({ products: data.data[0] })
        })
    .catch(error => console.log(error))
    }
    render(){
        return(
            <div className="div-lastProduct">
                <table className="Tabla-lastP">
                
                <div className="card"></div>
                {this.state.products?
                <LastProduct{...this.state.products} />: <div>loading products...</div>
            }
                </table>
            </div>
            )
        
    }
}


export default LastProductCreate