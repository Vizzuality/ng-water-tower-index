import React, { PureComponent } from 'react';
import Globe from 'react-globe.gl';

import basins from './data.json';
console.log(basins);

class GlobeComponent extends PureComponent {

  state = {
    hover: null
  }

  render() {
    const { hover } = this.state;

    return (
      <Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        polygonsData={basins.features}
        polygonAltitude={d => d === hover ? 0.01 : 0.005}
        polygonCapColor={d => d === hover ? "#FF0000" : "#FFCC00"}
        polygonSideColor={(d) => "#000000"}
        polygonsTransitionDuration={250}
        onPolygonHover={(polygon) => {
          this.setState({ hover: polygon })
        }}
      />
    );
  }
}

export default GlobeComponent;
