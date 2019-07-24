$(function () {
  var page_length = $('.guide_table tbody tr').length;
  calc_pub_process = function () {
    var pub_ended = 0;
    $('.status').each(function () {
      var status = $(this).text();
      if (status == '완료') {
        pub_ended = pub_ended + 1;
      }
    });
    var per_complete = parseInt((pub_ended / page_length) * 100);
    $('.pub_summary').text('퍼블리싱 진행률 [ ' + pub_ended + ' page / ' + page_length + ' page] ' + per_complete + '% 완료');
  }
  calc_pub_process();
  $('a').each(function () {
    $(this).attr('target', '_blank')
  });
  // vue
});
// Vue.component('todo-item', {
//   props: ['todo'],
//   template: '<td class="file"></td><td class="file"></td><td class="status"></td><td class="note"></td>'
// });
var fileRoot = "src/main/webapp/WEB-INF/jsp/";
var pub_list = new Vue({
  el: '#listBody',
  data: {
    pageList: [{
      pageName: "1_메인화면_로그인전(+로그인팝업,얼럿창)",
      fileRoot: "template/",
      fileName: "1_메인화면_로그인전(+로그인팝업,얼럿창)",
      complete: "완료",
      note: ""
    }, {
      pageName: "2_메인화면_로그인후(+심사,중지계정)",
      fileRoot: "template/",
      fileName: "2_메인화면_로그인후(+심사,중지계정)",
      complete: "완료",
      note: ""
    }, {
      pageName: "5_가입신청_약관동의_05",
      fileRoot: "template/",
      fileName: "5_가입신청_약관동의_05",
      complete: "완료",
      note: ""
    }, {
      pageName: "6_가입신청하기  약관동의 _전화번호인증_02",
      fileRoot: "template/",
      fileName: "6_가입신청하기  약관동의 _전화번호인증_02",
      complete: "완료",
      note: ""
    }, {
      pageName: "7_가입신청하기_약관동의_전화번호인증_정보입력(+오류메세지노출)",
      fileRoot: "template/",
      fileName: "7_가입신청하기_약관동의_전화번호인증_정보입력(+오류메세지노출)",
      complete: "완료",
      note: ""
    }, {
      pageName: "8_가입신청하기_약관동의_전화번호_인증_정보입력_승인대기",
      fileRoot: "template/",
      fileName: "8_가입신청하기_약관동의_전화번호_인증_정보입력_승인대기",
      complete: "완료",
      note: ""
    }, {
      pageName: "9_가입신청하기_심사결과화면",
      fileRoot: "template/",
      fileName: "9_가입신청하기_심사결과화면",
      complete: "완료",
      note: ""
    }, {
      pageName: "10_아이디찾기(+얼럿창)",
      fileRoot: "template/",
      fileName: "10_아이디찾기(+얼럿창)",
      complete: "완료",
      note: ""
    }, {
      pageName: "11_아이디찾기_결과화면",
      fileRoot: "template/",
      fileName: "11_아이디찾기_결과화면",
      complete: "완료",
      note: ""
    }, {
      pageName: "12_비밀번호찾기",
      fileRoot: "template/",
      fileName: "12_비밀번호찾기",
      complete: "완료",
      note: ""
    }, {
      pageName: "13_비밀번호찾기_결과화면",
      fileRoot: "template/",
      fileName: "13_비밀번호찾기_결과화면",
      complete: "완료",
      note: ""
    }, {
      pageName: "14_서비스소개_카트라이더VR",
      fileRoot: "template/",
      fileName: "14_서비스소개_카트라이더VR",
      complete: "완료",
      note: ""
    }, {
      pageName: "15_서비스소개_스토어 찾기",
      fileRoot: "template/",
      fileName: "15_서비스소개_스토어 찾기",
      complete: "",
      note: ""
    }, {
      pageName: "16_게시판_공지사항",
      fileRoot: "template/",
      fileName: "16_게시판_공지사항",
      complete: "",
      note: ""
    }, {
      pageName: "17_게시판_공지사항_상세보기",
      fileRoot: "template/",
      fileName: "17_게시판_공지사항_상세보기",
      complete: "",
      note: ""
    }, {
      pageName: "18_게시판_랭킹보기_전체랭킹",
      fileRoot: "template/",
      fileName: "18_게시판_랭킹보기_전체랭킹",
      complete: "",
      note: ""
    }, {
      pageName: "19_게시판_랭킹보기_지역별랭킹",
      fileRoot: "template/",
      fileName: "19_게시판_랭킹보기_지역별랭킹",
      complete: "",
      note: ""
    }, {
      pageName: "20_게시판_랭킹보기_스토어랭킹",
      fileRoot: "template/",
      fileName: "20_게시판_랭킹보기_스토어랭킹",
      complete: "",
      note: ""
    }, {
      pageName: "21_게시판_랭킹보기_스토어랭킹_선택한스토어랭킹보기",
      fileRoot: "template/",
      fileName: "21_게시판_랭킹보기_스토어랭킹_선택한스토어랭킹보기",
      complete: "",
      note: ""
    }, {
      pageName: "22_마이스토어_스토어관리(비밀번호입력)(+얼럿창)",
      fileRoot: "template/",
      fileName: "22_마이스토어_스토어관리(비밀번호입력)(+얼럿창)",
      complete: "",
      note: ""
    }, {
      pageName: "23_마이스토어_스토어_관리(개인정보)",
      fileRoot: "template/",
      fileName: "23_마이스토어_스토어_관리(개인정보)",
      complete: "",
      note: ""
    }, {
      pageName: "24_마이스토어_상품구매(+얼럿창)",
      fileRoot: "template/",
      fileName: "24_마이스토어_상품구매(+얼럿창)",
      complete: "",
      note: ""
    }, {
      pageName: "25_마이스토어_상품구매_자동결제신청",
      fileRoot: "template/",
      fileName: "25_마이스토어_상품구매_자동결제신청",
      complete: "",
      note: ""
    }, {
      pageName: "26_마이스토어_보유사용내역_보유내역(+달력)",
      fileRoot: "template/",
      fileName: "26_마이스토어_보유사용내역_보유내역(+달력)",
      complete: "",
      note: ""
    }, {
      pageName: "27_마이스토어_보유사용내역_사용내역",
      fileRoot: "template/",
      fileName: "27_마이스토어_보유사용내역_사용내역",
      complete: "",
      note: ""
    }, {
      pageName: "28_마이스토어_결제관리",
      fileRoot: "template/",
      fileName: "28_마이스토어_결제관리",
      complete: "",
      note: ""
    }, {
      pageName: "29_마이스토어_결제관리_자동결제관리",
      fileRoot: "template/",
      fileName: "29_마이스토어_결제관리_자동결제관리",
      complete: "",
      note: ""
    }, {
      pageName: "30_마이스토어_결제관리_환불신청",
      fileRoot: "template/",
      fileName: "30_마이스토어_결제관리_환불신청",
      complete: "",
      note: ""
    }, {
      pageName: "31_마이스토어_운영통계_플레이현황",
      fileRoot: "template/",
      fileName: "31_마이스토어_운영통계_플레이현황",
      complete: "",
      note: ""
    }, {
      pageName: "32_마이스토어_운영통계_기기사용현황",
      fileRoot: "template/",
      fileName: "32_마이스토어_운영통계_기기사용현황",
      complete: "",
      note: ""
    }, {
      pageName: "33_마이스토어_고객센터",
      fileRoot: "template/",
      fileName: "33_마이스토어_고객센터",
      complete: "",
      note: ""
    }, {
      pageName: "34_마이스토어_고객센터_자주하는질문_상세보기",
      fileRoot: "template/",
      fileName: "34_마이스토어_고객센터_자주하는질문_상세보기",
      complete: "",
      note: ""
    }, {
      pageName: "35_마이스토어_고객센터_1대1문의하기",
      fileRoot: "template/",
      fileName: "35_마이스토어_고객센터_1대1문의하기",
      complete: "",
      note: ""
    }, {
      pageName: "36_마이스토어_고객센터_내문의내역",
      fileRoot: "template/",
      fileName: "36_마이스토어_고객센터_내문의내역",
      complete: "",
      note: ""
    }, {
      pageName: "37_마이스토어_고객센터_내문의내역_상세보기",
      fileRoot: "template/",
      fileName: "37_마이스토어_고객센터_내문의내역_상세보기",
      complete: "",
      note: ""
    }, {
      pageName: "38_데이터로딩",
      fileRoot: "template/",
      fileName: "38_데이터로딩",
      complete: "",
      note: ""
    },]
  }
})