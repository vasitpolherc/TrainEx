import React, { Component } from 'react'
import GoogleMap from 'google-map-react'

import Marker from './Marker'
import Polyline from './Polyline'


class Map extends Component {
  constructor (props) {
    super(props)

    this.state = {
      mapsLoaded: false,
      map: null,
      maps: null
    }
  }

  onMapLoaded (map, maps) {
    this.fitBounds(map, maps)

    this.setState({
      ...this.state,
      mapsLoaded: true,
      map: map,
      maps: maps
    })
  }

  fitBounds (map, maps) {
    var bounds = new maps.LatLngBounds()
    for (let marker of this.props.markers) {
      bounds.extend(
        new maps.LatLng(marker.lat, marker.lng)
      )
    }
    map.fitBounds(bounds)
  }

  afterMapLoadChanges () {
    return (
      <div style={{display: 'none'}}>
        <Polyline
          map={this.state.map}
          maps={this.state.maps}
          markers={this.props.markers} />
      </div>
    )
  }

  render () {
    return (
      <GoogleMap
        bootstrapURLKeys={{key: 'AIzaSyAqz19l6pcVqhQR0d7KOl2bpdaiH6aH8Ws'}}
        style={{height: '100vh', width: '100%'}}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        onGoogleApiLoaded={({map, maps}) => this.onMapLoaded(map, maps)}>

        <Marker text={'Bangkok'} lat={13.7262708} lng={100.5078673} />
        <Marker text={'Hua-Hin'} lat={12.5697146} lng={99.8752849} />
        <Marker text={'Chiang-Mai'} lat={18.7838969} lng={98.8876324} />
        <Marker text={'Pattaya'} lat={12.900651} lng={100.8524887} />
        <Marker text={'Hat-Yai'} lat={7.0094299} lng={100.4437918} />
        <Marker text={'Nakhon Ratchasima'} lat={14.973245} lng={102.0777662} />
        {this.state.mapsLoaded ? this.afterMapLoadChanges() : ''}
      </GoogleMap>
    )
  }
}

Map.defaultProps = {
  markers: [
    {lat: 13.7262708, lng: 100.5078673},
    {lat: 12.5697146, lng: 99.8752849},

    {lat: 13.7262708, lng: 100.5078673},
    {lat: 18.7838969, lng: 98.8876324},

    {lat: 13.7262708, lng: 100.5078673},
    {lat: 12.900651, lng: 100.8524887},

    {lat: 13.7262708, lng: 100.5078673},
    {lat: 7.0094299, lng: 100.4437918},

    {lat: 13.7262708, lng: 100.5078673},
    {lat: 14.973245, lng: 102.0777662},

  ],
  center: [0, 0],
  zoom: 4,

}

export default Map
