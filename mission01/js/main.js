// 아이디 & 비밀번호 validation 함수

function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

// 아이디 & 비밀번호

const user = {
  id: 'asd@naver.com',
  pw: 'spdlqj123!@',
};

// getNode 함수

function getNode(node, context = document) {
  if (context.nodeType !== 9) context = document.querySelector(context);

  return context.querySelector(node);
}

// 로그인 버튼 클릭 이벤트

function handleClick() {
  const userId = getNode('#userEmail');
  const userPw = getNode('#userPassword');

  if (!emailReg(userId.value)) {
    userId.classList.add('is-invalid');
    getNode('.user-email>span').style.display = 'block';
  } else {
    userId.classList.remove('is-invalid');
    getNode('.user-email>span').style.display = 'none';
  }

  if (!pwReg(userPw.value)) {
    userPw.classList.add('is-invalid');
    getNode('.user-password>span').style.display = 'block';
  } else {
    userPw.classList.remove('is-invalid');
    getNode('.user-password>span').style.display = 'none';
  }

  if (userId.value === user.id && userPw.value === user.pw) {
    return (window.location.href = 'welcome.html');
  }
}

// 이벤트 실행

const button = getNode('.btn-login');
button.addEventListener('click', handleClick);
