$(document).ready(function() {
    function loadContent(path) {
        let pageTitle = "Welcome to My Website";
        let content = "<p>My name is Rachmat Ramadhan with StudentID 5025231193, I am a student of Web Programming (F) 2024.</p>";

        switch (path) {
            case "/quiz1/profile":
                pageTitle = "Profile";
                content = "<p><strong>Name:</strong> Rachmat Ramadhan<br><strong>Place and date of birth:</strong> Samarinda, 08 November 2004<br><strong>Gender:</strong> Male<br><strong>Address:</strong> Jl. Park Regency No.F38, Keputih, Kec. Sukolilo, Surabaya, Jawa Timur 60111<br><strong>Student ID:</strong> 5025231193</p>";
                break;
            case "/quiz1/hometown":
                pageTitle = "Hometown";
                content = "<p>Samarinda is the capital city of East Kalimantan, Indonesia, located on the banks of the Mahakam River. Known for its rich cultural heritage and as a gateway to Kalimantan's interior, Samarinda is an important economic hub, especially for the timber, coal, and oil industries. The city is also famous for its traditional weaving, tenun Samarinda, and local delicacies like Amplang and Nasi Kuning. With its tropical climate and proximity to nature, including rainforests and rivers, Samarinda offers a mix of urban development and natural beauty.</p>";
                break;
            case "/quiz1/food":
                pageTitle = "Local Food";
                content = "<p><strong>Amplang:</strong> Amplang is a traditional fish cracker from Samarinda made from mackerel or belida fish. These crackers have a crispy texture and a distinctive savory taste, often brought as souvenirs from Samarinda.<br><br><strong>Nasi Kuning Samarinda:</strong> Nasi kuning in Samarinda is different from nasi kuning in other regions because it is served with various side dishes, such as shredded chicken, eggs, sambal goreng, and crackers. This rice is cooked with coconut milk and turmeric, giving it a distinctive aroma and taste.<br><br><strong>Sate Payau:</strong> Sate Payau is venison satay, which is one of the unique culinary delights in Samarinda. The tender venison is combined with peanut sauce or soy sauce, giving it a unique flavor.<br><br><strong>Gence Ruan:</strong> Gence Ruan is a dish made from haruan fish (snakehead fish) that is grilled and seasoned with a special spice blend. Its spicy and savory seasoning is perfect to enjoy with warm white rice.<br><br><strong>Pepes Kepiting:</strong> Pepes Kepiting is a crab dish wrapped in banana leaves and cooked with rich spices. It has a very delicious taste, with the distinctive aroma of banana leaves.<br><br><strong>Sambal Raja:</strong> This sambal is made from a mixture of chili, shrimp paste, tomatoes, and other spices, often served with dishes like chicken, fish, and vegetables.<br><br><strong>Bubur Gunting:</strong> Bubur Gunting is a light snack made from a mixture of rice flour and palm sugar, shaped like scissors, and served with sweet coconut milk sauce.</p>";
                break;
            case "/quiz1/tourist":
                pageTitle = "Tourist Places";
                content = "<p><strong>Desa Budaya Pampang:</strong> A tourist destination showcasing the daily life of the people of Samarinda in the past, including traditional ceremonies, dances, and music. Here, you can also buy handicrafts such as handwoven fabrics and wood carvings.<br><br><strong>Kampung Tenun Samarinda:</strong> A place to see the process of making traditional Samarinda woven fabrics using non-mechanical looms.<br><br><strong>Sentra Saung Samarinda:</strong> A place to see traditional Samarinda handicrafts, specifically the Ikat Woven Sarong or Samarinda Sarong.<br><br><strong>Masjid Islamic Center Samarinda:</strong> One of the grandest mosques in Indonesia, second only to the Istiqlal Mosque.<br><br><strong>Tepian Sungai Mahakam:</strong> A very famous tourist spot in Samarinda.<br><br><strong>River Cruise Sungai Mahakam:</strong> A recommended tourist spot to visit in the Mahakam River area.<br><br><strong>Pulau Beras Basah:</strong> A must-visit tourist spot in Samarinda.<br><br><strong>Teras Samarinda:</strong> A strategic project by the Samarinda City Government integrated with the development of the new capital city (IKN) in East Kalimantan.</p>";
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
