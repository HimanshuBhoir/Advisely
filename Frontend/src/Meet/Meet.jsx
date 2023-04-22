import React from 'react'
import { useParams } from 'react-router-dom'
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt'

function Meet() {
    const {meetId} = useParams()
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
            // scenario:{
            //     mode: ZegoUIKitPrebuilt.OneONoneCall,
            // },
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