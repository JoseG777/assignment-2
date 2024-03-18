// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    let table = document.getElementById("grid");

    // Check if there are no columns
    if(numCols == 0){
        // If there are no columns, add one column because the grid is empty
        numCols++;
    }

    // Creating a new row using "tr" which is a table row
    let new_row = document.createElement("tr");

    // Create a new box for each column
    for(let i = 0; i <numCols; i++){

        // Create a new box using "td" which is a table data
        let newBox = document.createElement("td");

        // Set the color of the box to the selected color
        newBox.onclick = function()
        {
            newBox.style.backgroundColor=colorSelected
        };

        // Append the new box to the new row
        new_row.appendChild(newBox);
    }

    // Append the new row to the table
    table.appendChild(new_row);
    numRows++;
    
}

// Add a column
function addC() {
    let table = document.getElementById("grid");

    // If there are no rows, add one row because the grid is empty
    if(numRows == 0){
        addR();
    }

    // Iterate through each row and add a new box to the end of each row
    for(let i = 0; i < numRows; i++){
        let newBox = document.createElement("td");

        newBox.onclick = function()
        {
            newBox.style.backgroundColor=colorSelected
        };

        // Append the new box to the end of each row
        table.rows[i].appendChild(newBox);
    }
    
    numCols++;
}

// Remove a row
function removeR() {
    // If there are no rows, do nothing
    if(numRows == 0){
        return;
    }
    
    let table = document.getElementById("grid");
    
    // get the first row
    let row = table.querySelector("tr");
    
    // remove the first row
    table.removeChild(row);
    numRows--;
    
    // if the row we removed was the last remaining row, then we have no columns
    if(numRows == 0){
        numCols = 0;
    }
}

// Remove a column
function removeC() {
    alert("Clicked Remove Column"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}