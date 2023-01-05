// 데이터를 담아줄 변수? 생성
window.niceData = {};

async function niceAuth() {
    window.open(url, '_blank', 'width=500, height=550, top=100, left=100, fullscreen=no, menubar=no, status=no, toolbar=no, titlebar=yes, location=no, scrollbar=no');
}

window.addEventListener('message', function(e) {
    window.close();

    niceData.data = {
        'result': e.data['result'],
        'name': e.data['name'],
        'phoneNumber': e.data['phoneNumber']
    }

    // 내부에 바로 적용하니 되지가 않아 함수 생성으로 빼놔서 호출
    callback();
});

function callback() {
    console.log('callback');
    niceAuthCallback();
}
