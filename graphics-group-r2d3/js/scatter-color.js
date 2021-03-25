  var color = d3.scaleOrdinal()
    .domain(["Adelie", "Chinstrap", "Gentoo" ])
    .range([ "darkorange", "purple", "darkgreen"]);
    
svg.selectAll('circle')
  .data(data)
  .enter().append('circle')
    .attr('cx', function(d) { return d.flipper_length_mm; })
    .attr('cy', function(d) {return d.bill_length_mm; })
    .attr('r', 5)
    .style("fill", function (d) { return color(d.species) } );
    
