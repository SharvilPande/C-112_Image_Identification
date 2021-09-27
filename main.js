Webcam.set({
    width: 300,
    height: 320,
    image_format: 'png',
    png_quality: 90,

    constraints: {
        facingMode: "environment"
    }
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = "<img id = 'captured_image' src='" + data_uri + "'>";
    })
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('MobileNet', ModelLoaded);

function ModelLoaded() {
    console.log("Model Loaded!");
}

function check() {
    img = document.getElementById("captured_image");
    classifier.classify(img, gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("value").innerHTML = results[0].label;
        confidence = results[0].confidence;
        document.getElementById("confidence").innerHTML = confidence.toFixed(2)*100+"%";
    }
}






