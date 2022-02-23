import $ from 'jquery'

$(document).ready(function() {
    var a = null;
    var val = [];
    var val2 = [];
    var bool = false;
    var out = null;
    var res = null;

    $('.num-set').on('click', function() {
        if (bool === false) {
            a = $(this).val();
            val.push(a);
            out = parseInt(val.join(''));
            $('.result').val(out);
            console.log(out);
            console.log(val);
        } else {
            a = $(this).val();
            val2.push(a);
            out = parseInt(val2.join(''));
            $('.result').val(out);
            console.log(out);
            console.log(val2);
        }
    });
    $('.ce').on('click', function() {
        if (bool) {
            val2 = [];
            $('.result').val('');
        } else {
            val = [];
            $('.result').val('');
        }
    });

    $('.c').on('click', function() {
        $('.result').val('');
        $('.par-out').html('');
        val = [];
        val2 = [];
        bool = false;
        oper = null;
    })
    var oper;
    var item = 0;
    $('.plus').on('click', function() {
        bool = true;
        oper = 1
        item += 1;
        $('.par-out').append(out + "+");
        $('.result').val('');
        if (item === 1) {
            res = parseInt(val.join(''));
        }
        if (item > 1) {
            res = res + parseInt(val2.join(''));
            val2 = [];
            $('.result').val(res);
        }
    });
    $('.minus').on('click', function() {
        bool = true;
        oper = 2
        $('.par-out').html(out + "-");
        $('.result').val('');
    });
    $('.divide').on('click', function() {
        bool = true;
        oper = 3;
        $('.result').val('');
        $('.par-out').html(out + "/")
    });
    $('.times').on('click', function() {
        bool = true;
        $('.result').val('');
        oper = 4;
        $('.par-out').html(out + "*")
    });

    $('.times').on('click', function() {
        bool = true;
        $('.result').val('');
        oper = 4;
        $('.par-out').html(out + "*")
    });

    $('.eq').on('click', function() {
        if (oper == 1) {
            res = res + parseInt(val2.join(''));
            $('.par-out').append(out)
        } else if (oper == 2) {
            res = parseInt(val.join('')) - parseInt(val2.join(''));
            $('.par-out').append(out)
        } else if (oper == 4) {
            res = parseInt(val.join('')) - parseInt(val2.join(''));
            $('.par-out').append(out)
        } else if (oper == 3) {
            if (parseInt(val.join('')) != 0) {
                res = parseInt(val.join('')) / parseInt(val2.join(''));
            }
            $('.par-out').append(out)
        }
        $('.result').val(res);
        bool = false
        val = [];
        val2 = [];
    });
});