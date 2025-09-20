export const Orders = async () => {
    const response = await fetch("http://localhost:8088/order?_expand=paint&_expand=interior&_expand=technology&_expand=wheel")

    if (response.ok) {
        const orders = await response.json()
        console.log(orders)
        
        let html = ``
        orders.forEach((order) => {
            const sum = (order.paint.price + order.interior.price + order.technology.price + order.wheel.price).toLocaleString("en-US", { style: "currency", currency: "USD"})

            html += `<p>Order #${order.id} cost ${sum}</p>`
        })
        return html
    }

}