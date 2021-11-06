window.dispatchEvent(new Event("resize"));
// field animation

!function () {
    var t;
    function e(t) {
        classie.add(t.target.parentNode, "input--filled")
    }
    function i(t) {
        "" === t.target.value.trim() && classie.remove(t.target.parentNode, "input--filled")
    }
    String.prototype.trim || (t = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, String.prototype.trim = function () {
        return this.replace(t, "")
    }), [].slice.call(document.querySelectorAll("input.input__field, textarea.input__field")).forEach(function (t) {
        "" !== t.value.trim() && classie.add(t.parentNode, "input--filled"), t.addEventListener("focus", e), t.addEventListener("blur", i)
    })
}();

//textarea
var textarea = document.querySelector("textarea");
textarea.addEventListener("keydown", autosize);
function autosize() {
    var el = this;
    setTimeout(function () {
        el.style.cssText = "height: 80px;";
        // for box-sizing other than "content-box" use:
        // el.style.cssText = '-moz-box-sizing:content-box';
        el.style.cssText = "height:" + el.scrollHeight + "px";
    }, 0);
}

// counting message lenght
$("#message_html").on("keyup", function (event) {
      var currentString = $("#message_html").val()
      $(".message-counter").html(currentString.length);
      if (currentString.length <= 500) {  /*or whatever your number is*/
          //do some css with your div
      } else {
          //do some different stuff with your div
      }
  });

//initialize email js
$(document).ready(function() {
    emailjs.init("user_zg4Q19pGpH4GnDrANXciX");
});

