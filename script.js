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

    let new_row = document.createElement("tr");
    for(let i = 0; i <numCols; i++){

        let newBox = document.createElement("td");

        newBox.onclick = function()
        {
            newBox.style.backgroundColor=colorSelected
        };

        new_row.appendChild(newBox);
    }

    table.appendChild(new_row);
    numRows++;
    
}

// Add a column
function addC() {
    alert("Clicked Add Col"); // Replace this line with your code.
}

// Remove a row
function removeR() {
    alert("Clicked Remove Row"); // Replace this line with your code.
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
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