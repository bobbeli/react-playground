export function fetchInventory() {
    return {
        type: 'FETCH_INVENTORY_FULFILLED',
        payload: {
            "inventor": [
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
}


