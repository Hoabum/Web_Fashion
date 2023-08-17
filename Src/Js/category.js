const listCategory = [{
            img: "https://bizweb.dktcdn.net/thumb/large/100/448/042/themes/895670/assets/season_coll_1_img.png?1680840323404",
            title: "Đầm",
            Sl: "25 sản phẩm",
            category: ["D"]
        },
        {
            img: "https://bizweb.dktcdn.net/thumb/large/100/448/042/themes/895670/assets/season_coll_2_img.png?1680840323404",
            title: "Vest- Blazer",
            Sl: "9 sản phẩm",
            category: ["VB"]
        },
        {
            img: "https://bizweb.dktcdn.net/thumb/large/100/448/042/themes/895670/assets/season_coll_3_img.png?1680840323404",
            title: "Đồ thể thao",
            Sl: "7 sản phẩm",
            category: ["TT"]
        },
        {
            img: "https://bizweb.dktcdn.net/thumb/large/100/448/042/themes/895670/assets/season_coll_4_img.png?1680840323404",
            title: "Đồ bơi",
            Sl: "9 sản phẩm",
            category: ["DB"]
        },
        {
            img: "https://bizweb.dktcdn.net/thumb/large/100/448/042/themes/895670/assets/season_coll_5_img.png?1680840323404",
            title: "Đồ ngủ",
            Sl: "10 sản phẩm",
            category: ["DN"]
        },
        {
            img: "https://bizweb.dktcdn.net/thumb/large/100/448/042/themes/895670/assets/season_coll_6_img.png?1680840323404",
            title: "Áo sơ mi ",
            Sl: "13 sản phẩm",
            category: ["ASM"]
        }
    ]
    // ad list product
const itemList = document.getElementById('list-category');
listCategory.forEach((item) => {
    const itemHtml = `<div class="list-item" style="width: 205px;">
    <a href="">
        <div class="img">
            <img src="${item.img}" alt=""height="200" width="200">
        </div>
        <div class="info">
            <div class="name">${item.title}</div>
            <span>${item.Sl}</span>
        </div>
    </a>
</div>`
    itemList.insertAdjacentHTML('beforeend', itemHtml);
});