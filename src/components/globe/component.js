import React, { PureComponent } from 'react';
import Globe from 'react-globe.gl';

import basins from './data.json';
console.log(basins);

class GlobeComponent extends PureComponent {

  state = {
    hover: null
  }

  componentDidMount() {
    this.setControls();
  }

  componentDidUpdate(prevProps, prevState) {
    const { hover } = this.state;
    const { hover: prevHover } = prevState;

    if (hover !== prevHover) {
      this.setControls();
    }
  }

  setControls() {
    const { hover } = this.state;
    const controls = this.globe.controls();

    controls.autoRotate = !hover;
    controls.autoRotateSpeed = 0.05;
    controls.enableDamping = true;
    controls.minPolarAngle = 0.8;
    controls.maxPolarAngle = 2.4;
    controls.dampingFactor = 0.07;
    controls.rotateSpeed = 0.07;
  }

  render() {
    const { hover } = this.state;

    return (
      <Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"

        ref={(r) => { this.globe = r; }}

        animateIn={false}

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
