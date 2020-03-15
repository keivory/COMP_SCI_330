// mood, value
// happy,1
// sad,1
// content,0
// excited,3
// angry,2

var trace = {
  y: [3, 2, 2, 5, 5, 5],
  x: [16, 17, 19, 20, 21, 22],
  type: 'scatter',
  name: 'Mood Level'
};

var data = [trace];


var layout = {
    // title: 'Hide the Plotly Logo on the Modebar',
    showlegend: true,
    title: {
      text:'Mood over the course of the week',
      font: {
        size: 24
      },
      xref: 'paper',
      x: 0.05,
    },
    xaxis: {
      title: {
        text: 'Days of the Week',
        font: {
          size: 18,
          color: '#7f7f7f'
        }
      },
    },
    yaxis: {
      title: {
        text: 'Mood Rating (1 being sad and 5 being happy)',
        font: {
          size: 18,
          color: '#7f7f7f'
        }
      }
    }
  };

Plotly.newPlot('myDiv', data, layout, {displaylogo: false});




const moodpage = (ev) => {
    console.log("mood page is called")
    window.location.href = 'weeklymood.html';

};
// Plotly.newPlot('myDiv', data, layout, {modeBarButtonsToRemove: ['2D','3D','Cartesian','Geo','Other']})
