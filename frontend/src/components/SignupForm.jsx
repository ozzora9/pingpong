import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    nickname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    nickname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] =
    useState(false);

  const navigate = useNavigate();

  const validateField = (name, value) => {
    let error = "";

    if (name === "nickname") {
      if (!value) error = "닉네임을 입력해주세요.";
    } else if (name === "email") {
      if (!value || !/\S+@\S+\.\S+/.test(value)) {
        error = "유효한 이메일을 입력해주세요.";
      }
    } else if (name === "password") {
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
      if (!value) {
        error = "비밀번호를 입력해주세요.";
      } else if (!passwordRegex.test(value)) {
        error =
          "영문자, 숫자, 특수기호를 포함해 8~16자리를 입력해주세요.";
      }
    } else if (name === "confirmPassword") {
      if (value !== formData.password) {
        error = "비밀번호가 일치하지 않습니다.";
      }
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (formData.password || formData.confirmPassword) {
      validateField();
    }
  }, [formData.password, formData.confirmPassword]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateField()) {
      console.log("폼 제출: ", formData);
      setFormData({
        nickname: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }
  };

  const handleNavigateToLogin = () => {
    navigate("/login");
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible((prevState) => !prevState);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="flex-column">
        <label>닉네임 </label>
        {errors.nickname && (
          <span className="error">{errors.nickname}</span>
        )}
      </div>
      <div className="inputForm">
        <i className="bi bi-person" style={{ fontSize: "24px" }}></i>
        <input
          type="text"
          name="nickname"
          className="input"
          placeholder="사용하실 닉네임을 입력해주세요"
          value={formData.nickname}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>
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
          type="email"
          name="email"
          className="input"
          placeholder="이메일을 입력해주세요"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
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
          type={passwordVisible ? "text" : "password"}
          name="password"
          className="input"
          placeholder="대소문자 숫자가 포함된 8~16자 이내"
          value={formData.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <i
          className={`fa-solid ${
            passwordVisible ? "fa-eye-slash" : "fa-eye"
          }`}
          onClick={togglePasswordVisibility}
        ></i>
      </div>
      <div className="flex-column">
        <label>비밀번호 확인 </label>
        {errors.confirmPassword && (
          <span className="error">{errors.confirmPassword}</span>
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
          type={confirmPasswordVisible ? "text" : "password"}
          name="confirmPassword"
          className="input"
          placeholder="위와 동일한 비밀번호를 입력해주세요"
          value={formData.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <i
          className={`fa-solid ${
            confirmPasswordVisible ? "fa-eye-slash" : "fa-eye"
          }`}
          style={{ cursor: "pointer" }}
          onClick={toggleConfirmPasswordVisibility}
        ></i>
      </div>
      <button className="button-submit">회원가입</button>
      <p className="p">
        이미 회원이신가요?{" "}
        <span className="span" onClick={handleNavigateToLogin}>
          로그인하기
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

export default SignupForm;
