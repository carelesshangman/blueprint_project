let pointer=document.getElementById("a");

console.log("a: "+pointer);

let imgArray=[document.getElementById("chrome"),
              document.getElementById("spotify"),
              document.getElementById("youtube")];

while (true){
    if(pointer>=0&&pointer<=2){
        if(a==0){
            pointer++;
        }
        if(a==2){
            pointer--;
        }
    }
    imgArray[pointer].width="500px";
    imgArray[pointer].height="500px";
}