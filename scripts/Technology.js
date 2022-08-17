import { getTechnology, setTechnology } from "./database.js";

const tech = getTechnology()

document.addEventListener(
    "change",
    (event) => {
        if(event.target.id === "techChoice"){
            setTechnology(parseInt(event.target.value))
        }
    }
)

export const Technology = () => {
    let html = `<select id="techChoice" >
    <option value="0">Choose tech package here</option>`


    const listItemsArray = tech.map(
        (technology) => {
            return `
            <option value="${technology.id}"> ${technology.techPackage}
            </option>`
        }
    )


    html += listItemsArray.join("")

    html += "</select>"
    return html
}