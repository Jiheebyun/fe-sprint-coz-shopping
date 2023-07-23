# fe-sprint-coz-shopping
Title : 
    - e-commerce 사이트의 부분적인 기능

구현될 기능 
    
    - 메인페이지에서 router사용하여 페이지 이동
    
    - header에 있는 메뉴는 클릭했을때 drop-down 메뉴
    
    - 상품리스트 페이지 
    
    - 북마크 페이지 - 무한스트롤 기능, 상품별 필터기능 

    - Modal 창

실행 명렁어

    - npm install 

    - npm start

상세한 기능 설명

    Main Page : path -> /
    
        -Header와 Footer는 항상 고정
        -햄버거버튼 클릭시, 페이지 이동
        -메인 페이지의 상품 리스트는 카테고리별로 하나씩 4개를 보여줘야한다
        -메인 페이지의 북마크 리스트는 카테고리별로 하나씩 4개를 보여줘야한다.

    Products List Page : path -> /products/list
    
        - 서버에서 제공하는 상품 리스트들을 확인할 수 있는 페이지이며 무한 스크롤을 통해 상품들을 계속 보여줄 수 있어야 한다.
        - 상품은 각 상품별로 타입이 존재한다. (상품, 카테고리, 기획전, 브랜드)
        - 상단의 필터 버튼을 통해 상품을 타입별로 조회해 보여줄 수 있어야 한다.
        - 각 상품을 클릭하면 해당 상품의 사진을 보여주는 모달을 띄울 수 있어야 한다.
        - 각 상품에 존재하는 북마크 버튼을 눌러 원하는 상품을 북마크 할 수 있어야 한다.
        - 이미 북마크 된 상품의 경우, 북마크 버튼에 표시를 해주어야 하며 다시 한 번 북마크 버튼을 클릭 시 해당 상품을 북마크에서 삭제한다.
        - 북마크 버튼을 클릭하여 북마크에 추가 할 때 그리고 삭제할 때는 사용자에게 알림 토스트가 표시되어야 한다.

    BookMark Page : path -> /bookmark

        - 사용자가 북마크 한 상품 들을 확인할 수 있는 페이지로 무한 스크롤이 가능해야 한다.
        - 상품리스트 페이지에 존재하는 필터링 버튼과 같은 버튼을 이용해 상품을 타입별로 필터해 보여줄 수 있어야 한다.

    API 
        Swagger
            Reference: http://cozshopping.codestates-seb.link/api-docs/ 

구현한 기능 영상

    

<img src="https://user-images.githubusercontent.com/61155854/255394712-dc498c51-9cd1-4d8a-9e8d-8f2dae692caf.gif"  width="300" height="250">
<img src="https://user-images.githubusercontent.com/61155854/255394712-dc498c51-9cd1-4d8a-9e8d-8f2dae692caf.gif](https://user-images.githubusercontent.com/61155854/255394962-ebf08c0f-f424-44a0-9b39-0015bc2c8dc5.png)https://user-images.githubusercontent.com/61155854/255394962-ebf08c0f-f424-44a0-9b39-0015bc2c8dc5.png"  width="300" height="250">


    






