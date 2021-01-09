import {ReactComponent as PizzaMain} from './Pizza.svg';
function ProductCard(){
    return(
        <div className="orders-card-container">

            <h3 className="order-card-title">
                Pizza Calabresa
            </h3>
            <PizzaMain className="order-card-image"/>
            <h3 className="order-card-price">
                R$ 35,90
  
                </h3>

                <div className="order-card-description">
                    <h3>Descrição</h3>
                    <p>
                        Uma deliciosa combinação de Linguiça Calabresa, rodelas de cebolas frescas, azeitonas pretas, mussarela, polpa de tomate, orégano e massa especial.
                    </p>


                </div>
        </div>
        
    )

}

export default ProductCard;