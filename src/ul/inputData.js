import { VideoConfig } from "../config/video-config.js";
import { checkPlayTime } from "../service/checkTime.js";
import { sleep } from "../utils/sleep.js";
import { VideoPlayer } from "./video-player.js";

export class Data{
    select;
    submitButton;
    constructor(parentElementConstrustor){
        this.createFormInput(parentElementConstrustor);
        this.linksForSelect();
        this.player = new VideoPlayer(".video-player");
        
    }
    createFormInput(parenClassForInput){
        const parentElementInput = document.querySelector(parenClassForInput);
        parentElementInput.innerHTML = `
        <div class="select-form-all">
        <label>Select Video</label>
        <select name="video" id="select-video" class="select-video-form">
            <option value=abc"></option>
        </select>
        </div>
        <input type="number" id="video-play" placeholder="Enter time for play (seconds)">
        <button class="submit" type="submit">Submit</button>`
    }
    linksForSelect(){
        this.select = document.getElementById("select-video");
        this.select.innerHTML = VideoConfig.videoLinks.map((video, index) =>
        `<option value="${video}">Link-${index+1}</option>`);
    }
    addHandler(){
        this.timeInput = document.getElementById("video-play");
        this.submitButton = document.querySelector(".submit");
        this.submitButton.addEventListener("click",async()=>{
            if(!checkPlayTime(this.timeInput.value)){
                return;
            }
            const linkToVideo = this.select.value;
            this.player.settingUrl(linkToVideo);
            this.player.start();
            await sleep(this.timeInput.value*1000);
            this.player.stop();
        })
    }
}