// Run this once in the DevTools console on a YouTube video page

function main() {
document.addEventListener('keydown', (e) => {
  const video = document.querySelector('video');
  if (!video) return;

  if (e.key === 's' || e.key === 'S') {
    video.playbackRate = 0.25;
    console.log('Speed set to 0.25x');
  } else if (e.key === 'x' || e.key === 'X') {
    video.playbackRate = 2.0;
    console.log('Speed set to 2.0x');
  } else if (e.key === 'r' || e.key === 'R') {
    video.playbackRate = 1.0;
    console.log('Speed reset to 1.0x');
  }
});
}

main();
