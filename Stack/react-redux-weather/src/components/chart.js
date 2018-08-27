import React from 'react';
import _ from 'lodash';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines'

function average(data) {
  return _.round(_.sum(data)/data.length)
}

function Chart(props) {
  return (
    <div>
      <Sparklines data={props.data} width={180} height={180}>
        <SparklinesLine color={props.color}></SparklinesLine>
        <SparklinesReferenceLine type="avg"></SparklinesReferenceLine>
      </Sparklines>
      <div>{average(props.data)}</div>
    </div>
  )
}

export default Chart;