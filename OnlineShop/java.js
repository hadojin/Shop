var prod1 = $('.Prod1').text();
var cost1 = $('.Cost1').val();
var prod2 = $('.Prod2').text();
var cost2 = $('.Cost2').val();
var prod3 = $('.Prod3').text();
var cost3 = $('.Cost3').val();
var prod4 = $('.Prod4').text();
var cost4 = $('.Cost4').val();
var myBulk;


var myShop = {
    bought: 0,
    clikz: "",
    total: 0,
    quantity: 1,

    init: function () {
        var tbody11 = $('.tbody1')
        var trow = $('<tr class="trow"></tr>')
        var tcol2 = $('<td class="tcol2"></td>')
        var tcol = $('<td class="tcol"></td>')
        var tcol1 = $('<td class="tcol1"></td>')
        tbody11.append(trow);
        tbody11.children().last().append(tcol2);
        tbody11.children().last().append(tcol);
        tbody11.children().last().append(tcol1);
        return [trow, tcol2, tcol, tcol1];
    },

    init2: function () {
        myShop.bought++;
        myShop.clikz++;
        MYTEXTY.text(myShop.clikz);
        MYTOTAL.text(myShop.total);
    },

    Bulk: function () {
        for (var i = 0; i < myShop.quantity; i++) {
            if (myBulk == 1) {
                myShop.add1();
            } else if (myBulk == 2) {
                myShop.add2();
            } else if (myBulk == 3) {
                myShop.add3();
            } else if (myBulk == 4) {
                myShop.add4();
            }
        }
    },
    add1: function () {
        myArray = myShop.init();
        myShop.total += cost1;
        myShop.init2();
        myArray[1].text(myShop.bought);
        myArray[2].text(prod1);
        myArray[3].text(cost1);


    },

    add2: function () {
        myArray = myShop.init();
        myShop.total += cost2;
        myShop.init2();
        myArray[1].text(myShop.bought);
        myArray[2].text(prod2);
        myArray[3].text(cost2);


    },

    add3: function () {
        myArray = myShop.init();
        myShop.total += cost3;
        myShop.init2();
        myArray[1].text(myShop.bought);
        myArray[2].text(prod3);
        myArray[3].text(cost3);


    },

    add4: function () {
        myArray = myShop.init();
        myShop.total += cost4;
        myShop.init2();
        myArray[1].text(myShop.bought);
        myArray[2].text(prod4);
        myArray[3].text(cost4);


    },

    increase: function () {
        myShop.quantity++;
        $('.iniqnt').text(myShop.quantity)

    },
    decrease: function () {
        myShop.quantity--;
        if (myShop.quantity < 1) {
            myShop.quantity = 0;
        }
        $('.iniqnt').text(myShop.quantity)

    },
}
var MYTEXTY = $('.texty')
var MYTOTAL = $('.myTotal');
$('.add1').on('click', myShop.add1);
$('.add2').on('click', myShop.add2);
$('.add3').on('click', myShop.add3);
$('.add4').on('click', myShop.add4);
$('.up').on('click', myShop.increase);
$('.down').on('click', myShop.decrease);
$('.bulk').on('click', function () {
    myShop.Bulk();
    myShop.quantity = 1;
    $('.iniqnt').text(myShop.quantity)
});
$('.bulk1').on('click', function () {
    myBulk = 1
});
$('.bulk2').on('click', function () {
    myBulk = 2
});
$('.bulk3').on('click', function () {
    myBulk = 3
});
$('.bulk4').on('click', function () {
    myBulk = 4
});

$(".dropdown").hover(
    function () {
        $('.dropdown-menu', this).fadeIn("fast");
    },
    function () {
        $('.dropdown-menu', this).fadeOut("fast");
    });
