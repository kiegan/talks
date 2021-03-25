// code from d3 graph gallery: https://www.d3-graph-gallery.com/graph/scatter_grouped_highlight.html
// uses d3 version 4



// append the svg object to the body of the page
// don't need to do this! 
function svg_height() {return parseInt(svg.style('height'))}
function svg_width() {return parseInt(svg.style('width'))}
function x_min() {return Math.floor(d3.min(data, function (d) {return d.flipper_length_mm}))}
function x_max() {return Math.floor(d3.max(data, function(d) {return d.flipper_length_mm}))}
function y_min() {return Math.floor(d3.min(data, function (d) {return d.bill_length_mm}))}
function y_max() {return Math.floor(d3.max(data, function(d) {return d.bill_length_mm}))}

var ttip = d3.select("body").append("div")	
    .attr("class", "tooltip")				
    .style("opacity", 0);

// set the dimensions and margins of the graph
var margin = {top: 20, right: 10, bottom: 30, left: 50},
    width = svg_width() - margin.left - margin.right,
    height = svg_height() - margin.top - margin.bottom;

  // Add X axis
  var x = d3.scaleLinear()
    .domain([x_min(), x_max()])
    .range([ margin.left, width + margin.left]);
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x).tickSize(0));


  // text label for the x axis
  svg.append("text")             
      .attr("transform",
            "translate("+ (margin.left + (width/2))  + " ," + 
                           (height + margin.top + 20) + ")")
      .style("text-anchor", "middle")
      .text("Flipper Length (mm)");
      
  // Add Y axis
  var y = d3.scaleLinear()
    .domain([0, y_max()])
    .range([ height, margin.top]);
  svg.append("g")
    .attr('transform', 'translate(' + margin.left + ',0)')
    .call(d3.axisLeft(y).tickSize(0));
    
      // text label for the y axis
  svg.append("text")
      .attr("transform",
            "translate(" + 0 + " ," + 
                           (height/2) + ")rotate(-90)")

      .attr("dy", "1em")
      .attr("text-anchor", "middle")
      //.attr("transform", "rotate(-90)")
      .text("Bill Measurement (mm)");

      
  // Color scale: give me a specie name, I return a color
  var color = d3.scaleOrdinal()
    //.domain(["setosa", "versicolor", "virginica" ])
    //.range([ "#440154ff", "#21908dff", "#fde725ff"])
    .domain(["Adelie", "Chinstrap", "Gentoo" ])
    .range([ "darkorange", "purple", "darkgreen"]);


  // Add dots
  svg.append('g')
    .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");
  
svg.selectAll(".dot")
    .data(data)
    .enter()
    .append("circle")
      .attr("class", function (d) { return "dot " + d.species } )
      .attr("cx", function (d) { return x(d.flipper_length_mm); } )
      .attr("cy", function (d) { return y(d.bill_depth_mm); } )
      .attr("r", 5)
      .style("fill", function (d) { return color(d.species) } )
      
      //transition to bill depth instead of bill length
      .transition()
      .duration(2000)
      .attr("cy", function(d) {return y(d.bill_length_mm); } )
      
      //transition to bill depth instead of bill length
      .transition()
      .duration(2000)
      .attr("cy", function(d) {return y(d.bill_depth_mm); } )
      
            //transition to bill depth instead of bill length
      .transition()
      .duration(2000)
      .attr("cy", function(d) {return y(d.bill_length_mm); } );
      
