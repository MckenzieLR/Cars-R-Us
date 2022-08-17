import { CarsRUs } from "./Cars-r-us.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = CarsRUs()
}

renderAllHTML()

// document.addEventListener(
//     "change",
//     (changeEvent) => {
//         if (changeEvent.target.id === "resource") {
//             const chosenOption = changeEvent.target.value
//             console.log(chosenOption)  // "1" or "2"
//         }
//     }
// )

document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})