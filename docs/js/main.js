$(window).resize(function(){resizeYoutube();});
$(function(){resizeYoutube();});
function resizeYoutube(){ $("iframe").each(function(){ if( /^https?:\/\/www.youtube.com\/embed\//g.test($(this).attr("src")) ){ $(this).css("width","100%"); $(this).css("height",Math.ceil( parseInt($(this).css("width")) * 480 / 854 ) + "px");} }); }

$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

$('#go-to-top').click(function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
});



// account
// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed
d = new Date();
$(document).ready(function () {
    $(".grm_account_bank").html("KB국민");
    $(".brd_account_bank").html("NH농협");
    $(".grm_account_num").text("208401 04 273636");
    $(".brd_account_num").text("811091 52 0822 56");
    $(".GroomAccountName").text("김태성");
    $(".BrideAccountName").text("윤영순");
    $(".GroomAccountRelation").text("혼주");
    $(".BrideAccountRelation").text("혼주");

    $(".grm_account_bank2").html("NH농협");
    $(".brd_account_bank2").html("NH농협");
    $(".grm_account_num2").text("312 0004 8586 41");
    $(".brd_account_num2").text("312 0204 6512 61");
    $(".GroomAccountName2").text("김기영");
    $(".BrideAccountName2").text("유희원");
    $(".GroomAccountRelation2").text("신랑");
    $(".BrideAccountRelation2").text("신부");


    if ($.trim("혼주") != "") {
        $(".GroomAccountRelationArea").show();
    } else {
        $(".GroomAccountRelationArea").hide();
    }

    if ($.trim("혼주") != "") {
        $(".GroomAccountRelationArea2").show();
    } else {
        $(".GroomAccountRelationArea2").hide();
    }

    if ($.trim("혼주") != "") {
        $(".BrideAccountRelationArea").show();
    } else {
        $(".BrideAccountRelationArea").hide();
    }

    if ($.trim("신부") != "") {
        $(".BrideAccountRelationArea2").show();
    } else {
        $(".BrideAccountRelationArea2").hide();
    }


    if ($.trim("박종국") != "") {
        $(".GroomAccountNameArea").show();
    } else {
        $(".GroomAccountNameArea").hide();
    }

    if ($.trim("박현준") != "") {
        $(".GroomAccountNameArea2").show();
    } else {
        $(".GroomAccountNameArea2").hide();
    }

    if ($.trim("임헌호") != "") {
        $(".BrideAccountNameArea").show();
    } else {
        $(".BrideAccountNameArea").hide();
    }

    if ($.trim("임은민") != "") {
        $(".BrideAccountNameArea2").show();
    } else {
        $(".BrideAccountNameArea2").hide();
    }


    if ("Y" == "Y" || "Y" == "Y" || "Y" == "Y" || "Y" == "Y") {
        $(".remittance").show();
        $("#remittance").show();
    } else {
        $(".remittance").hide();
        $("#remittance").hide();
    }

    if ("Y" == "Y" || "Y" == "Y") {
        $(".btn_bx_1").show();
        $("#btn_bx_1").show();

        if ("Y" == "Y") {
            $(".re_grm_1").show();
        } else {
            $(".re_grm_1").hide();
        }
        if ("Y" == "Y") {
            $(".re_grm_2").show();
        } else {
            $(".re_grm_2").hide();
        }
    } else {
        $(".btn_bx_1").hide();
        $("#btn_bx_1").hide();
    }

    if ("Y" == "Y" || "Y" == "Y") {
        $(".btn_bx_2").show();
        $("#btn_bx_2").show();

        if ("Y" == "Y") {
            $(".re_brd_1").show();
        } else {
            $(".re_brd_1").hide();
        }
        if ("Y" == "Y") {
            $(".re_brd_2").show();
        } else {
            $(".re_brd_2").hide();
        }

    } else {
        $(".btn_bx_2").hide();
        $("#btn_bx_2").hide();
    }
});

//초기화
$('#remittance_pop_h').hide();
$('#remittance_pop_w').hide();

// 팝업
$(function () {
    $('.h_btn').click(function () {
        $('#remittance_pop_h').show();
        //$('.remittance_pop_h').show();
    });
    $('.w_btn').click(function () {
        $('#remittance_pop_w').show();
        //$('.remittance_pop_w').show();
    });
    $('.close_btn').click(function () {
        $('#remittance_pop_h, #remittance_pop_w').hide();
        //$('.remittance_pop_h, .remittance_pop_w').hide();
    });
});

//복사
function copyToClipboard(elementId) {
    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById(elementId).innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
    alert("복사되었습니다.");
}