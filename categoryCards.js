//module.exports = cuisineCatCards;

const cuisineCatCards = {
    american: [
        {cat: 'Appetizers'},
        {cat: 'Entrees'},
        {cat: 'Sides'},
        {cat: 'Deserts'},
        {cat: 'Beverages'}
    ],
    indian: [
        {cat: 'Appetizers'},
        {cat: 'Entrees'},
        {cat: 'Sides'},
        {cat: 'Deserts'},
        {cat: 'Beverages'}
    ],
    chinese: [
        {cat: 'Appetizers'},
        {cat: 'Entrees'},
        {cat: 'Sides'},
        {cat: 'Deserts'},
        {cat: 'Beverages'}
    ],
    italian: [
        {cat: 'Appetizers'},
        {cat: 'Entrees'},
        {cat: 'Sides'},
        {cat: 'Deserts'},
        {cat: 'Beverages'}
    ],
    mexican: [
        {cat: 'Appetizers'},
        {cat: 'Entrees'},
        {cat: 'Sides'},
        {cat: 'Deserts'},
        {cat: 'Beverages'}
    ],
    german: [
        {cat: 'Appetizers'},
        {cat: 'Entrees'},
        {cat: 'Sides'},
        {cat: 'Deserts'},
        {cat: 'Beverages'}
    ],
    mediterranean: [
        {cat: 'Appetizers'},
        {cat: 'Entrees'},
        {cat: 'Sides'},
        {cat: 'Deserts'},
        {cat: 'Beverages'}
    ]
}
const cuisineCardsInfo = {
    Appetizers: [
        {apit: 'x'},
        {apit: 'y'},
        {apit: 'f'},
        {apit: 'z'},
        {apit: 'n'}
    ],
    Entrees: [
        {cat: 'Appetizers'},
        {cat: 'Entrees'},
        {cat: 'Sides'},
        {cat: 'Deserts'},
        {cat: 'Beverages'}
    ]}
module.exports = cuisineCatCards;
module.exports = cuisineCardsInfo;
module.exports = getAll();

function getAll(){
    return cuisineCardsInfo;
}