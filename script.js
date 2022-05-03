var Speechrecognition = window.webkitSpeechRecognition;
var recognition= new Speechrecognition();
function start(){
    document.getElementById("ta1").innerHTML="";
    recognition.start();
}
recognition.onresult=function (event){
    var content= event.results[0][0].transcript;
    document.getElementById("ta1").value= content;
    if (content=="take my selfie"){
        speak()
    }
}
function speak(){
Webcam.attach("#d2");
}
Webcam.set({
width:360,
height:300,
image_format:'jpeg',
jpeg_quality:100
});
