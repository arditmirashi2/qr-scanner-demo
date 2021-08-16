window.onload = () => {
    const video = document.getElementById("scanner");

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        const constraints = {
            video: true,
            audio: false
        }

        navigator.mediaDevices.getUserMedia(constraints).then(stream => video.srcObject = stream);
    }
}
