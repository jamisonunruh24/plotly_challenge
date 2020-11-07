# plotly_challenge
week 15 homework

made a interactive page that shows graphs and demographic information about test subjects belly button cultures.
First chart is the top 10 cultures found in each subject.  This is acomplished by taking the array and slicing it after the 10th item is pulled.
The second chart is a scatter plot of all cultures.  The color and size scaling is not working correct for the second chart.
The demographic is called from the meta data and placed into an array and placed into <p> tags inside the deographics box.
  
 The plots update by a loop that checks which test subject matter matches the samples, then appends all the information in the plots to that test subjects data.
