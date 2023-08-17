const searchBox = document.getElementById('search-box');
const placeholderText = 'Tìm theo tên sản phẩm...';
let typingTimer = null;

function typeText() { // thêm chữ 
    let i = 0;
    typingTimer = setInterval(() => {
        searchBox.setAttribute('placeholder', placeholderText.substring(0, i));
        // setAttribute thiết lập giá trị cho thuộc tính html
        // substring cắt từ chuỗi ban đầu
        i++;

        if (i > placeholderText.length) {
            clearInterval(typingTimer); //hủy bỏ hàm đang được thực thi
            setTimeout(eraseText, 100); // gọi lại hàm  với 100ms delay
        }
    }, 100);
}

function eraseText() { //để xóa từng chữ 
    let i = placeholderText.length;
    typingTimer = setInterval(() => {
        searchBox.setAttribute('placeholder', placeholderText.substring(0, i));
        i--;

        if (i < 0) {
            clearInterval(typingTimer);
            setTimeout(typeText, 100);
        }
    }, 100);
}

typeText();

/// tạo chữ chạy timeout 

// sự kiện click vào icon search
$(".iconSearch").click(function(e) {


    e.preventDefault();

});
$(document).ready(function() {
    $(".iconSearch").on('click', function() {
        $(".header_sticky").addClass('show-content');
        $("Header").addClass("none");
        $(".header_sticky").removeClass("none");

    });
});
$(".noneSearch").click(function(e) {
    $(".header_sticky").addClass('none');
    $("Header").removeClass("none");
    $(".header_sticky").addClass('none');
    e.preventDefault();

});