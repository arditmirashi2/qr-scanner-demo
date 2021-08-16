const video = document.getElementById("scanner");

if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    const constraints = {
        video: {
            facingMode: "environment"
        },
        audio: false
    }

    navigator.mediaDevices.getUserMedia(constraints).then(stream => video.srcObject = stream);
}