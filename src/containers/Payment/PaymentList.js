import KakaoColor from "../../images/payment/payment_kakao_color.png";
import KakaoGray from "../../images/payment/payment_kakao_gray.png";
import NaverColor from "../../images/payment/payment_naver_color.png";
import NaverGray from "../../images/payment/payment_naver_gray.png";
import PaycoColor from "../../images/payment/payment_payco_color.png";
import PaycoGray from "../../images/payment/payment_payco_gray.png";
import CardColor from "../../images/payment/payment_card_color.png";
import CardGray from "../../images/payment/payment_card_gray.png";

const today = new Date();
let time = {
  year: today.getFullYear(), //현재 년도
  month: today.getMonth() + 1, // 현재 월
  date: today.getDate(), // 현제 날짜
};
const dateNow = `${time.year}.${time.month}.${time.date}`;
const dateNext = `${time.year}.${time.month + 1}.${time.date}`;

export const InfoItem = [
  { left: "구독 상품", right: "전자책 연 정기구독" },
  { left: "구독 기간", right: `${dateNow} ~ ${dateNext}` },
  { left: "다음 결제일", right: dateNext },
];

export const PriceItem = [
  { left: "┗ 전자책 연 정기구독", right: "118,800원" },
  { left: "┗ 연 정기구독 할인", right: "19,800원" },
];

export const MethodItem = [
  { gray: KakaoGray, color: KakaoColor, name: "카카오페이" },
  { gray: NaverGray, color: NaverColor, name: "네이버페이" },
  { gray: PaycoGray, color: PaycoColor, name: "페이코" },
  { gray: CardGray, color: CardColor, name: "신용카드" },
];

export const AgreeItem = [
  {
    p1: "전체 동의하기",
    p2: "[필수]개인정보 수집 및 이용 동의",
    p3: "[필수]자동결제 상품 인지 및 취소, 환불, 소득 공제 정책 등 상품 구매 정책 동의",
  },
];

export const NoticeItems = [
  {
    title: "유의사항",
    content: [
      {
        con: "·  무료 체험 중 해지할 경우, 서비스가 즉시 종료되고 구독결제가 이루어지지 않습니다.",
      },
      {
        con: "·  구독결제는 구독기간 마지막 날 결제되며, 결제 후 구독기간은 자동 갱신됩니다..",
      },
      {
        con: "·  구독결제 갱신을 중단하고자 할 경우, 구독기간 종료 하루 전까지 구독을 해지해야 합니다.",
      },
    ],
  },
];

export const ModalItem = [
  {
    title: "개인정보 수집 및 이용동의",
    text: "밀리의 서재는 회원정보 식별을 위해 결제 시, 아래 정보를 수집/이용하고 있습니다.",
    content: [
      {
        num: "1. 수집하는 개인정보 항목",
        contents: [{ text: "- 휴대전화번호" }],
      },
      {
        num: "2. 개인정보의 수집 목적",
        contents: [
          {
            text: "① 서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금정산, 본인인증, 물품배송",
          },
          {
            text: "② 회원과의 원활한 의사소통",
          },
          {
            text: "③ 문의 접수 및 파트너 접수에 대한 처리결과 회신",
          },
        ],
      },
      {
        num: "3. 개인정보의 보유 기간",
        contents: [{ text: "- 회원 탈퇴 시 까지" }],
      },
    ],
  },
];
