import { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const validateForm = () => {
    const newErrors = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newErrors.email = "올바른 이메일 형식이 아닙니다.";
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      newErrors.password =
        "영문자, 숫자, 특수기호를 포함해 8~16자리를 입력해주세요.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("로그인 성공", { email, password });
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="flex-column">
        <label>이메일 </label>
        {errors.email && (
          <span className="error">{errors.email}</span>
        )}
      </div>
      <div className="inputForm">
        <svg
          height={20}
          viewBox="0 0 32 32"
          width={20}
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Layer_3" data-name="Layer 3">
            <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z" />
          </g>
        </svg>
        <input
          required
          type="text"
          className="input"
          placeholder="이메일 주소를 입력해주세요."
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div className="flex-column">
        <label>비밀번호 </label>
        {errors.password && (
          <span className="error">{errors.password}</span>
        )}
      </div>
      <div className="inputForm">
        <svg
          height={20}
          viewBox="-64 0 512 512"
          width={20}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0" />
          <path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0" />
        </svg>
        <input
          required
          type={isPasswordVisible ? "text" : "password"}
          className="input"
          placeholder="비밀번호를 입력해주세요."
          value={password}
          onChange={handlePasswordChange}
        />
        <i
          className={`fa-solid ${
            isPasswordVisible ? "fa-eye-slash" : "fa-eye"
          }`}
          onClick={togglePasswordVisibility} // 아이콘 클릭 시 비밀번호 표시/숨김
        ></i>
      </div>
      {/* <div className="flex-row">
        <div className="rememberme">
          <input type="checkbox" />
          <label>아이디 기억하기 </label>
        </div>
        <span className="span">비밀번호를 잊으셨나요?</span>
      </div> */}
      <button className="button-submit">로그인</button>
      <p className="p">
        아직 회원이 아니신가요?{" "}
        <span className="span">
          <a href="/signup">회원가입</a>
        </span>
      </p>
      <p className="p line">Or With</p>
      <div className="flex-row">
        <img
          className="btn kakao"
          style={{ objectFit: "cover" }}
          height={"100%"}
          width={"100%"}
          borderradius={"5px"}
          src=".\res\images\kakao_login_large_wide.png"
          alt=""
        />
      </div>
    </form>
  );
};
export default LoginForm;
