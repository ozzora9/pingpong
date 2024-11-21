import React from "react";

const Taste = () => {
  return (
    <div className="content">
      <div className="taste-section">
        <div className="taste-title">
          <h3 className="sub-title">
            <div>나와라 내 빵메이트!</div>
            <div>제 취향은요...🥐</div>
          </h3>
          <hr className="division" />
        </div>
        <div className="taste-form">
          <form action="">
            <div className="input-box">
              <label htmlFor="nickname" className="taste-label">
                <span>*</span>닉네임
              </label>
              <input
                type="text"
                placeholder="앞으로 어떻게 불러드릴까요?👀"
                className="taste-input"
                id="nickname"
                required
              />
            </div>
            <div className="input-box">
              <label htmlFor="location" className="taste-label">
                <span>*</span>지역
              </label>
              <input
                type="text"
                placeholder="어디에 사시는지 궁금해요!"
                className="taste-input"
                id="location"
                required
              />
            </div>
            <div className="input-box">
              <label htmlFor="age" className="taste-label">
                나이
              </label>
              <input
                type="text"
                placeholder="같은 연령층의 빵메이트 매칭에 도움이 될 수 있어요!"
                className="taste-input"
                id="age"
              />
            </div>
            <div className="input-box">
              <label htmlFor="favoriteBread" className="taste-label">
                <span>*</span>인생빵
              </label>
              <input
                type="text"
                placeholder="소금빵, 베이글, 샌드위치... 오늘은 어떤 빵?"
                className="taste-input"
                id="favoriteBread"
                required
              />
            </div>
            <div className="input-box">
              <label htmlFor="type" className="taste-label">
                <span>*</span>좋아하는 유형
              </label>
              <textarea
                type="text"
                placeholder="촉촉한 빵, 바삭한 빵, 딱딱한 빵, 많은 빵이 있지만 난 겉바속촉이 좋더라~"
                className="taste-input"
                id="type"
                // rows={3}
                required
              />
            </div>
            <div className="input-box">
              <label htmlFor="reason" className="taste-label">
                빵덕계기
              </label>
              <textarea
                type="text"
                placeholder="유행에 발목잡힌 소금빵 망령? 그게 나야~ (둠바둠바두비두바)
                빵에 입빵! 하게 된 여러분들의 이야기를 들려주세요! 빵메이트 매칭에 도움이 될지도...? (소근소근)"
                className="taste-input"
                id="reason"
              />
            </div>
            <div className="input-box">
              <label htmlFor="intro" className="taste-label">
                한줄 자기소개
              </label>
              <input
                type="text"
                placeholder="나를 어필할 수 있는 한줄소개를 적어주세요!"
                className="taste-input"
                id="intro"
              />
            </div>
            <button className="submit-btn">취향표 제출하기</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Taste;
