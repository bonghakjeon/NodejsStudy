// TODO : 터미널 창 에서 명령어 "node server.js" 입력 및 엔터시 아래와 같은 오류 메시지 출력 시
//        오류 메시지 "node : 'node' 용어가 cmdlet, 함수, 스크립트 파일 또는 실행할 수 있는 프로그램 이름으로 인식되지 않습니다. 
//        이름이 정확한지 확인하고 경로가 포함된 경우 경로가 올바른지 검증한 다음 다시 시도하십시오."
//        기본 터미널 창이 powershell이기 때문에 발생하는 오류 이므로, 
//        1. ctrl+shift+p 누른 후 맨 위에 뜨는 Terminal:Select Default Profile 선택 or 검색창에 'Terminal:Select Default Profile' 치기
//        2. Command Prompt로 설정 후 터미널 닫았다 다시 열기(Ctrl+`는 터미널 열기)
//        3. 기본 터미널 변한거 확인하기
// 참고 URL - https://yeon960.tistory.com/269

// TODO : 터미널 창 에서 명령어 "node server.js" 입력 및 엔터시 오류 메시지 "'node'은(는) 내부 또는 외부 명령, 실행할 수 있는 프로그램, 또는 배치 파일이 아닙니다."
//        출력시 시스템 환경 변수 편집 화면 들어가서 항목 Path에 node.js 경로 "C:\Program Files\nodejs" 추가하기 (2024.11.20 jbh)
// 참고 URL - https://bbeomgeun.tistory.com/37

// [코딩애플] Node.js, MongoDB 스터디 
// Part 1 : (신버전)
// 1강 - 남자라면 서버개발을 할 줄 알아야함
// 2강 - Nodejs의 장점이 뭐냐면
// 3강 - Node.js, Express 설치와 셋팅
// 4강 - 웹페이지 보내주려면 (라우팅)
// 5강 - 웹페이지에 디자인 넣으려면
// 6강 - MongoDB 호스팅받고 셋팅하기
// 7강 - MongoDB와 서버 연결하려면
// 8강 - MongoDB에서 데이터 출력하기 (array/object 문법)
// 9강 - 웹페이지에 DB데이터 꽂기 (EJS, 서버사이드 렌더링)
// 10강 - 여러 글을 한 번에 출력해보자 (EJS 문법2)
// 11강 - 서버와 유저가 통신하는 법 / RESTful API

// Part 2 (신버전)
// 12강 - 글 작성기능 만들기 1 (POST 요청)
// 13강 - 글 작성기능 만들기 2 (insertOne, 예외 처리)
// 14강 - 상세페이지 만들기 1 (URL parameter)
// 15강 - 상세페이지 만들기 2 (링크 만들기)
// 16강 - 수정기능 만들기 1
// 17강 - 수정기능 만들기 2 (저번시간 숙제)
// 18강 - 수정기능 만들기 3 (method-override, MongoDB 수정문법 추가)
// 19강 - 삭제기능 만들기 1 (AJAX, query string)
// 20강 - 삭제기능 만들기 2 (dataset)

// 서버사이드 렌더링이란? 서버에서 클라이언트로 html 코드 보내줄 때, 미리 데이터를 채워서 보내주는 기술이다. (예) Node.js, Java Spring, JSP 등등...
// 클라이언트사이드 렌더링이란? 서버에서 빈 html 파일과 데이터만 클라이언트로 보내고, 웹브라우저 안에서 서버로 부터 받은 html 파일과 데이터 가지고 동적으로 렌더링 해주는 기술이다. (예) React

// 사용자가 서버에게 무언가 요청 하려면 1) method 2) URL을 정확히 적어서 보내야한다.
// 요청을 HTTP 요청, method를 HTTP method 라고 부른다.
// 1) method
// GET - 사용자가 서버에게 데이터 출력요청 
// POST - 사용자가 서버에게 데이터 전송(입력)요청
// UPDATE, PUT - 사용자가 서버에게 데이터 수정요청
// DELETE - 사용자가 서버에게 데이터 삭제요청
// 2) URL
// URL을 다른 말로 엔드포인트(End Point)라고 부른다.
// 좋은 URL 작명 관습
// - 동사 보다는 명사 위주로 작성
// - 띄어쓰기는 언더바(_) 대신 대시(-) 기호 작성 
// - 파일 확장자 쓰지 말 것(.html 이런거 제외)
// - 하위 문서들을 뜻할 땐 / 기호를 사용함 (하위폴더 같은 느낌)
// 좋은 URL 
// (예시) http Get 요청 URL - facebook.com/bbc/photos (기능 - BBC 뉴스 페이스북 계정 사진 화면에 출력)
// (예시) http Get 요청 URL - instagram.com/explore/tags/food (기능 - 해시태그 food 검색한 사진 화면에 출력)

// REST API(Restful API)란?
// representational state transfer를 잘 따르는 API 이다.
// 그냥 좋은 API 디자인(설계)하는 원칙이라고 이해하면 된다.
// 원칙은 아래와 같이 6가지로 분류할 수 있다.
// 1) Uniform Interface (일관성)
//    - 일관성 있는 URL이 좋음
//    - 하나의 URL+method(GET, POST, UPDATE, PUT, DELETE)는 하나의 데이터를 보내야 한다.
// 2) Client-server 구분 
//    - 사용자에게 서버역할 맡기지 말아야 함.
//    - 사용자가 데이터를 직접 입출력 또는 수정 및 삭제를 처리하면 안 된다.
// 3) Stateless 
//    - http 요청들 끼리 서로 의존성이 있으면 안 된다.
//    - http 요청들 끼리 서로 독립적으로 처리되야 한다.
// 4) Cacheability
//    - http 요청을 통해 서버로 보내는 데이터들은 캐싱이 가능해야 한다. (예) 자주 서버로 부터 수신되는 데이터들은 서버로 http 요청을 날리지 않고 웹브라우저에서 하드에 저장해놓고 쓴다.
// 5) Layered system
//    - http 요청 하나는 최종 응답 전가지 여러 단계를 거쳐도 된다.
// 6) Code on demand
//    - 서버는 유저에게 실행 가능한 코드를 보내줄 수도 있다.

// TODO : 오류 메시지 "[DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead. (Use `node --trace-deprecation ...` to show where the warning was created)"
//        원인 파악 결과 NODE 20.2.0 버전 설치 후 발생한 오류로 확인(코어 모듈에서 지원하지 않음)
//        해당 오류의 원인은 Node.js의 최신 버전에서 더이상 punycode 모듈 사용 안해서 발생한 오류로 확인
//        하여 해당 오류를 해결하기 위해서는 Node.js 버전을 (기존) 21버전 -> (변경) 20버전 으로 다운그레이드 필요함. 
//        필요시 Node.js 버전을 20버전으로 다운 그레이드 처리 예정 (2024.12.19 jbh)
// 참고 URL - https://naitas.tistory.com/entry/The-punycode-module-is-deprecated
// 참고 2 URL - https://jobchannel.tistory.com/entry/Nodejs%EC%97%90%EC%84%9C-punycode-DeprecationWarning-%ED%95%B4%EA%B2%B0%ED%95%98%EA%B8%B0
// 참고 3 URL - https://www.php.cn/ko/faq/1796584316.html

// 1. 터미널 명령어 "npm init -y" 입력 및 엔터 -> package.json 파일 생성 

// 2. 터미널 명령어 "npm install express" 입력 및 엔터 -> express 라이브러리 설치 완료 

// 3. 2번에서 설치한 express 라이브러리 사용해서 아래처럼 서버 코드 작성 
const express = require('express') // express 라이브러리 사용
const app = express() // express 라이브러리 사용

// 4. MongoDB 호스팅 받은 DB접속URL 주소 Node.js 서버 파일(server.js)과 연동하기 
// Node.js 서버와 MongoDB 연동 해야 하는 이유
// 사용자가 요청하는 데이터를 서버가 중간에 개입하여 검사 과정을 거쳐서 데이터를 입출력 해야하기 때문이다.
// 5. 아래 주석친 코드 중 new ObjectId('64bfde3b02d2932a4c06ffba') 사용하기 위해서 아래 const { ObjectId } = require('mongodb') 코드 구현 
// let result = await db.collection('post').findOne({_id : new ObjectId('64bfde3b02d2932a4c06ffba')}) 
const { MongoClient, ObjectId } = require('mongodb')
// const { ObjectId } = require('mongodb') 

// 6. 웹페이지(확장자 .ejs - (예) edit.ejs) 파일에 구현한 <form> 태그에 속한 method 속성에 "PUT", "DELETE" 요청하기 위한 방법
// 1) 터미널에 명령어 "npm install method-override" 입력 및 엔터 -> 라이브러리 method-override 설치 
// 2) 1)번에서 설치한 method-override 라이브러리 사용해서 아래처럼 코드 작성 
const methodOverride = require('method-override')
app.use(methodOverride('_method')) 


// 7. 웹서버에 public 폴더 등록 
// 용도 - public 폴더 안에 있는 static 파일들(.css / 이미지 / .js)을 html 파일 (예) index.html, about.html 등등... 에서 가져다 쓰기 위한 용도 
// 참고 URL - https://coding-yesung.tistory.com/175
app.use(express.static(__dirname + '/public'));

// 8. ejs 템플릿 엔진 사용하기 
// 웹서버로 부터 받은 데이터를 html 파일에 넣기 위해 ejs 템플릿 엔진 사용 
// 웹서버로 부터 받은 데이터를 html 파일에 넣으려면 ejs 파일(확장자 .ejs)을 폴더 views 안에서 만들기 
app.set('view engine', 'ejs') 

// 9. 사용자가 서버로 보낸 정보(데이터) 검사 및 출력 설정 
// 사용자가 <input> 태그에서 작성하여 서버로 보낸 정보(데이터)를 서버에서 쉽게 출력할 수 있도록 도와주며, 
// 해당 정보(데이터)를 요청.body 형식으로 정보(데이터)를 쉽게 꺼내쓸 수 있도록 하기 위해 아래처럼 설정할 수 있는 코드 2줄을 추가한다.
app.use(express.json())
app.use(express.urlencoded({extended:true})) 


let db;
// mongodb 사이트에 회원 가입한 계정에 있는 DB접속URL, DB접속아이디, DB접속비번
// 참고 URL - https://www.mongodb.com/products/platform/atlas-database
// DB 접속 URL - (예시) mongodb+srv://DB접속아이디:DB접속비번@cluster0.jea.mongodb.net/?retryWrites=true&w=majority
const url = 'mongodb+srv://admin:qwer1234@cluster0.fbwgk.mongodb.net/?retryWrites=true&w=majority';
new MongoClient(url).connect()   // connect() - MongoDB에 접속해줌.
                    .then((client)=>{ // then() - MongoDB 접속 성공하면 실행 
                      console.log('DB연결성공')  // 데이터베이스 연결 성공시 터미널창에 로그 기록
                      db = client.db('forum')   // 데이터베이스 'forum'에 연결

                      // DB 접속 완료 후 서버 띄우기 (서버를 안정적으로 띄우기 위해서 DB 접속 완료 후 처리)
                      // 6. 서버 띄우는 코드(app.listen) (내 컴퓨터 Port 하나 오픈하는 문법이다. 이렇게 Port를 오픈해야 다른 컴퓨터가 내 컴퓨터 쪽으로 웹서비스를 연결하여 통신하여 들어올 수 있다.)
                      // 서버 띄울 PORT 번호 입력란 (Port 8080)
                      app.listen(8080, ()=>{
                        console.log('http://localhost:8080 에서 서버 실행중')
                      })
                    })
                    .catch((err)=>{
                      console.log(err) // MongoDB 접속 오류 발생시 터미털창에 오류 로그 기록 
                    })



// 터미널 명령어 "npm install -g nodemon" 입력 및 엔터 -> nodemon 라이브러리 설치 완료 
// 터미널 명령어 "nodemon server.js" 기능 - 소스코드 변경 후 파일저장하면 서버 자동으로 재시작(다시 컴파일 처리)
// 터미널 명령어 "nodemon server.js" 입력 및 엔터 후 
// 터미널 창에 출력되는 메시지 
// [nodemon] restarting due to changes...
// [nodemon] starting `node server.js`
// http://localhost:8080 에서 서버 실행중

// 부트스트랩(BootStrap) 설치 
// 유튜브 
// 참고 URL - https://youtu.be/iHWlRtWNquA?si=uVzQUkL2QL3a0RI1
// 참고 2 URL - https://youtu.be/F-v6EcMPJwA?si=GgTOZ1qE5w1m_2lR

// MongoDB 호스팅받고 셋팅하기 
// 참고 URL - https://steemit.com/kr/@talkit/009-mongodb-atlas
// 참고 2 URL - https://www.codeit.kr/tutorials/70/mongodb-atlas

// MongoDB - Document database라고 함.
// Collection(상위 폴더와 비슷한 개념) 생성 -> 해당 Collection 하위에 document(폴더 하위에 존재하는 파일과 비슷한 개념) 생성
// -> 특정 document 하위에 데이터를 기록하는 데이터베이스 형식이다.
// 데이터를 기록할 때, Json(JavaScript object 자료 형식) 데이터 처럼 기록할 수 있다.

// MongoDB 데이터베이스 -> 컬렉션 안에 속한 Document 1개에(엑셀의 데이터 행, 데이터베이스 - 데이터테이블에 속한 데이터 로우와 비슷하다.)  
// 게시물 100만개 이상 넣을수는 있으나 아래와 같은 단점들이 있다.
// 1. document에 게시물을 많이 넣으면 원하는 데이터를 찾기 어렵다.
// 2. document 1개당 최대 16MB 까지만 데이터 저장이 가능하므로 많은 게시물을 저장하는 것은 물리적으로 불가하다.

// 서버기능 (Rest API) (Http - Get) 구현 예시
// app.get('/어쩌구', (요청, 응답)=>{
//   응답.send('보내줄 웹페이지 내용')
// }) 

// ** 서버 기능 배운 내용 요약
// 1. 웹페이지 하나 만들고 싶으면 함수 app.get 부터 아래 3줄 가져다가 씁시다.
// app.get('/', (요청, 응답)=>{
//   응답.send('반갑다')
// })

// 2. 함수 app.get() 소괄호() 안에 들어가는 함수 "(요청, 응답)=>{ 응답.send('반갑다') }" 를 콜백함수라고 부르고 코드들을 순차적으로 실행할 때 가끔 씁니다.  

// 3. html파일 보내고 싶으면 응답.sendFile() 쓰면 됩니다. 

// 4. sever.js 파일 저장 및 터미널 명령어 "node server.js" 입력 및 엔터 -> "server.js" 파일 실행 -> 서버 띄우기 완료 -> 터미널 창에 문자열 'http://localhost:8080 에서 서버 실행중' 출력 

// 5. 4번에서 터미널에 출력된 URL 주소 http://localhost:8080 에 마우스 커서 갖다대고 키보드 단축키 Ctrl + 마우스 왼쪽 버튼 클릭

// 6. 크롬 웹브라우저 실행 -> '반갑다' 문자열 웹브라우저 출력 

// 간단한 서버 기능 - 메인페이지1 (Http - Get 방식) 
// 1) 누가 메인페이지 접속시('/') (크롬 웹브라우저 실행 -> URL 주소 "http://localhost:8080" 입력 및 엔터 )
// 2) '반갑다'는 문자열을 유저에게 보내주기 (크롬 웹브라우저 화면 '반갑다' 문자열 출력 )
// app.get('/', (요청, 응답)=>{
//   응답.send('반갑다')
// })

// 간단한 서버 기능 2 - 메인페이지2 (Http - Get 방식)
// 1) 누가 메인페이지 접속('/') (크롬 웹브라우저 실행 -> URL 주소 "http://localhost:8080" 입력 및 엔터 )
// 2) 자동으로 함수 "app.get()" 실행 -> 접속요청 처리
// 3) 2)번의 함수 "app.get()" 실행되고 나서 -> 2)번의 함수 "app.get()" 소괄호() 안에 존재하는 
//    콜백함수 "function(요청, 응답) => { 응답.sendFile(__dirname + '/index.html') }" 내에 있는 코드 "응답.sendFile(__dirname + '/index.html')" 가 실행
// 4) .sendFile(__dirname + '/index.html') 입력하면 index.html 파일을 유저에게 보내주기 (크롬 웹브라우저 화면 index.html 웹페이지 출력)
// ** 함수 sendFile 사용 예시 - sendFile('파일경로')
// 여기서 말하는 '파일경로' 적고 싶으면 
// __dirname (언더바(_) 2개 필수) 쓰면 현재 server.js 파일의 상위 폴더(디렉토리) 절대경로가 나온다.
// index.html 파일 경로를 구하려면
// index.html 파일은 server.js와 같은 폴더(디렉토리)에 존재하므로 
// __dirname (언더바(_) 2개 필수) 뒤에 '/index.html'만 추가하면
// index.html 파일경로를 구할 수 있다.
app.get('/', function(요청, 응답) {
  응답.sendFile(__dirname + '/index.html')
})

// 서버기능 (Rest API) - 오늘의 뉴스(Http - Get 방식) 
// 1) 누가 오늘의 뉴스 페이지 접속('/news') (크롬 웹브라우저 실행 -> URL 주소 "http://localhost:8080/news" 입력 및 엔터)
// 2) 자동으로 함수 "app.get()" 실행 -> 접속요청 처리
// 3) 2)번의 함수 "app.get()" 실행되고 나서 -> 2)번의 함수 "app.get()" 소괄호() 안에 존재하는 콜백함수 "(요청, 응답) => { 응답.send('오늘 비옴') }" 내에 있는 코드 "응답.send('오늘 비옴')" 가 실행
// 4) '오늘 비옴' 문자열을 유저에게 보내주기 (크롬 웹브라우저 화면 '오늘 비옴' 문자열 출력)
app.get('/news', (요청, 응답)=>{
  응답.send('오늘 비옴')
})

// 서버기능 (Rest API) - MongoDB에 임시 데이터 저장
// (예시) 데이터베이스 'forum' 하위 데이터 저장 하길 원하는 collection 'post'에 함수 insertOne 호출하여 데이터를 json 데이터 형식({title : '어쩌구'})으로 저장
// MongoDB 웹사이트 접속 -> 데이터베이스 버튼 "Browse Collections" 클릭 -> 데이터베이스 'forum' 하위 collection 'post' 클릭 -> Document 하나가 새로 발행
// -> 새로 발행된 Document 안에 위에서 저장한 json 데이터 형식({title : '어쩌구'})이 들어가 있다.
// app.get('/news', (요청, 응답)=>{
//   db.collection('post').insertOne({title : '어쩌구'})
//   응답.send('오늘 비옴')
// })

// 서버기능 (Rest API) - 쇼핑페이지(Http - Get 방식)
// 1) 누가 쇼핑페이지 접속시('/shop') (크롬 웹브라우저 실행 -> URL 주소 "http://localhost:8080/shop" 입력 및 엔터)
// 2) '쇼핑페이지입니다' 문자열을 유저에게 보내주기 (크롬 웹브라우저 화면 '쇼핑페이지입니다~' 문자열 출력)
app.get('/shop', (요청, 응답)=>{
  응답.send('쇼핑페이지입니다')
}) 

// 오늘의 숙제 :
// 누가 /about으로 접속하면 여러분이 누군지 대충 소개하는 html 파일을 보내줍시다.
// 그럼 html 파일도 하나 더 필요하겠죠?
// 쉬워서 답은 없음 
// 서버기능 - 자기소개(Http - Get 방식)
app.get('/about', function(요청, 응답) {
  응답.sendFile(__dirname + '/about.html')
})

// 서버기능 (Rest API) - 상품목록 json 데이터 전송(Http - Get 방식)
// 1) 누가 상품목록 json 데이터 접속(요청)('/data') (크롬 웹브라우저 실행 -> URL 주소 "http://localhost:8080/data" 입력 및 엔터 )
// 2) 자동으로 함수 "app.get()" 실행 -> 접속요청 처리
// 3) 2)번의 함수 "app.get()" 실행되고 나서 -> 2)번의 함수 "app.get()" 소괄호() 안에 존재하는 
//    콜백함수 "function(요청, 응답) => { 응답.sendFile(__dirname + '/data.json') }" 내에 있는 코드 "응답.sendFile(__dirname + '/data.json')" 가 실행
// 4) .sendFile(__dirname + '/data.json') 입력하면 data.json 파일을 유저에게 보내주기 (크롬 웹브라우저 화면 data.json 파일에 속한 상품목록 json 데이터 출력)
app.get('/data', function(요청, 응답) {
  응답.sendFile(__dirname + '/data.json')
})

app.get('/navbar', function(요청, 응답) {
  응답.sendFile(__dirname + '/navbar.html')
})

// 서버기능 (Rest API) - MongoDB의 특정 "컬렉션(post)"에 있는 모든 document 데이터 가져와서 화면에 리스트 형식으로 출력  
// app.get('/list', (요청, 응답) => {
//   응답.send('안녕')
// })
app.get('/list', async (요청, 응답) => {
  // try - catch 문법이란?
  // 이건 try 안에 있는 코드가 뭔가 오류발생하면 catch 안에있는 코드를 대신 실행해주는 유용한 문법이다.
  // try - catch 문법 사용 이유?
  // MongoDB 컬렉션 'post'에 데이터 저장하려고 할 때, 
  // 1) DB가 다운되어서 통신 불가 
  // 2) DB에 뭔가 저장하려는데 _id(primary key와 비슷함.)가 똑같은게 있어서 오류 발생 
  // 하여 오류가 발생하는 경우에 특정 코드를 실행하고 싶으면 try - catch 문법 사용하면 된다.

  try {
    // let result = await db.collection('컬렉션명').find().toArray()   // MongoDB의 특정 컬렉션 '컬렉션명'에 있는 모든 document 데이터 가져오기  

    // 키워드 await 기능 - 바로 다음줄 실행하지 말고 잠깐 대기 
    // 키워드 await 사용하는 이유 - 자바스크립트로 작성한 코드들 중 처리가 오래걸리는 코드는 처리완료 기다리지 않고 바로 다음줄 실행하는데 
    // 이와 같은 상황이 발생하지 않도록 키워드 await을 사용하여 바로 다음줄 실행하지 말고 처리가 오래걸리는 코드가 처리완료 될 때 까지 잠깐 대기 처리 한다.
    // 키워드 await 주의사항 - 키워드 await은 정해진 곳만 붙여서 사용할 수 있다. (Promise 뱉는 곳만 가능)

    // MongoDB의 특정 컬렉션 'post'에 있는 모든 document 데이터 가져오기 
    let result = await db.collection('post').find().toArray()   // await 사용해서 코드 다음 줄 실행하기 전에 잠깐 대기 (await를 사용하는 이유는 함수 db.collection() 호출시 처리 시간이 오래 걸리므로 해당 함수 호출 후 MongoDB에서 데이터를 가져와서 함수 응답.send에 인자로 해당 데이터를 전달해야 함.)
    // 유저에게 웹브라우저 쪽으로 ejs 파일 보내는 법
    // 기본 경로 views 폴더 -> ejs 파일(list.ejs)의 경우 아래처럼 'list.ejs' 이렇게만 작성해도 된다.
    // 서버로부터 받은 데이터를 ejs 파일에 넣으려면 
    // 1. 아래처럼 ejs 파일('list.ejs')로 데이터 전송({ 글목록 : result })
    // 2. ejs 파일('list.ejs') 안에서 ejs 문법 <%= 글목록 %> 사용 
    응답.render('list.ejs', { 글목록 : result }) 
  } catch (e) {
    console.log(e)
    응답.send('DB에러남')
  } 

  // 주의사항 - 아래 주석친 코드처럼 응답을 2번 쓰게 되면 바로 위에 호출한 응답.send만 실행 되므로 둘 중에 하나만 사용해야 함.
  // 응답.send(result[0].title)
  // 응답.render('list.ejs')

  // 터미널창에 변수 result에 할당된 데이터 출력 
  // console.log(result[0])   
  // console.log(result[0].title)
  // console.log(result[0]['title'])
  // console.log(result[1])
  // console.log(result[1].title)
  // console.log(result[1]['title'])

  // 응답.send(result)
  // 응답.send(result[0].title)

  // 함수 .then() 사용해서 MongoDB의 특정 컬렉션 '컬렉션명'에 있는 모든 document 데이터 가져오기 
  // db.collection('컬렉션명').find().toArray().then((result)=>{
  //   응답.send(result[0].title)
  // })

  // 콜백함수((err, result)=>{ ... }) 사용해서 MongoDB의 특정 '컬렉션명'에 있는 모든 document 데이터 가져오기 
  // db.collection('컬렉션명').find().toArray((err, result)=>{
  //   응답.send(result[0].title)
  // })
})

// app.get('/testlist', async (요청, 응답)=>{
//   let result = await db.collection('post').find().toArray()   // MongoDB의 특정 컬렉션 'post'에 있는 모든 document 데이터 가져오기 
//   응답.render('list.ejs', { 글목록 : result })  // 함수 응답.render() 의 둘째 파라미터에 { 작명 : 전송할데이터 } 이런 형식으로 적으면 ejs 파일로 데이터가 전달 (글목록이라는 이름으로 result안에 들어 있는 데이터 전달)
//   // 응답.render('list.ejs')
// })
// 서버기능 (Rest API) - 현재서버시간 화면에 출력 
app.get('/time', (요청, 응답) => {
  // TODO : new Date() 사용하여 현재 날짜와 시간 계산하기 (2024.12.02 jbh)
  // 참고 URL - https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date
  // 참고 2 URL - https://likedev.tistory.com/entry/Javascript-%ED%98%84%EC%9E%AC-%EB%82%A0%EC%A7%9C-%EC%8B%9C%EA%B0%84-%EA%B5%AC%ED%95%98%EA%B8%B0
  // const currentDate = new Date();
  // 응답.render('time.ejs', { 현재서버시간 : currentDate })
  응답.render('time.ejs', { data : new Date() })
})

// 서버기능 (Rest API) - 글작성 페이지(write.ejs) 화면에 출력 
app.get('/write', (요청, 응답) => {
  응답.render('write.ejs')
})


// 서버기능 (Rest API) - 글작성 웹페이지(write.ejs)에서 사용자가 작성한 글을 서버를 통해 MongoDB의 특정 컬렉션 'post'에 데이터 저장 
// 글 작성기능 명세서
// 1. 글작성 페이지(write.ejs)에서 글써서 서버로 전송 (<form> 태그 사용 및 POST 요청 기능 구현)
// 2. 서버는 글을 검사 
// 3. 이상 없으면 DB에 저장 
app.post('/add', async (요청, 응답)=>{

  // try - catch 문법이란?
  // 이건 try 안에 있는 코드가 뭔가 오류발생하면 catch 안에있는 코드를 대신 실행해주는 유용한 문법이다.
  // try - catch 문법 사용 이유?
  // MongoDB 컬렉션 'post'에 데이터 저장하려고 할 때, 
  // 1) DB가 다운되어서 통신 불가 
  // 2) DB에 뭔가 저장하려는데 _id(primary key와 비슷함.)가 똑같은게 있어서 오류 발생 
  // 하여 오류가 발생하는 경우에 특정 코드를 실행하고 싶으면 try - catch 문법 사용하면 된다.

  try {
    // 제목(title) 유효성 검사 
    if('' === 요청.body.title) {
      응답.send('제목입력안했는데?')   // 제목(title)이 공백('')일 시 웹브라우저 화면으로 메시지 '제목입력안했는데?' 보내기
    } else {
      console.log(요청.body)
      await db.collection('post').insertOne({ title : 요청.body.title, content : 요청.body.content })
      // MongoDB 컬렉션 'post'에 데이터 저장 완료시(서버 기능 실행 끝나면) 웹브라우저 화면으로 메시지 '작성완료' 보내기 
      // 응답.send('작성완료')  
      // MongoDB 컬렉션 'post'에 데이터 저장 완료시(서버 기능 실행 끝나면) 다른 페이지(list.ejs)로 강제로 이동 처리 
      응답.redirect('/list')
    }
  } catch (e) {
    console.log(e)   // 에러 메시지 출력
    // 응답.send('DB에러남')
    응답.status(500).send('서버에러남')  // status(500)에서 500은 서버 잘못으로 인한 에러라는 뜻
  }   

  // MongoDB 컬렉션 'post'에 데이터 저장 코드 예시 
  // 아래 주석친 코드 (예시1) 처럼 코드를 구현하면 컬렉션 'post'에 새로운 document를 하나 만들어서 이 저장할데이터를 새로운 document 안에 기록
  // 데이터는 JSON(JavaScript Object) 자료형식으로 추가함. 
  // (예시1) await db.collection('post').insertOne(저장할데이터)
  // 아래 주석친 코드 (예시2) 처럼 코드를 구현하면 컬렉션 'post'에 새로운 document를 하나 만들어서 컬럼 'a'에 데이터 값 '1'을 새로운 document 안에 기록
  // (예시2) await db.collection('post').insertOne({ a : 1 }) 

  // 사용자가 <input>태그에서 작성하여 서버로 보낸 정보(데이터)를 서버에서 쉽게 출력할 수 있도록 도와주며, 해당 정보(데이터)를 요청.body 형식으로 정보(데이터)를 쉽게 꺼내쓸 수 있다.
  // 해당 정보(데이터)를 요청.body 형식으로 정보(데이터)를 쉽게 꺼내쓸 수 있도록 하기 위해 서버 파일(server.js) 상단에 아래 주석친 코드 처럼 설정할 수 있는 코드 2줄을 추가한다.
  // app.use(express.json())
  // app.use(express.urlencoded({extended:true})) 
  // console.log(요청.body)   
  // 사용자가 <input>태그에서 작성하여 서버로 보낸 정보(데이터) MongoDB의 특정 컬렉션 'post'에 데이터 저장 
  // 참고 URL - https://www.mongodb.com/ko-kr/docs/manual/reference/method/db.collection.insertOne/
  // 참고 2 URL - https://velog.io/@zxc886/Node.js-Express-MongoDB%EC%82%AC%EC%9A%A9%ED%95%98%EC%97%AC-DB%EC%A0%80%EC%9E%A5%ED%95%98%EA%B8%B0-.1
  // await db.collection('post').insertOne({ title: 요청.body.title, content: 요청.body.content }, function(){
  //   console.log('저장완료');
  // });
}) 

// *** URL 파라미터 / query string 장점 *** 
// 둘 다 아무 API로 GET, POST, PUT, DELETE 요청할 때 전부 쓸 수 있다는게 장점이다.

// *** URL 파라미터 / query string 단점 *** 
// 단점은 URL에 정보가 노출된다는 겁니다. 
// 하여 URL 파라미터 / query string의 경우 짧고 안중요한 데이터 전송하는데 쓰는게 좋다. 

// TODO : URL 파라미터 문법 사용하여 URL 입력란에 ":~~~~" 이런 식으로 URL 주소 추가 구현 (2024.12.19 jbh)
//        사용자가 URL 주소 "/detail/아무문자"로 접속하면 아래 Rest API 기능 app.get('/detail/:aaaa', (요청, 응답)=>{ ... })  실행  
// 참고 URL - https://dawonny.tistory.com/273
/// <summary>
/// 서버기능 (Rest API) - 상세 웹페이지(detail.ejs) 웹브라우저 화면 출력 
/// </summary>
// app.get('/detail/:id/:id2/:id3', async (요청, 응답)=>{  // URL 파라미터 여러개(:id/:id2/:id3) 작성 가능
app.get('/detail/:id', async (요청, 응답) => {
  try {
    console.log(요청.params)
    console.log(요청.params.id)   // 사용자가 URL 파라미터에 입력한 id 값(데이터) object 자료형으로 출력  

    // MongoDB 컬렉션 'post'에 있는 모든 document들 중 _id 값이 Json 형식 ( { _id : 사용자가 URL 파라미터에 입력한 id 값 } ) 인 특정 document 가져오기(출력하기)
    let result = await db.collection('post').findOne({_id : new ObjectId(요청.params.id)})
    if(result == null) {
      응답.status(400).send('그런 글 없음')   // 사용자가 확인할 수 있도록 오류 상태코드(400 - 웹브라우저 console 창에 출력), 메시지 '그런 글 없음' 전송 - status(400)은 사용자 잘못으로 인한 에러라는 뜻 (예) status(404), status(4XX) 등등... / 참고 URL - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
    } else {
      // 유저에게 웹브라우저 쪽으로 ejs 파일 보내는 법
      // 기본 경로 views 폴더 -> ejs 파일(detail.ejs)의 경우 아래처럼 'detail.ejs' 이렇게만 작성해도 된다.
      // 서버로부터 받은 데이터를 ejs 파일에 넣으려면 
      // 1. 아래처럼 ejs 파일('detail.ejs')로 데이터 전송({ result : result })
      // 2. ejs 파일('detail.ejs') 안에서 ejs 문법 <%= result %> 사용 
      응답.render('detail.ejs', { result : result })
    }
    
    // TODO : 아래 주석친 테스트 코드 필요시 참고 (2024.12.24 jbh)    
    // console.log(result)   // 변수 result에 저장된 값이 null(null은 텅 비었다는걸 나타내는 자료형 의미)인지 아닌지 체크할 때 사용 
    // let result = await db.collection('post').find().toArray()  // MongoDB 컬렉션 'post'에 있는 모든 document 가져오기

    // MongoDB 컬렉션 'post'에 있는 모든 document들 중 데이터가 "{a : 1}"인 특정 document 가져오기(출력하기)
    // 단, 데이터가 "{a : 1}" 중복된 document들이 존재할 경우 그 중에 맨 위에 있는(가장 먼저 저장된 document) document 한개만 가져오기(출력하기)
    // let result = await db.collection().findOne({a : 1}) 

    // MongoDB 컬렉션 'post'에 있는 모든 document들 중 _id 값이 '64bfde3b02d2932a4c06ffba'인 특정 document 가져오기(출력하기)
    // let result = await db.collection('post').findOne({_id : new ObjectId('64bfde3b02d2932a4c06ffba')}) 

    // 응답.send('detail.ejs')
  } catch(e) {
    console.log(e)   // 에러 메시지 출력
    // 응답.send('DB에러남')
    응답.status(500).send('서버에러남')  // 사용자가 확인할 수 있도록 오류 상태코드(500 - 웹브라우저 console 창에 출력), 메시지 '서버에러남' 전송 - status(500)에서 500은 서버 잘못으로 인한 에러라는 뜻 (예) status(5XX) 등등... / 참고 URL - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
    응답.status(404).send('이상한거 넣지마라')  // 사용자가 확인할 수 있도록 오류 상태코드(404 - 웹브라우저 console 창에 출력), 메시지 '이상한거 넣지마라' 전송
    // 응답.status(404).send('이상한 url 입력함')
  }
})

/// <summary>
/// 서버기능 (Rest API) - 글수정 웹페이지(edit.ejs) 웹브라우저 화면 출력 
/// </summary>
app.get('/edit/:id', async (요청, 응답) => {
  try {
    // console.log(요청.params)
    // console.log(요청.params.id)   // 사용자가 URL 파라미터에 입력한 id 값(데이터) object 자료형으로 출력  

    // MongoDB 컬렉션 'post'에 있는 모든 document들 중 _id 값이 Json 형식인 ( { _id : 사용자가 URL 파라미터에 입력한 id 값 } ) 특정 document 1개 가져오기(출력하기)
    let result = await db.collection('post').findOne({_id : new ObjectId(요청.params.id)})
    console.log(result)

    if(result == null) {
      응답.status(400).send('그런 글 없음')   // 사용자가 확인할 수 있도록 오류 상태코드(400 - 웹브라우저 console 창에 출력), 메시지 '그런 글 없음' 전송 - status(400)은 사용자 잘못으로 인한 에러라는 뜻 (예) status(404), status(4XX) 등등... / 참고 URL - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
    } else {
      // 유저에게 웹브라우저 쪽으로 ejs 파일 보내는 법
      // 기본 경로 views 폴더 -> ejs 파일(edit.ejs)의 경우 아래처럼 'edit.ejs' 이렇게만 작성해도 된다.
      // 서버로부터 받은 데이터를 ejs 파일에 넣으려면 
      // 1. 아래처럼 ejs 파일('edit.ejs')로 데이터 전송({ result : result })
      // 2. ejs 파일('edit.ejs') 안에서 ejs 문법 <%= result %> 사용 
      응답.render('edit.ejs', { result : result })
    }
  } catch(e) {
    console.log(e)   // 에러 메시지 출력
    // 응답.send('DB에러남')
    응답.status(500).send('서버에러남')  // 사용자가 확인할 수 있도록 오류 상태코드(500 - 웹브라우저 console 창에 출력), 메시지 '서버에러남' 전송 - status(500)에서 500은 서버 잘못으로 인한 에러라는 뜻 (예) status(5XX) 등등... / 참고 URL - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
    응답.status(404).send('이상한거 넣지마라')  // 사용자가 확인할 수 있도록 오류 상태코드(404 - 웹브라우저 console 창에 출력), 메시지 '이상한거 넣지마라' 전송
    // 응답.status(404).send('이상한 url 입력함')
  }
})



// 글 수정기능 명세서
// 1. 글목록 페이지(list.ejs)에서 글마다 있는 수정버튼 누르면 글수정 페이지(edit.ejs)로 이동
// 2. 글수정 페이지(edit.ejs)엔 글의 제목과 내용이 이미 폼에 채워져있어야함 (<form> 태그 사용 및 POST 요청 기능 구현)
// 3. 버튼 수정누르면 그걸로 기존에 있던 document를 수정해줌 (이상 없으면 수정된 사항 MongoDB에 저장)
// 기능 구현 팁(Tip) 
// 1) 서버에서 특정 document를 찾을 수 없다면 사용자에게 보내라고 요청 
// 2) 서버에서 특정 document를 찾을 수 없다면 MongoDB에서 꺼내보기 
/// <summary>
/// 서버기능 (Rest API - POST) - 글수정 페이지(edit.ejs)에서 사용자가 작성한 글을 서버를 통해 MongoDB의 특정 컬렉션 'post'에 데이터 저장 
/// </summary>
app.post('/edit', async (요청, 응답) => {
  try {
    // 요청.body 의미? 
    // 사용자가 글수정 페이지(edit.ejs) 안의 <input> 태그에 직접 작성한 값(value - 글, 숫자 등등...)들이 들어있는 body를 의미
    console.log(요청.body)
    
    // try ~ catch 예외처리 기능 구현 예시
    // 1. 사용자가 _id 이상하게 보내면?
    // 2. 수정할 글 내용이 없으면? (공백 '' 또는 null)
    // 3. 사용자가 title, content 말고 다른 내용으로 보내면?
    // 4. 이상한 에러로 수정이 실패하면? (MongoDB 또는 웹서버상의 오류)

    // 제목(title) 유효성 검사 
    if('' === 요청.body.title) {
      응답.send('제목입력안했는데?')   // 제목(title)이 공백('')일 시 웹브라우저 화면으로 메시지 '제목입력안했는데?' 보내기
    } else {
      console.log(요청.body)


      // MongoDB 컬렉션 'post'에 있는 모든 document들 중 _id 값이 Json 형식 ( { _id : 사용자가 URL 파라미터에 입력한 id 값 } ) 인 특정 document 가져와서 
      // 제목(요청.body.title), 내용(요청.body.content)을 새로 입력한 값으로 수정해서 MongoDB 컬렉션 'post'에 속한 특정 document에 수정해서 저장하기 
      // (예시1) let result = await db.collection('post').updateOne( {수정할document정보}, {$set: {덮어쓸내용}}) -> 수정할document정보 히니 찾아서 덮어쓸내용으로 수정하기 
      // (예시2) let result = await db.collection('post').updateOne( { a : 1 }, {$set: { a : 2 }}) -> a : 1을 가진 document를 하나 찾아서 a 항목을 2로 수정하기 
      // (예시3) let result = await db.collection('post').updateOne({ _id : new ObjectId(요청.params.id) }, { $set : { title : 요청.body.title, content : 요청.body.content }})
      // (예시4) 함수 updateOne 사용해서 MondgoDB 데이터 수정한 결과 변수 result에 할당 
      // let result = await db.collection('post').updateOne({ _id : new ObjectId(요청.body.id) },
      //                                                    { $set : { title : 요청.body.title, content : 요청.body.content }})
      await db.collection('post').updateOne({ _id : new ObjectId(요청.body.id) },
                                            { $set : { title : 요청.body.title, content : 요청.body.content }})

      // MongoDB 컬렉션 'post'에 데이터 수정 완료시(서버 기능 실행 끝나면) 웹브라우저 화면으로 메시지 '수정완료' 보내기 
      // 응답.send('수정완료')  
      // MongoDB 컬렉션 'post'에 데이터 수정 완료시(서버 기능 실행 끝나면) 다른 페이지(list.ejs)로 강제로 이동 처리 
      응답.redirect('/list')

      // *** MongoDB 함수 updateOne 추가 문법 *** 
      // 1) $set : 특정 document -> 특정 항목(필드)에 속한 기존 값을 새로운 값으로 덮어쓰기(변경) 처리
      // (예) MongoDB 컬렉션 'post'에 속한 특정 document에 속한 항목(필드) "like"에 매핑되는 값을 1로 덮어쓰기(변경) 처리
      // await db.collection('post').updateOne({ _id : new ObjectId(요청.body.id) },
      //                                       { $set : { title : 요청.body.title, content : 요청.body.content, like : 1 }})
      // 2) $inc : (increase 약자 의미) 특정 document -> 특정 항목(필드)에 속한 기존 값(숫자만 해당)을 증가/감소 처리
      // (예 1) MongoDB 컬렉션 'post'에 속한 특정 document에 속한 항목(필드) "like"에 매핑되는 값(숫자만 해당)을 +1 증가 처리
      // await db.collection('post').updateOne({ _id : new ObjectId(요청.body.id) },
      //                                       { $set : { title : 요청.body.title, content : 요청.body.content }},
      //                                       { $inc : { like : 1 } })
      // (예 2) MongoDB 컬렉션 'post'에 속한 특정 document에 속한 항목(필드) "like"에 매핑되는 값(숫자만 해당)을 -1 감소 처리
      // await db.collection('post').updateOne({ _id : new ObjectId(요청.body.id) },
      //                                       { $set : { title : 요청.body.title, content : 요청.body.content }},
      //                                       { $inc : { like : -1 } })
      // 3) $mul : 특정 document -> 특정 항목(필드)에 속한 기존 값(숫자만 해당)과 새로운 값을 곱셈 처리
      // (예) MongoDB 컬렉션 'post'에 속한 특정 document에 속한 항목(필드) "like"에 매핑되는 값(숫자만 해당)을 X2 곱셈 처리
      // await db.collection('post').updateOne({ _id : new ObjectId(요청.body.id) },
      //                                       { $set : { title : 요청.body.title, content : 요청.body.content }},
      //                                       { $mul : { like : 2 } })
      // 4) $unset : 특정 document -> 특정 항목(필드) 삭제 처리 
      // (예) MongoDB 컬렉션 'post'에 속한 특정 document에 속한 항목(필드) "like" 삭제 처리
      // await db.collection('post').updateOne({ _id : new ObjectId(요청.body.id) },
      //                                       { $set : { title : 요청.body.title, content : 요청.body.content }},
      //                                       { $unset : { like }})

      // *** MongoDB 함수 updateOne 추가 문법 예제 *** 
      // $set : 특정 항목(필드) id 값이 1인 특정 document -> 특정 항목(필드) "like"에 속한 기존 값(10) -> 새로운 값(1) 덮어쓰기(변경) 처리
      // await db.collection('post').updateOne({ _id : 1 }, 
      //                                       { $set : { like : 1 }})

      // $inc : (increase 약자 의미) 특정 항목(필드) id 값이 1인 특정 document -> 특정 항목(필드) "like"에 속한 기존 값(숫자만 해당)을 +1 증가 처리
      // await db.collection('post').updateOne({ _id : 1 }, 
      //                                       { $inc : { like : 1 }})

      // $inc : (increase 약자 의미) 특정 항목(필드) id 값이 1인 특정 document -> 특정 항목(필드) "like"에 속한 기존 값(숫자만 해당)을 -2 감소 처리
      // await db.collection('post').updateOne({ _id : 1 }, 
      //                                       { $inc : { like : -2 }})

      // 3) $mul : 특정 항목(필드) id 값이 1인 특정 document -> 특정 항목(필드) "like"에 속한 기존 값(숫자만 해당)과 새로운 값(2)을 곱셈 처리
      // await db.collection('post').updateOne({ _id : 1 }, 
      //                                       { $mul : { like : 2}})

      // 4) $unset : 특정 항목(필드) id 값이 1인 특정 document -> 특정 항목(필드) "like" 삭제 처리 
      // await db.collection('post').updateOne({ _id : 1 }, 
      //                                       { $unset : { like }})

      // *** MongoDB 함수 updateMany 추가 문법 *** 
      // 1) 동시에 특정 조건이 일치하는 여러개의 document에 속한 데이터 수정
      // (예) MongoDB 컬렉션 'post' -> 여러개의 document에 속한 항목(필드) "title" 값이 '멍청아'로 되어있는 모든 document를 찾아서 항목(필드) "title"에 매핑되는 값을 '착한친구야'로 덮어쓰기 처리
      // await db.collection('post').updateMany({ title : '멍청아' },
      //                                        { $set: { title : '착한친구야' } })
      // 2) 동시에 특정 조건을 만족하는 여러개의 document에 속한 데이터 수정
      // $gt - greater than의 약자(초과 의미)
      // (예1) MongoDB 컬렉션 'post' -> 특정 document에 속한 항목(필드) "like"에 매핑되는 값(숫자만 해당)이 5보다 큰(>) document만 전부 필터링한 다음 
      //       항목(필드) "like"에 매핑되는 값(숫자만 해당)을 100으로 일괄 수정
      // await db.collection('post').updateMany({ like : { $gt: 5 } },
      //                                        { $set: { like : 100 } }) 

      // $gte - greater than + equal의 약자(이상 의미)
      // (예2) MongoDB 컬렉션 'post' -> 특정 document에 속한 항목(필드) "like"에 매핑되는 값(숫자만 해당)이 5보다 크거나 같은(>=) document만 전부 필터링한 다음 
      //       항목(필드) "like"에 매핑되는 값(숫자만 해당)을 100으로 일괄 수정
      // await db.collection('post').updateMany({ like : { $gte : 5 } },
      //                                        { $set: { like : 100 } }) 

      // $lt - lesser than의 약자(미만 의미)
      // (예3) MongoDB 컬렉션 'post' -> 특정 document에 속한 항목(필드) "like"에 매핑되는 값(숫자만 해당)이 5보다 작은(<) document만 전부 필터링한 다음 
      //       항목(필드) "like"에 매핑되는 값(숫자만 해당)을 100으로 일괄 수정 
      // await db.collection('post').updateMany({ like : { $lt : 5 } },
      //                                        { $set: { like : 100 } }) 

      // $lte - lesser than + equal의 약자(이하 의미)
      // (예4) MongoDB 컬렉션 'post' -> 특정 document에 속한 항목(필드) "like"에 매핑되는 값(숫자만 해당)이 5보다 작거나 같은(<=) document만 전부 필터링한 다음 
      //       항목(필드) "like"에 매핑되는 값(숫자만 해당)을 100으로 일괄 수정 
      // await db.collection('post').updateMany({ like : { $lte : 5 } },
      //                                        { $set: { like : 100 } }) 

      // $ne - not equal의 약자(특정 조건이 아닌 것만 의미)
      // (예5) MongoDB 컬렉션 'post' -> 특정 document에 속한 항목(필드) "like"에 매핑되는 값(숫자만 해당)이 5가 아닌(!=) document만 전부 필터링한 다음 
      //       항목(필드) "like"에 매핑되는 값(숫자만 해당)을 100으로 일괄 수정 
      // await db.collection('post').updateMany({ like : { $ne : 5 } },
      //                                        { $set: { like : 100 } }) 

      // *** MongoDB 함수 updateMany 추가 문법 예제 *** 
      // 1) 동시에 특정 조건이 일치하는 여러개의 document에 속한 데이터 수정
      // (예) MongoDB 컬렉션 'post' -> 여러개의 document에 속한 항목(필드) "_id" 값이 1로 되어있는 모든 document를 찾아서 항목(필드) "like"에 매핑되는 값을 2로 덮어쓰기 처리
      // await db.collection('post').updateMany({ _id : 1}, 
      //                                        { $set : { like : 2 } })

      // 2) 동시에 특정 조건을 만족하는 여러개의 document에 속한 데이터 수정
      // $gt - greater than의 약자(초과 의미)
      // (예1) MongoDB 컬렉션 'post' -> 특정 document에 속한 항목(필드) "like"에 매핑되는 값(숫자만 해당)이 10보다 큰(>) document만 전부 필터링한 다음 
      //       항목(필드) "like"에 매핑되는 값(숫자만 해당)을 2로 일괄 수정
      // await db.collection('post').updateMany({ like : { $gt : 10 } }, 
      //                                        { $set : { like : 2 } })

      // $gte - greater than + equal의 약자(이상 의미)
      // (예2) MongoDB 컬렉션 'post' -> 특정 document에 속한 항목(필드) "like"에 매핑되는 값(숫자만 해당)이 10보다 크거나 같은(>=) document만 전부 필터링한 다음 
      //       항목(필드) "like"에 매핑되는 값(숫자만 해당)을 2로 일괄 수정
      // await db.collection('post').updateMany({ like : { $gte : 10 } },
      //                                        { $set: { like : 2 } }) 

      // $lt - lesser than의 약자(미만 의미)
      // (예3) MongoDB 컬렉션 'post' -> 특정 document에 속한 항목(필드) "like"에 매핑되는 값(숫자만 해당)이 10보다 작은(<) document만 전부 필터링한 다음 
      //       항목(필드) "like"에 매핑되는 값(숫자만 해당)을 100으로 일괄 수정 
      // await db.collection('post').updateMany({ like : { $lt : 10 } },
      //                                        { $set: { like : 2 } }) 

      // $lte - lesser than + equal의 약자(이하 의미)
      // (예4) MongoDB 컬렉션 'post' -> 특정 document에 속한 항목(필드) "like"에 매핑되는 값(숫자만 해당)이 10보다 작거나 같은(<=) document만 전부 필터링한 다음 
      //       항목(필드) "like"에 매핑되는 값(숫자만 해당)을 100으로 일괄 수정 
      // await db.collection('post').updateMany({ like : { $lte : 10 } },
      //                                        { $set: { like : 2 } }) 

      // $ne - not equal의 약자(특정 조건이 아닌 것만 의미)
      // (예5) MongoDB 컬렉션 'post' -> 특정 document에 속한 항목(필드) "like"에 매핑되는 값(숫자만 해당)이 10가 아닌(!=) document만 전부 필터링한 다음 
      //       항목(필드) "like"에 매핑되는 값(숫자만 해당)을 2로 일괄 수정 
      // await db.collection('post').updateMany({ like : { $ne : 10 } },
      //                                        { $set: { like : 2 } }) 

    }
  } catch(e) {
    console.log(e)   // 에러 메시지 출력
    // 응답.send('DB에러남')
    응답.status(500).send('서버에러남')  // 사용자가 확인할 수 있도록 오류 상태코드(500 - 웹브라우저 console 창에 출력), 메시지 '서버에러남' 전송 - status(500)에서 500은 서버 잘못으로 인한 에러라는 뜻 (예) status(5XX) 등등... / 참고 URL - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
    // 응답.status(404).send('이상한거 넣지마라')  // 사용자가 확인할 수 있도록 오류 상태코드(404 - 웹브라우저 console 창에 출력), 메시지 '이상한거 넣지마라' 전송
    // 응답.status(404).send('이상한 url 입력함')
  }
})

/// <summary>
/// 서버기능 (Rest API - DELETE) - 글목록 페이지(list.ejs)에서 사용자가 작성한 글을 서버를 통해 MongoDB의 특정 컬렉션 'post'에서 데이터 삭제 
/// </summary>
app.delete('/delete', async(요청, 응답) => {

  try {
    console.log('테스트')
    // 요청.body 의미? 
    // 사용자가 글목록 페이지(list.ejs) 에서 삭제하고자 하는 글의 정보(글목록 id 값)를 담은 body를 의미
    console.log(요청.query)

    // TODO : 해당 "/delete" URL 주소로 Http - DELETE 요청시 오류 메시지 아래와 같은 오류 메시지가 출력되면 ObjectId 값이 유효성 검사하는 로직 추후 구현 필요 (2025.01.08 jbh)
    // "BSONError: Argument passed in must be a string of 12 bytes or a string of 24 hex characters or an integer" 
    // 참고 URL - https://www.mongodb.com/community/forums/t/bsontypeerror-argument-passed-in-must-be-a-string-of-12-bytes-or-a-string-of-24-hex-characters-or-an-integer/188466/2
    // 참고 2 URL - https://codingapple.com/forums/topic/bsonerror-argument-passed-in-must-be-a-string-of-12-bytes-or-a-string-of-24-hex/

    // MongoDB 컬렉션 'post'에 있는 모든 document들 중 _id 값이 Json 형식인 ( { _id : query string 입력한 id 값 } ) 특정 document 1개 삭제하기
    // 참고 URL - https://www.mongodb.com/ko-kr/docs/manual/tutorial/remove-documents/
    let result = await db.collection('post').deleteOne({ _id : new ObjectId(요청.query.docid) });
    console.log(result)

    if(result == null) {
      응답.status(400).send('그런 글 없음')   // 사용자가 확인할 수 있도록 오류 상태코드(400 - 웹브라우저 console 창에 출력), 메시지 '그런 글 없음' 전송 - status(400)은 사용자 잘못으로 인한 에러라는 뜻 (예) status(404), status(4XX) 등등... / 참고 URL - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
    } else {
      응답.send('삭제완료')

      // 주의사항 - AJAX로 서버에 요청(Http - DELETE)하는 경우 웹서버는 요청.redirect(), 요청.render() 이런걸 사용하면 안 된다.
      //           왜냐하면 해당 함수(요청.redirect(), 요청.render())들은 다른 페이지로 이동하는거라 웹브라우저 화면이 새로고침 되는 기능이기 때문이다.
      // AJAX란?
      // 웹브라우저 화면 새로고침 없이도 서버에게 요청을 날리고 데이터를 주고받는 기능이다. (주소창에 URL 입력하거나 <form> 태그를 전송하는 경우에는 웹브라우저 화면이 항상 새로고침이 되기 때문)
      // 웹브라우저 화면 새로고침 없이 서버랑 데이터를 주고받으면 더 이쁘고 부드러운 감성가득한 사이트를 운영하고 싶을 때 사용함.
      // MongoDB 컬렉션 'post'에 데이터 삭제 완료시(서버 기능 실행 끝나면) 다른 페이지(list.ejs)로 강제로 이동 처리 
      // 응답.redirect('/list')
    }
  } catch(e) {
    console.log(e)   // 에러 메시지 출력
    // 응답.send('DB에러남')
    응답.status(500).send('서버에러남')  // 사용자가 확인할 수 있도록 오류 상태코드(500 - 웹브라우저 console 창에 출력), 메시지 '서버에러남' 전송 - status(500)에서 500은 서버 잘못으로 인한 에러라는 뜻 (예) status(5XX) 등등... / 참고 URL - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
    // 응답.status(404).send('이상한거 넣지마라')  // 사용자가 확인할 수 있도록 오류 상태코드(404 - 웹브라우저 console 창에 출력), 메시지 '이상한거 넣지마라' 전송
    // 응답.status(404).send('이상한 url 입력함')
  }
})


// TODO : 아래 주석친 코드 필요시 참고 (2025.01.03 jbh)
/// <summary>
/// 서버기능 (Rest API - PUT) - 글수정 페이지(edit.ejs)에서 사용자가 작성한 글을 서버를 통해 MongoDB의 특정 컬렉션 'post'에 데이터 저장 
/// </summary>
// app.put('/edit', async (요청, 응답) => {
//   try {
//     // 요청.body 의미? 
//     // 사용자가 글수정 페이지(edit.ejs) 안의 <input> 태그에 직접 작성한 값(value - 글, 숫자 등등...)들이 들어있는 body를 의미
//     console.log(요청.body)
    
//     // try ~ catch 예외처리 기능 구현 예시
//     // 1. 사용자가 _id 이상하게 보내면?
//     // 2. 수정할 글 내용이 없으면? (공백 '' 또는 null)
//     // 3. 사용자가 title, content 말고 다른 내용으로 보내면?
//     // 4. 이상한 에러로 수정이 실패하면? (MongoDB 또는 웹서버상의 오류)

//     // 제목(title) 유효성 검사 
//     if('' === 요청.body.title) {
//       응답.send('제목입력안했는데?')   // 제목(title)이 공백('')일 시 웹브라우저 화면으로 메시지 '제목입력안했는데?' 보내기
//     } else {
//       console.log(요청.body)

//       // MongoDB 컬렉션 'post'에 있는 모든 document들 중 _id 값이 Json 형식 ( { _id : 사용자가 URL 파라미터에 입력한 id 값 } ) 인 특정 document 가져와서 
//       // 제목(요청.body.title), 내용(요청.body.content)을 새로 입력한 값으로 수정해서 MongoDB 컬렉션 'post'에 속한 특정 document에 수정해서 저장하기 
//       // (예시1) let result = await db.collection('post').updateOne( {수정할document정보}, {$set: {덮어쓸내용}}) -> 수정할document정보 히니 찾아서 덮어쓸내용으로 수정하기 
//       // (예시2) let result = await db.collection('post').updateOne( { a : 1 }, {$set: { a : 2 }}) -> a : 1을 가진 document를 하나 찾아서 a 항목을 2로 수정하기 
//       // (예시3) let result = await db.collection('post').updateOne({ _id : new ObjectId(요청.params.id) }, { $set : { title : 요청.body.title, content : 요청.body.content }})
//       // (예시4) 함수 updateOne 사용해서 MondgoDB 데이터 수정한 결과 변수 result에 할당 
//       // let result = await db.collection('post').updateOne({ _id : new ObjectId(요청.body.id) },
//       //                                                    { $set : { title : 요청.body.title, content : 요청.body.content }})
//       await db.collection('post').updateOne({ _id : new ObjectId(요청.body.id) },
//                                             { $set : { title : 요청.body.title, content : 요청.body.content }})

//       // MongoDB 컬렉션 'post'에 데이터 수정 완료시(서버 기능 실행 끝나면) 웹브라우저 화면으로 메시지 '수정완료' 보내기 
//       // 응답.send('수정완료')  
//       // MongoDB 컬렉션 'post'에 데이터 수정 완료시(서버 기능 실행 끝나면) 다른 페이지(list.ejs)로 강제로 이동 처리 
//       응답.redirect('/list')
//     }
//   } catch(e) {
//     console.log(e)   // 에러 메시지 출력
//     // 응답.send('DB에러남')
//     응답.status(500).send('서버에러남')  // 사용자가 확인할 수 있도록 오류 상태코드(500 - 웹브라우저 console 창에 출력), 메시지 '서버에러남' 전송 - status(500)에서 500은 서버 잘못으로 인한 에러라는 뜻 (예) status(5XX) 등등... / 참고 URL - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
//     // 응답.status(404).send('이상한거 넣지마라')  // 사용자가 확인할 수 있도록 오류 상태코드(404 - 웹브라우저 console 창에 출력), 메시지 '이상한거 넣지마라' 전송
//     // 응답.status(404).send('이상한 url 입력함')
//   }
// })


// TODO : 아래 주석친 코드 필요시 참고 (2025.01.03 jbh)
/// <summary>
/// 서버기능 (Rest API) - 글수정 게시판(edit.ejs)에서 사용자가 작성한 글을 서버를 통해 MongoDB의 특정 컬렉션 'post'에 데이터 저장 
/// </summary>
// app.post('/update/:id', async (요청, 응답) => {
//   try {

//     // 제목(title) 유효성 검사 
//     if('' === 요청.body.title) {
//       응답.send('제목입력안했는데?')   // 제목(title)이 공백('')일 시 웹브라우저 화면으로 메시지 '제목입력안했는데?' 보내기
//     } else {
//       console.log(요청.body)

//       // MongoDB 컬렉션 'post'에 있는 모든 document들 중 _id 값이 Json 형식 ( { _id : 사용자가 URL 파라미터에 입력한 id 값 } ) 인 특정 document 가져와서 
//       // 제목(요청.body.title), 내용(요청.body.content)을 새로 입력한 값으로 수정해서 MongoDB 컬렉션 'post'에 속한 특정 document에 수정해서 저장하기 
//       // (예시1) await db.collection('post').updateOne( {수정할document정보}, {$set: {덮어쓸내용}}) -> 수정할document정보 히니 찾아서 덮어쓸내용으로 수정하기 
//       // (예시2) await db.collection('post').updateOne( { a : 1 }, {$set: { a : 2 }}) -> a : 1을 가진 document를 하나 찾아서 a 항목을 2로 수정하기 
//       await db.collection('post').updateOne({ _id : new ObjectId(요청.params.id) }, { $set : { title : 요청.body.title, content : 요청.body.content }})

//       // MongoDB 컬렉션 'post'에 데이터 수정 완료시(서버 기능 실행 끝나면) 웹브라우저 화면으로 메시지 '수정완료' 보내기 
//       // 응답.send('수정완료')  
//       // MongoDB 컬렉션 'post'에 데이터 수정 완료시(서버 기능 실행 끝나면) 다른 페이지(list.ejs)로 강제로 이동 처리 
//       응답.redirect('/list')
//     }
//   } catch(e) {
//     console.log(e)   // 에러 메시지 출력
//     // 응답.send('DB에러남')
//     응답.status(500).send('서버에러남')  // 사용자가 확인할 수 있도록 오류 상태코드(500 - 웹브라우저 console 창에 출력), 메시지 '서버에러남' 전송 - status(500)에서 500은 서버 잘못으로 인한 에러라는 뜻 (예) status(5XX) 등등... / 참고 URL - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
//     // 응답.status(404).send('이상한거 넣지마라')  // 사용자가 확인할 수 있도록 오류 상태코드(404 - 웹브라우저 console 창에 출력), 메시지 '이상한거 넣지마라' 전송
//     // 응답.status(404).send('이상한 url 입력함')
//   }
// })


// 서버기능 (Rest API) - 글작성 테스트 페이지(test.ejs) 화면에 출력 
app.get('/test', (요청, 응답)=>{
  응답.render('test.ejs')
})

// 서버기능 (Rest API) - MongoDB의 특정 "컬렉션(test)"에 있는 모든 document 데이터 가져와서 화면에 리스트 형식으로 출력 
app.get('/test/list', async (요청, 응답)=> {
  try {
    let result = await db.collection('test').find().toArray()
    응답.render('testlist.ejs', { 글목록 : result })
  } catch(e) {
    console.log(e)
    응답.send('DB에러남')
  }
})


// 서버기능 (Rest API) - 글작성 테스트 웹페이지(test.ejs)에서 사용자가 작성한 글을 서버를 통해 MongoDB의 특정 컬렉션 'test'에 데이터 저장 
// 글 작성기능 명세서
// 1. 글작성 페이지(test.ejs)에서 글써서 서버로 전송 (<form> 태그 사용 및 POST 요청 기능 구현)
// 2. 서버는 글을 검사 
// 3. 이상 없으면 DB에 저장 
app.post('/test/add', async (요청, 응답)=>{

  try {
    // 회사명(company) 유효성 검사
    if('' === 요청.body.company) {
      응답.send('회사명입력안했는데?')   // 회사명(company)이 공백('')일 시 웹브라우저 화면으로 메시지 '회사명입력안했는데?' 보내기
    } else {
      console.log(요청.body)
      await db.collection('test').insertOne({ company: 요청.body.company, personName: 요청.body.personName, phoneNumber: 요청.body.phoneNumber })
      응답.redirect('/test/list')
    }
  } catch(e) {
    console.log(e)   // 에러 메시지 출력
    // 응답.send('DB에러남')
    응답.status(500).send('서버에러남')  // status(500)에서 500은 서버 잘못으로 인한 에러라는 뜻
  }
})


// 자바스크립트 문법 반복문 for문 설명 
// for(let i = 0; i < 3; i++) {
//   console.log(i)
// }

// 자바스크립트 문법(함수 - function) 설명 
// (예제 1) function 함수1(){ ... }
// (예제 2) var 함수2 = () => { ... }
// (예제 3) app.get('/어쩌구', (요청, 응답) => { 응답.send('테스트') }) - Node.js "app.get()"도 함수 사용문법임 / (예제 3)의 () => {} 부분도 함수 만들어서 집어넣는 문법입니다.

// 자바스크립트 문법(콜백함수) 설명 
// 다른 함수 파라미터에 들어가는 함수 의미함
// app.get('/어쩌구', (요청, 응답) => { 응답.send('테스트') }) 함수 호출할 때, "app.get()" 함수 소괄호() 안에 들어가는 함수 "(요청, 응답) => { 응답.send('테스트') }"를 콜백함수라고 부른다.
// 콜백함수는 자바스크립트에서 특정 함수들이나 특정 코드들을 순차적으로 차례차례 실행하고 싶을 때 자주 사용합니다. 

// 자바스크립트 문법(콜백함수) 예제
// 아래 주석친 코드 실행 순서 
// 1) 누가 오늘의 뉴스 페이지 접속('/news') (크롬 웹브라우저 실행 -> URL 주소 "http://localhost:8080/news" 입력 및 엔터)
// 2) 자동으로 함수 "app.get()" 실행 -> 접속요청 처리
// 3) 2)번의 함수 "app.get()" 실행되고 나서 -> 2)번의 함수 "app.get()" 소괄호() 안에 존재하는 콜백함수 "(요청, 응답) => { 응답.send('오늘 비옴') }" 내에 있는 코드 "응답.send('오늘 비옴')" 가 실행
// 4) '오늘 비옴' 문자열을 유저에게 보내주기 (크롬 웹브라우저 화면 '오늘 비옴' 문자열 출력)
// app.get('/news', (요청, 응답) => {
//   응답.send('오늘 비옴')
// }) 

// ** 자바스크립트 문법(콜백함수) 주의사항 ** 
// 1) 콜백함수는 맘대로 쓸 수는 없고 콜백함수 쓰라는 곳만 쓸 수 있다.
// 2) 함수 소괄호 안에 들어가는 함수를 '콜백함수'라고 부른다

// 자바스크립트 문법 array 자료형
// 용도 - 자바스크립트에서 여러가지 자료들을 변수하나에 저장하고 싶을 때 사용 
// 아래처럼 변수 a 하나에 여러가지 숫자나 문자를 담아서 보관 가능 
// (예) let a = [10, 20, 30]
// array 자료형 인덱싱 
// array 자료형에서 존재하는 여러가지 자료들 중 원하는 자료만 쏙 빼서 사용하고 싶을 때 쓴다.
// (예) let a = [10, 20, 30]
// console.log(a[1])

// 자바스크립트 문법 object 자료형
// 용도 - object자료형도 똑같이 여러 자료를 변수하나에 넣어두고 싶을 때 사용
// 아래처럼 변수 b 하나에 여러가지 자료들을 콤마로 구분해서 key : value 형식으로 저장해야함.
// let b = { name : 'kim', age : 20 }
// object 자료형 value 출력 
// 특정 value 하나만 꺼내고 싶으면 object 자료 오른쪽에 점찍고 특정 key이름 넣기 
// console.log(b.name)
// 특정 value 하나만 꺼내고 싶으면 object 자료 오른쪽에 대괄호 사용 및 해당 대괄호 안에 특정 key이름 넣기 (['key'])
// console.log(b['name'])

// 용어 정리 
// (1) 터미널 명령어 중 "npm"은 라이브러리 설치를 도와주는 보조 프로그램이다. node.js를 설치하면 누구나 npm을 이용할 수 있다.
// (2) PORT란? 
// PORT가 뭐냐면 
// 여러분 컴퓨터는 항상 외부 컴퓨터와 통신할 수 있게 설계되어있습니다.
// 랜선만 꽂혀있으면 다른 사람이 여러분 컴퓨터로 접속을 할 수 있고 그렇습니다. 
// 웹서버도 실은 다른 사람 컴퓨터에 접속하는 행위랑 똑같습니다. 접속하면 웹페이지를 보여주는 것일 뿐
// 하지만 평상시엔 남들이 내 컴퓨터에 무단으로 접속을 할 수는 없습니다. 
// 여러분들이 컴퓨터에 구멍을 하나 뚫어놓아야 거기로 외부 사람들이 내 컴퓨터로 접속할 수 있습니다
// 구멍을 전문용어로 PORT라고 부르고 컴퓨터에는 내 맘대로 오픈할 수 있는 포트 구멍이 6만개 정도 있습니다.

// 그래서 아까 누가 내 컴퓨터에 접속할 수 있게 만들기 위해서 
// 8080번째 포트하나를 맘대로 연겁니다. 
// 이제 외부 컴퓨터가 여러분 아이피주소:8080이라고 브라우저 주소창에 입력하면
// 여러분 컴퓨터로 들어올 수 있게 되는 것입니다. 
// (터미널에 ipconfig 치면 뜨는 그 아이피주소임)

// 참고로 열 수 있는 포트는 6만개 정도 있는데
// 컴퓨터가 이미 예약해서 쓰고 있는 포트번호들도 여러개 있습니다.
// 그런건 쓰면 안됩니다. 