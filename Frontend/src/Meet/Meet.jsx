import React from 'react'
import { useParams } from 'react-router-dom'
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt'

function Meet() {
    const {meetId} = useParams()
    const myMeet = async(element) => {
        const appID = 1832768329;
        const serverSecret = "d5dd18b8654ceec66119e8866aa75e20";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret, 
            meetId,
            Date.now().toString(),
            "Himbr"
            )
        const zc = ZegoUIKitPrebuilt.create(kitToken)
        zc.joinRoom({
            container: element,
            scenario:{
                mode: ZegoUIKitPrebuilt.OneONoneCall,
            },
        })
    }
  return (
    <div>
      <div ref={myMeet}/>
    </div>
  )
}

export default Meet