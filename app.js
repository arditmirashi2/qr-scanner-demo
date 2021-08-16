window.onload = () => {
    const select = window.prompt("Select a camera mode [user, environment]")


    const video = document.getElementById("scanner");

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        const constraints = {
            video: {
                width: {
                  min: 1280,
                  ideal: 1920,
                  max: 2560,
                },
                height: {
                  min: 720,
                  ideal: 1080,
                  max: 1440
                },
                facingMode: select
              },
            audio: false
        }

        navigator.mediaDevices.getUserMedia(constraints).then(stream => video.srcObject = stream);
    }
}
