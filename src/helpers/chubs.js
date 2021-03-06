let chubs = [
    {type:'BH', name: 'BH Maple Turkey', weight: 6.45, upc:"0004242161136", count: 0},{type:'BH', name: 'BH Blackened Turkey', weight: 5.19, upc: "0004242161420", count: 0},
    {type:'BH', name: 'BH No Salt Turkey', weight: 3.1, upc: "0004242161413", count: 0},{type:'BH', name: 'BH Mesquite Turkey', weight: 6.22, upc:"0004242161147", count: 0},
    {type:'BH', name: 'BH Cracked Pepper Turkey', weight: 4, upc: "0004242161141", count: 0},{type:'BH', name: 'BH Ovengold', weight: 8.78, upc: "0004242161142", count: 0},
    {type:'BH', name: 'BH Salsalito', weight:3.58, upc:"0004242161144", count: 0},{type:'BH', name: 'BH Cajun Turkey', weight: 4, upc: "0004242161148", count: 0},
    {type:'BH', name: 'BH Honey Smoked Turkey', weight: 6, upc: "0004242161312", count: 0},{type:'BH', name: 'BH Aloha', weight: 3.95, upc: "0004242161512", count: 0},
    {type:'BH', name: 'BH L/S Turkey', weight: 7.11, upc: "0004242161184", count: 0},{type:'BH', name: 'BH Black Forest Turkey', weight: 4.4, upc: "0004242161149", count: 0},
    {type:'BH', name: 'BH Classic Chicken', weight: 4, upc: "0004242161268", count: 0},{type:'BH', name: 'BH Everroast Chicken', weight: 4, upc: "0004242161385", count: 0},
    {type:'BH', name: 'BH Teriyaki Chicken', weight: 3.93, upc: "0004242161445", count: 0},{type:'BH', name: 'BH Chipotle Chicken', weight: 3.95, upc: "0004242161418", count: 0},
    {type:'BH', name: 'BH Buffalo Chicken', weight: 4, upc: "0004242161272", count: 0},{type:'BH', name: 'BH BBQ Chicken', weight: 4.5, upc: "0004242161339", count: 0},
    {type:'BH', name: 'BH Rotisserie Chicken', weight: 4, upc: "0004242161339", count: 0},{type:'BH', name: 'BH Curry Chicken', weight: 3.82, upc: "0004242161450", count: 0},
    {type:'BH', name: 'BH Maple Ham', weight: 7.19, upc: "0004242161112", count: 0},{type:'BH', name: 'BH Tavern Ham', weight: 4.02, upc: "0004242161264", count: 0},
    {type:'BH', name: 'BH Deluxe Ham', weight: 9.75, upc: "0004242161100", count: 0},{type:'BH', name: 'BH BlackForest Ham', weight: 7.03, upc: "0004242161434", count: 0},
    {type:'BH', name: 'BH L/S Ham', weight: 4.31, upc: "0004242161115", count: 0},{type:'BH', name: 'BH Sweet Slice', weight: 5.21, upc: "0004242161114", count: 0},
    {type:'BH', name: 'BH Bourbon Ham', weight: 3.21, upc: "0004242161460", count: 0},{type:'BH', name: 'BH London Broil', weight: 5, upc: "0004242161411", count: 0},
    {type:'BH', name: 'BH L/S Roast Beef', weight: 4.97, upc: "0004242161134", count: 0},
    {type:'BH', name: 'BH Corn Beef', weight: 5.97, upc: "0004242161125", count: 0},{type:'BH', name: 'BH Seasoned Beef', weight: 5.68, upc: "0004242161273", count: 0},
    {type:'BH', name: 'BH Pastrami', weight: 5.8, upc: "0004242161126",count: 0},{type:'BH', name: 'BH Hard Salami', weight: 2.7, upc: "0004242161213", count: 0},
    {type:'BH', name: 'BH Genoa Salami', weight: 3.8, upc: "0004242161212", count: 0},{type:'BH', name: 'BH Pepperoni', weight: 3.4, upc: "0004242161214", count: 0},
    {type:'BH', name: 'BH Beef Bologna', weight: 3.32, upc: "0004242161171", count: 0},{type:'BH', name: 'BH Garlic Bologna', weight: 3.78, upc: "0004242161169", count: 0},
    {type:'BH', name: 'BH White American', weight: 5, upc: "0004242161227", count: 0},{type:'BH', name: 'BH Yellow American', weight: 5, upc: "0004242161226", count: 0},
    {type:'BH', name: 'BH 3-PepperJack', weight: 2.5, upc: "0004242161410", count: 0},{type:'BH', name: 'BH Muenster', weight: 6, upc: "0004242161228", count: 0},
    {type:'BH', name: 'BH Havarti', weight: 4.5, upc: "0004242161246", count: 0},{type:'BH', name: 'BH PepperJack', weight: 5.3, upc: "0004242161254", count: 0},
    {type:'BH', name: 'BH Mozzarella', weight: 5, upc: "0004242161238", count: 0},{type:'BH', name: 'BH Provolone', weight: 5.6, upc: "0004242161224", count: 0},
    {type:'BH', name: 'BH Imported Swiss', weight: 7.5, upc: "0004242161241", count: 0},{type:'BH', name: 'BH Baby Swiss', weight: 5.2, upc: "0004242161236", count: 0},
    {type:'BH', name: 'BH Yellow Cheddar', weight: 5.25, upc: "0004242161220", count: 0},{type:'BH', name: 'BH White Cheddar', weight: 5.75, upc: "0004242161219",count: 0},
    {type:'BH', name: 'BH ColbyJack', weight: 3.5, upc: "0004242161281", count: 0},{type:'BH', name: 'BH Lacey Swiss', weight: 5, upc: "0004242161235", count: 0},
    {type:'BH', name: 'BH BlackWax', weight: 3.75, upc: "0004242161232", count: 0},{type:'BH', name: 'BH Horseradish Cheddar', weight: 5, upc: "0004242161296", count: 0},
    {type:'BH', name: 'BH Colby', weight: 3.5, upc: "0004242161222", count: 0},{type:'BH', name: 'BH Smoked Gouda', weight: 4, upc: "0004242161355", count: 0},
    {type:'BH', name: 'BH Chipotle Gouda', weight: 3, upc: "0004242161409", count: 0},{type: 'PS', name: 'PS Honey Turkey', weight: 9, upc: "0001111099497",count: 0},
    {type: 'PS', name: 'PS Oven Roast Turkey', weight: 8, upc: "0001111099496",count: 0},{type: 'PS', name: 'PS Mesquite Turkey', weight: 8, upc: "0001111099498",count: 0},
    {type: 'PS', name: 'PS Peppered Turkey', weight: 3.5, upc: "0001111060734",count: 0},{type: 'PS', name: 'PS Sriracha Turkey', weight: 1.0, upc: "0001111019277", count:0},
    {type: 'PS', name: 'PS Nashville Chicken', weight: 5, upc: "0001111019274",count: 0},{type: 'PS', name: 'PS Black Forest Ham', weight: 4.25, upc: "0001111099024", count: 0},
    {type: 'PS', name: 'PS Roast Beef', weight: 6.5, upc: "0001111060263",count: 0},{type: 'PS', name: 'PS Brown Sugar Ham', weight: 4.25, upc: "0001111099415",count: 0},
    {type: 'PS', name: 'PS CherryWood Ham', weight: 5, upc: "0001111011213",count: 0},{type: 'PS', name: 'PS Polish Ham', weight: 7, upc: "0001111011501", count: 0},
    {type: 'PS', name: 'PS Maple Ham', weight: 4.5, upc: "0001111011500", count: 0}, {type: 'PS', name: 'PS Honey Ham', weight: 5, upc: "0001111018103", count: 0},
    {type: 'PS', name: 'PS L/S Chicken', weight: 5.5, upc: "0001111058667",count: 0},{type: 'PS', name: 'PS Tavern Ham', weight: 4.5, upc: "0001111058676",count: 0},
    {type: 'PS', name: 'PS Genoa Salami', weight: 3.75, upc: "0001111060273", count: 0},{type: 'PS', name: 'PS Hard Salami', weight: 3.75, upc: "0001111060274",count: 0},
    {type: 'PS', name: 'PS Beef Bologna', weight: 3.4, upc: "0001111052230",count: 0},{type: 'PS', name: 'PS Pepperoni', weight: 3.125, upc: "0001111099838",count: 0},
    {type: 'PS', name: 'PS Yellow American', weight: 5, upc: "0001111058673",count: 0},{type: 'PS', name: 'PS White American', weight: 5, upc: "0001111058674",count: 0},
    {type: 'PS', name: 'PS Baby Swiss', weight: 7, upc: "0001111060715",count: 0},{type: 'PS', name: 'PS Colby Jack', weight: 6.25, upc: "0001111060716",count: 0},
    {type: 'PS', name: 'PS Colby', weight: 6.25, upc: "0001111060719",count: 0},{type: 'PS', name: 'PS Provolone', weight: 6, upc: "0001111060721",count: 0},
    {type: 'PS', name: 'PS Aged Gouda', weight: 3, upc: "0001111058364", count: 0},{type:'PS', name: 'PS Havarti', weight: 4.5, upc: "0001111000274", count: 0},
    {type: 'PS', name: 'PS Muenster', weight: 6, upc: "0001111000041", count: 0},{type: 'PS', name: 'PS PepperJack', weight: 4.235, upc: "0001111060717", count: 0}
]

export default chubs;