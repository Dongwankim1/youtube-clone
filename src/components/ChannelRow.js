import React from 'react';
import Avatar from "@material-ui/core/Avatar"
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import './ChannelRow.css';
const ChannelRow = ({image,Channel,verified,subs,noOfVideos,description}) =>{
    return(
        <div className="channelRow">
                <Avatar className="channelRow__logo" alt={Channel} src={image}></Avatar>
                <div className="channelRow__text">
                    <h4>{Channel} {verified && <CheckCircleOutlineOutlinedIcon/> }</h4>
                    <p>
                        {subs} subscribers * {noOfVideos} videos
                    </p>
                    <p>{description}</p>
                </div>
        </div>
    )
}


export default ChannelRow;