# MISSION - 1

일치하는 아이디와 비밀번호를 입력했을 경우 welcome 페이지로 이동하는 코드 로직

---

1. email 정규표현식을 사용한 validation
   emailReg 함수를 사용

- false면 해당 input에 is-invalid 추가 및 안내 메세지의 display = block으로 변경

- true면 해당 input에 is--invalid 제거 및 안내 메세지의 display = none으로 변경
  
<br>
2. pw 정규표현식을 사용한 validation
   pwReg 함수를 사용

- false면 해당 input에 is--invalid 추가 및 안내 메세지의 display = block으로 변경

- true면 해당 input에 is--invalid 제거 제거 및 안내 메세지의 display = none으로 변경
  
<br>
3. 로그인 버튼을 클릭시 user.id의 값과 input의 값을 비교
   value === user.id
   <br>
   <br>
4. 로그인 버튼을 클릭시 user.pw의 값과 input의 값을 비교
   value === user.pw
   <br>
   <br>

5. 두 값이 일치 한다면 다음 페이지(welcome.html)로 이동
   window.location.href = 'welcome.html'
