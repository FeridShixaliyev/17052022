$(".container").css({"padding-top":"40px","height": "700px"});

$(".big-image").css({    "height": "450px",
    "width": "840px",
    "background-color": "currentColor",
    "position":"relative",
    "display": "flex",
    "justify-content": "space-between",
})

    $(".big-image .photoleft").css({"height": "450px",
    "width": "85px",
    "position": "relative",
    "background-color": "white"})

    $(".big-image .photoright").css({"height": "450px",
    "position":"absolute!important",
    "float":"left",
    "position": "relative",
    "width": "85px",
    "background-color": "white"})

    $(".big-image .photoleft .left").css({"width": "25px",
    "height": "38px",
    "cursor":"pointer",
    "position": "absolute",
    "margin-top": "212px",
    "margin-left": "32px"
})
    $(".big-image .photoright .right").css({"width": "25px",
    "height": "38px",
    "cursor":"pointer",
    "position": "absolute",
    "margin-top": "212px",
    "margin-left": "0px"
})

$(".big-image img").css({"width": "80%"
})
$(".big-image .photoleft .left").click(function(){
    alert();
})
$(".big-image .photoright .right").click(function(){
    alert();
})

$(".images").css({"height":"92px",
"width":"840px",
"padding-top": "7px",
"overflow-x":"scroll"
})
$(".images ul").css({"display": "flex",
    "justify-content": "space-between",
    "margin": "auto"
})
$(".images ul li").css({"width": "88px",
    "height": "60px",
    "list-style-type": "none",
    "margin-left": "10px",
    "cursor":"pointer"

})

$(".images ul li img").click(function(){
    let srcImg=$(this).attr('src');
    let mainImg=$(".big-image .b-image").attr('src',srcImg);
    // $(".images .image").attr('class','liactive')
    
    $(this).css({
        "border": "5px solid rebeccapurple"
    })
})

$(".images ul li img").css({"width": "71px",
    "height": "51px",
    
})
