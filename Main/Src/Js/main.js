$(window).scroll(function() {
    //lấy kích thước hiện tại 
    const current = $(this).scrollTop();

    if (current > 30) {
        $(".totop").addClass("fixed");
        $(".phone").addClass("fixed");
        $(".zalo").addClass("fixed");
    } else {
        $(".totop").removeClass("fixed");
        $(".phone").removeClass("fixed");
        $(".zalo").removeClass("fixed");
    }
});


// click 
$(".totop").click(function(e) {
    e.preventDefault();
    $("body,html").animate({
        scrollTop: 0,
    })
});

// modal coupon 
// click đóng
$(document).ready(function() {
    $(".close").click(function(e) {
        $("#coupon-modal").hide();

    });

});
// click copy
$(document).ready(function() {
    $(".coupon_copy").click(function(e) {
        var content = $(".code").text();
        navigator.clipboard.writeText(content);
        $(this).text("Đã sao chép");
        $(this).delay(2000).queue(function() {
            $(this).text('Sao chép').dequeue();
        });
    });
});

/// click coupons 
$(".coupon_info_toggle").click(function(e) {

    $(".show").show();
    e.preventDefault();

});

//countdown
function getTime(dealine) {
    const dealineDate = new Date(dealine);
    const now = new Date();
    /// khoang cách giữa 2 ngày 
    const distant = (dealineDate - now) / 1000 //giay

    // days
    const days = Math.floor(distant / 3600 / 24);
    // hours
    const hours = Math.floor(distant / 3600) % 24
        /// minutes
    const minites = Math.floor(distant / 60) % 60
        // seconds
    const seconds = Math.floor(distant) % 60;

    //render html
    $(".time-days").text(days);
    $(".time-hours").text(hours);
    $(".time-mins").text(minites);
    $(".time-secs").text(seconds);

}

setInterval(() => {
    getTime("2023/12/17")
}, 1000);

document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("closse")[0];

    modal.style.display = "flex";

    span.onclick = function() {
        modal.style.display = "none";

    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

var button1 = document.getElementById("myButton1");
var button3 = document.getElementById("myButton3");
var button2 = document.getElementById("myButton2");

var popover1 = document.getElementById("popover1");
var popover2 = document.getElementById("popover2");
var popover3 = document.getElementById("popover3");
button1.addEventListener("click", function() {
    button1.classList.toggle("rotated");
    popover1.classList.toggle("show");
})
button2.addEventListener("click", function() {
    button2.classList.toggle("rotated");
    popover2.classList.toggle("show");
})
button3.addEventListener("click", function() {
    button3.classList.toggle("rotated");
    popover3.classList.toggle("show");
})