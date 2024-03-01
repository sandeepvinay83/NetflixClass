
import ReactHlsPlayer from "react-hls-player";
import { useState, useRef } from "react";
import "./Banner.css";
import Icon from '@mdi/react';
import { mdiVolumeHigh, mdiVolumeOff } from '@mdi/js';

function Banner() {
    const [isMute,setIsMute] = useState(true);
    const videoRef = useRef(null);
    const onMuteHandle = () => {
        const video = videoRef.current;
        if (video) {
            video.muted = !video.muted;
        }
        setIsMute(!isMute);
    }
    return(
        <div className="autoplay_banner">
            <ReactHlsPlayer 
            className="video"
                src="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
                width="80%"
                height="80%"
                muted={true}
                controls={false}
                autoPlay
                playerRef={videoRef}
            />
            <div className="mute_button" onClick={onMuteHandle}>
                { isMute ? <Icon path={mdiVolumeOff} size={1} /> : <Icon path={mdiVolumeHigh} size={1} /> }
            </div>
        </div>
    )
}
export default Banner;