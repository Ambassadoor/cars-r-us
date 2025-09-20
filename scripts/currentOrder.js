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
