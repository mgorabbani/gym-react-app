import React from 'react'

export default ({ data }) => {
    console.log(data)
    return (

        <a class="info-tiles tiles-info" style={{ height: '120px', width: '280px' }}>
            <div class="tiles-heading">
                <div class="pull-left">{data.text}</div>
                <div class="pull-right"><i class="fa fa-caret-up"></i>{data.totalmembers}</div>
            </div>
            <div class="tiles-body">
                <div class="pull-left"><i class="fa fa-group"></i></div>
                <div class="pull-right">{data.totalmembers}</div>
            </div>
            <div class="tiles-footer">{data.subtext}</div>
        </a>
    )
}
