import React, { PureComponent } from 'react';
import Globe from 'react-globe.gl';


class EarthPage extends PureComponent {
  render() {
    return (
      <div className="l-page">
        <Globe
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        />
      </div>
    );
  }
}

export default EarthPage;
