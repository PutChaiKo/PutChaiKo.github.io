
    $(function () {
        //自定义函数
        //旋转45度
        function rotate_plus(){
            var deg = degreeOfRotation;
            var deg2radians = Math.PI * 2 / 360;
            var rad = deg * deg2radians ;
            var costheta = Math.cos(rad);
            var sintheta = Math.sin(rad);

            var m11 = costheta;
            var m12 = -sintheta;
            var m21 = sintheta;
            var m22 = costheta;
            var matrixValues = 'M11=' + m11 + ', M12='+ m12 +', M21='+ m21 +', M22='+ m22;

            elementToRotate.css('-webkit-transform','rotate('+deg+'deg)')
                .css('-moz-transform','rotate('+deg+'deg)')
                .css('-ms-transform','rotate('+deg+'deg)')
                .css('transform','rotate('+deg+'deg)')
                .css('filter', 'progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\','+matrixValues+')')
                .css('-ms-filter', 'progid:DXImageTransform.Microsoft.Matrix(SizingMethod=\'auto expand\','+matrixValues+')');
        }

        $('#felidae').on('show.bs.collapse', function () {
            rotate_plus(elementToRotate = $('#felidae-plus'),degreeOfRotation = 45);
        })
        $('#felidae').on('hide.bs.collapse', function () {
            rotate_plus(elementToRotate = $('#felidae-plus'),degreeOfRotation = 0);
        })

        $('#with_human').on('show.bs.collapse', function () {
            rotate_plus(elementToRotate = $('#with_human-plus'),degreeOfRotation = 45);
        })
        $('#with_human').on('hide.bs.collapse', function () {
            rotate_plus(elementToRotate = $('#with_human-plus'),degreeOfRotation = 0);
        })

        $('#breed').on('show.bs.collapse', function () {
            rotate_plus(elementToRotate = $('#breed-plus'),degreeOfRotation = 45);
        })
        $('#breed').on('hide.bs.collapse', function () {
            rotate_plus(elementToRotate = $('#breed-plus'),degreeOfRotation = 0);
        })

        $('#pet_thing').on('show.bs.collapse', function () {
            rotate_plus(elementToRotate = $('#pet_thing-plus'),degreeOfRotation = 45);
        })
        $('#pet_thing').on('hide.bs.collapse', function () {
            rotate_plus(elementToRotate = $('#pet_thing-plus'),degreeOfRotation = 0);
        })

        $('#about_us').on('show.bs.collapse', function () {
            rotate_plus(elementToRotate = $('#about_us-plus'),degreeOfRotation = 45);
        })
        $('#about_us').on('hide.bs.collapse', function () {
            rotate_plus(elementToRotate = $('#about_us-plus'),degreeOfRotation = 0);
        })
    });

/*滑动悬浮固定功能*/
$(function() {
    var fix = $('.fixed');                      //滚动悬浮块
    var end = $('.bottom');                     //滚动到这个元素后结束固定
    var fixTop = fix.offset().top,              //滚动悬浮块与顶部的距离
        fixHeight = fix.height();               //滚动悬浮块高度


    var endTop, miss;                           //结束元素与顶部的距离

    $(window).scroll(function() {
        //页面与顶部高度
        var docTop = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
        //被上卷掉的页面高度
        //其中在W3C标准中document.body.scrollTop恒为0
        //所以用document.documentElement.scrollTop)代替
        console.log("滚动悬浮块与顶部的距离fixTop=" + fixTop);
        //console.log("fixHeight " + fixHeight);
        console.log("被上卷掉的页面高度docTop " + docTop);
        //console.log("miss=" + miss);
        //console.log("document.body.scrollTop " + document.body.scrollTop);
        //console.log("document.body.scrollTop " + document.documentElement.scrollTop);
        console.log("结束块与顶端高度endTop=" + endTop);
        //如果有结束块
        if (end.length > 0) {
            endTop = end.offset().top;
            miss = endTop - docTop - fixHeight;
        }

        if (fixTop < docTop) {
            fix.css({'position': 'fixed'});
            if ((end.length > 0) && (endTop < (docTop + fixHeight))) {
                fix.css({top: miss});           //滚动悬浮块滑到结束块上时，top值为负，即慢慢隐藏出浏览器
            } else{
                fix.css({top: 0});              //滚动悬浮块未到结束块上时，top为0
            }
        }
        else {
            fix.css({'position': 'static'});

        }
    })
});

//滚动渐变
$(function(){
    var bigtext = $('.with_cat');   //定义class
    var bigtexttop = bigtext.offset().top,
    bigtextheight = bigtext.height();
    var end2 = $('.bottom');


    $(window).scroll(function(){
        var doctop = Math.max(document.body.scrollTop, document.documentElement.scrollTop);

        var end2top = end2.offset().top;
        //被卷掉的页面高度
        if (((doctop - 52) / bigtextheight) > 1){
            point = 1
        }
        point = ((doctop) / bigtextheight)
        console.log("透明度 point = " + point)
        if (point <= 1){
            console.log("point <= 1")
            bigtext.css({opacity: point});
            $('.fixed').css('filter','blur('+ point * 10 +'px)');
        }
        if (point > 1){
            bigtext.css({opacity: 1});
            $('.fixed').css('filter','blur('+ 10 +'px)');
        }
        else {
            console.log("出现else！！")
            //bigtext.css({opacity: 0});
            //$('.fixed').css('filter','blur('+ 0 +'px)');
        }
        console.log("bigtexttop=" + bigtexttop)
        console.log("bigtextheight=" + bigtextheight)
    })
})

//页面高度与导航栏Class黑白变化
$(function(){
    var blacknav = $('.black_div');
    var blacknav_height = blacknav.offset().top;
    $(window).scroll(function(){
        var docTop = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
        console.log("黑块高度blacknav_height= " + blacknav_height);
        console.log("黑块_被上卷掉的页面高度docTop " + docTop);
        if (docTop > blacknav_height){
            //默认白色变成黑色
            $(".navbar-default").addClass("navbar-inverse");
            $(".navbar-default").removeClass("navbar-default");
            // $("#nav_cat_logo").attr("src","img/cat_logo_white.png");
            $("#nav_cat_logo").css('filter','invert('+ 25 +'%)');
        }
        else {
            //黑色变成默认白色
            $(".navbar-inverse").addClass("navbar-default");
            $(".navbar-inverse").removeClass("navbar-inverse");
            // $("#nav_cat_logo").attr("src","img/cat_logo_black.png");
            $("#nav_cat_logo").css('filter','invert('+ 100 +'%)');
        }
        //定义
    })
})
//导航栏class变换
/*
$(function(){
    $(".navbar-default").hover(function() {
        $(this).addClass("navbar-inverse", 10000,);
        $(this).removeClass("navbar-default", 10000,);
    },
function(){
    $(this).addClass("navbar-default", 10000,);
    $(this).removeClass("navbar-inverse", 10000,);
    })
})
*/
