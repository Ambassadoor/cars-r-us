

/**
 * Creates a select element with options from the provided source
 * @param {*} source A database table name
 * @returns A select element with options
 */
export const Selection = async (source) => {
    // Fetch the provided table
    const response = await fetch(`http://localhost:8088/${source}`) 

    // Create basic select element
    let html = `<select id="${source}Id"><option value="0">Select an option...</option>`

    // Add options on successful fetch
    if (response.ok) {
        const selections = await response.json()
        selections.forEach(selection => {
            html += `<option value=${selection.id} >${selection.name}</option>`
        });

    }
    html += `</select>`

    return html
}

