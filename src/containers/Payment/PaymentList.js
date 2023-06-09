import KakaoColor from "../../images/payment/payment_kakao_color.png";
import KakaoGray from "../../images/payment/payment_kakao_gray.png";
import NaverColor from "../../images/payment/payment_naver_color.png";
import NaverGray from "../../images/payment/payment_naver_gray.png";
import PaycoColor from "../../images/payment/payment_payco_color.png";
import PaycoGray from "../../images/payment/payment_payco_gray.png";
import CardColor from "../../images/payment/payment_card_color.png";
import CardGray from "../../images/payment/payment_card_gray.png";

export const MethodItem = [
  { gray: KakaoGray, color: KakaoColor, name: "카카오페이" },
  { gray: NaverGray, color: NaverColor, name: "네이버페이" },
  { gray: PaycoGray, color: PaycoColor, name: "페이코" },
  { gray: CardGray, color: CardColor, name: "신용카드" },
];
