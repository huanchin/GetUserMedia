# Getting Start with getUserMedia()

## Get the stream, play and stop

1. Use getUserMedia to retrieve local video/audio streams (Video/Audio streams)
   Reference: https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia

2. Set our MediaStream (stream) to our <video />
   Now you can show the video/ audio stream on your browser!

3. (Optional) all the MediaStreamTrack objects
   Reference: https://developer.mozilla.org/en-US/docs/Web/API/MediaStream/getTracks

4. You can stop the video/ audio stream by using MediaStreamTrack.stop()
   Reference: https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack

## Change the video stream size

5. Before changing the video stream size, check the browser's capabilities
   Reference: https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/getCapabilities

## Start, stop and play recording

6. Create a MediaRecorder object, specifying the source stream and any desired options
   Reference: https://developer.mozilla.org/en-US/docs/Web/API/MediaStream_Recording_API

## Capturing the screen

7. Use getDisplayMedia to capture the contents of a display
   Reference: https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getDisplayMedia

## Get input/ output device
