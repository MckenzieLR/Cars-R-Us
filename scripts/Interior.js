import { getInterior, setInterior } from "./database.js";

const interior = getInterior()

document.addEventListener(
    "change",
    (event) => {
        if(event.target.id === "interiorChoice"){
            setInterior(parseInt(event.target.value))
        }
    }
)

export const Interior = () => {
    let html = `<select id="interiorChoice">
    <option value="0">Choose seat interior here</option>`


    const listItemsArray = interior.map(
        (interiorSeat) => {
            return `
            <option value="${interiorSeat.id}"> ${interiorSeat.seatType}
            </option>`
        }
    )


    html += listItemsArray.join("")

    html += "</select>"
    return html
}