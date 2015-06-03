
var margin = {top: 10, right: 20, bottom: 50, left: 100};
    var w = 1200 - margin.left - margin.right;
    var h = 600 - margin.top - margin.bottom;

var dataset; //to hold full dataset

var attributes = ["fiscalYear", "unit", "amount"]
var ranges = [[2012, 2015], [0,700]]
var div;

//x axis start and end dates
var minDate = 2012,
    maxDate = 2015;


$(document).ready(function(){

  d3.csv("universityunits_12.csv", function(error, universityUnits) {

    //read each year in seperately to nest them 


  //read in the data
    if (error) {
      return console.warn(error);
    }
    universityUnits.forEach(function(d) {
       // d.unit = +d.unit;
       // d.amount = +d.amount;
       // d.fiscalYear = +d.FY;
    });

    dataset= {
      name: "dataset",
      children: universityUnits
    }


     //create SVG element for graph
  // svg = d3.select("body").append("svg")
  //   .attr("width", w + margin.left + margin.right)
  //   .attr("height", h + margin.top + margin.bottom)
  //   .append("g")
  //   .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  div = d3.select("body").append("div")
    .attr("width", w + margin.left + margin.right)
    .attr("height", h + margin.top + margin.bottom)
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  

  color = d3.scale.category20c(),    


    //draw data
    drawVis(dataset);
  });



});



function drawVis(data) {

//make treemap
 var treemap = d3.layout.treemap()
    .size([w, h])
    .value(function(d){
      return d.amount;
    });

var node = div.datum(dataset).selectAll()
  .data(treemap.nodes)
  .enter().append("div")
  .attr("class", "node")
  .call(position)
  .style("background-color", function(d) {
          return d.name == 'dataset' ? '#fff' : color(d.name); })
  .append('div')
  .style("font-size", function(d) {
          // compute font size based on sqrt(area)
          var fontSize = 0.10*Math.sqrt(d.area)+'px'; 
          return fontSize })
   .text(function(d) { 
      return d.unit + " " + d.FY });


// var formatxAxis = d3.format('.0f'); 
// //create axis elements
// var xAxis = d3.svg.axis()
//     .scale(x)
//     .ticks(4)
//     .tickFormat(formatxAxis);

// var yAxis = d3.svg.axis()
//     .scale(y)
//     .orient("left");



// // append axis elements and add labels
// svg.append("g")
//     .attr("class", "axis")
//     .attr("transform", "translate(0," + h + ")")
//     .call(xAxis)
//      .append("text")
//       .attr("x", w)
//       .attr("y", 35)
//       .style("text-anchor", "end")
//       .text("Year");


// svg.append("g")
//    .attr("class", "axis")
//    .call(yAxis)
//       .append("text")
//       .attr("y",2 )
//       .attr("x", 20)
//       .attr("dy", ".71em")
//       .style("text-anchor", "end")
//       .text("$");     


//draw circles
// var circle = svg.selectAll("circle")
//   .data(data)
//   .enter()
//   .append("circle")
//     .attr("cx", function(d) {
//       return x(d.FY);
//     })
//     .attr("cy", function(d){
//       return y(d.amount);
//     })
//     .attr("r", 4)
//     .style("stroke", "black")
    

}


function position() {
  this.style("left", function(d) { return d.x + 50 + "px"; })
      .style("top", function(d) { return d.y + 100 + "px"; })
      .style("width", function(d) { return Math.max(0, d.dx - 1) + "px"; })
      .style("height", function(d) { return Math.max(0, d.dy - 1) + "px"; });
}



// set axis scales
var x = d3.scale.linear()
        .domain([minDate, maxDate])
        .range([0, w]);

var y = d3.scale.linear()
        .domain([0, 700])
        .range([h, 0]);





