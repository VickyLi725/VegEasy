document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-button');
    const toggleImage = document.getElementById('toggle-image');
    const bannerButtons = document.querySelector('.banner-buttons');
    
    let isExpanded = false;

    toggleButton.addEventListener('click', function(event) {
        event.preventDefault();
        
        if (isExpanded) {
            // 收起按钮
            toggleImage.src = './img/icon/dotSquare_icon.png'; // 切换到图片1
            bannerButtons.classList.remove('show-buttons');
        } else {
            // 展开按钮
            toggleImage.src = './img/icon/dotSquare_bg_icon.png'; // 切换到图片2
            bannerButtons.classList.add('show-buttons');
        }

        isExpanded = !isExpanded;
    });
});
