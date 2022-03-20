const socket = io('ws://localhost:8080');

let pos = 0;
let prevValue=0;

socket.on('message', text => {
    document.getElementById("a").innerText=text;
        pos = text;
        reSize();
});

let imgs = [document.getElementById("1"),
            document.getElementById("2"),
            document.getElementById("3")];
function reSize(){
    if(prevValue!=pos){
        prevValue=pos;
            if(pos==0){
                for(let i=1;i<imgs.length;i++){
                    imgs[i].className="other";
                }
            }
            else{
                for(let i=0;i<imgs.length;i++){
                    imgs[i].className="other";
                }
            }

        }
}

let youtube = document.getElementById("yt");
let video = document.createElement("iframe");

video.setAttribute("src","https://www.youtube.com/embed/NtfbWkxJTHw?autoplay=1&mute=1");
video.style.width="420";
video.style.height="420";

socket.on('press', pressed => {
    if(pressed==1){
        if(pos==0){
            youtube.appendChild(video);
        }
        else if(pos==1){
            window.open("https://www.w3schools.com");
        }
        else if(pos==2){  
            window.open("https://www.w3schools.com");
        }
    }
    else{
        document.getElementById("b").innerText="not pressed";
    }
});

document.getElementById("yt").onclick(youtube.removeChild(video));