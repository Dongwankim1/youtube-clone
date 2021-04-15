import React from 'react';
import './SearchPage.css';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow'
const SearchPage = () =>{
    return(
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon/>
                <h2>FILTER</h2>
            </div>
            <hr/>
            <ChannelRow image="https://mblogthumb-phinf.pstatic.net/MjAyMDAzMDZfOTkg/MDAxNTgzNDI0MDM0NDcw.DC2NxC9vWGjQDYCmk9oCfA6D7lpB9ZArjKCSJIoIKvEg.PIcnlaRumcpU-he6bY5i3gw4jsY4S1Cp1cfA4xLProEg.PNG.likelotos/%EC%A0%9C%EB%AA%A9%EC%9D%84_%EC%9E%85%EB%A0%A5%ED%95%B4%EC%A3%BC%EC%84%B8%EC%9A%94._1_(3).png?type=w800" Channel="Clever Programmer" verified subs="660K" noOfVideos={382} description="You can find awesome"/>
        </div>
     
    )
}

export default SearchPage;