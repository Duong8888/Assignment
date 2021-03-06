const ListProduct = [
    {
        id: 1,
        name: "Big and Juicy Wagyu Beef Cheeseburger",
        price: 30,
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image: "src/img/image 26.png",
        category: 4
    },
    {
        id: 2,
        name: "Fresh Lime Roasted Salmon",
        price: 10,
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image: "src/img/image 26 (1).png",
        category: 1
    },
    {
        id: 3,
        name: "The Best Easy One Pot Chicken and Rice",
        price: 20,
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image: "src/img/image 26 (2).png",
        category: 2
    },
    {
        id: 4,
        name: "Fresh and Healthy Mixed Mayonnaise ",
        price: 50,
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image: "src/img/image 26 (3).png",
        category: 4
    },
    {
        id: 5,
        name: "The Creamiest Creamy Chicken",
        price: 60,
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image: "src/img/image 26 (4).png",
        category: 5
    },
    {
        id: 6,
        name: "Fruity Pancake with Orange & Blueberry",
        price: 15,
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image: "src/img/image 26 (5).png",
        category: 6
    }
]
const ListCategory = [
    {
        id: 1,
        name: "Meat",
        image: "src/img/image 21.png"
    },
    {
        id: 2,
        name: "Dessert",
        image: "src/img/image 22.png"
    },
    {
        id: 3,
        name: "Lunch",
        image: "src/img/image 23.png"
    },
    {
        id: 4,
        name: "Chocolate",
        image: "src/img/image 24.png"
    },
    {
        id: 5,
        name: "Vegan",
        image: "src/img/image 20 (1).png"
    },
    {
        id: 6,
        name: "Breakfast",
        image: "src/img/image 25.png"
    }
];

const ListBlogNews = [
    {
        id: 1,
        title: "GitHub l?? g??? C??ch chia s??? m?? ngu???n, t???i code d??? d??ng",
        subTitle: "GitHub l?? d???ch v??? server qu???n l?? nhi???u phi??n b???n code, gi??p l??u tr??? ch??ng v?? c??? n???i dung d??? ??n c???a hai hay nhi???u t??i kho???n c???a l???p tr??nh vi??n.....",
        img: "./src/img/github-la-gi.jpg",
        content: "GitHub ???????c s??? d???ng ch??? y???u cho d??? ??n c?? nhi???u ng?????i c??ng h???p t??c v?? c???n gi??m s??t to??n b??? thay ?????i c???a d??? ??n. B??n c???nh ????, GitHub c??n c?? kh??? n??ng kh??i ph???c code khi c???n thi???t. Khi s??? d???ng GitHub, ngo??i c??c c??ng vi???c ch??nh nh?? t???o Branch, t???o Pull Request v?? Fork m???t Repository, b???n c?? th??? theo d??i, t????ng t??c v???i ng?????i kh??c nh?? m???t m???ng x?? h???i th??ng th?????ng.",
        BlogCategoryId: 1
    },
    {
        id: 2,
        title: "V??? t?????ng th??? 158 c???a LMHT: Zeri ??? Tia ch???p th??nh Zaun",
        subTitle: "Trong th??ng b??o ?????u ti??n c???a n??m 2022, Riot Games ???? b???t ng??? ??em ?????n m???t ni???m vui cho ng?????i h??m m??? th??ng qua vi???c n??ng c???p.....",
        img: "./src/img/tuong-moi-lmht-zeri-1-696x391.jpg",
        content: "Trong th??ng b??o ?????u ti??n c???a n??m 2022, Riot Games ???? b???t ng??? ??em ?????n m???t ni???m vui cho ng?????i h??m m??? th??ng qua vi???c n??ng c???p m???t s??? chi ti???t trong LMHT. V?? thay ?????i l???n nh???t ???????c nhi???u ng?????i ch??i ch???c ch???n l?? s??? xu???t hi???n c???a t?????ng m???i Zeri.?????i di???n h??ng game cho bi???t: ???Ch??ng t??i mu???n gi???i thi???u m???t X??? Th??? m???i linh ho???t trong di chuy???n, c?? t???c ????? ch??i v???i t???c ????? c???a s??ng m??y v?? mang l???i c???m gi??c nh?? m???t game b???n s??ng.??? Theo ????, Zeri s??? l?? m???t X??? Th??? kh???ng, v?????t t???m c??? Ezreal. ????y l?? v??? t?????ng th??? 158 ???????c gi???i thi???u trong LMHT.",
        BlogCategoryId: 2
    },
    {
        id: 3,
        title: "Chi ti???t b??? k??? n??ng c???a t?????ng Yue trong Li??n Qu??n Mobile",
        subTitle: "Th??ng s??? k??? n??ng c???a Yue Ng???c Phi???n C??ng Ch??a - v??? t?????ng m???i ???????c ra m???t trong b???n c???p nh???t ......",
        img: "./src/img/gt8mee8-122540.png",
        content: "Chi??u 1 - C???t Giang S??n,Chi??u 2 - Tr???m Thi??n ?????aChi??u 3 - ?????o Qu??n V????ng.Yue l?? c??ng ch??a th??? 10 trong ho??ng t???c V????ng Qu???c R???ng. Ngo??i dung m???o xinh ?????p, Yue c??n c?? tr?? tu??? v?? n??ng l???c tuy???t ?????nh. Trong video gi???i thi???u phi??n b???n Trung Qu???c, Yue c?? v??? nh?? l?? b???n b?? v?? c?? ch??t li??n quan t???i Qi - c?? n??ng V?? S?? B??nh Bao.",
        BlogCategoryId: 2
    },
];

const BlogCategory = [
    {
        id: 1,
        name: "GitHub"
    },
    {
        id: 2,
        name: "Game"
    },
];


function showProduct(items) {
    let product = document.querySelector('.main-product');
    if (product) {
        product.innerHTML = "";
        for (let i of items) {
            product.innerHTML += `
            <div class="box-product" >
            <a href="./detail.html?id=${i.id}">
                <div class="img-product">
                    <img src="${i.image}"  alt="">
                </div>
            </a>
            <div class="infor-product">
                <a href="./detail.html?id=${i.id}">${i.name}</a>
                <div class="time-type">
                    <div class="time">
                        <img src="src/img/Vector.png" alt="">
                        <p>30 Minutes</p>
                    </div>
                <div class="type">
                    <img src="src/img/Vector (1).png" alt="">
                    <img src="src/img/Vector (2).png" alt="">
                    <p>Snack</p>
                </div>
            </div>
            </div>
        </div>
        `;
        }
    }

}
showProduct(ListProduct);

function List() {
    let items = document.querySelector('.box-items');
    if (items) {
        for (let i of ListCategory) {
            items.innerHTML += `
                    <div class="items">
                        <img src="${i.image}" alt="">
                        <p>${i.name}</p>
                    </div>
        `;
        }
    }
};

List();
let price = document.querySelector('#select-price');
function priceSelection() {

    // c??ch 1 d??ng v??ng l???p
    let over30 = [];
    let cunder30 = [];
    for (let i of ListProduct) {
        if (i.price >= 30) {
            over30.push(i);
        } else {
            cunder30.push(i);
        }
    }

    // c??ch 2 d??ng filter
    // let over30 = ListProduct.filter(function(x) {
    //     return x.price >= 30;
    // });
    // let cunder30 = ListProduct.filter(function(x) {
    //     return x.price < 30;
    // });


    if (price.value == "2") {
        showProduct(over30);
    }


    if (price.value == "3") {
        showProduct(cunder30);
    }

    if (price.value == "1") {
        showProduct(ListProduct);
    }
}
if (price) {
    price.addEventListener("change", priceSelection);
}

function detailProduct() {
    const prdId = new URLSearchParams(window.location.search).get('id');
    if (prdId) {
        const productDetail = ListProduct.find(function (item) {
            return item.id == prdId
        })
        const detailProductDiv = document.querySelector('.product-detail')
        detailProductDiv.innerHTML = `
        <div class="product-detail-left">
            <h1>${productDetail.name}</h1>
            <span>$${productDetail.price}</span>
            <p>${productDetail.desc}</p>

            <form action="">
                <input type="text" name="" id="quantity" placeholder="Quantity" required>
                <input  onclick="addCart()" type="button" value="Add To Cart" name="" id="submit">
            </form>
        </div>
        <div class="product-detail-right">
            <img src="${productDetail.image}" alt="">
        </div>
        `
    }
}
detailProduct();


function ProductPage() {
    var ListCategoryPage = document.querySelector('.top>ul');
    if (ListCategoryPage) {
        for (let i of ListCategory) {
            ListCategoryPage.innerHTML += `
                            <li><a onclick="reRender(${i.id})">${i.name}</a></li>
                        `;
        }
    }
}
ProductPage();
function CategoryPage(q) {
    var boxProduct = document.querySelectorAll('.box8');
    if (boxProduct[0]) {
        for (let i in q) {
            boxProduct[i].innerHTML += `
            <img src="${q[i].image}" alt="">
            <p>${q[i].name}</p>
            <span>$${q[i].price}</span>
            <button>Add To Cart</button>
            `;
        }
    }
}

CategoryPage(ListProduct);
var boxProduct = document.querySelectorAll('.box8');
function reRender(cateId) {
    const filterCategory = ListProduct.filter(function (item) {
        return item.category == cateId
    });
    if (boxProduct) {
        for (let i in ListProduct) {
            boxProduct[i].innerHTML = ``;
        }
        for (let i in filterCategory) {
            boxProduct[i].innerHTML = `
            <img src="${filterCategory[i].image}" alt="">
            <p>${filterCategory[i].name}</p>
            <span>$${filterCategory[i].price}</span>
            <button>Add To Cart</button>
            `;
        }
    }
};
var selectMoblie = document.querySelector('.category-product>select');
function filterMoblie(select) {
    const filterCategoryMobile = ListProduct.filter(function (item) {
        return item.category == select.value;
    });

    if (selectMoblie) {
        for (let i in ListProduct) {
            boxProduct[i].innerHTML = ``;
        }
        for (let i in filterCategoryMobile) {
            boxProduct[i].innerHTML = `
            <img src="${filterCategoryMobile[i].image}" alt="">
            <p>${filterCategoryMobile[i].name}</p>
            <span>$${filterCategoryMobile[i].price}</span>
            <button>Add To Cart</button>
            `;
        }
    }
};

// cart

// let arrCart = [];
// var a = localStorage[arrCart];
// function addCart() {
//     var name = document.querySelector('.product-detail-left>h1');
//     var price = document.querySelector('.product-detail-left>span');
//     var quantity = document.querySelector('#quantity');
//     var image = document.querySelector('.product-detail-right>img');
//     var cart = document.querySelector('#cart');
//     arrCart.push({
//         nameCart: `${name.innerText}`,
//         priceCart: `${price.innerText}`,
//         quantityCart: `${quantity.value}`,
//         imageCart: `${image.src}`
//     });
//     if (arrCart.length > 0) {
//         for (let i of arrCart) {
//             if (cart) {
//                 cart.innerHTML += `
//             <tr>
//                 <td>${localStorage.getItem('objectCart')}</td>
//                 <td>${localStorage.getItem('objectCart')}</td>
//                 <td>${localStorage.getItem('objectCart')}</td>
//                 <td>${localStorage.getItem('objectCart')}</td>
//             </tr>
//         `;
//             }
//         }
//     }
// }

// and cart

// validate from

var signUp = document.querySelector('#submit-signUp');
var signIn = document.querySelector('#submit-signIn');
var Contact = document.querySelector('#submitContact');
var Contact2 = document.querySelector('.send-contact>form');
function checkFrom() {
    var countErro = 0;
    let name = document.querySelector('#name');
    let email = document.querySelector('#email');
    let pass = document.querySelector('#password');
    let rePass = document.querySelector('#re-password');
    let span = document.querySelectorAll('span');
    let subject = document.querySelector('#subject');
    let enquiryType = document.querySelector('#select');
    if (signUp) {
        if (name.value.length == 0) {
            span[2].innerText = "Vui l??ng nh???p t??n.";
            countErro++;
        } else {
            span[2].innerText = "";
        }
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))) {
            span[1].innerText = "Email kh??ng h???p l???.";
            countErro++;
        } else {
            span[1].innerText = "";
        }
        if (pass.value.length == 0) {
            span[3].innerText = "Vui l??ng nh???p password.";
            countErro++;
        } else {
            span[3].innerText = "";
        }
        if (rePass.value != pass.value) {
            span[4].innerText = "M???t Kh???u kh??ng Kh???p.";
            countErro++;
        } else {
            span[4].innerText = "";
        }
        if (countErro == 0) {
            swal("Sent", "Sign Up Success.", "success");
        }
    } else if (signIn) {
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))) {
            span[1].innerText = "Email kh??ng h???p l???.";
            countErro++;
        } else {
            span[1].innerText = "";
        }
        if (pass.value.length == 0) {
            span[2].innerText = "Vui l??ng nh???p password.";
            countErro++;
        } else {
            span[2].innerText = "";
        }
        if (countErro == 0) {
            swal("Sent", "Logged in successfully.", "success");
        }
    } else if (Contact) {
        if (name.value.length == 0) {
            span[3].innerText = "Please enter your name.";
            countErro++;
        } else {
            span[3].innerText = "";
        }
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))) {
            span[5].innerText = "Invalid email.";
            countErro++;
        } else {
            span[5].innerText = "";
        }
        if (subject.value.length == 0) {
            span[4].innerText = "Please select a subject.";
            countErro++;
        } else {
            span[4].innerText = "";
        }
        if (enquiryType.value == "") {
            span[6].innerText = "Please select request type.";
            countErro++;
        } else {
            span[6].innerText = "";
        }
        if (countErro == 0) {
            swal("Sent", "Submitted Successfully.", "success");
        }
    } else {
        if (name.value.length == 0) {
            span[7].innerText = "Vui l??ng nh???p t??n.";
            countErro++;
        } else {
            span[7].innerText = "";
        }
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))) {
            span[8].innerText = "Email kh??ng h???p l???.";
            countErro++;
        } else {
            span[8].innerText = "";
        }
        if (countErro == 0) {
            swal("Sent", "Submitted Successfully.", "success");
        }
    }
}
if (signUp) {
    signUp.addEventListener('click', checkFrom);
}

if (signIn) {
    signIn.addEventListener('click', checkFrom);
}
if (Contact) {
    Contact.addEventListener('click', checkFrom);
}

// blog

let news = document.querySelector('.news');
function displayBlogNews(items) {
    if (news) {
        news.innerHTML = `<div class="add" onclick="mora()"><i class='bx bxs-file-plus'></i><p>Add News</p> </div>`;
        for (let i of items) {
            news.innerHTML += `
        <div class="box-news">
        <div class="newImg">
            <img onclick="displayNews(${i.id})" src="${i.img}" alt="">
        </div>
        <div class="infoUser">
            <img src="src/img/img-11.png" alt="">
            <div class="nameUser">
                <p>Anh Duong</p>
                <span>Dec 9, 2021</span>
            </div>
        </div>
        <div class="title-new">
            <a onclick="displayNews(${i.id})">${i.title}</a>
            <p>${i.subTitle}</p>
        </div>
        <div class="views-heart">
            <p>100 viwes</p>
            <span><i class='bx bxs-heart' onclick="heartClick(this)"></i></span>
        </div>
    </div>
        `;
        }
    }
}

if (news) { displayBlogNews(ListBlogNews); }

// add news

let NewsInfo = document.querySelector('.add-News-info');
let btnAdd = document.querySelector('#btnAdd');
let addTitle = document.querySelector('#add-title');
let addSubTitle = document.querySelector('#add-subTitle');
let selectAdd = document.querySelector('#selectAdd');
let addImg = document.querySelector('#add-img');
let addContent = document.querySelector('#add-content');
let img1 = document.querySelector('.addImg>label>img');
let iconAdd = document.querySelector('#icon1');


let closeNew = document.querySelector('.add-News-info>.bx-x');
if (closeNew) {
    function mora() {
        NewsInfo.style.display = 'flex'
        NewsInfo.style.zIndex = '10'
        NewsInfo.style.transform = 'translateY(0%)';
    };
    closeNew.addEventListener('click', function () {
        NewsInfo.style.zIndex = '-1'
        NewsInfo.style.transform = 'translateY(120%)';
    });

    addImg.addEventListener('change', function () {
        iconAdd.style.display = "none"
        img1.src = URL.createObjectURL(addImg.files[0]);
    });
    var idAdd = 3;
    btnAdd.addEventListener('click', function () {
        idAdd++;
        let infoNewsAdd = {
            id: idAdd,
            title: addTitle.value,
            subTitle: addSubTitle.value,
            img: img1.src,
            content: addContent.value,
            BlogCategoryId: selectAdd.value
        }
        ListBlogNews.unshift(infoNewsAdd);
        console.log(selectAdd.value);
        NewsInfo.style.zIndex = '-1';
        NewsInfo.style.transform = 'translateY(120%)';

        if (news) { displayBlogNews(ListBlogNews); }
    });
}


// end add news
let overlay = document.querySelector('.main-blog>.overlay');
let newsDetails = document.querySelector('.news-details');
function displayNews(items) {
    if (newsDetails) {
        newsDetails.style.display = 'block';
        newsDetails.style.zIndex = '20'
        overlay.style.display = "block";
        var filter = ListBlogNews.find(function (i) {
            return i.id == items;
        })
        newsDetails.innerHTML = `
        <div class="icon-close">
        <i onclick="closeNews()" class='bx bx-x'></i>
    </div>
    <div class="body-News">
        <div class="infoUser-1">
            <div class="box-user">
                <div class="avatar">
                    <img src="src/img/img-11.png" alt="">
                </div>

                <div class="user">
                    <p>Anh Duong</p>
                    <span>Dec 9, 2021</span>
                </div>
            </div>

            <div class="conten-news">
                <p>${filter.title}</p>
                <img src="${filter.img}" alt="">
                <span>${filter.content}</span>
            </div>
            <div class="heart">
                <i class='bx bxs-heart' onclick="heartClick(this)"></i>
                <i class='bx bxs-message-dots'></i>
            </div>
        </div>
    </div>
        `;
    }
}
function closeNews() {
    newsDetails.style.display = 'none';
    overlay.style.display = "none";
}
let slectNews = document.querySelector('#selectBlog');
function filterNews() {
    if (slectNews) {

        let game = ListBlogNews.filter(function (i) {
            return i.BlogCategoryId == "2";
        });
        let github = ListBlogNews.filter(function (i) {
            return i.BlogCategoryId == "1";
        });

        if (slectNews.value == "") {
            displayBlogNews(ListBlogNews);
        }
        if (slectNews.value == "Game") {
            displayBlogNews(game);
        }
        if (slectNews.value == "GitHub") {
            displayBlogNews(github);
        }
    }

}
if (slectNews) {
    slectNews.addEventListener('change', filterNews);
}
let count = 0;
function heartClick(heart) {
    if (count % 2 == 0) {
        heart.style.color = 'red';
    } else {
        heart.style.color = 'black';
    }
    count++;
}