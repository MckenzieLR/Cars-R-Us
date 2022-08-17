import { getColor, setColor } from "./database.js";

const paintColor = getColor()

document.addEventListener(
    "change",
    (event) => {
        if(event.target.id === "colorChoice"){
            setColor(parseInt(event.target.value))
        }
    }
)

export const PaintColor = () => {
    let html = `<select  id="colorChoice">
    <option value="0">Choose paint color here</option>`


    const listItemsArray = paintColor.map(
        (color) => {
            return `
            <option value="${color.id}"> ${color.color}
            </option>`
        }
    )


    html += listItemsArray.join("")

    html += "</select>"
    return html
}