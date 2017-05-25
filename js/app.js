function visualizeOranges() {
  // This data will determine the size of our "oranges" that we will display
  var orangeData = [10, 30, 50, 100]


  // Target the div ('canvas') where our data will be displayed. Set its height and width.
  var canvas = d3.select(".orangeContainer")
    .append("svg")
    .attr("width", 1000)
    .attr("height", 300)

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
    // Define y axis of a circle
    .attr("cy", function(d){
      return d;
    })
    // Define radius of circle
    .attr("r", function (d){
      return d;
    })

    var redData = [30, 78, 67, 120]
    var canvas = d3.select(".redContainer")
    .append("svg")
    .attr("width", 2000)
    .attr("height", 200)

    var reds = canvas.selectAll("circle")
    .data(redData)
    .enter()
    .append("circle")
    .attr("fill", "red")
    .attr("cx", function(d, i){
      return d + (i*200)
    })
    .attr("cy", function(d, i){
      return d;
    })
    .attr("r", function(d){
      return d;
    })
}

function executeCities(){
  console.log("cities running")
  var data = [
     { name:"Ireland",  income:53000, life: 78, pop:6378, color: "green"},
     { name:"Norway",   income:73000, life: 87, pop:5084, color: "blue" },
     { name:"Tanzania", income:27000, life: 50, pop:3407, color: "grey" }
  ];
// Create SVG container
  var svg = d3.select("#hook").append("svg")
        .attr("width", 800)
        .attr("height", 400)
        .style("background-color", "#D0D0D0");
// Create SVG elements from data
    var cities = svg.selectAll("circle")                  // create virtual circle template
      .data(data)                            // bind data
      .enter()                                 // for each row in data...
      .append("circle")                      // bind circle & data row such that...
        .attr("id", function(d) { return d.name })           // set the circle's id according to the country name
        .attr("cx", function(d) { return d.income /180  })  // set the circle's horizontal position according to income
        .attr("cy", function(d) { return d.life })           // set the circle's vertical position according to life expectancy
        .attr("r",  function(d) { return d.pop /180 *2 })   // set the circle's radius according to country's population
        .attr("fill",function(d){ return d.color });         // set the circle's color according to country's color
      }
