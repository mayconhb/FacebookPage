document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('mainVideo');
    const videoOverlay = document.getElementById('videoOverlay');
    const progressBar = document.querySelector('.progress-bar');
    const likeBtn = document.getElementById('likeBtn');
    const commentBtn = document.getElementById('commentBtn');
    const shareBtn = document.getElementById('shareBtn');

    videoOverlay.addEventListener('click', function() {
        if (video.paused) {
            video.play();
            video.muted = false;
            videoOverlay.classList.add('hidden');
        }
    });

    video.addEventListener('play', function() {
        videoOverlay.classList.add('hidden');
    });

    video.addEventListener('pause', function() {
        videoOverlay.classList.remove('hidden');
    });

    video.addEventListener('timeupdate', function() {
        const progress = (video.currentTime / video.duration) * 100;
        progressBar.style.width = progress + '%';
    });

    video.addEventListener('ended', function() {
        progressBar.style.width = '100%';
        videoOverlay.classList.remove('hidden');
    });

    video.addEventListener('click', function() {
        if (video.paused) {
            video.play();
            videoOverlay.classList.add('hidden');
        } else {
            video.pause();
            videoOverlay.classList.remove('hidden');
        }
    });

    let likesCount = 31;
    let userLiked = false;

    likeBtn.addEventListener('click', function() {
        likeBtn.classList.toggle('active');
        userLiked = !userLiked;
        
        const reactionsNumber = document.querySelector('.reactions-number');
        
        if (userLiked) {
            likesCount += 1;
        } else {
            likesCount -= 1;
        }
        
        reactionsNumber.textContent = likesCount;
    });

    commentBtn.addEventListener('click', function() {
        const commentsSection = document.querySelector('.comments-section');
        commentsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    shareBtn.addEventListener('click', function() {
        if (navigator.share) {
            navigator.share({
                title: 'The Scientific Discovery That Is Shocking Doctors and Women',
                text: 'Check out this incredible discovery!',
                url: window.location.href
            }).catch(err => {
                console.log('Error sharing:', err);
            });
        } else {
            const url = window.location.href;
            navigator.clipboard.writeText(url).then(() => {
                alert('Link copied to clipboard!');
            }).catch(err => {
                console.error('Error copying:', err);
            });
        }
    });

    const commentActions = document.querySelectorAll('.comment-action');
    commentActions.forEach(action => {
        if (action.textContent === 'Like') {
            action.addEventListener('click', function() {
                action.style.color = action.style.color === 'rgb(24, 119, 242)' ? '' : '#1877f2';
                action.style.fontWeight = action.style.fontWeight === '700' ? '600' : '700';
            });
        }
    });
});
