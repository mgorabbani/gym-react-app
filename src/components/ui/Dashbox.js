import React from 'react'

export default ({ data }) => {
    console.log(data)
    return (
        <div style={{ height: '120px', width: '280px', backgroundColor: '#38B45F', borderRadius: '3px', boxShadow: '2px 3px 12px 0px #a7a7a7', padding: '5px', color: '#ceffdd', backgroundPosition: 'right 0.5625rem center', backgroundRepeat: 'no-repeat', backgroundImage: `url(https://png.icons8.com/metro/80/77c790/${data.icon})` }}>
            <h1>{data.totalmembers}</h1>
            <h5>{data.text}</h5>
            <p>{data.subtext}</p>
        </div>
    )
}
