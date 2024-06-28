/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

import { data } from './data.js';

function setBgcolor(index) {
  document.body.style.background = `linear-gradient(to bottom,${
    data[index - 1].color[0]
  }, ${data[index - 1].color[1]}`;
}

function setImage(index) {
  image.src = `./assets/${data[index - 1].name.toLowerCase()}.jpeg`;
  image.alt = data[index - 1].alt;
}

function setNameText(index) {
  nickName.textContent = data[index - 1].name;
}

const nav = document.querySelector('.nav');
const image = document.querySelector('.visual img');
const nickName = document.querySelector('.nickName');

function handleClick(e) {
  const target = e.target.closest('li');

  if (!target) return;
  const index = target.dataset.index;

  for (const li of nav.firstElementChild.children) {
    li.classList.remove('is-active');
  }

  target.classList.add('is-active');

  setBgcolor(index);
  setImage(index);
  setNameText(index);
}

nav.addEventListener('click', handleClick);
