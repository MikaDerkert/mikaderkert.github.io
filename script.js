// Our labels along the x-axis
var years = ["October " + 16,"October " + 17,"October " + 18,"October " + 19,"October " + 20,"October " + 21,"October " + 22];
// For drawing the lines
var steps = [13948,7650,10560,12468,18951,14054,6035];

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: years,
    datasets: [
      { 
        data: steps,
        label: 'steps',
        fill: false,
        borderColor: '#3e95cd'
        
      }
    ]
  }
});