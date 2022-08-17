import { getWheels, setWheels } from "./database.js";

const wheels = getWheels()

document.addEventListener(
    "change",
    (event) => {
        if(event.target.id === "wheelChoice"){
            setWheels(parseInt(event.target.value))
        }
    }
)

export const Wheels = () => {
    let html = `<select id="wheelChoice">
    <option value="0">Choose wheel size here</option>`


    const listItemsArray = wheels.map(
        (wheel) => {
            return `
            <option value="${wheel.id}"> ${wheel.wheelSize}
            </option>`
        }
    )


    html += listItemsArray.join("")

    html += "</select>"
    return html
}