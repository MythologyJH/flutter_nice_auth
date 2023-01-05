import 'dart:js' as js;


class NiceAuthWebButton extents StatelessWidget {
  
  String? name;
  String? phoneNumber;

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: () {
        // niceAuthCallback 함수 자바스크립트에서 호출가능하게 등록
        // 이 방법으로 실패 됬을때 처리도 가능하다.
        js.context['niceAuthCallback'] = niceAuthCallback;
        // niceAuthService라는 javascript 함수 호출
        js.context.callMethod('niceAuthService');
      },
      child: Text(
        '나이스 전화번호 인증'
      )
    );
  }
  
  niceAuthCallback() {
    js.JsObject obj = js.JsObject.fromBrowserObject(js.context['niceData']);
  
    // data 내부의 값이 null에 따라서 처리
    if(obj['data'] != null) {
      name = obj['data']['name'];
      phoneNumber = obj['data']['phoneNumber'];

      // 정상 처리시 추가 코드 작성
    } else {
      // 휴대폰 인증 실패 시 코드 작성
    }
  }
}
