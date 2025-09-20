import {render} from "./main.js"

const currentOrder = {
    paintId: null,
    interiorId: null,
    technologyId: null,
    wheelId: null,
}

export const onSelect = (e) => {
    const target = e.target
    const value = target.value
    const key = target.id

    currentOrder[key] = value

}

export const onSubmit = async () => {
    if (!Object.values(currentOrder).some(value => value === null || value === 0) ) {
            const order = {...currentOrder, timestamp : Date.now()}
            const options = {
                "method": "POST",
                "headers": {
                "Content-Type": "application/json"
                }, 
                "body": JSON.stringify(order)
            }

            const response = await fetch("http://localhost:8088/order", options)
            if (response.ok) {
                console.log("Record added")
                Object.keys(currentOrder).forEach(key => currentOrder[key] = null)
                render()
            }
    } else {
        window.alert("Please select all options.")
    }
}