var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition()
function start(){
    document.getElementById("textbox").innerHTML = "";  
    recognition.start()
}

recognition.onresult = function(event){
    console.log(event)

    var Content = event.results[0][0].transcript;
    console.log(Content)
    document.getElementById("textbox").innerHTML= Content;
    if(Content == "take my selfie"){
        speak()
    }
  
}
 
function speak(){
    var synth = window.speechSynthesis;
    speakdata = "taking your selfie in five seconds"
    var speakthis = new SpeechSynthesisUtterance(speakdata)
    synth.speak(speakthis);
    Webcam.attach(camera)
    setTimeout(function (){
        takeSnapshot()
        save()
    },5000)
    
}

Webcam.set({
    width:360,
    height:250,
    image_format: "png",
    png_quality:100

})
camera=document.getElementById("camera") 




function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='selfie_image' src='"+data_uri+"'>"
    })
}



function save(){
    link=documnet.getElementById("link")
    image=document.getElementById("selfie_image").src
    link.href=image;
    link.click();
}