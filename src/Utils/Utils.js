import pest from '../Assets/pest.jpeg';

export function CheckActive(selectedId, buttonId) {
    var activeStatus = false;
    if (buttonId === selectedId) {
        activeStatus = true;
        return activeStatus
    } else {
        return activeStatus
    }
}

export const accordianData = [{
    input_category: 'Seeds Seedling',
    product_image: pest,
    product_description: 'Chili sakata (500seeds)',
    order_quantity: 3,
    id: 1
}, {
    input_category: 'Nutrient Fertilizers',
    product_image: pest,
    product_description: 'Acme brand fert',
    order_quantity: 5,
    id: 2
}, {
    input_category: 'Pesticides',
    product_image: pest,
    product_description: 'Valiants me',
    order_quantity: 6,
    id: 3
}, {
    input_category: 'Seeds Seedling',
    product_image: pest,
    product_description: 'Methyl 30ml',
    order_quantity: 3,
    id: 4
}, {
    input_category: 'Growing Medium',
    product_image: pest,
    product_description: 'Ethanol',
    order_quantity: 9,
    id: 5
}, {
    input_category: 'Seeds Seedling',
    product_image: pest,
    product_description: 'AcmeBrand 30kg',
    order_quantity: 10,
    id: 6
}]

