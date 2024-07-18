// Set the initial zoom and center

let myMap = L.map('map', {center: [30,-100], zoom: 4});

// Add the tile layer from openstreetmap

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);

url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"

// Add the ability to change the color of the circle depending on the depth of the earthquake

function getColor(depth){
    if (depth > 90){
        return 'red';
    }
    else if (depth > 70){
        return 'orangered';
    }
    else if (depth > 50){
        return 'orange';
    }
    else if (depth > 30){
        return 'gold';
    }
    else if (depth > 10){
        return 'yellowgreen';
    }
    else if (depth <= 10){
        return 'limegreen';
    }
}

d3.json(url).then(data => {

    for (let i=0; i < data.features.length; i++){

        // Gather the json information to create the circle markers

        let coords = data.features[i].geometry.coordinates;

        let lon = coords[0];
        let lat = coords[1];
        let depth = coords[2];

        let properties = data.features[i].properties;
        let magnitude = properties.mag;
        let place = properties.place;


        // Introduce the collected data in a circle for each earthquake

        L.circleMarker([lat, lon],{
            radius: getRadius(magnitude),
            fillColor: getColor(depth),
            color: 'black',
            weight: 1,
            opacity: 1,
            fillOpacity: 0.7 
        }).bindPopup(`<b>Location:</b> ${place}<br><b>Magnitude:</b> ${magnitude}<br><b>Depth:</b> ${depth} km`).addTo(myMap);
    }

});

// With this we can control the position where the legend will show

let legend = L.control({ position: 'bottomright'});

legend.onAdd = function(myMap){
    var div = L.DomUtil.create('div', 'legend');
    var grades = [-10, 10, 30, 50, 70, 90];
    var colors = ['limegreen', 'yellowgreen', 'gold', 'orange', 'orangered', 'red'];

    div.innerHTML += '<b>Earthquake Depth (km)</b><br>';

    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + colors[i] + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }

    return div;
};

legend.addTo(myMap);