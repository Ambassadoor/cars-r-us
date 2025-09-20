// Holds current order state
const currentOrder = {
    paintId: null,
    interiorId: null,
    technologyId: null,
    wheelId: null,
}

/**
 * Update currentOrder with selected value
 * @param {*} e The change event
 */
export const onSelect = (e) => {
    const keyMap = {
        "paints": "paintId",
        "interiors" : "interiorId",
        "technologies" : "technologyId",
        "wheels" : "wheelId"
    }

    const target = e.target
    const value = target.value
    const key = keyMap[target.id]

    currentOrder[key] = value

}

/**
 * Creates a new order entry in the database
 */
export const onSubmit = async () => {
    // Posts new order to database or warns user to select all values

    if (!Object.values(currentOrder).some(value => value === null || value === 0) ) {
            // Adds timestamp
            const order = {...currentOrder, timestamp : Date.now()}
            const options = {
                "method": "POST",
                "headers": {
                "Content-Type": "application/json"
                }, 
                "body": JSON.stringify(order)
            }

            // Post new order
            const response = await fetch("http://localhost:8088/order", options)
            if (response.ok) {
                console.log("Record added")
                Object.keys(currentOrder).forEach(key => currentOrder[key] = null)
                document.dispatchEvent(new CustomEvent("orderSubmitted"))
            }
    } else {
        window.alert("Please select all options.")
    }
}