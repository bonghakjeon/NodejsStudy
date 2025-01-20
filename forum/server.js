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
// 21강 - 삭제기능 만들기 3 (AJAX 추가 내용) 
// 22강 - 글목록 여러 페이지로 나누기
// 23강 - JWT, session, OAuth 설명시간
// 24강 - 회원기능 만들기 1 (passport, 로그인기능)

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

// MongoDB 호스팅 받은 DB접속URL 주소 Node.js 서버 파일(server.js)과 연동하기 
// Node.js 서버와 MongoDB 연동 해야 하는 이유
// 사용자가 요청하는 데이터를 서버가 중간에 개입하여 검사 과정을 거쳐서 데이터를 입출력 해야하기 때문이다.
// 아래 주석친 코드 중 new ObjectId('64bfde3b02d2932a4c06ffba') 사용하기 위해서 아래 const { ObjectId } = require('mongodb') 코드 구현 
// let result = await db.collection('post').findOne({_id : new ObjectId('64bfde3b02d2932a4c06ffba')}) 
const { MongoClient, ObjectId } = require('mongodb')
// const { ObjectId } = require('mongodb') 


// 웹페이지(확장자 .ejs - (예) edit.ejs) 파일에 구현한 <form> 태그에 속한 method 속성에 "PUT", "DELETE" 요청하기 위한 방법
// 1) 터미널에 명령어 "npm install method-override" 입력 및 엔터 -> 라이브러리 method-override 설치 
// 2) 1)번에서 설치한 method-override 라이브러리 사용해서 아래처럼 코드 작성 
const methodOverride = require('method-override')
app.use(methodOverride('_method')) 


// 웹서버에 public 폴더 등록 
// 용도 - public 폴더 안에 있는 static 파일들(.css / 이미지 / .js)을 html 파일 (예) index.html, about.html 등등... 에서 가져다 쓰기 위한 용도 
// 참고 URL - https://coding-yesung.tistory.com/175
app.use(express.static(__dirname + '/public'));

// ejs 템플릿 엔진 사용하기 
// 웹서버로 부터 받은 데이터를 html 파일에 넣기 위해 ejs 템플릿 엔진 사용 
// 웹서버로 부터 받은 데이터를 html 파일에 넣으려면 ejs 파일(확장자 .ejs)을 폴더 views 안에서 만들기 
app.set('view engine', 'ejs') 

// 사용자가 서버로 보낸 정보(데이터) 검사 및 출력 설정 
// 사용자가 <input> 태그에서 작성하여 서버로 보낸 정보(데이터)를 서버에서 쉽게 출력할 수 있도록 도와주며, 
// 해당 정보(데이터)를 요청.body 형식으로 정보(데이터)를 쉽게 꺼내쓸 수 있도록 하기 위해 아래처럼 설정할 수 있는 코드 2줄을 추가한다.
app.use(express.json())
app.use(express.urlencoded({extended:true})) 


// 터미널 명령어 "npm install express-session passport passport-local" 입력 및 엔터 -> passport 라이브러리 설치 완료
// 위의 터미널 명령어 중 
// 1) passport는 회원인증 도와주는 메인라이브러리 의미
// 2) passport-local은 아이디/비번 방식 회원인증쓸 때 쓰는 라이브러리 의미
// 3) express-session은 세션(session) 만드는거 도와주는 라이브러리 의미
const session = require('express-session')
const passport = require('passport')
const LocalStrategy = require('passport-local')

// 주의사항 - 아래 passport 라이브러리 관련 app.use()가 3개 있는데 순서틀리면 오류 발생함. 
app.use(passport.initialize())

// 아래 session() 안에 언제 어떻게 세션(session)을 만들지(세션(session) 유효기간 설정 포함) 설정
// 아무 설정을 안해놓으면 기본적으로 세션(session) document 유효기간은 2주로 설정됨
// 그니까 한 번 로그인하면 사용자가 2주동안 로그인을 유지할 수 있다는 의미이다.
app.use(session({
  secret: '암호화에 쓸 비번',             // secret : 안에는 비번 입력 필수. 세션문자열같은거 암호화할 때 쓰는데 비번 긴게 좋다. 
  resave : false,                        // resave : 는 사용자가 서버로 요청날릴 때 마다 session데이터를 다시 갱신할건지 여부 (false 추천)
  saveUninitialized : false,             // saveUninitialized : 는 사용자가 로그인 안해도 session데이터를 저장해둘지 여부 (false 추천)
  cookie : { maxAge : 60 * 60 * 1000 }   // cookie : ms 단위로 유효기간 설정(maxAge : 60 * 60 * 1000 은 유효시간 1시간 의미)
}))

app.use(passport.session()) 

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

// 서버기능 (Rest API) - 회원 가입 + 로그인
// 회원기능 동작방식 
// 예를 들어 게시물들을 로그인한 사람만 볼 수 있게 하려면
// 아래와 같은 회원기능이 필요함.

// 회원가입 : 
// 1. 사용자가 가입하면 아이디/비번을 DB에 저장

// 로그인 : 
// 1. 사용자가 로그인시 아이디/비번을 서버로 전송 
// 2. 서버는 DB에 있는 아이디/비번과 사용자가 보낸 아이디/비번이 일치하는 경우 입장권(session, JWT(Json Web Token), OAuth 등등...)을 발급

// 로그인이 필요한 서버기능 : 
// 1. 사용자는 서버에 GET/POST로 데이터 요청시 입장권(session, JWT(Json Web Token), OAuth 등등...)도 함께 자동으로 서버에 전송
// 2. 서버는 전송받은 입장권(session, JWT(Json Web Token), OAuth 등등...) 확인 후 데이터나 페이지 전송

// 입장권(session, JWT(Json Web Token), OAuth 등등...) 이 저장된 위치?
// 크롭 웹브라우저 개발자도구(검사) -> 리본 탭 "Application" -> 하위 쿠키저장소("Cookie") 클릭 -> 입장권(session, JWT(Json Web Token), OAuth 등등...) 존재함.

// 입장권(session, JWT(Json Web Token), OAuth 등등...) 만드는 방식
// 1. session 방식 
// 장점 : 사용자가 서버로 HTTP GET/POST 요청할 때마다 서버가 DB에 존재하는 데이터를 조회하기 때문에 사용자가 요청 할때마다 서버는 사용자의 로그인 상태를 엄격하게 체크 가능
// 단점 : 그만큼 서버가 DB 조회를 많이 하기 때문에 DB의 부담이 심해진다.
// 하여 사용자가 많은 웹사이트들은 위의 단점을 보완하기 위한 방법으로 좀더 빠른 redis 같은 { session id } 보관용 DB(장점 - DB에 존재하는 데이터 입출력 속도 빠름)를 사용함.  
// 사용자가 로그인 완료 -> 서버와 연동된 DB 데이터 저장 { 사용자 아이디, 로그인날짜, 유효기간, session id } -> 서버가 사용자에게 입장권 발급할 때 { session id }만 발급 처리 
// -> 사용자가 서버로 HTTP GET/POST 요청시 입장권 { session id } 전송 -> 서버는 사용자가 전송한 입장권 { session id }을 가지고 DB에서 해당 입장권 { session id }과 매핑되는 데이터 검색
// -> 서버가 해당 입장권 { session id }과 매핑되는 데이터가 문제가 없고 유효기간이 지나지 않았다고 확인 -> 사용자쪽 웹브라우저로 데이터 전송(GET) 또는 특정 기능 실행(POST)

// 2. token 방식 (JWT 방식 - JSON Web Token)
// 장점 : 1) 서버가 JWT 입장권 { 사용자아이디, 로그인날짜, 유효기간 등등... }을 만들 때 여러 정보들을 짧은 문자로 변환을 해서 만드는데 (일명 hashing)
//        변환할 때 암호를 넣을 수 있어서 암호가 변경되거나 내용이 변경되면 짧은 문자도 변하기 때문에 사용자가 JWT 입장권을 위조 하더라도 위조여부를 쉽게 확인 가능 
//        2) token 방식 (JWT 방식 - JSON Web Token)의 장점은 사용자가 매번 GET/POST 요청할 때 마다 서버가 DB를 조회할 필요가 없어서 DB 부담이 적다.
//           그래서 사용자가 매우 많거나 마이크로서비스형태로 서버를 많이 운영하는 사이트들이 즐겨쓰는 경향이 있다. 
// 단점 : 1) 사용자의 JWT 입장권을 다른 사람이 악용할 목적으로 훔쳐가면 해당 JWT 입장권으로 다른 사람의 로그인을 막거나 정지시킬수 있는 방법이 없다.
//        또한 서버가 다른 사용자의 컴퓨터에 저장된 JWT 입장권을 소멸시키거나 그럴 수는 없기 때문에 서버가 다른 사용자가의 컴퓨터를 로그아웃 시키기도 어렵다.
//        2) 단점 1)번을 보완하기 위해서 다른 사람이 악용할 목적으로 훔쳐간 JWT 입장권들을 모아서 DB 같은 곳에 저장해두면 되는데 
//           그러면 서버는 매번 사용자가 HTTP GET/POST 요청시마다 전송한 JWT 입장권을 가지고 매번 DB를 조회해야해서 sesssion 방식과 딱히 다른 점이 없어서 
//           DB의 부담이 심해진다.

// - 사용자 로그인 완료 -> 서버가 사용자에게 입장권 { 사용자아이디, 로그인날짜, 유효기간 등등... }을 암호화하여 발급 -> 사용자가 서버로 HTTP GET/POST 요청시 암호화 처리된 입장권 { 사용자아이디, 로그인날짜, 유효기간 등등... } 전송 
// -> 서버는 사용자가 전송한 암호화된 입장권 { 사용자아이디, 로그인날짜, 유효기간 등등... } 에서 별문제가 없다고 확인하면 -> 사용자쪽 웹브라우저로 데이터 전송(GET) 또는 특정 기능 실행(POST)

// 3. OAuth 방식 (소셜 로그인 방식)
// 사용자가 웹사이트 A 로그인 완료 -> 웹사이트 A서버가 사용자에게 웹사이트 A 사용권한 부여 -> 웹사이트 B서버가 웹사이트 A 사용권한을 잠시 대여하는 기능 
// 위의 과정을 정의하는 규칙을 OAuth 방식 (SNS 소셜 로그인 방식)이라고 함.
// 장점 - 사용자의 웹사이트 A 회원정보를 웹사이트 B서버로 가져와서 사용 가능 (심지어 웹사이트 B에서 회원 가입시에도 웹사이트 A 회원정보 사용 가능)
// (예) CodingApple 웹사이트에서 구글 로그인 회원기능 구현 
// 사용자가 CodingApple 웹사이트에서 구글 로그인 버튼 "Sign in with Google" 클릭 -> 메시지 출력 "구글 계정으로 로그인 하세요" -> 사용자는 구글 계정으로 로그인 완료 
// -> 메시지 출력 "CodingApple 웹사이트에 구글 계정의 회원 정보 제공하시겠습니까?" -> 사용자가 버튼 "Yes" 클릭해서 구글 계정의 회원 정보 제공 동의 처리 
// -> 구글서버에서 CodingApple 웹서버로 알림 전송 "사용자가 구글 계정의 회원 정보 제공 동의 완료" -> CodingApple 웹서버가 구글서버에서 알림 "사용자가 구글 계정의 회원 정보 제공 동의 완료" 받으면 
// -> CodingApple 웹서버는 구글 서버에 사용자 구글 계정 정보 { 유저이메일, 이름, access_token, 유효기간 } 요청해서 받기 


// 아래 라이브러리 passport.use(new LocalStrategy(async (입력한아이디, 입력한비번, cb) => { ... }))는 
// 로그인 페이지(login.ejs)에서 사용자가 입력한 아이디/비번이 서버 파일(server.js)과 연동된 MongoDB의 특정 컬렉션 'user'에 속하는 DB와 일치여부 검증하는 로직 짜는 공간이다.
// 아래처럼 코드를 짜놓으면 앞으로 사용자가 제출한 아이디/비번이 
// 서버 파일(server.js)과 연동된 MongoDB의 특정 컬렉션 'user'에 속하는 DB랑 맞는지 검증하고 싶을 때 이 코드를 실행시키면 되는데 
// 실행시키는 방법은 서버 파일(server.js) 안에서 구현한 Rest API 안에서 passport.authenticate('local') 이런 코드 작성 및 호출시  
// 아래 코드가 자동으로 실행된다. 
// (주의사항) (참고) 이 코드 하단에 API들을 구현해야 해당 API들에서 로그인관련 기능(DB 일치여부 검증 등등...)들이 잘 작동한다.
// (참고) 사용자가 로그인 페이지(login.ejs)에서 입력해서 보낸 아이디/비번 말고 다른 것도 검증하고 싶으면 passReqToCallback 옵션 찾아보면 요청.body같은걸 저 코드 안에서 사용가능
// *** 아래 passport.use(new LocalStrategy(async (입력한아이디, 입력한비번, cb) => { ... })) 코드 설명 
// 1) 로그인 페이지(login.ejs)에서 사용자가 아이디/비번(<input name="username">  <input name="password">) 작성 및 버튼 "전송" 클릭 -> 서버 파일(server.js)에서 구현한 Rest API (app.post('/login', (요청, 응답) => { ... }))에 사용자가 입력한 아이디/비번 전송 및 해당 Rest API 실행 
// 2) 1)번에서 실행한 Rest API (app.post('/login', (요청, 응답) => { ... })) 몸체 안에서 라이브러리 passport 함수 passport.authenticate('local') 호출
// 3) 아래 라이브러리 passport.use(new LocalStrategy(async (입력한아이디, 입력한비번, cb) => { ... }))안에 사용자가 로그인 페이지(login.ejs)에서 입력한 로그인 아이디/비번이 DB와 일치여부 검증하는 로직 실행 
// 4) 사용자가 로그인 페이지(login.ejs)에서 입력해서 보낸 아이디/비번(<input name="username">  <input name="password">)과 서버 파일(server.js)과 연동된 MongoDB의 특정 컬렉션 'user'에 속하는 DB 비교(일치여부 확인) 하기 
passport.use(new LocalStrategy(async (입력한아이디, 입력한비번, cb) => {
  try {
    // 5) 사용자가 로그인 페이지(login.ejs)에서 입력해서 보낸 아이디/비번(<input name="username">  <input name="password">)과 서버 파일(server.js)과 연동된 MongoDB의 특정 컬렉션 'user'에 속하는 DB 비교(일치여부 확인) 하기 
    let result = await db.collection('user').findOne({ username : 입력한아이디 })
    // 6) 사용자가 로그인 페이지(login.ejs)에서 입력해서 보낸 아이디(<input name="username"> )가 
    //    서버 파일(server.js)과 연동된 MongoDB의 특정 컬렉션 'user'에 속하는 DB에 존재하지 않는 경우 
    if (!result) {
      return cb(null, false, { message: '아이디 DB에 없음' })   // 아래 false 및 에러메세지({ message: '아이디 DB에 없음' }))를 cb() 안에 넣어주고 리턴 
    }
  
    // 사용자가 로그인 페이지(login.ejs)에서 입력해서 보낸 아이디(<input name="username"> )가 
    // 서버 파일(server.js)과 연동된 MongoDB의 특정 컬렉션 'user'에 속하는 DB에 존재하는 경우 
    // 7) 사용자가 로그인 페이지(login.ejs)에서 입력해서 보낸 비번이 
    //    서버 파일(server.js)과 연동된 MongoDB의 특정 컬렉션 'user'에 속하는 DB에 일치하는 경우 
    if (result.password == 입력한비번) {
      return cb(null, result)   // 일치하면 유저 정보(result)를 cb() 안에 넣어주고 리턴 
    // 8) 사용자가 로그인 페이지(login.ejs)에서 입력해서 보낸 비번(<input name="password">)이 
    //    서버 파일(server.js)과 연동된 MongoDB의 특정 컬렉션 'user'에 속하는 DB에 일치하지 않는 경우 
    } else {
      return cb(null, false, { message: '비번불일치' });   // 아래 false 및 에러메세지({ message: '비번불일치' }))를 cb() 안에 넣어주고 리턴 
    }
  } catch(e) {
    console.log(e)   // 에러 메시지 출력
    // 응답.send('DB에러남')
    응답.status(500).send('서버에러남')  // status(500)에서 500은 서버 잘못으로 인한 에러라는 뜻
  }
}))

// ***** 세션(session) 관련 참고사항 *****
// 1. 로그인성공시 세션(session) 만들어주고 사용자 웹브라우저 -> 개발자도구 -> Application 탭 -> 쿠키(Cookie)에 저장해주는건 passport.serializeUser()
// 2. 사용자가 쿠키 제출한걸 확인해보는건 passport.deserializeUser() 
// 3. 현재 로그인된 사용자 정보 출력은 서버파일(server.js)에 속한 모든 Rest API들 안에서 요청.user 사용하면 된다. 
// 주의사항 
// 단 문제는 지금은 세션(session)을 메모리에 저장하고 있어서 서버 재시작시 로그인이 풀려버린다.
// 세션(session)을 DB에 저장하는건 다음 시간에 알아보기. 

// 세션(session) 생성해주는 코드 
// 아래 Rest API - POST 세션(session) 생성 처리 실행 (app.post('/login', async (요청, 응답, next) => { ... })
// -> 로그인 아이디/비번 검증 성공한 경우 요청.logIn(user, (err) => { ... } 실행될 때, 
// 바로 아래 코드 passport.serializeUser((user, done)=>{ ... })가 실행되어 세션(session) 생성 해줌.
// 아래 파라미터 user를 출력해보면(console.log(user)) DB에 있던 사용자 정보 꺼내쓸 수 있음 
// (파라미터 user에 전달하는 인자값은 바로 위의 코드 passport.use(new LocalStrategy(async (입력한아이디, 입력한비번, cb) => { ... })에서 보내줌.
// 근데 정확히 말하면 아직 passport에 DB연결을 안해놨기 때문에 DB말고 컴퓨터 메모리에 세션(session)이 저장됨. 
passport.serializeUser((user, done)=>{
  // process.nextTick(() => { ... }) 이란?
  // Node.js 환경에서 특정 코드를 비동기적으로 처리하고 싶을 때 쓰는 문법인데
  // 자바스크립트는 원래 일반적인 코드들은 동기적으로 처리 된다.
  // 동기적이 뭐냐면 위에서 부터 코드가 한 줄 한 줄 실행된다는 뜻인데 
  // 이러면 중간에 처리가 힘겨운 코드를 만나면 다른 밑에 있던 코드들은 실행까지 너무 오랜 시간이 걸린다. 
  // 이걸 막고 싶으면 비동기처리를 지원하는 스페셜한 코드들을 쓰거나
  // 아니면 저렇게 아래 코드처럼 강제로 process.nextTick 안에 적으면 된다. 
  // 그럼 process.nextTick 안에 있는 코드는 처리를 살짝 보류시키고 다른 중요한 작업들이 끝나면 그제서야 코드가 실행된다. 
  // 그래서 세션(session) 만들고 그런걸 비동기식으로 처리해주려고 라이브러리에서 저렇게 쓰라는데 실은 빼도 별 차이 없다. 

  // (참고) - 유사품으로 queueMicrotask 이런 함수도 process.nextTick(() => { ... }) 처럼 똑같은 기능을 제공함. 
  process.nextTick(() => {
    // 아래 done 함수의 두번째 파라미터에 적은 정보({ id: user._id, username: user.username })는 세션(session) document에 기록
    // 유효기간 이런건 알아서 기록해주기 때문에 done 함수의 두번째 파라미터에 전달한 정보 제외 
    done(null, { id: user._id, username: user.username })
  })
})

// 쿠키(Cookie) 조회 방법 
// 웹브라우저 개발자도구 Application 탭 -> 쿠키(Cookie) 조회 가능
// 로그인 성공시 connect.sid 어쩌구라는 이름으로 이상한 문자열이 쿠키로 저장되는데
// 이게 세션(session) document의 _id 같은 것이다. 
// 다만 간단한 암호화를 해줬기 때문에 좀 길고 복잡해 보일 뿐이다.

// 사용자가 서버(server.js)로 요청할 때 마다 사용자가 전송한 쿠키(Cookie)를 
// 서버(server.js)가 직접 까서 확인 및 세션(session)데이터가 진짜 있는지 조회 및 사용자가 로그인이 잘 되어 있는지 여부 판단 
// 사용자가 서버(server.js)로 요청날릴 때 마다 쿠키에 뭐가 있으면 그걸 까서 세션(session)데이터랑 비교해보고 
// 그래서 별 이상이 없으면 현재 로그인된 사용자 정보를 서버 파일(server.js)에 속한 모든 Rest API의 요청.user에 담아준다.
// 그래서 이제 서버 파일(server.js)에서 Rest API 만들 때 로그인된 사용자 정보를 출력하고 싶으면 아무 Rest API에서 요청.user 쓰면 되는 것임
// 주의사항 - 로그인 후에 Rest API 호출하여 요청.user 잘나오나 한 번 아무 API에서 테스트해보기. (console.log(요청.user)) 
//           로그인된 사용자 정보가 잘 나오면 성공이다.
// 1. 세션(session)에 적힌 사용자 정보(user) 가져오기
passport.deserializeUser(async (user, done) =>{
  // 2. 최신 회원 정보를 DB에서 가져오기
  // user 파라미터 출력하면 사용자 _id(user.id) 같은게 나오는데 그걸로 DB를 조회(_id : new ObjectId(user.id) )
  let result = await db.collection('user').findOne({_id : new ObjectId(user.id) })
  delete result.password  // 자바스크립트 delete 문법은 object 자료에서 원하는 key를 제거하는 문법이다. 비밀번호(result.password)는 요청.user 에서 필요없어보여서 지웠음 

  // 3. 그걸 요청.user에 집어넣는 식으로 코드짜는게 좋다. 
  process.nextTick(() => {
    // done() 함수 두번째 파라미터에 집어넣은 result 변수에 할당된 데이터 값이
    // done() 함수 호출시 자동으로 현재 로그인된 사용자 정보를 서버 파일(server.js)에 속한 모든 Rest API의 요청.user에 담아준다.
    // 그래서 이제 서버 파일(server.js)에서 Rest API 만들 때 로그인된 사용자 정보를 출력하고 싶으면 아무 Rest API에서 요청.user 쓰면 되는 것임
    return done(null, result)
  })

  // TODO : 아래 주석친 코드 필요시 참고 (2025.01.21 minjae)
  // 아래 코드만 실행하면 세션(session) document에 적힌 사용자 정보만 달랑가져오게 된다.
  // 하여 세션(session) 데이터가 좀 오래됐거나 그럴 경우엔 최신 사용자 이름과 좀 다를 수 있는 오류가 발생한다.
  // 그래서 좋은 관습은
  // 1. 세션(session)에 적힌 사용자 정보(user) 가져와서
  // 2. 최신 회원 정보를 DB에서 가져오고
  // 3. 그걸 요청.user에 집어넣는 식으로 코드짜는게 좋다. 
  // process.nextTick(()=>{
  //   return done(null, user)
  // })
})


// 서버기능 (Rest API) - 로그인 페이지(login.ejs) 화면 출력(Http - Get 방식)
app.get('/login', (요청, 응답)=>{
  응답.render('login.ejs')
}) 


// 서버기능 (Rest API) - 서버 파일(server.js)과 연동된 MongoDB의 특정 컬렉션 'user'에 로그인 페이지(login.ejs)에서 
//                      사용자가 작성한 아이디/비번과 동일한 데이터 존재 여부 확인 및 존재하면 세션(session) 생성 처리 
app.post('/login', async (요청, 응답, next) => {
  // 제출한아이디/비번이 DB에 있는거랑 일치하는지 확인하고 세션생성

  // 아래 passport.authenticate('local', 콜백함수)(요청, 응답, next) 실행시 
  // 서버파일(server.js) 상단 라이브러리 passport.use(new LocalStrategy(async (입력한아이디, 입력한비번, cb) => { ... })) 안의 코드 실행 
  // 로그인 페이지(login.ejs)에서 사용자가 입력한 아이디/비번이 서버 파일(server.js)과 연동된 MongoDB의 특정 컬렉션 'user'에 속하는 DB와 일치여부 검증 코드 실행 
  // 로그인 검증 성공이나 실패시 뭔가 실행하고 싶으면 콜백함수((error, user, info)=>{ ... }) 안에 작성 필수
  // 콜백함수의 첫번째 파라미터(error)는 로그인 아이디/비번 검증시 에러 발생시 에러 데이터가 해당 파라미터로 들어옴
  // 콜백함수의 두번째 파라미터(user)는 로그인 아이디/비번 검증 완료(성공)된 로그인한 사용자 정보가 들어옴
  // 콜백함수의 세번째 파라미터(info)는 로그인 아이디/비번 검증 실패(불일치)시 에러메세지 정보가 들어옴.
  passport.authenticate('local', (error, user, info) => {
    if (error) return 응답.status(500).json(error)          // 로그인 아이디/비번 검증시 에러 발생한 경우 
    if (!user) return 응답.status(401).json(info.message)   // (user == null) 로그인 아이디/비번 검증 완료된 사용자 정보가 들어오지 않은 경우 
    // 로그인 아이디/비번 검증 성공한 경우 
    // 요청.logIn() 이라는 함수 실행하면 세션(session) 생성 처리 
    // 로그인 완료시 사용자에게 입장권(서버 파일(server.js)과 연동된 MongoDB의 특정 컬렉션 'user'에 속하는 DB인 session document) 전송
    // 입장권(서버 파일(server.js)과 연동된 MongoDB의 특정 컬렉션 'user'에 속하는 DB인 session document) 예시
    // (예) 어떤 사용자가 언제 로그인했고 유효기간은 1월 1일까지 session document id(ObjectId('64f007a4bdf3a18031678fe4'))
    // 사용자는 서버로 부터 전송받은 입장권(session document에 속한 id 값(ObjectId('64f007a4bdf3a18031678fe4'))을 사용자 웹브라우저 쿠키에 저장 
    // 사용자는 로그인이 필요한 페이지 방문할 때마다 서버는 사용자가 제출한 쿠키를 까서 값 확인 -> 거기에 기록된 session document id(ObjectId('64f007a4bdf3a18031678fe4')) 가지고 특정 컬렉션 'user'에 속하는 DB에 동일한 값 존재여부 확인 
    // session document가 유효기간이 지나지 않은 경우 로그인이 필요한 웹페이지를 화면에 출력 
    요청.logIn(user, (err) => {
      if (err) return next(err)   // 로그인 오류 발생한 경우 
      응답.redirect('/')          // 로그인 완료(성공)시 메인 페이지('/')로 강제로 이동 처리 
    })
  }) (요청, 응답, next)
}) 

// 서버기능 (Rest API) - 로그인 성공한 사용자만 방문할 수 있는 마이페이지 출력하기 
// ***** 마이페이지 실행 조건 ***** 
// 조건 1. 마이페이지는 로그인 한 사람만 방문할 수 있다
// 조건 2. 마이페이지 레이아웃은 아무렇게나 만드는데 현재 로그인된 의 아이디가 어딘가 표기되어있어야한다. 
app.get('/mypage', async (요청, 응답) => {
  응답.render('mypage.ejs', { 내정보 : 요청.user })
})


// 서버기능 (Rest API) - MongoDB의 특정 "컬렉션(post)"에 있는 모든 document 데이터 가져와서 게시글 페이지(list.ejs)에 리스트 형식으로 출력  
app.get('/list', async (요청, 응답) => {
  // 응답.send('안녕')
  // MongoDB의 특정 컬렉션 'post'에 있는 모든 document 데이터 가져오기 
  let result = await db.collection('post').find().toArray()   // await 사용해서 코드 다음 줄 실행하기 전에 잠깐 대기 (await를 사용하는 이유는 함수 db.collection() 호출시 처리 시간이 오래 걸리므로 해당 함수 호출 후 MongoDB에서 데이터를 가져와서 함수 응답.send에 인자로 해당 데이터를 전달해야 함.)  
  
  // MongoDB의 특정 컬렉션 'post'에 있는 모든 document 데이터 가져오기 
  // let result = await db.collection('post').find().toArray()   // await 사용해서 코드 다음 줄 실행하기 전에 잠깐 대기 (await를 사용하는 이유는 함수 db.collection() 호출시 처리 시간이 오래 걸리므로 해당 함수 호출 후 MongoDB에서 데이터를 가져와서 함수 응답.send에 인자로 해당 데이터를 전달해야 함.)
  // 유저에게 웹브라우저 쪽으로 ejs 파일 보내는 법
  // 기본 경로 views 폴더 -> ejs 파일(list.ejs)의 경우 아래처럼 'list.ejs' 이렇게만 작성해도 된다.
  // 서버로부터 받은 데이터를 ejs 파일에 넣으려면 
  // 1. 아래처럼 ejs 파일('list.ejs')로 데이터 전송({ 글목록 : result })
  // 2. ejs 파일('list.ejs') 안에서 ejs 문법 <%= 글목록 %> 사용 
  응답.render('list.ejs', { 글목록 : result }) 
})

// 서버기능 (Rest API) - MongoDB의 특정 "컬렉션(post)"에 있는 모든 document 데이터 가져와서 게시글 페이지(list.ejs)에 리스트 형식으로 출력  
app.get('/list/:id', async (요청, 응답) => {
  // 응답.send('안녕')

  // *** 함수 "skip().limit()" 예시 *** 
  // MongoDB의 특정 컬렉션 'post'에 있는 모든 document 데이터들 중 
  // URL '/list/1' 접속시 상위 1~5번 document 데이터(게시글) 5개 가져오기 
  // URL '/list/2' 접속시 상위 6~10번 document 데이터(게시글) 5개 가져오기 (상위 1~5번 skip 처리)
  // URL '/list/3' 접속시 상위 11~15번 document 데이터(게시글) 5개 가져오기 (상위 1~10번 skip 처리)
  // 함수 skip()에 전달한 인자값은 (URL 파라미터에 입력한거 - 1) * 5이므로 아래처럼 skip( (요청.params.id - 1) * 5 ) 사용한다.
  let result = await db.collection('post').find().skip( (요청.params.id - 1) * 5 ).limit(5).toArray() 
  
  // MongoDB의 특정 컬렉션 'post'에 있는 모든 document 데이터 가져오기 
  // let result = await db.collection('post').find().toArray()   // await 사용해서 코드 다음 줄 실행하기 전에 잠깐 대기 (await를 사용하는 이유는 함수 db.collection() 호출시 처리 시간이 오래 걸리므로 해당 함수 호출 후 MongoDB에서 데이터를 가져와서 함수 응답.send에 인자로 해당 데이터를 전달해야 함.)
  // 유저에게 웹브라우저 쪽으로 ejs 파일 보내는 법
  // 기본 경로 views 폴더 -> ejs 파일(list.ejs)의 경우 아래처럼 'list.ejs' 이렇게만 작성해도 된다.
  // 서버로부터 받은 데이터를 ejs 파일에 넣으려면 
  // 1. 아래처럼 ejs 파일('list.ejs')로 데이터 전송({ 글목록 : result })
  // 2. ejs 파일('list.ejs') 안에서 ejs 문법 <%= 글목록 %> 사용 
  응답.render('list.ejs', { 글목록 : result }) 
})

// 서버기능 (Rest API) - URL 파라미터 ":id" 사용하여 pagination(페이지 쪼개기) 기법 사용해서 게시글 페이지(list.ejs)에 게시물 출력하기 
app.get('/list/next/:id', async (요청, 응답) => {
  // try - catch 문법이란?
  // 이건 try 안에 있는 코드가 뭔가 오류발생하면 catch 안에있는 코드를 대신 실행해주는 유용한 문법이다.
  // try - catch 문법 사용 이유?
  // MongoDB 컬렉션 'post'에 데이터 저장하려고 할 때, 
  // 1) DB가 다운되어서 통신 불가 
  // 2) DB에 뭔가 저장하려는데 _id(primary key와 비슷함.)가 똑같은게 있어서 오류 발생 
  // 하여 오류가 발생하는 경우에 특정 코드를 실행하고 싶으면 try - catch 문법 사용하면 된다.

  try {
    // pagination(페이지 쪼개기) 만드는 방법 
    // 1. 함수 "skip().limit()" 사용하기 
    // *** 함수 "skip().limit()"의 단점 ***
    // 함수 skip().limit() 사용하는 경우 문제가 있는데 
    // 함수 .skip() 안에 100만 이상의 숫자를 넣으면 처리시간이 매우 오래 걸림.  
    // 왜냐면 함수 skip() 쓰는 경우 document를 하나하나 세어서 수행해주기 때문에 매우 오래걸리기 때문이다.
    // 그래서 페이지네이션 기능 만들 때 간단한 사이트에선 이 방법 가져다써도 되는데
    // 너무 많은 게시물을 스킵(skip())하는건 if문 써서 금지시켜 놓아야 함. 
    // MongoDB의 특정 컬렉션 'post'에 있는 모든 document 데이터들 중 상위 1~5번 document 데이터(게시글) 5개 가져오기 
    // let result = await db.collection('post').find().skip(0).limit(5).toArray()
    
    // *** 함수 "skip().limit()" 예시 *** 
    // MongoDB의 특정 컬렉션 'post'에 있는 모든 document 데이터들 중 
    // URL '/list/1' 접속시 상위 1~5번 document 데이터(게시글) 5개 가져오기 
    // URL '/list/2' 접속시 상위 6~10번 document 데이터(게시글) 5개 가져오기 (상위 1~5번 skip 처리)
    // URL '/list/3' 접속시 상위 11~15번 document 데이터(게시글) 5개 가져오기 (상위 1~10번 skip 처리)
    // 함수 skip()에 전달한 인자값은 (URL 파라미터에 입력한거 - 1) * 5이므로 아래처럼 skip( (요청.params.id - 1) * 5 ) 사용한다.
    // let result = await db.collection('post').find().skip( (요청.params.id - 1) * 5 ).limit(5).toArray() 

    // pagination(페이지 쪼개기) 만드는 방법
    // 2. 함수 .find()에 조건 '{_id : {$gt : 방금본 마지막게시물_id}}' 추가 방법
    // *** 함수 "skip().limit()" 단점 보완하기 위해 함수 .find()에 조건 '{_id : {$gt : 방금본 마지막게시물_id}}' 추가 구현 예시 ***
    // .find()에 조건 '{_id : {$gt : 방금본 마지막게시물_id}}' 의미?
    // 뭔 뜻이냐면 '방금본 마지막 게시물의 _id'보다
    // 더 큰 _id를 가진 document들을 5개 찾아오라는 뜻입니다.
    // 그래서 엄밀히 말하면 페이지네이션이라기보다는 다음 게시물 5개 가져오는 기능인데 이렇게 하면 아래와 같은 장단점이 있다.
    // 장점 : 매우 빠르다. 원래 _id 기준으로 뭔가 찾는건 DB가 가장 빠르게 하는 작업이다.
    // 단점 : 페이지네이션 버튼을 다음버튼으로 바꿔야한다. 
    // 그리고 다음게시물만 가져올 수 있어서  
    // 1 페이지에서 갑자기 3 페이지로 뛰어넘어서 게시물들을 가져오는 기능은 구현 불가. 
    // let result = await db.collection('post').find({_id : {$gt : 방금본 마지막게시물_id}}).limit(5).toArray() 
    // 게시물 페이지(list.ejs)에서 버튼 "다음"(<a href="/list/next/<%= 글목록[글목록.length - 1]._id %>">다음</a>) 클릭시 
    // 서버로 방금본 마지막게시물_id(<%= 글목록[글목록.length - 1]._id %>) 전송 
    // -> 서버에서 요청.params.id 쓰면 마지막 게시물 _id)(<%= 글목록[글목록.length - 1]._id %>)를 그대로 쓸 수 있다.
    let result = await db.collection('post').find({_id : {$gt : new ObjectId(요청.params.id) }}).limit(5).toArray() 
    응답.render('list.ejs', { 글목록 : result })

    // 게시물 페이지(list.ejs)에서 존재하는 게시글들의 _id값이 
    // MongoDB -> Document 생성시 자동부여되는 _id(ObjectId)가 아니라 
    // 정수로 부여하려면 auto increment 하는 방법을 사용해야 한다. 
    // 단, 글의 _id나 순서가 정수로 꼭 필요한지는 한 번 생각해본 후 만약 필요하다면 그때 사용해야 한다.
    // *** auto increment 기능 만드는 방법? ***
    // 글발행할 때 마다 정수로 글번호같은걸 부여하고 싶으면 
    // 관계형 DB의 경우 auto increment 기능을 켜면 되는데
    // MongoDB는 그게 없으니 아래처럼 하나 직접 만들어야힘. 
    // 1. 일단 MongoDB에 다른 이름의 컬렉션 "counter"를 하나 만들기 
    // 2. 그 안에 { _id : 자동부여된거, count : 0  } 이런 document를 하나 생성하기(INSERT DOCUMENT) 
    // 3. 그 다음에 게시물을 하나 발행할 때 마다 어떻게 하냐면 
    // 3-1. 컬렉션 "counter"에 있던 document 를 찾아와서 count : 에 기재된 값을 출력하기. 
    // 3-2. 그 값에 +1을 한 다음 그걸 _id란에 기입해서 새로운 글을 발행하기.
    // 4. 그럼 { _id : 1, title : 어쩌구 } 이런게 발행됨.
    // 5. 성공적으로 발행된걸 확인하면 서버(Server.js) 파일에서 특정 Rest API 안에 함수 updateOne 사용해서 컬렉션 "counter"의 document에 있던 count : 항목을 +1 해줌.
    // *** 참고사항 ***
    // auto increment 기능을 위에처럼 다른 이름의 컬렉션 "counter" 생성하지 말고 
    // trigger 기능을 쓰는게 더 정확하게 잘되기 때문에 아래 URL 주소 참고하여 trigger 기능 구현하기 
    // trigger란? DB에 뭔가 변화가 일어날 때 자동으로 실행되는 코드를 뜻한다. 
    // 참고 URL - https://www.mongodb.com/basics/mongodb-auto-increment



    // TODO : 아래 주석친 코드 필요시 참고 (2025.01.15 minjae)
    // let result = await db.collection('컬렉션명').find().toArray()   // MongoDB의 특정 컬렉션 '컬렉션명'에 있는 모든 document 데이터 가져오기  

    // 키워드 await 기능 - 바로 다음줄 실행하지 말고 잠깐 대기 
    // 키워드 await 사용하는 이유 - 자바스크립트로 작성한 코드들 중 처리가 오래걸리는 코드는 처리완료 기다리지 않고 바로 다음줄 실행하는데 
    // 이와 같은 상황이 발생하지 않도록 키워드 await을 사용하여 바로 다음줄 실행하지 말고 처리가 오래걸리는 코드가 처리완료 될 때 까지 잠깐 대기 처리 한다.
    // 키워드 await 주의사항 - 키워드 await은 정해진 곳만 붙여서 사용할 수 있다. (Promise 뱉는 곳만 가능)

    // MongoDB의 특정 컬렉션 'post'에 있는 모든 document 데이터 가져오기 
    // let result = await db.collection('post').find().toArray()   // await 사용해서 코드 다음 줄 실행하기 전에 잠깐 대기 (await를 사용하는 이유는 함수 db.collection() 호출시 처리 시간이 오래 걸리므로 해당 함수 호출 후 MongoDB에서 데이터를 가져와서 함수 응답.send에 인자로 해당 데이터를 전달해야 함.)
    // 유저에게 웹브라우저 쪽으로 ejs 파일 보내는 법
    // 기본 경로 views 폴더 -> ejs 파일(list.ejs)의 경우 아래처럼 'list.ejs' 이렇게만 작성해도 된다.
    // 서버로부터 받은 데이터를 ejs 파일에 넣으려면 
    // 1. 아래처럼 ejs 파일('list.ejs')로 데이터 전송({ 글목록 : result })
    // 2. ejs 파일('list.ejs') 안에서 ejs 문법 <%= 글목록 %> 사용 
    //응답.render('list.ejs', { 글목록 : result }) 
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
    // *** 버튼 삭제 기능 내용 정리 ***   
    // 1. 웹브라우저 화면 새로고침없이 서버로 요청날리고 싶으면 AJAX 사용 
    // 2. AJAX로 데이터도 가져올 수 있다보니까 클라이언트사이드 렌더링 가능
    // 3. dataset 문법 이용하면 html에 몰래 데이터 숨겨놓을 수도 있음. 

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
      // 구체적인 예로 서버에서 데이터만 AJAX로 가져와서 프론트엔드에서 자바스크립트로 html을 생성하며, 이걸 다른 말로 클라이언트사이트 렌더링이라고 한다.

      // 서버사이드 렌더링이란?
      // 서버에서 html을 만들어서 웹브라우저 화면으로 보내주는 기술이다.
      // 단점은 서버에서 html을 만들어서 보내줄 때, 웹브라우저 화면이 새로고침 된다.
    
      // 클라이언트사이트 렌더링이란?
      // 서버에서 데이터만 AJAX로 가져와서 프론트엔드에서 자바스크립트로 html을 생성한다.
      // 장점은 서버에서 데이터만 AJAX로 가져올 때, 웹브라우저 화면이 새로고침이 안 되서 
      // 좀 부드럽게 새로운 html을 웹브라우저 화면에서 사용자에게 보여줄 수 있다.

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