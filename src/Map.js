import React from "react";
import L from "leaflet";
// make sure that plugins are imported *after* Leaflet
import "leaflet-contextmenu";
// import plugin's css (if present)
// note, that this is only one of possible ways to load css
import "leaflet-contextmenu/dist/leaflet.contextmenu.css";

const style = {
  width: "100%",
  height: "300px"
};

class Map extends React.Component {
  componentDidMount() {
    // create map
    this.map = L.map("map", {
      // plugin code is assigned to Leaflet after import
      // so we can immediately use plugins features
      contextmenu: true,
      contextmenuItems: [
        {
          text: "Zoom in",
          callback: this.zoomIn
        },
        {
          text: "Zoom out",
          callback: this.zoomOut
        }
      ],
      center: [41.390205, 2.154007],
      zoom: 14,
      layers: [
        L.tileLayer("https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}", {
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        })
      ]
    });
  }

  zoomIn = () => {
    this.map.zoomIn();
  };
  zoomOut = () => {
    this.map.zoomOut();
  };
  render() {
    return <div id="map" style={style} />;
  }
}

export default Map;
