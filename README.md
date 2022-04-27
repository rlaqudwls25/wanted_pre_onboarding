# Wanted_pre_onboarding



## Toggle 
💻 **구현 과정**
<br />
Check 초기값을 false로 하고 onChangeCheck 함수가 호출 될 때 마다 하나의 **ButtonWrapper(흰색 배경)** check 유무에 따라서  `${(props) => props.check && transform: translateX(100%)}` 해주도록 코드를 작성하였습니다.

<br />

🥇**잘했다고 생각한 점**
<br />
```
1. ${(props) => props.check ? `transform: translateX(100%)` : ``}  // check 값이 true일 때만 움직이도록 코드를 작성하였기 때문에 굳이 삼항연산자를 할 필요가 없어 2번 처럼 작성하였다
2. ${(props) => props.check && `transform: translateX(100%)`}
```


## Tab
💻 **구현 과정**
<br />
각각의 tab 이름을 눌렀을 때 boolean 값으로 border-bottom이 이동하게 기능을 구현하려고 했지만 코드가 길어져서 결국엔 tab name에 따라 border-bottom이 이동하게 기능을 구현하였다.

<br />

🥇**잘했다고 생각한 점**

```
transform: translateX(                 // 각 조건에 맞는 값을 return 해줘서 코드에 형태가 더 깔끔해진 것 같다.
    ${({ name }) => { 
    if (name === "감자") {
      return "0%";
    } else if (name === "고구마") {
      return "100%";
    } else if (name === "카레라이스") {
      return "200%";
    }
  }}
  );  
```

## Slider
💻 **구현 과정**
문제를 처음 보자마자 어떻게 구현해야할지 감이 안잡혔지만 input type중에 range라는 아이 때문에 마지막까지 잘 해결할 수 있었다. <br />
각 숫자 버튼들을 클릭 하였을 때 onClickBtn 함수를 통해 number의 값을 바꾸어주어 변화하는 ProgressBar의 input값, 퍼센트 숫자가 나오는 input값이 바뀌도록 구현하였다.

<br />
😠 **어려웠던 점**
과제를 처음 봤을 때 progressBar를 어떻게 만들어야할지 착잡했지만, input에 type의 range를 알고나서 적용해보니 생각보다 쉬운 과제라고 생각했다!



## Input
💻 **구현 과정**
<br />
이메일 정규 표현식에 대한 regExp 변수를 regExp.test(e.target.value) 메서드를 통하여 문자열이 정규 표현식에 만족하는지 판별하고 그 여부에 따라 error 메시지를 띄우도록 구현하였고, 
email input안에 값이 다 지워졌을 때는 에러메시지가 다시 사라지도록 하였습니다. <br />
Password 같은 경우에는 클릭시 showPassword boolean값에 따라 input tpye이 text 또는 password인지를 구별하여 구현하였습니다. <br />


<br />

🥇**잘했다고 생각한 점**
```
const EmailText = styled.span`
  ${mixin.fontSet("black", "13px", "normal")}. // styled-component로 생성한 컴포넌트 스타일이 중복된 경우에 코드를 하나라도 더 줄이고자 styled-component를 확장하여 구현하였습니다.
  margin: 5px 3px;
`;

const PassWordText = styled(EmailText)``;
```

## Dropdown
💻 **구현 과정**
<br />
DropdownList를 클릭 하였을 때 onItemClick 함수를 호출하여 어떤 item이 클릭이 되었는지 전달하고 inputValue값이 바뀌면서 input안에 그 item이 나오도록 구현하였습니다.
또한 DropdownOptions을 filter하고 includes 메서드를 통해 현재 input값인 searchWord가 포함되어 있는 item.value DropdownList만 나오도록 구현하였습니다. 

<br />

🥇**잘했다고 생각한 점**


🔥**에러 해결**
```
Warning: You provided a `value` prop to a form field without an `onChange` handler.
This will render a read-only field. If the field should be mutable use `defaultValue`.
Otherwise, set either `onChange` or `readOnly`.

// 해당 에러는 <input value={inputValue} /> value값이 계속 바뀌어서 나타나는 에러라고 해석할 수 있다.
// 해결 방법
// 1. value => defaultValue
// 2. onChange이벤트를 넣어준다.
// 3. readOnly 속성을 넣어준다.

// 나는 readOnly 속성을 넣어주어 value값에 변화를 막아주었다.
```

😵 **아직 구현하지 못한 부분**
<br />
컴포넌트 밖 영억을 mousedown 하였을 시 DropdownList가 닫히는 부분



