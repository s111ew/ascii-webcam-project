// const CHARS = "@#$%8&WM*o:,.` ";

// const INTERVALS = CHARS.length;

const video = document.querySelector("#webcam");

navigator.mediaDevices
  .getUserMedia({ video: true })
  .then((video) => {
    video.srcObject = video;
  })
  .catch((err) => {
    console.error("Error accessing webcam:", err);
  });
