# fe-sprint-coz-shopping
Title : 
    - e-commerce 사이트의 부분적인 기능

구현될 기능 
    
    - 메인페이지에서 router사용하여 페이지 이동
        Pages move with using router-dom
    - header에 있는 메뉴는 클릭했을때 drop-down 메뉴
        when the header's button clicked, it shows drop-down manu. 
    - 상품리스트 페이지 
        product'list pages
    - 북마크 페이지 - 무한스트롤 기능, 상품별 필터기능 
        Bookmark pages - infinite scroll, filtering by categories.
    - Modal 창
        Modal
실행 명렁어

    - npm install 

    - npm start

상세한 기능 설명

    Main Page : path -> /
    
        -Header와 Footer는 항상 고정
            Header and footer are always fixed.
        -햄버거버튼 클릭시, 페이지 이동
            When the hamburger button is clicked, the page moves.
        -메인 페이지의 상품 리스트는 카테고리별로 하나씩 4개를 보여줘야한다.
            The product list on the main page should show 4 items, one for each category.
        -메인 페이지의 북마크 리스트는 카테고리별로 하나씩 4개를 보여줘야한다.
            The bookmark list on the main page should show four items, one for each category.

    Products List Page : path -> /products/list
    
        - 서버에서 제공하는 상품 리스트들을 확인할 수 있는 페이지이며 무한 스크롤을 통해 상품들을 계속 보여줄 수 있어야 한다.
            This is a page where you can check the list of products provided by the server, and the products must be continuously loaded through infinite scrolling.
        - 상품은 각 상품별로 타입이 존재한다. (상품, 카테고리, 기획전, 브랜드)
            There are different product types such as products, categories, exhibitions, and friends.
        - 상단의 필터 버튼을 통해 상품을 타입별로 조회해 보여줄 수 있어야 한다.
            You should be able to search and display products by type through the filter button at the top.
        - 각 상품을 클릭하면 해당 상품의 사진을 보여주는 모달을 띄울 수 있어야 한다.
            By clicking on each product should bring up a modal displaying a picture of that product.
        - 각 상품에 존재하는 북마크 버튼을 눌러 원하는 상품을 북마크 할 수 있어야 한다.
            You must be able to bookmark a desired product by pressing the bookmark button present in each product.
        - 이미 북마크 된 상품의 경우, 북마크 버튼에 표시를 해주어야 하며 다시 한 번 북마크 버튼을 클릭 시 해당 상품을 북마크에서 삭제한다.
            In the case of a product that has already been bookmarked, you must mark it on the bookmark button and click the bookmark button      again to delete the product from the bookmark.

    BookMark Page : path -> /bookmark
    
        - 사용자가 북마크 한 상품 들을 확인할 수 있는 페이지로 무한 스크롤이 가능해야 한다.
            The Produect list on this page should be possible to scroll infinitely to a page where the user can check the bookmarked products.
        - 상품리스트 페이지에 존재하는 필터링 버튼과 같은 버튼을 이용해 상품을 타입별로 필터해 보여줄 수 있어야 한다.
            It should be possible to filter products by type using the same button as the filtering button that exists on the product list page.

    API 
        Swagger
            Reference: http://cozshopping.codestates-seb.link/api-docs/ 

<h3>구현한 기능 영상</h3>

<img src="https://user-images.githubusercontent.com/61155854/255394712-dc498c51-9cd1-4d8a-9e8d-8f2dae692caf.gif"  width="300" height="250">
<p>- 카테고리별 상품리스트 기능</p>
<img src="https://user-images.githubusercontent.com/61155854/255394962-ebf08c0f-f424-44a0-9b39-0015bc2c8dc5.png" width="300" height="250">
<p>- 메인페이지 상품리스트 4개, 북마크 상품 4개</p>

<img src="https://user-images.githubusercontent.com/61155854/255395410-1a21f08a-afbb-4fe1-931b-866360e7d7be.gif" width="300" height="250">
<p>- 무한 스크롤 기능</p>

<br>
<br>
<br>


<h3>진행하면서 만난 문제들<h3>
<h2>...</h2>

<h3>리펙토링 해야하는 부분</h3>
<h2>...</h2>

