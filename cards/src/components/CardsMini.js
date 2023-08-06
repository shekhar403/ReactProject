import React from 'react'
import CardsMiniSingle from './CardsMiniSingle'

function CardsMini({data}) {
    console.log(data)
  return (
    <div className="row"> 

    {/* <!-- Earnings (Monthly) Card Example --> */}
    <CardsMiniSingle name={"Earnings (Monthly)"} value={data.month} containsProgressIndicator={false} image={"fa-calendar"}/>
    
    {/* <!-- Earnings (Annual) Card Example --> */}
    <CardsMiniSingle name={"Earnings (Annual)"} value={data.year} containsProgressIndicator={false} image={"fa-dollar-sign"}/>

    {/* <!-- Tasks Card Example --> */}
    <CardsMiniSingle name={"Tasks"} value={data.task} containsProgressIndicator={true} image={"fa-clipboard-list"}/>

    {/* <!-- Pending Requests Card Example --> */}
    <CardsMiniSingle name={"Pending Requests"} value={data.pending} containsProgressIndicator={false} image={"fa-comments"}/>
    
    </div>
  )
}

export default CardsMini