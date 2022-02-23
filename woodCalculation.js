function woodCalculation(chairQuantity, tableQuantity, bedQuantity) {

    const perChairWood = 4;
    const perTableWood = 6;
    const perBedWood = 20;

    chairWoodNeeded = chairQuantity * perChairWood;
    // console.log(chairWoodNeeded);
    tableWoodeNeeded = tableQuantity * perTableWood;
    bedWoodedNeeded = bedQuantity * perBedWood;

    totalWoodNeeded = chairWoodNeeded + tableWoodeNeeded + bedWoodedNeeded

    return totalWoodNeeded;

}

var result = woodCalculation(2, 3, 4);
console.log('total amount od wood::', result);