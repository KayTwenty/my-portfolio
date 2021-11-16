$(document).ready(function () {
    // Open in new window
        $('.click').each(function() {
        var link = $(this).html();
        $(this).contents().wrap('<a href="google.com"></a>');
        });
});

// Make Card One Clickable
function projectOne() {
    window.open("https://cavern-web.vercel.app/");
}

// Make Card Two Clickable
function projectTwo() {
    window.open("https://github.com/alexdavidjohnson/Front-End-Portfolio-Project");
}

// Make Card Three Clickable
function projectThree() {
    window.open("https://github.com/alexdavidjohnson/Front-End-Portfolio-Project");
}