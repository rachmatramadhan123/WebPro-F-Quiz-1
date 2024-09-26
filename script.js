$(document).ready(function() {
    function loadContent(path) {
        let pageTitle = "Welcome to My Website";
        let content = "<p>This is the homepage.</p>";

        switch (path) {
            case "/quiz1/profile":
                pageTitle = "Profile";
                content = "<p>This is the profile page.</p>";
                break;
            case "/quiz1/hometown":
                pageTitle = "Hometown";
                content = "<p>This is the hometown description page.</p>";
                break;
            case "/quiz1/food":
                pageTitle = "Local Food";
                content = "<p>This is the local food description page.</p>";
                break;
            case "/quiz1/tourist":
                pageTitle = "Tourist Places";
                content = "<p>This is the tourist places description page.</p>";
                break;
        }

        $("#page-title").text(pageTitle);
        $("#content").html(content);
    }

    // Get the current path
    const path = window.location.pathname;
    loadContent(path);

    // Handle navigation clicks
    $("nav a").on("click", function(event) {
        event.preventDefault();
        const newPath = $(this).attr("href");
        history.pushState(null, "", newPath);
        loadContent(newPath);
    });

    // Handle browser back/forward buttons
    window.onpopstate = function() {
        loadContent(window.location.pathname);
    };
});
