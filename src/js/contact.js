! function(s) {
        "use strict";

        function e(s) {
            return new RegExp("(^|\\s+)" + s + "(\\s+|$)")
        }
        var n, a, t;

        function c(s, e) {
            (n(s, e) ? t : a)(s, e)
        }
        "classList" in document.documentElement ? (n = function(s, e) {
            return s.classList.contains(e)
        }, a = function(s, e) {
            s.classList.add(e)
        }, t = function(s, e) {
            s.classList.remove(e)
        }) : (n = function(s, n) {
            return e(n).test(s.className)
        }, a = function(s, e) {
            n(s, e) || (s.className = s.className + " " + e)
        }, t = function(s, n) {
            s.className = s.className.replace(e(n), " ")
        });
        var i = {
            hasClass: n,
            addClass: a,
            removeClass: t,
            toggleClass: c,
            has: n,
            add: a,
            remove: t,
            toggle: c
        };
        "function" == typeof define && define.amd ? define(i) : s.classie = i
    }(window);

    ! function() {
        var t;

        function e(t) {
            classie.add(t.target.parentNode, "input--filled")
        }

        function i(t) {
            "" === t.target.value.trim() && classie.remove(t.target.parentNode, "input--filled")
        }
        String.prototype.trim || (t = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, String.prototype.trim = function() {
            return this.replace(t, "")
        }), [].slice.call(document.querySelectorAll("input.input__field, textarea.input__field")).forEach(function(t) {
            "" !== t.value.trim() && classie.add(t.parentNode, "input--filled"), t.addEventListener("focus", e), t.addEventListener("blur", i)
        })
    }();



    var textarea = document.querySelector('textarea');
    textarea.addEventListener('keydown', autosize);

    function autosize() {
        var el = this;
        setTimeout(function() {
            el.style.cssText = 'height: 80px;';
            // for box-sizing other than "content-box" use:
            // el.style.cssText = '-moz-box-sizing:content-box';
            el.style.cssText = 'height:' + el.scrollHeight + 'px';
        }, 0);
    }

    $("#message_html").on('keyup', function(event) {
        var currentString = $("#message_html").val()
        $(".message-counter").html(currentString.length);
        if (currentString.length <= 500) { /*or whatever your number is*/
            //do some css with your div
        } else {
            //do some different stuff with your div
        }
    });

    $(function() {
        // var regExp = /^\w*(\.\w*)?@\w*\.[a-z]+(\.[a-z]+)?$/;
        var regExp = /^([\w\.\+]{1,})([^\W])(@)([\w]{1,})(\.[\w]{1,})+$/;
        $('[type="email"]').on('keyup', function() {
            $('.message').hide();
            regExp.test($(this).val()) ? $('.message.success').show() : $('.message.error').show();
        });

    });

