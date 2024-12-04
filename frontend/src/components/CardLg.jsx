import CardLarge from "./CardLarge";

const CardLg = () => {
  return (
    <>
      <div className="card-box card-grid">
        <CardLarge
          subtitle={"지도를 통한 검색 기능"}
          title={"집 근처 빵 맛집을 찾아낼래"}
          note={
            "지도 위 마커를 따라가면? 나만의 빵 맛집 발견! 집 주변 나만의 인생빵집을 찾아보세요."
          }
          type={"location"}
          imgLg={"/res/images/LOCATION.png"}
          imgSm={"/res/images/LOCATION-sm.png"}
        />
        <CardLarge
          subtitle={"입맛 맞춤형 취향표"}
          title={"내 입에 딱 맞는 빵 어디 없나?"}
          note={
            "나와 딱 맞는 빵 찾기 대장정! 취향표 작성을 통해 내 입맛을 알아보고 다양한 빵집을 추천받아요!"
          }
          type={"favor"}
          imgLg={"/res/images/FAVOR.png"}
          imgSm={"/res/images/FAVOR-sm.png"}
        />
        <CardLarge
          subtitle={"빵메이트 서비스"}
          title={"혼자 가던 빵축제도 이젠 함께!"}
          note={
            "빵메이트야 어디있니...? 프로필의 취향 정보를 기반으로 나와 천생연분이 될 빵메이트를 구해보세요!"
          }
          type={"mate"}
          imgLg={"/res/images/MATE.png"}
          imgSm={"/res/images/MATE-sm.png"}
        />
        <CardLarge
          subtitle={"빵글빵글 게시판"}
          title={"#베이커리 #분좋카 #MOOD"}
          note={
            "빵과 글의 융합, 빵글빵글 게시판! 인생빵집에서 느낀 분위기를 자신만의 언어로 다른 사용자들과 함께 공유해보세요."
          }
          type={"mood"}
          imgLg={"/res/images/MOOD.png"}
          imgSm={"/res/images/MOOD-sm.png"}
        />
      </div>
    </>
  );
};

export default CardLg;
