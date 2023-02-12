export class VideoPlayer{
    constructor(parentClassforvideo)
    {
    this.createVideoPlayer(parentClassforvideo)
    }
    createVideoPlayer(parentClassforvideo)
    {
    const parentElementforvideo = document.querySelector(parentClassforvideo);
    parentElementforvideo.innerHTML=`<video class="video" src="" controls width="600" height="400"></video>`;
    this.player = document.querySelector(".video");
    }
    settingUrl(url)
    {
        if(!this.player || !url){return;}
        this.player.src=url;
        this.player.style.display = "block";
    }
    start()
    {
        this.player.play();
    }
    stop()
    {
        this.player.pause();
        this.player.style.display = "none";
    }
}