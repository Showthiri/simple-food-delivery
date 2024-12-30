import React from 'react'
import './Homeoffer.css'
import { Link } from 'react-router-dom'
const Homeoffer = () => {
  return (
    <div className="homeofffer">
       <Link to="/Offer"><div className="h1offer">
           <button><h1>OFFER <span>F00D</span> WEEKEND OFFER</h1></button>  
            </div>
            </Link>
            <div className="OFFIMG">
            <div className="homeofferimg">

              <Link to="/Briyani"><img src="https://th.bing.com/th/id/OIP.KAAi-l-f_R0bMfy2wptdQwAAAA?w=305&h=305&rs=1&pid=ImgDetMain" alt="" /></Link>
          </div>  
            <div className="homeofferimg">
            <Link to="/Cooldrinks">  <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/special-drinks-offer-design-template-71363681fb3893e71e957d7dd6efbc57_screen.jpg?ts=1694507634" alt="" /></Link>  
            </div>

            <div className="homeofferimg">
              <Link to="/piz"><img src="https://www.dominos.jp/media/axfirlml/bogosummer-banner_eng_topics_740x740.jpg" alt="" /></Link>
                </div>
            </div>
    </div>
  )
}

export default Homeoffer