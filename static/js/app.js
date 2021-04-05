// From data.js
var tableData = data;

// Select table body
var tbody = d3.select("tbody");

// Function to populate table
function populateTable() {
    tableData.map(data => {

        // Make new row
        var row = tbody.append("tr");
    
        // Append each row with data
        row.append("td").text(data.datetime);
        row.append("td").text(data.city);
        row.append("td").text(data.state);
        row.append("td").text(data.country);
        row.append("td").text(data.shape);
        row.append("td").text(data.durationMinutes);
        row.append("td").text(data.comments);
    });
}

// POPULATE TABLE
populateTable();

// EVENT LISTENER: filter table by datetime input
var button1 = d3.select("#filter-btn");

button1.on("click", function() {

    // Select user input
    var inputValue = d3.select("#datetime").property("value");

    console.log(inputValue);
    
    // Filter table based on user input
    var filteredData = tableData.filter(data => data.datetime === inputValue);
    console.log(filteredData);

    // Clear original table
    tbody.html("");

    // Write new table with forEach loop
    filteredData.forEach(obj => {
        
        // Make new row
        var row = tbody.append("tr");

        // Append each row with data
        row.append("td").text(obj.datetime);
        row.append("td").text(obj.city);
        row.append("td").text(obj.state);
        row.append("td").text(obj.country);
        row.append("td").text(obj.shape);
        row.append("td").text(obj.durationMinutes);
        row.append("td").text(obj.comments);
    });
});

// EVENT LISTERNER: clear table filter
var button2 = d3.select("#clearfilter-btn");

button2.on("click", function(){
    tbody.html("");
    populateTable();
});

// Using multiple input tags and/or select dropdowns, write JavaScript code so the user can to set multiple filters and search for UFO sightings using the following criteria based on the table columns:

// date/time
// city
// state
// country
// shape

