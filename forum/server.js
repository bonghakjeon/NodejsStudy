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


// 1. 터미널 명령어 "npm init -y" 입력 및 엔터 -> package.json 파일 생성 

// 2. 터미널 명령어 "npm install express" 입력 및 엔터 -> express 라이브러리 설치 완료 

// 3. 2번에서 설치한 express 라이브러리 사용해서 아래처럼 서버 코드 작성 
const express = require('express') // express 라이브러리 사용
const app = express() // express 라이브러리 사용

// 4. ejs 템플릿 엔진 사용하기 
app.set('view engine', 'ejs') 

// 5. 웹서버에 public 폴더 등록 
// 용도 - public 폴더 안에 있는 static 파일들(.css / 이미지 / .js)을 html 파일 (예) index.html, about.html 등등... 에서 가져다 쓰기 위한 용도 
// 참고 URL - https://coding-yesung.tistory.com/175
app.use(express.static(__dirname + '/public'));

// 6. MongoDB 호스팅 받은 DB접속URL 주소 Node.js 서버 파일(server.js)과 연동하기 
// Node.js 서버와 MongoDB 연동 해야 하는 이유
// 사용자가 요청하는 데이터를 서버가 중간에 개입하여 검사 과정을 거쳐서 데이터를 입출력 해야하기 때문이다.
const { MongoClient } = require('mongodb')

let db
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

// 서버 기능(Http - Get) 구현 예시
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

// 서버기능 - 오늘의 뉴스(Http - Get 방식) 
// 1) 누가 오늘의 뉴스 페이지 접속('/news') (크롬 웹브라우저 실행 -> URL 주소 "http://localhost:8080/news" 입력 및 엔터)
// 2) 자동으로 함수 "app.get()" 실행 -> 접속요청 처리
// 3) 2)번의 함수 "app.get()" 실행되고 나서 -> 2)번의 함수 "app.get()" 소괄호() 안에 존재하는 콜백함수 "(요청, 응답) => { 응답.send('오늘 비옴') }" 내에 있는 코드 "응답.send('오늘 비옴')" 가 실행
// 4) '오늘 비옴' 문자열을 유저에게 보내주기 (크롬 웹브라우저 화면 '오늘 비옴' 문자열 출력)
app.get('/news', (요청, 응답)=>{
  응답.send('오늘 비옴')
})

// 서버기능 - MongoDB에 임시 데이터 저장
// (예시) 데이터베이스 'forum' 하위 데이터 저장 하길 원하는 collection 'post'에 함수 insertOne 호출하여 데이터를 json 데이터 형식({title : '어쩌구'})으로 저장
// MongoDB 웹사이트 접속 -> 데이터베이스 버튼 "Browse Collections" 클릭 -> 데이터베이스 'forum' 하위 collection 'post' 클릭 -> Document 하나가 새로 발행
// -> 새로 발행된 Document 안에 위에서 저장한 json 데이터 형식({title : '어쩌구'})이 들어가 있다.
// app.get('/news', (요청, 응답)=>{
//   db.collection('post').insertOne({title : '어쩌구'})
//   응답.send('오늘 비옴')
// })

// 서버기능 - 쇼핑페이지(Http - Get 방식)
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

// 서버기능 - 상품목록 json 데이터 전송(Http - Get 방식)
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

// 서버기능 -  MongoDB의 특정 "컬렉션(post)"에 있는 모든 document 데이터 가져와서 화면에 리스트 형식으로 출력  
// app.get('/list', (요청, 응답) => {
//   응답.send('안녕')
// })
app.get('/list', async (요청, 응답) => {
  // let result = await db.collection('컬렉션명').find().toArray()   // MongoDB의 특정 컬렉션 '컬렉션명'에 있는 모든 document 데이터 가져오기  

  // 키워드 await 기능 - 바로 다음줄 실행하지 말고 잠깐 대기 
  // 키워드 await 사용하는 이유 - 자바스크립트로 작성한 코드들 중 처리가 오래걸리는 코드는 처리완료 기다리지 않고 바로 다음줄 실행하는데 
  // 이와 같은 상황이 발생하지 않도록 키워드 await을 사용하여 바로 다음줄 실행하지 말고 처리가 오래걸리는 코드가 처리완료 될 때 까지 잠깐 대기 처리 한다.
  // 키워드 await 주의사항 - 키워드 await은 정해진 곳만 붙여서 사용할 수 있다. (Promise 뱉는 곳만 가능)

  // MongoDB의 특정 컬렉션 'post'에 있는 모든 document 데이터 가져오기 
  let result = await db.collection('post').find().toArray()   // await 사용해서 코드 다음 줄 실행하기 전에 잠깐 대기 (await를 사용하는 이유는 함수 db.collection() 호출시 처리 시간이 오래 걸리므로 해당 함수 호출 후 MongoDB에서 데이터를 가져와서 함수 응답.send에 인자로 해당 데이터를 전달해야 함.)
  // 응답.send(result[0].title)
  // 터미널창에 변수 result에 할당된 데이터 출력 
  console.log(result[0])   
  console.log(result[0].title)
  console.log(result[0]['title'])
  console.log(result[1])
  console.log(result[1].title)
  console.log(result[1]['title'])

  // 응답.send(result)
  응답.send(result[0].title)

  // 함수 .then() 사용해서 MongoDB의 특정 컬렉션 '컬렉션명'에 있는 모든 document 데이터 가져오기 
  // db.collection('컬렉션명').find().toArray().then((result)=>{
  //   응답.send(result[0].title)
  // })

  // 콜백함수((err, result)=>{ ... }) 사용해서 MongoDB의 특정 '컬렉션명'에 있는 모든 document 데이터 가져오기 
  // db.collection('컬렉션명').find().toArray((err, result)=>{
  //   응답.send(result[0].title)
  // })
})

app.get('/testlist', async (요청, 응답)=>{
  let result = await db.collection('post').find().toArray()   // MongoDB의 특정 컬렉션 'post'에 있는 모든 document 데이터 가져오기 
  응답.render('list.ejs', { 글목록 : result })  // 함수 응답.render() 의 둘째 파라미터에 { 작명 : 전송할데이터 } 이런 형식으로 적으면 ejs 파일로 데이터가 전달 (글목록이라는 이름으로 result안에 들어 있는 데이터 전달)
  // 응답.render('list.ejs')
})

app.get('/time', (요청, 응답)=> {
  // TODO : new Date() 사용하여 현재 날짜와 시간 계산하기 (2024.12.02 jbh)
  // 참고 URL - https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date
  // 참고 2 URL - https://likedev.tistory.com/entry/Javascript-%ED%98%84%EC%9E%AC-%EB%82%A0%EC%A7%9C-%EC%8B%9C%EA%B0%84-%EA%B5%AC%ED%95%98%EA%B8%B0
  // const currentDate = new Date();
  // 응답.render('time.ejs', { 현재서버시간 : currentDate })
  응답.render('time.ejs', { data : new Date() })
})

// 4. sever.js 파일 저장 및 터미널 명령어 "node server.js" 입력 및 엔터 -> "server.js" 파일 실행 -> 서버 띄우기 완료 -> 터미널 창에 문자열 'http://localhost:8080 에서 서버 실행중' 출력 

// 5. 4번에서 터미널에 출력된 URL 주소 http://localhost:8080 에 마우스 커서 갖다대고 키보드 단축키 Ctrl + 마우스 왼쪽 버튼 클릭

// 6. 크롬 웹브라우저 실행 -> '반갑다' 문자열 웹브라우저 출력 

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