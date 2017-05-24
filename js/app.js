function visualizeOranges() {
  // This data will determine the size of our "oranges" that we will display
  var orangeData = [10, 30, 50, 100]

  // Target the div ('canvas') where our data will be displayed. Set its height and width.
  var canvas = d3.select(".orangeContainer")
    .append("svg")
    .attr("width", 768)
    .attr("height", 1024)

    // set a variable for your shapes or representations. This will apply to all circles within the SVG
  var oranges = canvas.selectAll("circle")
      // pull in the data from array above
    .data(orangeData)
    //  'Enter' says "Okay, let's use the data now to create the elements"
    .enter()
    .append("circle")
    .attr("fill", "orange")
      // Define x axis of a circle. Each circle needs to hav ea unique cx value so they aren't on top of each other
    .attr("cx", function(d, i){
      return d + (i * 100)
    })
    .attr("cy", function(d){
      return d;
    })
    .attr("r", function (d){
      return d;
    })
      // Define y axis of a circle
}
