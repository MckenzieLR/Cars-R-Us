const database = {
    paintColor: [
        {id: 1, color: "Silver", price: 150 },
        {id: 2, color: "Midnight Blue", price: 300},
        {id: 3, color: "Firebrick Red", price: 500},
        {id: 4, color: "Spring Green", price: 250}
    ],
    interior: [
        {id: 1, seatType: "Beige Fabric", price: 350},
        {id: 2, seatType: "Charcoal Fabric", price: 300},
        {id: 3, seatType: "White Leather", price: 650},
        {id: 4, seatType: "Black Leather", price: 600}
    ],
    technology: [
        {id: 1, techPackage: "Basic", price: 400},
        {id: 2, techPackage: "Navigation", price: 600},
        {id: 3, techPackage: "Visibility", price: 650},
        {id: 4, techPackage: "Ultra", price: 800}
    ],
    wheels: [
        {id: 1, wheelSize: "17-inch Pair Radial", price: 500},
        {id: 2, wheelSize: "17-inch Pair Radial Black", price: 550},
        {id: 3, wheelSize: "18-inch Pair Spoke Silver", price: 700},
        {id: 4, wheelSize: "18-inch Pair Spoke Black", price: 750}
    ],
    customOrders: [
       {id: 1, paintColorId: 2, interiorId: 3, technologyId: 4, wheelsId: 2}

    ],
    orderBuilder: {

    }
}

export const getColor = () => {
    return database.paintColor.map(color => ({...color}))
}

export const getInterior = () => {
    return database.interior.map(interior => ({...interior}))
}

export const getTechnology = () => {
    return database.technology.map(technology=> ({...technology}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}

export const getOrders = () => {
    return database.customOrders.map(order => ({...order}))
}

export const setColor = (id) => {
    database.orderBuilder.paintColorId = id
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}

export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
}

export const setWheels = (id) => {
    database.orderBuilder.wheelsId = id
}

export const addCustomOrder = () => {
    const newOrder = {...database.orderBuilder}

    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1 

    newOrder.timestmp = Date.now()

    database.customOrders.push(newOrder)

    database.orderBuilder = {}

    document.dispatchEvent(new CustomEvent("stateChanged"))
}

