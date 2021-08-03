//backroom items, follows schema
/*
* {name: TurkeyBags, UPC: #########, count: 0}
* 
*/let backRoomItems = [
    {type: 'Case', name: 'Provolone GNG', upc:"0001111020168", count: 0}, {type: 'Case', name: 'ColbyJack GNG', upc: "0001111020164", count: 0},
    {type: 'Case', name: 'Colby GNG', upc: "0001111020165", count: 0},{type: 'Case', name: 'Mild Cheddar GNG', upc: "0001111020166", count: 0},
    {type: 'Case', name: 'Baby Swiss GNG', upc: "0001111070012", count: 0},{type: 'Case', name: 'Swiss GNG', upc: "0001111020172", count: 0},
    {type: 'Case', name: 'White American GNG', upc: "0001111004784", count: 0},{type: 'Case', name: 'Yellow American GNG', upc: "0001111004783", count: 0},
    {type: 'Case', name: 'Mesquite Turkey GNG', upc: "0001111095557", count: 0},{type: 'Case', name: 'Wildflower Honey Ham GNG', upc: "0001111995558", count: 0},
    {type: 'Case', name: 'Wildflower Honey Turkey', upc: "0001111095559", count: 0},{type: 'Case', name: 'Regular Potato Salad', upc: "0007210600123", count: 0},
    {type: 'Case', name: 'Cheddar Broccoli Pasta Salad', upc: "0001783983405", count: 0},{type: 'Case', name: 'Mexican Street Corn', upc: "0001783969005", count: 0},
    {type: 'Case', name: 'Peas and Cheese Salad', upc: "0001783911805", count: 0}, {type: 'Case', name: 'Mustard Potato Salad', upc: "0007210601241", count: 0},
    {type: 'Case', name: 'Zesty Bowtie Pasta Salad', upc: "0007210650429", count: 0}, {type: 'Case', name: 'Summer Slaw', upc: "0003022309223", count: 0},
    {type: 'Case', name: 'Nacho Cheese', upc: "0003614403341", count: 0}, {type: 'Case', name: 'Banana Pudding', upc: "0001111092033", count: 0},
    {type: 'Case', name: 'Sandwich Spread', upc: "0001111012297", count: 0}, {type: 'Case', name: 'Ham Spread', upc: "0001111012298", count: 0},
    {type: 'Case', name: 'Strawberry Shortcake', upc: "0001111092020", count: 0}, {type: 'Case', name: 'Tapioca Pudding', upc: "0001111092012", count: 0},
    {type: 'Case', name: 'Lavash', upc: "0008919370132", count: 0}, {type: 'Case', name: 'Buffalo Mac', upc: "000711714956", count: 0},
    {type: 'Case', name: 'Regular Mac', upc: "0007111714955", count: 0}, {type: 'Case', name: 'Taco Mac', upc: "0007111714957", count: 0},
    {type: 'Case', name: 'Taco Kit Chicken', upc: "0084013430435", count: 0}, {type: 'Case', name: 'Taco Kit Chicken', upc: "0084013430436", count: 0},
    {type: 'Case', name: 'Midwest Chicken Salad', upc: "0007210623815", count: 0}, {type: 'Case', name: 'Egg Potato Salad', upc: "0001111074325", count: 0},
    {type: 'Case', name: 'Relish Potato Salad', upc: "0007210601975", count: 0}, {type: 'Case', name: 'Red Wine/Greek Pasta', upc: "0007210604595", count: 0},
    {type: 'Case', name: 'Italian Pasta Salad', upc: "0007210604675", count: 0}, {type: 'Case', name: 'Greek Rotini', upc: "3445459", count: 0},
    {type: 'Case', name: 'Mashed Potato', upc: "0001111003861", count: 0}, {type: 'Case', name: 'Nasty Pulled Chicken', upc: "0001111011204", count: 0},
    {type: 'Case', name: 'Bulk Corn Thing', upc: "0007464101201", count: 0}, {type: 'Case', name: 'Bulk Green Beans Thing', upc: "0007464101200", count: 0},
    {type: 'Case', name: 'White Cheddar Mac Bulk', upc: "0001111003860", count: 0}, {type: 'Case', name: 'Turkey Gravy', upc: "0001111095050", count: 0},
    {type: 'Case', name: 'Raw Turkey Breast', upc: "0064220553788", count: 0}, {type: 'Case', name: 'Popcorn Chicken', upc: "0007701314572", count: 0},
    {type: 'Case', name: 'Ribss', upc: "0084013430118", count: 0}, {type: 'Case', name: 'Breaded Boneless Wings', upc: "0007701314570", count: 0},
    {type: 'Case', name: 'Breaded Tenders', upc: "0007701314569", count: 0}, {type: 'Case', name: 'Roasted Wings', upc: "0007701316787", count: 0},
    {type: 'Case', name: 'Sizzlin Wings', upc: "0007701316813", count: 0}, {type: 'Case', name: 'Breaded Wings', upc: "0007701314571", count: 0},
    {type: 'Case', name: 'Smoked Wings', upc: "0002370005119", count: 0}, {type: 'Case', name: 'Jojos Wedges', upc: "0004497900417", count: 0},
    {type: 'Case', name: 'Garlic Rotisserie Chicken', upc: "0084013430007", count: 0}, {type: 'Case', name: '8PC Chicken', upc: "0004172302345", count: 0},
    {type: 'Case', name: 'Regular Rotisserie Chicken', upc: "0084013430006", count: 0}, {type: 'Case', name: 'Organic Rotisserie Chicken', upc: "0007496035810", count: 0},
    {type: 'Case', name: 'Tenders', upc: "0007563245811", count: 0}, {type: 'Case', name: 'BBQ Chicken', upc: "0905570", count: 0},
    {type: 'Eaches', name: 'Tender Batter', upc: "0007029219907", count: 0}, {type: 'Eaches', name: 'Frying Oil', upc: "00075188498921", count: 0},
    {type: 'Eaches', name: 'Chicken Seasoning', upc: "0040519206794", count: 0}, {type: 'Eaches', name: 'Chicken Flour', upc: "0007029216167", count: 0},
    {type: 'Eaches', name: 'BBQ Sauce Packets', upc: "0002670015980", count: 0}
]

export default backRoomItems;