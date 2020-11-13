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
    }
    else if (inputcity === "" && inputstate === "" && inputshape === "") {
        var filteredData = tableData.filter(ovni => ovni.datetime === inputdate && ovni.country === inputcountry);
    }
    else if (inputcity === "" && inputcountry === "" && inputshape) {
        var filteredData = tableData.filter(ovni => ovni.datetime === inputdate && ovni.state === inputstate);
    }
    else if (inputstate === "" && inputcountry === "" && inputshape){
        var filteredData = tableData.filter(ovni => ovni.datetime === inputdate && ovni.city === inputcity);
    }
    else if (inputstate === "" && inputcountry === "" && inputdate ===""){
        var filteredData = tableData.filter(ovni => ovni.shape === inputshape && ovni.city === inputcity);
    }
    else if (inputstate === "" && inputcity === "" && inputdate ==="") {
        var filteredData = tableData.filter(ovni => ovni.shape === inputshape && ovni.country === inputcountry);
    }
    else if (inputcountry === "" && inputcity === "" && inputdate ===""){
        var filteredData = tableData.filter(ovni => ovni.shape === inputshape && ovni.state === inputstate);
    }
    else if (inputstate === "" && inputshape === "" && inputdate ===""){
        var filteredData = tableData.filter(ovni => ovni.country === inputcountry && ovni.city === inputcity);
    }
    else if (inputcity === "" && inputshape === "" && inputdate ===""){
        var filteredData = tableData.filter(ovni => ovni.country === inputcountry && ovni.state === inputstate);
    }
    else if (inputcountry === "" && inputshape === "" && inputdate ===""){
        var filteredData = tableData.filter(ovni => ovni.state === inputstate && ovni.city === inputcity);
    }
    else if (inputcity === "" && inputstate === ""){
        var filteredData = tableData.filter(ovni => ovni.datetime === inputdate && ovni.shape === inputshape && ovni.country === inputcountry);
    }
    else if (inputcity === "" && inputshape === ""){
        var filteredData = tableData.filter(ovni => ovni.datetime === inputdate && ovni.state === inputstate && ovni.country === inputcountry);
    }
    else if (inputstate === "" && inputshape === ""){
        var filteredData = tableData.filter(ovni => ovni.datetime === inputdate && ovni.city === inputcity && ovni.country === inputcountry);
    }
    else if (inputstate === "" && inputcountry === ""){
        var filteredData = tableData.filter(ovni => ovni.datetime === inputdate && ovni.city === inputcity && ovni.shape === inputshape);
    }
    else if (inputcity === "" && inputcountry === ""){
        var filteredData = tableData.filter(ovni => ovni.datetime === inputdate && ovni.state === inputstate && ovni.shape === inputshape);
    }
    else if (inputshape === "" && inputcountry === ""){
        var filteredData = tableData.filter(ovni => ovni.datetime === inputdate && ovni.state === inputstate && ovni.city === inputcity);
    }
    else if (inputdate === "" && inputcountry === ""){
        var filteredData = tableData.filter(ovni => ovni.shape === inputshape && ovni.state === inputstate && ovni.city === inputcity);
    }
    else if (inputdate === "" && inputcity === ""){
        var filteredData = tableData.filter(ovni => ovni.shape === inputshape && ovni.state === inputstate && ovni.country === inputcountry);
    }
    else if (inputdate === "" && inputstate === ""){
        var filteredData = tableData.filter(ovni => ovni.shape === inputshape && ovni.city === inputcity && ovni.country === inputcountry);
    }
    else if (inputdate === "" && inputshape === ""){
        var filteredData = tableData.filter(ovni => ovni.state === inputstate && ovni.city === inputcity && ovni.country === inputcountry);
    }
    else if (inputshape === ""){
        var filteredData = tableData.filter(ovni => ovni.datetime === inputdate && ovni.state === inputstate && ovni.country === inputcountry && ovni.city === inputcity);
    }
    else if (inputstate === ""){
        var filteredData = tableData.filter(ovni => ovni.datetime === inputdate && ovni.shape === inputshape && ovni.country === inputcountry && ovni.city === inputcity);
    } 
    else if (inputcity === ""){
        var filteredData = tableData.filter(ovni => ovni.datetime === inputdate && ovni.shape === inputshape && ovni.country === inputcountry && ovni.state === inputstate);
    }
    else if (inputcountry === ""){
        var filteredData = tableData.filter(ovni => ovni.datetime === inputdate && ovni.shape === inputshape && ovni.city === inputcity && ovni.state === inputstate);
    }
    else if (inputdate === ""){
        var filteredData = tableData.filter(ovni => ovni.country === inputcountry && ovni.shape === inputshape && ovni.city === inputcity && ovni.state === inputstate);
    }
    else {
        var filteredData = tableData.filter(ovni => ovni.country === inputcountry && ovni.shape === inputshape && ovni.city === inputcity && ovni.state === inputstate && ovni.datetime === inputdate);
    };

    var tbody = d3.select("#tbody");
    
    tbody.html("");

    console.log(filteredData);

};

