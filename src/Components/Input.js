import React, { useState } from "react";
import styled from "styled-components";
import { mixin } from "../Styles/mixin";
import { AiOutlineCheckCircle, AiFillCheckCircle } from "react-icons/ai";

const Input = () => {
  const [check, setCheck] = useState(false);
  const [emailCheck, setEmailCheck] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [emailMsg, setEmailMsg] = useState("");

  const checkEmail = (e) => {
    const regExp =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    if (regExp.test(e.target.value)) {
      setCheck(true);
      setEmailCheck(true);
    } else {
      setCheck(false);
      setEmailCheck(false);
      setEmailMsg("invalid e-mail address.");
    }
  };

  const show = () => {
    setShowPassword(!showPassword);
  };

  const enterKeyEvent = (e) => {
    if (e.keyCode === 13) {
      checkEmail(e);
    }
  };

  return (
    <>
      <LoginWrapper>
        <EmailBox>
          <EmailText>E-mail</EmailText>
          <EmailInput
            type="email"
            placeholder="E-mail"
            onBlur={checkEmail}
            onKeyUp={enterKeyEvent}
          />
          {emailCheck ? <AiFillCheckCircle /> : <AiOutlineCheckCircle />}
        </EmailBox>
        <WarnBox>{check ? "" : <WarnText>{emailMsg}</WarnText>}</WarnBox>
        <PassWordBox>
          <PassWordText>Password</PassWordText>
          <PassWordInput
            type={showPassword ? "text" : "password"}
            placeholder="Password"
          />
          <div onClick={show}>
            {showPassword ? <AiFillCheckCircle /> : <AiOutlineCheckCircle />}
          </div>
        </PassWordBox>
      </LoginWrapper>
    </>
  );
};

export default Input;

const LoginWrapper = styled.div`
  ${mixin.flexSet("center", "center", "_")}
  flex-direction: column;
  background-color: #eeeeee;
  width: 350px;
  padding: 20px 0px;
`;

const EmailBox = styled.div`
  position: relative;
  ${mixin.flexSet("_", "_", "column")}

  svg {
    width: 20px;
    height: 20px;
    position: absolute;
    right: 10px;
    bottom: 13px;
    border-radius: 20px;
  }
`;

const PassWordBox = styled(EmailBox)`
  margin-top: 20px;

  svg {
    width: 20px;
    height: 20px;
    position: absolute;
    right: 10px;
    bottom: 13px;
    border-radius: 20px;
  }
`;

const EmailText = styled.span`
  ${mixin.fontSet("black", "13px", "normal")}
  margin: 5px 3px;
`;

const PassWordText = styled(EmailText)``;

const WarnBox = styled.div`
  width: 85%;
`;

const WarnText = styled.span`
  ${mixin.fontSet("red", "12px", "normal")}
  margin-top: 3px;
`;

const EmailInput = styled.input`
  ${mixin.borderSet("1", "solid", "rgb(214,214,215)")}
  width: 300px;
  height: 45px;
  letter-spacing: 1px;
  padding: 10px;

  &:focus {
    ${mixin.borderSet("1", "solid", "rgb(165,165,165)")}
  }
`;

const PassWordInput = styled(EmailInput)``;
