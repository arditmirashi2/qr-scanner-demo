window.onload = () => {
    const select = window.prompt("Select a camera mode [user, environment]")

    const video = document.getElementById("scanner");

    if(!navigator || (navigator && !navigator.getUserMedia)) {
        alert("Navigator does not exist")
    }

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        const constraints = {
            video: {
                facingMode: select
            },
            audio: false
        }

        navigator.mediaDevices.getUserMedia(constraints).then(stream => video.srcObject = stream);
    }
}
