const Overlay = () => {
  return (
    <div className="overlay-wrap">
      <div className="overlay-info">
        <div className="overlay-title">
          카카오 스페이스닷원
          <div className="overlay-close" title="닫기">
            exit
          </div>
        </div>
        <div className="overlay-body">
          <div className="overlay-img">
            <img
              src="//t1.daumcdn.net/thumb/C84x76/?fname=http://t1.daumcdn.net/cfile/2170353A51B82DE005"
              width="73"
              height="70"
              alt="카카오 스페이스닷원"
            />
          </div>
          <div className="overlay-desc">
            <div className="overlay-ellipsis">
              제주특별자치도 제주시 첨단로 242
            </div>
            <div className="ovrlay-jibun ellipsis">
              (우) 63309 (지번) 영평동 2181
            </div>
            <div>
              <a
                href="https://www.kakaocorp.com/main"
                target="_blank"
                className="overlay-link"
                rel="noreferrer"
              >
                홈페이지
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
