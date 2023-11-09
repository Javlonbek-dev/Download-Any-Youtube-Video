const urlFiled=document.querySelector(".filed input"),
previewArea=document.querySelector(".previw-are"),
imgTag=previewArea.querySelector(".thumbnail"),
hiddenInput=document.querySelector(".hidden-input");


urlFiled.onkeyup=()=>{
    let imgUrl=urlFiled.value;
    previewArea.classList.add("active"); 
    
    if(imgUrl.indexOf("https://www.youtube.com/watch?v=")!=-1){
        let vidId=imgUrl.split("v=")[1].substring(0,11);
        let ytThumbUrl=`https://img.youtube.com/vi/${vidId}/maxresdefault.jpg`;
        imgTag.src=ytThumbUrl;
    }else if(imgUrl.indexOf("https://www.youtu.be") !=-1){
        let vidId=imgUrl.split("be/")[1].substring(0,11);
        let ytThumbUrl=`https://img.youtube.com/vi/${vidId}/maxresdefault.jpg`;
        imgTag.src=ytThumbUrl;
    }else if(imgUrl.match(/\.(jpe?g|png|gif|bmp|webp)$/i)){
        imgTag.src=imgUrl;
    }
    else{
        imgTag.src="";
        previewArea.classList.remove("active");
    }
    hiddenInput.value= imgTag.src;
}