export default function LastProduct({name,image,brands,colors,price}){
    return(
        
            
            <div className="card-last-product" >
                <h2>Ultimo producto creado</h2>
            <img src= {image && image.url} width="350" alt="product img"/>
           
             <h3 className="product-name-last">Name:{name}</h3>
           
             <h3 className="product-name-last">Brand:{brands.name}</h3>
            
             <h3 className="product-name-last">Color:{colors.name}</h3>
            
             <h3 className="product-name-last">Price:{price} USD</h3>
               
            </div>
    
        
    )
    }