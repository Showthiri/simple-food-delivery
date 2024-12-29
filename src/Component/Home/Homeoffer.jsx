import React from 'react'
import './Homeoffer.css'
const Homeoffer = () => {
  return (
    <div className="homeofffer">
       <a href="/Offer"><div className="h1offer">
           <button><h1>OFFER <span>F00D</span> WEEKEND OFFER</h1></button>  
            </div>
            </a>
            <div className="OFFIMG">
            <div className="homeofferimg">
          <a href="/Briyani"><img src="https://th.bing.com/th/id/OIP.KAAi-l-f_R0bMfy2wptdQwAAAA?w=305&h=305&rs=1&pid=ImgDetMain" alt="" /></a>
          </div>
            <div className="homeofferimg">
            <a href="/Cooldrinks">  <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/special-drinks-offer-design-template-71363681fb3893e71e957d7dd6efbc57_screen.jpg?ts=1694507634" alt="" /></a>  
            </div>

            <div className="homeofferimg">
              <a href="/piz"><img src="https://www.dominos.jp/media/axfirlml/bogosummer-banner_eng_topics_740x740.jpg" alt="" /></a>
                </div>
            </div>
            
    </div>
  )
}

export default Homeoffer