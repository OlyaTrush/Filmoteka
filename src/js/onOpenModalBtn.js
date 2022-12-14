import { dynamicRefs } from './refs/dynamicRefs';
import refs from './refs/refs';
import removeYouTube from './youTube';
import { deleteMovieCard } from './ui/library-page-ui';

export function onOpenModalBtn() {
  dynamicRefs().closeModalBtn.addEventListener('click', onCloseModalBtn);
  dynamicRefs().backdrop.addEventListener('click', onBackdropClick);

  window.addEventListener('keydown', onEscKeyPress);
  document.body.classList.add('on-open-modal');
}

function onCloseModalBtn() {
  window.removeEventListener('keydown', onEscKeyPress);
  document.body.classList.remove('on-open-modal');
  deleteMovieCard();
}

function onBackdropClick(evn) {
  if (evn.currentTarget === evn.target) {
    onCloseModalBtn();
  }
}

function onEscKeyPress(evn) {
  const ESC_KEY_CODE = 'Escape';
  if (refs.youTubeVideo.classList.contains('active')) {
    if (evn.code === ESC_KEY_CODE) {
      removeYouTube();
      return;
    }
  }
  if (evn.code === ESC_KEY_CODE) {
    onCloseModalBtn();
  }
}
