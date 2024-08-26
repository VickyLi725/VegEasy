 // foodDatas 把物件放進去陣列
 var foodDatas = [{
         id: 'vHamburger',
         img: "./img/vagRestaurant/v01Hamburger.jpg",
         imgName: "漢堡包",
         name: "素食速食",
         link: "./veg-restaurant.html",
         vegKind: "全素"
     },
     {
         id: 'vTofu',
         img: "./img/vagRestaurant/v02Tofu.jpg",
         imgName: "豆腐",
         name: "珍豆趣",
         link: "restaurant2.html",
         vegKind: "五辛素、蛋奶素"
     },
     {
         id: 'vTaiPot',
         img: "./img/vagRestaurant/v03TaiPot.jpg",
         imgName: "泰式料理",
         name: "泰素了吧",
         link: "restaurant3.html",
         vegKind: "蛋奶素"
     },
     {
         id: 'vJPsetmeal',
         img: "./img/vagRestaurant/v04JPsetmeal.jpg",
         imgName: "日式定食",
         name: "日吃一蔬",
         link: "restaurant4.html",
         vegKind: "蛋奶素"
     },
     {
         id: 'vIndHeal',
         img: "./img/vagRestaurant/v05Indhealthcare.jpg",
         imgName: "健康飲食",
         name: "蔬香世家",
         link: "restaurant5.html",
         vegKind: "全素"
     },
     {
         id: 'vPizza',
         img: "./img/vagRestaurant/v06Pizza.jpg",
         imgName: "義式蔬食",
         name: "義享添開",
         link: "restaurant5.html",
         vegKind: "五辛素、含葷食"
     }


 ]

 //讓list可以捕捉進去後的str
 var foodList = document.querySelector('.list');
 var str = ''

 //使用datas.map導入(方法的(datas中的內容,索引值))
 //字串+= `使用 模板文字 結合 ${變數} 的方式導入內容`
 foodDatas.map(function(data, i) {
         str += `
        <li class='food-item'>
           <img class="img-food-in-square" src=${data.img} alt=${data.imgName}>
            <div class="translucent-square">
                <a class="rest-name" href=${data.link}>${data.name}</a>
                <p><br>${data.vegKind}</p>
                <a href="veg-login.html" class="heart-button">
                    <img src="./img/icon/heart.png" alt="喜愛">
                </a>
                </div> 
        </li>
        ` //這個是模板文字尾
     })
     //導入後把裡面的東西做替換放入str裡面
 foodList.innerHTML = str;