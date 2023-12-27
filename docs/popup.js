document.getElementById('show-video-btn').addEventListener('click', function() {
    document.getElementById('video-popup').style.display = 'flex';
});

document.getElementById('close-popup').addEventListener('click', function() {
    document.getElementById('video-popup').style.display = 'none';
    document.getElementById('youtube-video').src = document.getElementById('youtube-video').src; // Esto reinicia el video
});
