Webcam.set({
    width: 500,
    height: 400,
    image_format: "png",
    png_quality: 90
})
Webcam.attach("Camera");
function Capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("Screenshot").innerHTML= "<img id= 'image'src= "+data_uri+">"
    })
    
}
console.log("ml5 version", ml5.version);
classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/61HbPB9ni/model.json", Model_Loaded)
 function Model_Loaded(){
    console.log("Model Loaded Successfully!")
 }
 function gotResult(error, result){
if(error){
    console.log(error)
}
else{
    console.log(result);
    document.getElementById("Obj").innerHTML= result[0].label;
    accuracy= (result[0].confidence * 100).toFixed(1)
    document.getElementById("Acc").innerHTML= accuracy;
}
 }
 function Identify(){
    img= document.getElementById("image");
    classifier.classify(img, gotResult)
 }