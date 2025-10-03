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
    let table = document.getElementById("grid");
    
    if (table.rows.length == 0){
        alert("There are no rows to delete");
        return;
    }

    if (numRows > 0) {
        table.deleteRow(numRows-1);
        numRows--;
    }

    // Test case: resets numRows to 0 after delete entire table. 
    // issue: add 3 row, add 3 col, remove all row, empty grid, add row.. still 3 row. should be 1 row
    if (numRows == 1) {
        numCols = 0; // resolved but brute force resetted the col count 
    }
}

// Remove a column
function removeC() {
    //alert("Clicked Remove Col"); // Replace this line with your code.
        let table = document.getElementById("grid");

    if(table.rows.length == 0){
        alert("There is no columns to delete");
        return;
    }

    // if at least one col left
    if(numCols > 0 && numRows>0) {
        if (numCols == 1) {
            while (numRows > 0) {
                table.deleteRow(numRows-1);
                numRows--; 
            }
            numCols = 0;
            return;
        }

        for (let i = 0; i < numRows; i++) {
            let row = table.rows[i];
            row.deleteCell(numCols-1);
        }
        numCols--;
    }
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
    let table = document.getElementById("grid");

    // base case: no cells in table to fill
    if (numCols == 0 || numRows == 0) {
        alert("table is empty")
        return;
    }

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            let cell = table.rows[i].cells[j];
            if (cell.style.backgroundColor === "") {
                cell.style.backgroundColor = colorSelected;
            }
        }
    }
}

// Fill all cells
function fillAll(){
    //alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    //alert("Clicked Clear All"); // Replace this line with your code.
}