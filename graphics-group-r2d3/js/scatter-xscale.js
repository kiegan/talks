  // Add X axis
var x = d3.scaleLinear()
    .domain([165, 240])
    .range([ 0, width]);
//svg.append("g")
//    .attr("transform", "translate(0," + svg_height() + ")")
//    .call(d3.axisBottom(x).tickSize(0));
  

var color = d3.scaleOrdinal()
    .domain(["Adelie", "Chinstrap", "Gentoo" ])
    .range([ "darkorange", "purple", "darkgreen"]);
    
svg.selectAll('circle')
  .data(data)
  .enter().append('circle')
    .attr('cx', function(d) { return x(d.flipper_length_mm); })
    .attr('cy', function(d) {return d.bill_length_mm; })
    .attr('r', 5)
    .style("fill", function (d) { return color(d.species) } );

