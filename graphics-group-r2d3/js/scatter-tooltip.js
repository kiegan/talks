var ttip = d3.select("body").append("div")	
    .attr("class", "tooltip")				
    .style("opacity", 0);

  // Add X axis
var x = d3.scaleLinear()
    .domain([165, 240])
    .range([ 0, width]);
//svg.append("g")
//    .attr("transform", "translate(0," + (height - 20) + ")")
//    .call(d3.axisBottom(x));
  
  // Add Y axis
  var y = d3.scaleLinear()
    .domain([30, 60])
    .range([ height, 0]);
//  svg.append("g")
//    .attr('transform', 'translate(' + 20 + ',0)')
//      .call(d3.axisLeft(y));


var color = d3.scaleOrdinal()
    .domain(["Adelie", "Chinstrap", "Gentoo" ])
    .range([ "darkorange", "purple", "darkgreen"]);
    
svg.selectAll('circle')
  .data(data)
  .enter().append('circle')
    .attr('cx', function(d) { return x(d.flipper_length_mm); })
    .attr('cy', function(d) {return y(d.bill_length_mm); })
    .attr('r', 5)
    .style("fill", function (d) { return color(d.species) } )
    .style("stroke-width", 0)
    .style("stroke", "black")
    .style("opacity", 0.8)
    .on("mouseover", function(d){
        d3.select(this).attr("r", 10).style("stroke-width", 2).style("opacity", 1);
        ttip.style("opacity", 0.9);
        ttip.html("This is a " + d.species + " penguin" + "<br/>" + 
                  "from " + d.island + " island") 
            .style("left", (d3.event.pageX) + 5 + "px")
            .style("top", (d3.event.pageY) + "px");
    })
    .on("mouseout", function(d){
      d3.select(this).attr("r", 5).style("stroke-width", 0).style("opacity", 0.8);
      ttip.style("opacity", 0);
    })
