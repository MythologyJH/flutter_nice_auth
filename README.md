## Flutter에서 Nice인증 절차


### App
- [**Webview**](https://pub.dev/packages/webview_flutter)패키지 사용
- javascript Bridge로 `postMessage`로 값을 받아서 처리


### Web
- `dart:js`패키지 사용
- `dart`함수를 `javascript`에서 호출 할 수 있게 등록
- `javascript`의 함수 호출(dart)
- 서버 상세 처리 과정은 패스 하겠습니다.
- Iframe간 데이터 전송



급조한거라서 좋은 아이디어가 있으시다면 추천 부탁드립니다.
