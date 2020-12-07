const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt the user to select a media stream then pass to video element and play the media chosen.
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        // Catch Error Here
        console.log('Oh no , you done goofed', error); 
    }
}

button.addEventListener('click', async () => {
    // Disables Button
    button.disabled = true;
    // Starting Picture in Picture
    await videoElement.requestPictureInPicture();
    // Resetting Button
    button.disabled = false;
    
});

// On load
selectMediaStream();