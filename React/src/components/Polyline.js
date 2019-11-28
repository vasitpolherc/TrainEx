import { Component } from 'react'

export default class Polyline extends Component {
  renderPolylines () {
    const { markers, map, maps } = this.props

    /** Example of rendering geodesic polyline */
    let geodesicPolyline = new maps.Polyline({
      path: markers,
      geodesic: true,
      strokeColor: 'midnightblue',
      strokeOpacity: 1.0,
      strokeWeight: 5
    })
    geodesicPolyline.setMap(map)


  }

  render () {
    this.renderPolylines()
    return null
  }
}
