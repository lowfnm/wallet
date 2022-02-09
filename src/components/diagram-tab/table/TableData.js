const createData = (category, amount) => {
    return { category, amount };
};

const categories = [
    createData("Main expenses", 8700.0),
    createData("Products", 3800.74),
    createData("Car", 1500.0),
    createData("Self-care", 800.0),
    createData("Care of children", 2208.5),
    createData("Housewares", 300.0),
    createData("Education", 3400.0),
    createData("Leisure", 1230.0),
    createData("Other expenses", 610.0),
];

const spanColors = [
    "#FED057",
    "#FFD8D0",
    "#FD9498",
    "#C5BAFF",
    "#6E78E8",
    "#4A56E2",
    "#81E1FF",
    "#24CCA7",
    "#00AD84",
];

export { categories, spanColors };
