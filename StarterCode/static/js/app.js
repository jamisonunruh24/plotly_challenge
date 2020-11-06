d3.json("samples.json").then((importedData) => {
    var data = importedData;
    var names = data.names
    var samples = data.samples

    d3.select("select")
        .selectAll("option")
        .data(names)
        .text(function(d){
            return d
        })
    d3.select("select")
        .selectAll("option")
        .data(names)
        .enter()
        .append("option")
        .text(function(d) {
            return d
        })

        function init() {
            var data = [{
                x: samples[0].sample_values.slice(0,10),
                y: samples[0].otu_ids.slice(0,10),
                hovertext: samples[0].otu_labels.slice(0,10),
                orientation: "h",
                type: "bar"
            }]

            var layout = {
            title: "top 10 OTUs",
            xaxis: {title: "Sample Values"},
            yaxis: {title: "OTU ID's"}

            };

            Plotly.newPlot("bar", data, layout)
        }
          
          // Call updatePlotly() when a change takes place to the DOM
          d3.selectAll("#selDataset").on("change", updatePlotly);
          
          // This function is called when a dropdown menu item is selected
          function updatePlotly() {
            // Use D3 to select the dropdown menu
            var dropdownMenu = d3.select("#selDataset");
            // Assign the value of the dropdown menu option to a variable
            var dataset = dropdownMenu.property("value");
          
            // Initialize x and y arrays
            var x = [];
            var y = [];
            var hover = [];
          
            for (var i = 0; i < names.length; i++) { 
                if (dataset === names[i]) {
                    x = samples[i].sample_values.slice(0,10),
                    y = samples[i].otu_ids.slice(0,10),
                    hover = samples[i].otu_labels.slice(0,10)
                }
            }
          
            // Note the extra brackets around 'x' and 'y'
            Plotly.restyle("bar", "x", [x]);
            Plotly.restyle("bar", "y", [y]);
            Plotly.restyle("bar", "hovertext", [hover]);
          }
          
        init();
          
    
       
})

