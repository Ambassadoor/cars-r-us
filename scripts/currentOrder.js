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
            currentOrder.timestamp = Date.now()
            const options = {
                "method": "POST",
                "headers": {
                "Content-Type": "application/json"
                }, 
                "body": JSON.stringify(currentOrder)
            }

            const response = await fetch("http://localhost:8088/order", options)
            if (response.ok) {
                console.log("Record added")
            }
    } else {
        window.alert("Please select all options.")
    }
}