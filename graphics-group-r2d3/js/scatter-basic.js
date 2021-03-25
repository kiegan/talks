svg.selectAll('circle')
  .data(data)
  .enter().append('circle')
    .attr('cx', function(d) { return d.flipper_length_mm; })
    .attr('cy', function(d) {return d.bill_length_mm; })
    .attr('r', 5)
    .attr('fill', 'steelblue');
    

