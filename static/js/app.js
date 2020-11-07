d3.json("samples.json").then((importedData) => {
    var data = importedData;
    var names = data.names
    var meta = data.metadata;
    var samples = data.samples;
    var tbody = d3.select("tbody");
    //  console.log(meta[0].id)
    // console.log(samples[0].sample_values.length)

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

            var topTen = samples[0].otu_ids.slice(0,10)
            var otuCultures = []
            otuCultures.push("OTU " + topTen[0])
            otuCultures.push("OTU " + topTen[1])
            otuCultures.push("OTU " + topTen[2])
            otuCultures.push("OTU " + topTen[3])
            otuCultures.push("OTU " + topTen[4])
            otuCultures.push("OTU " + topTen[5])
            otuCultures.push("OTU " + topTen[6])
            otuCultures.push("OTU " + topTen[7])
            otuCultures.push("OTU " + topTen[8])
            otuCultures.push("OTU " + topTen[9])

            // Loop would not update otuCultures array outside of loop
            // for (j = 0; j > topTen.length; j++) {
            //     otuCultures.push("OTU" + topTen[j])
            //     console.log(otuCultures)
            // }
            
            console.log(otuCultures)

            var data = [{
                x: samples[0].sample_values.slice(0,10),
                y: otuCultures,
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
            var trace2 = {
                x: samples[0].otu_ids,
                y: samples[0].sample_values,
                mode: "markers",
                size: samples[0].sample_values,
                color: samples[0].otu_ids,
                text: samples[0].otu_labels,
                type: "scatter"
            }

            var data1 = [trace2]

            var layout1 = {
            title: "Samples",
            xaxis: {title: "OTU ID"}
            }

            Plotly.newPlot("bubble", data1, layout1)

            var metaLabels = ["blank", "ID: " + meta[0].id, "ethnicity: " + meta[0].ethnicity, "gender: " + meta[0].gender, "age: " + meta[0].age, "location: " + meta[0].location, "bbtype:" + meta[0].bbtype, "wfreq: " + meta[0].wfreq];
            console.log(metaLabels)
            var p = d3.select("body")
                .selectAll("p")
                .data(metaLabels)
                .text(function(d) {
                    return d;
                });


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

                var topTen = samples[i].otu_ids.slice(0,10)
                var otuCultures = []
                otuCultures.push("OTU " + topTen[0])
                otuCultures.push("OTU " + topTen[1])
                otuCultures.push("OTU " + topTen[2])
                otuCultures.push("OTU " + topTen[3])
                otuCultures.push("OTU " + topTen[4])
                otuCultures.push("OTU " + topTen[5])
                otuCultures.push("OTU " + topTen[6])
                otuCultures.push("OTU " + topTen[7])
                otuCultures.push("OTU " + topTen[8])
                otuCultures.push("OTU " + topTen[9])

                if (dataset === names[i]) {
                    x = samples[i].sample_values.slice(0,10),
                    y = otuCultures,
                    hover = samples[i].otu_labels.slice(0,10),
                    x1 = samples[i].otu_ids,
                    y1 = samples[i].sample_values,
                    size = samples[i].sample_values,
                    color = samples[i].otu_ids,
                    text = samples[i].otu_labels

                    var metaLabels = ["blank", "ID: " + meta[i].id, "ethnicity: " + meta[i].ethnicity, "gender: " + meta[i].gender, "age: " + meta[i].age, "location: " + meta[i].location, "bbtype:" + meta[i].bbtype, "wfreq: " + meta[i].wfreq];
                    console.log(metaLabels)
                    var p = d3.select("body")
                        .selectAll("p")
                        .data(metaLabels)
                        .text(function(d) {
                            return d;
                        });
                }


            }
          
            // Note the extra brackets around 'x' and 'y'
            Plotly.restyle("bar", "x", [x]);
            Plotly.restyle("bar", "y", [y]);
            Plotly.restyle("bar", "hovertext", [hover]);
            Plotly.restyle("bubble", "x", [x1]);
            Plotly.restyle("bubble", "y", [y1]);
            Plotly.restyle("bubble", "size", [size]);
            Plotly.restyle("bubble", "color", [color]);
            Plotly.restyle("bubble", "text", [text]);
          }
          
        init();
          
    
       
})

