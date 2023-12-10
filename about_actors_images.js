document.addEventListener('DOMContentLoaded', function() {
    const headers = document.querySelectorAll('.clickable-tags h2');
    const infoSections = document.querySelectorAll('.hidden-info div');

    headers.forEach(header => {
      header.addEventListener('click', function() {
        infoSections.forEach(infoSection => {
          infoSection.classList.remove('active');
        });

        const targetClass = this.classList[0];
        const targetInfo = document.querySelector(`.${targetClass}-info`);
        targetInfo.classList.add('active');
      });
    });

    document.querySelector('.about-info').classList.add('active');
  });


/** FÖR ATT FÖRSTORA DE SMÅ BILDERNA **/
function toggleImageSize(clickedImage) {
    const bigImagesContainer = document.querySelector('.big-images-container');
    const bigImage = document.getElementById('bigImage');

    if (clickedImage && clickedImage.src) {
      bigImage.src = clickedImage.src;
    }

    bigImagesContainer.classList.toggle('active');
  }