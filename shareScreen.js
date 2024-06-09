const shareScreen = async () => {
  try {
    const options = {
      vedio: true,
      audio: false,
      surfaceSwitching: "include",
    };
    const captureStream = await navigator.mediaDevices.getDisplayMedia(options);
  } catch (err) {
    console.log(err);
  }
  changeButtons([
    "green",
    "green",
    "blue",
    "blue",
    "green",
    "green",
    "green",
    "green",
  ]);
};
