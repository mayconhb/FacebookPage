document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('mainVideo');
    const videoOverlay = document.getElementById('videoOverlay');
    const progressBar = document.querySelector('.progress-bar');
    const likeBtn = document.getElementById('likeBtn');

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

    const shareBtn = document.getElementById('shareBtn');
    shareBtn.addEventListener('click', function() {
        if (video.ended) {
            alert('Share functionality coming soon!');
        } else {
            alert('You need to finish watching the video before sharing.');
        }
    });

    const commentBtn = document.getElementById('commentBtn');
    commentBtn.addEventListener('click', function() {
        const commentsSection = document.querySelector('.comments-section');
        commentsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        let commentInput = document.querySelector('.new-comment-input');
        if (!commentInput) {
            const inputArea = document.createElement('div');
            inputArea.className = 'new-comment-area';
            inputArea.innerHTML = `
                <div class="new-comment-wrapper">
                    <div class="comment-avatar" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">U</div>
                    <div class="new-comment-input-wrapper">
                        <textarea class="new-comment-input" placeholder="Write a comment..."></textarea>
                        <button class="post-comment-btn">Post</button>
                    </div>
                </div>
            `;
            commentsSection.insertBefore(inputArea, commentsSection.querySelector('.comment'));
            
            const postBtn = inputArea.querySelector('.post-comment-btn');
            const textarea = inputArea.querySelector('.new-comment-input');
            
            postBtn.addEventListener('click', function() {
                const commentText = textarea.value.trim();
                if (commentText) {
                    addNewComment(commentText);
                    textarea.value = '';
                }
            });
        }
    });

    function addNewComment(text) {
        const commentsSection = document.querySelector('.comments-section');
        const newComment = document.createElement('div');
        newComment.className = 'comment';
        newComment.innerHTML = `
            <div class="comment-avatar" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">U</div>
            <div class="comment-content">
                <div class="comment-header">
                    <span class="comment-author">You</span>
                </div>
                <p class="comment-text">${text}</p>
                <div class="comment-footer">
                    <span class="comment-time">Just now</span>
                    <button class="comment-action">Like</button>
                    <button class="comment-action reply-btn">Reply</button>
                </div>
            </div>
        `;
        
        const firstComment = commentsSection.querySelector('.comment');
        if (firstComment) {
            commentsSection.insertBefore(newComment, firstComment);
        } else {
            commentsSection.appendChild(newComment);
        }
        
        const replyBtn = newComment.querySelector('.reply-btn');
        replyBtn.addEventListener('click', function() {
            addReplyInput(newComment);
        });
    }

    function addReplyInput(commentElement) {
        let replyInput = commentElement.querySelector('.reply-input-area');
        if (replyInput) {
            replyInput.remove();
            return;
        }
        
        const replyArea = document.createElement('div');
        replyArea.className = 'reply-input-area';
        replyArea.innerHTML = `
            <div class="new-comment-wrapper">
                <div class="comment-avatar" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">U</div>
                <div class="new-comment-input-wrapper">
                    <textarea class="reply-input" placeholder="Write a reply..."></textarea>
                    <button class="post-reply-btn">Reply</button>
                </div>
            </div>
        `;
        
        commentElement.appendChild(replyArea);
        
        const postBtn = replyArea.querySelector('.post-reply-btn');
        const textarea = replyArea.querySelector('.reply-input');
        
        postBtn.addEventListener('click', function() {
            const replyText = textarea.value.trim();
            if (replyText) {
                addReply(commentElement, replyText);
                replyArea.remove();
            }
        });
    }

    function addReply(commentElement, text) {
        let repliesContainer = commentElement.querySelector('.replies-container');
        if (!repliesContainer) {
            repliesContainer = document.createElement('div');
            repliesContainer.className = 'replies-container';
            commentElement.appendChild(repliesContainer);
        }
        
        const reply = document.createElement('div');
        reply.className = 'comment reply-comment';
        reply.innerHTML = `
            <div class="comment-avatar" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">U</div>
            <div class="comment-content">
                <div class="comment-header">
                    <span class="comment-author">You</span>
                </div>
                <p class="comment-text">${text}</p>
                <div class="comment-footer">
                    <span class="comment-time">Just now</span>
                    <button class="comment-action">Like</button>
                </div>
            </div>
        `;
        
        repliesContainer.appendChild(reply);
    }

    const commentActions = document.querySelectorAll('.comment-action');
    commentActions.forEach(action => {
        if (action.textContent === 'Like') {
            action.addEventListener('click', function() {
                action.style.color = action.style.color === 'rgb(24, 119, 242)' ? '' : '#1877f2';
                action.style.fontWeight = action.style.fontWeight === '700' ? '600' : '700';
            });
        }
        if (action.textContent === 'Reply') {
            action.addEventListener('click', function() {
                const comment = action.closest('.comment');
                addReplyInput(comment);
            });
        }
    });
});
