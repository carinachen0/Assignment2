// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    //alert("Clicked Add Row"); // Replace this line with your code.
    let table = document.getElementById("grid");

    // Base case: empty grid and create first cell
    if (numRows == 0 && numCols == 0) {
        let row = table.insertRow(0);
        let cell = row.insertCell(0);
        fillClickedCell(cell);
        numRows = 1;
        numCols = 1;
        return;
    }

    // Add new row with same number as cells as currents columns
    let row = table.insertRow(0);
    for (let i = 0; i < numCols; i++) {
        let cell = row.insertCell(i);
        fillClickedCell(cell); // attach click to fill color function
    }
    numRows++;
}

// Add a column
function addC() {
    // alert("Clicked Add Col"); // Replace this line with your code.
    let table = document.getElementById("grid");
    for (let i = 0; i < numRows; i++) {
        let currentRow = table.rows[i];
        let newCell = currentRow.insertCell(numCols);
        fillClickedCell(newCell); // attach click to fill color function
    }
    numCols++;
}

// Remove a row
function removeR() {
    // alert("Clicked Remove Row"); // Replace this line with your code.
}

// Remove a column
function removeC() {
    //alert("Clicked Remove Col"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// add function for coloring a clicked cell
function fillClickedCell(cell) {
    cell.onclick = function() {
        this.style.backgroundColor = colorSelected;
    }
}

// Fill all uncolored cells
function fillU(){
    //alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    //alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    //alert("Clicked Clear All"); // Replace this line with your code.
}