// mood, value
// happy,1
// sad,1
// content,0
// excited,3
// angry,2

var data = [
  {
    x: ['happy', 'sad', 'content', 'excited', 'angry'],
    y: [1, 1, 0, 3, 2],
    type: 'bar'
  }
];

var layout = {
    // title: 'Hide the Plotly Logo on the Modebar',
    showlegend: false
};

Plotly.newPlot('myDiv', data, layout, {displaylogo: false});



// Plotly.newPlot('myDiv', data, layout, {modeBarButtonsToRemove: ['2D','3D','Cartesian','Geo','Other']})
