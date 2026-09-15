let ffInstance = null;

function toggle() {
  const btn = document.getElementById("toggle-btn");
  const imgs = document.querySelectorAll('.freezeframe');

  if (ffInstance === null) {
    imgs.forEach(img => {
      if (!img.dataset.ffOriginal) {
        img.dataset.ffOriginal = img.src;
      }
    });
    ffInstance = new Freezeframe('.freezeframe', {
      trigger: 'hover',
      responsive: false,
      overlay: false
    });
    btn.textContent = "Enable animations";
  } else {
    ffInstance.destroy();
    ffInstance = null;
    
    document.querySelectorAll('.ff-container').forEach(container => {
      const innerImg = container.querySelector('img.ff-image');
      if (innerImg) {
        innerImg.classList.remove('ff-image');
        container.parentNode.replaceChild(innerImg, container);
      }
    });
    imgs.forEach(img => {
      if (img.dataset.ffOriginal) {
        img.src = img.dataset.ffOriginal;
      }
    });
    btn.textContent = "Disable animations";
  }
}