$(document).ready(function() {
    /*轮播图*/
    var index = 0;
    var timer;
    $(".banner_left").click(function() {
        index--;
        if (index < 0) {
            index = 2;
        }
        var nl = parseInt($('.imglist').css("left"));
        if (nl == 0) {
            nl = -3000;
        } else {
            nl = nl + 1500;
        }
        nl = nl + "px";
        $('.imglist').css("left", nl);
        $('.button span').eq(index).css("background-color", "red").siblings().css("background-color",
            "rgba(100,100,100,0.3)");
    });
    $(".banner_right").click(function() {
        index++;
        if (index > 2) {
            index = 0;
        }
        var nl = parseInt($('.imglist').css("left"));
        if (nl == -3000) {
            nl = 0;
        } else {
            nl = nl - 1500;
        }
        nl = nl + "px";
        $('.imglist').css("left", nl)
        $('.button span').eq(index).css("background-color", "red").siblings().css("background-color",
            "rgba(100,100,100,0.3)");
    });
    clickButtons();

    function clickButtons() {
        var buttonspan = $('.button')[0].children;
        for (var i = 0; i < 3; i++) {
            buttonspan[i].onclick = function() {

                var ind = $(this).attr('index');
                $(this).addClass('on');
                $('.button span').eq(ind).css("background-color", "red").siblings().css("background-color",
                    "rgba(100,100,100,0.3)");
                var nl = parseInt($('.imglist').css("left"));
                nl = -ind * 1500
                if (nl == 0) {
                    nl = -3000;
                }
                nl = nl + "px";
                $('.imglist').css("left", nl);

            };
        }
    };

    function autoPlay() {
        timer = setInterval(function() {
            $(".banner_right").click()
        }, 2500)
    }
    autoPlay();
    $('.imglist img').mouseenter(function() {
        clearInterval(timer);
    })
    $('.imglist img').mouseleave(function() {
            autoPlay()
        })
        /*底部导入*/
    axios.get('https://5dbce78730411e0014f271ba.mockapi.io/index-new')
        .then(function(res) {
            for (var i = 0; i < res.data.length; i++) {
                console.log(res.data[i]);
                $('.newslist').append("<li class='new'><a href='#'>" + "<img src='" + res.data[i].url + "'><span>" + res.data[i].title + "</span><hr><p>" + res.data[i].ant + "</p></a></li>");
            }

        }).catch(function(res) {

        })
});
