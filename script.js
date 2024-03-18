// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    let table = document.getElementById("grid");

    // Check if there are no columns
    if(numRows == 0){
        numCols = 0;
    }
    numRows++;

    // Creating a new row using "tr" which is a table row
    let new_row = table.insertRow();

    // Create a new box for each column
    for(let i = 0; i <= numCols; i++){

        // Create a new box using "td" which is a table data
        let newBox = new_row.insertCell();

        // Set the color of the box to the selected color
        newBox.onclick = function()
        {
            newBox.style.backgroundColor=colorSelected
        };

        // Append the new box to the new row
       // new_row.appendChild(newBox);
    }

    // Append the new row to the table
    //numRows++;

    console.log("Rows: " + numRows + " Columns: " + numCols + "\n Added a row");
    
}

// Add a column
function addC() {
    let table = document.getElementById("grid");
    //numCols++;
    // If there are no rows, add one row because the grid is empty
    if(numRows == 0) {
        addR(); // Use addR to add both a row and a column if the grid is empty
        return;
    }
    numCols++;
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

    //numCols = table.rows[0].cells.length;
    console.log("Rows: " + numRows + " Columns: " + numCols + "\n Added a column");
    
}

// Remove a row
function removeR() {
    // If there are no rows, do nothing
    if(numRows == 0){
        return;
    }

    let table = document.getElementById("grid");
    table.deleteRow(-1); 
    numRows--;
    
    // if the row we removed was the last remaining row, then we have no columns
    if(numRows == 0){
        numCols = 0;
    }

    console.log("Rows: " + numRows + " Columns: " + numCols + "\n Removed a row");
}

// Remove a column
function removeC() {
    let table = document.getElementById("grid");
    // If there are no columns, make sure to delete rows if there are any
    if(numCols == 0){
        numRows = 0;
        while(table.rows.length > 0)
        {
            table.deleteRow(0);
        }
        return;
    }

    // Iterate through each row and delete the last box in each row
    numCols--;
    for(let i = 0; i < table.rows.length; i++)
    {
        table.rows[i].deleteCell(-1);
    }


    console.log("Rows: " + numRows + " Columns: " + numCols + "\n Removed a column");

}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    let table = document.getElementById("grid");

    for(let j = 0; j < table.rows[i].cells.length; j++)
    {
      if(table.rows[i].cells[j].style.backgroundColor === "")
      {
        table.rows[i].cells[j].style.backgroundColor = colorSelected;
      }
    }
}

// Fill all cells
function fillAll(){
    let table = document.getElementById("grid");

    // Iterate through each cell and set the background color to the selected color
    for(let i = 0; i < table.rows.length; i++)
    {
        for(let j = 0; j < table.rows[i].cells.length; j++)
        {
            table.rows[i].cells[j].style.backgroundColor = colorSelected;
        }
    }
}

// Clear all cells
function clearAll(){
    let table = document.getElementById("grid");

    // Iterate through each row and delete
    while(table.rows.length > 0)
    {
        table.deleteRow(0);
    }

    numRows = 0;
    numCols = 0;

}