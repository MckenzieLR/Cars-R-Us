import { getOrders, getColor, getWheels, getInterior, getTechnology } from "./database.js"

const buildOrderListItem = (order) => {
    const colors = getColor()
    const wheels = getWheels()
    const interior = getInterior()
    const technology = getTechnology()

// Remember that the function you pass to find() must return true/false
const foundColor = colors.find(
    (color) => {
        return color.id === order.paintColorId
    }
)
const foundWheels = wheels.find(
    (wheelSize) => {
        return wheelSize.id === order.wheelsId
    }
)
const foundInterior = interior.find(
    (interiorSeats) => {
        return interiorSeats.id === order.interiorId
    }
)
const foundTechnology = technology.find(
        (tech) => {
            return tech.id === order.technologyId
        }
)
const totalCost = foundColor.price + foundWheels.price + foundInterior.price + foundTechnology.price

const costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
})

    return`<li>
    Order #${order.id} cost ${costString}
    </li>`


}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = `<ul>`

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}
