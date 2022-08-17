import { Wheels } from "./Wheels.js";
import { Technology } from "./Technology.js";
import { PaintColor } from "./PaintColor.js";
import { Interior } from "./Interior.js";
import { Orders} from "./Orders.js"
import { addCustomOrder} from "./database.js"
document.addEventListener(
    "click",
    (event) => {
        const itemClicked  = event.target
        if(itemClicked.id.startsWith("orderButton")){
            addCustomOrder()
        }
    }
)

export const CarsRUs = () => {
    return `
        <h1>Cars 'R Us: Personal Car Builder</h1>

        <article class="choices">
           <div class="firstOptions"> 
                <section class="choices__color options">
                    <h2>Paint Color</h2>
                    ${PaintColor()}
                </section>
                <section class="choices__interior options">
                    <h2>Interior</h2>
                    ${Interior()}
                </section> 
            </div>
            <div class="secondOptions">
                <section class="choices__technology options">
                    <h2>Technology</h2>
                    ${Technology()}
                </section>
                <section class="choices__wheels options">
                    <h2>Wheels</h2>
                    ${Wheels()}
                </section>
            </div>
        </article>

        <article>
            <button id="orderButton">Place Car Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Car Orders</h2>
            <div class="carOrders">${Orders()}</div>
        </article>
    `
}