import { VideoConfig } from "../config/video-config.js";

export function checkPlayTime(time){
    if(time >= VideoConfig.minTime || time <= video.maxTime){
        return true;
    }
    alert(`Errore,please entry time between ${video.minTime} and ${video.maxTime}`);
    return false;
}