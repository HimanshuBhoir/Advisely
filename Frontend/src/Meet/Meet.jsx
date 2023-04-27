import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt'

function Meet() {
    const {meetId} = useParams()
    const navigate = useNavigate()
    const myMeet = async(element) => {
        const appID = 873364805;
        const serverSecret = "c9c3da2de09ef1e4786cf9db435f41a6";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret, 
            meetId,
            Date.now().toString(),
            "User"
            )
        const zc = ZegoUIKitPrebuilt.create(kitToken)

        zc.joinRoom({
            showPreJoinView: false
        });
        
        
    }
  return (
    <div>
      <div ref={myMeet}/>
    </div>
  )
}

export default Meet