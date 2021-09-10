
function signin() {
    if ($("#warning").css("display") == "none") {
        function show() {
            $("#signinx").show(3000, "linear", function() {
                $("#signx").show();
            });
        }
        show();
    }
}
signin();