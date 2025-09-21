/**
 * Display each order with price
 * @returns each order and cost as a <p> element
 */
export const Orders = async () => {
    const response = await fetch("http://localhost:8088/order?_expand=paint&_expand=interior&_expand=technology&_expand=wheel&_expand=vehicle")

    if (response.ok) {
        const orders = await response.json()
        
        let html = `<h2>Orders</h2>`
        orders.forEach((order) => {
            const sum = ((order.paint.price + order.interior.price + order.technology.price + order.wheel.price) * (order.vehicle? order.vehicle.multiplier : 1)).toLocaleString("en-US", { style: "currency", currency: "USD"})

            html += `<p>Order #${order.id} cost ${sum}</p>`
        })

        return html
    }

}