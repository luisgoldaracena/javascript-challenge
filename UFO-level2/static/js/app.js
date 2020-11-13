// from data.js
var tableData = data;

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input elements and get the raw HTML node
    var inputElement_date = d3.select("#datetime");
    var inputElement_city = d3.select("#city_input");
    var inputElement_state = d3.select("#state_input");
    var inputElement_country = d3.select("#country_input");
    var inputElement_shape = d3.select("#shape_input");

    // Get the value property of the input element
    var inputdate = inputElement_date.property("value");
    var inputcity = inputElement_city.property("value");
    var inputstate = inputElement_state.property("value");
    var inputcountry = inputElement_country.property("value");
    var inputshape = inputElement_shape.property("value");


    if (inputcity === "" && inputstate === "" && inputcountry === "" && inputshape === "") {
        var filteredData = tableData.filter(ovni => ovni.datetime === inputdate);
    }
    else if (inputcity === "" && inputstate === "" && inputcountry === "" && inputdate ===""){
        var filteredData = tableData.filter(ovni => ovni.shape === inputshape);
    }
    else if (inputcity === "" && inputstate === "" && inputshape === "" && inputdate ===""){
        var filteredData = tableData.filter(ovni => ovni.country === inputcountry);
    }
    else if (inputcity === "" && inputcountry === "" && inputshape === "" && inputdate ===""){
        var filteredData = tableData.filter(ovni => ovni.state === inputstate);
    }
    else if (inputstate === "" && inputcountry === "" && inputshape === "" && inputdate ===""){
        var filteredData = tableData.filter(ovni => ovni.city === inputcity);
    }
    else if (inputcity === "" && inputstate === "" && inputcountry === "") {
        var filteredData = tableData.filter(ovni => ovni.datetime === inputdate && ovni.shape === inputshape);
    };
    

    var tbody = d3.select("#tbody");
    
    tbody.html("");

    console.log(filteredData);

};

