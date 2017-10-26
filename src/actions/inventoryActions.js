export function fetchInventory() {
    return {
        type: 'FETCH_INVENTORY_FULFILLED',
        payload:
            [
                {
                    "id": 1,
                    "title": "Beamer",
                    "description": "HP XY 3023 Beamer",
                    "price": 400
                },
                {
                    "id": 2,
                    "title": "Table",
                    "description": "Wood table",
                    "price": 400
                }
            ]
    }
}

export function addNewInventory(id, title, desc, price) {
    return {
        type: 'ADD_NEW_INVENTORY',
        payload:
            {
                "id": id,
                "title": title,
                "description": desc,
                "price": price
            }
    }
}


