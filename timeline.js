var margin = {top: 30, right: 0, bottom: 300, left: 35},
    width = 1000,
    height = 800 - margin.top - margin.bottom;



// setup screen
var x0 = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

var x1 = d3.scale.ordinal();

var y = d3.scale.linear()
    .range([height, 0]);

var color = d3.scale.ordinal()
    .range(["#FD8D3C", "#E6550D", "#6BAED6", "#3182BD"]);

 
var xAxis = d3.svg.axis()
    .scale(x0)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .tickFormat(d3.format(".2s"));


var svg = d3.select("#chart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// d3.csv("data.csv", function(error, data) {
//   var years = d3.keys(data[0]).filter(function(key) { 
//   	return key !== "FY";
//   });
//    data.forEach(function(d) {
//     d.fiscalYears = years.map(function(name) { 
//     	return {
//     		name: name, 
//     		value: +d[name]
//     	}; 
//     });
//   });
//   x0.domain(data.map(function(d) { 
//   	return d.FY; 
//   }));
//   x1.domain(years).rangeRoundBands([0, x0.rangeBand()]);
//   y.domain([0, d3.max(data, function(d) { 
//   	return d3.max(d.fiscalYears, function(d) {
//    		return d.value; 
// 	}); 
//   })]);

//   svg.append("g")
//       .attr("class", "x axis")
//       .attr("transform", "translate(0," + height + ")")
//       .call(xAxis);

//   svg.append("g")
//       .attr("class", "y axis")
//       .call(yAxis)
//     .append("text")
//       .attr("transform", "rotate(-90)")
//       .attr("y", 6)
//       .attr("dy", ".71em")
//       .style("text-anchor", "end")
//       .text("Population");

//   var currYear = svg.selectAll(".FY")
//       .data(data)
//     .enter().append("g")
//       .attr("class", "g")
//       .attr("transform", function(d) { return "translate(" + x0(d.State) + ",0)"; });

//   FY.selectAll("rect")
//       .data(function(d) { return d.fiscalYears; })
//     .enter().append("rect")
//       .attr("width", x1.rangeBand())
//       .attr("x", function(d) { return x1(d.name); })
//       .attr("y", function(d) { return y(d.value); })
//       .attr("height", function(d) { return height - y(d.value); })
//       .style("fill", function(d) { return color(d.name); });

//   });
