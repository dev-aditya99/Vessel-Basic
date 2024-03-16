
const MainContainer = document.querySelector('#main_container-id');

const Name = document.querySelector('#name-id');
const Password = document.querySelector('#password-id');

const hint = document.querySelector("#hint");

const LoginContainer = document.querySelector("#login-container-id");
const LogIn = document.querySelector("#login-id");
const ProfileContainer = document.querySelector("#profile-container-id");
const feedContainer = document.querySelector("#feed-container-id");


const loginBox = () => {
    if (Name.value == "shreeganesh" && Password.value == "123") {
        hint.style.display = "none";
        LoginContainer.style.display = "none";
        ProfileContainer.style.display = "flex";
        feedContainer.style.display = "block";
        MainContainer.style.justifyContent = "flex-start";
    } else {
        hint.style.display = "";
        LoginContainer.style.display = "flex";
        ProfileContainer.style.display = "none";
        feedContainer.style.display = "none";
    }
}


LogIn.addEventListener("click",
    function () {
        loginBox();
    }
)


const FeedForImagesLi = document.querySelector("#feed-header-ul-li-images");
const FeedForShortiesLi = document.querySelector("#feed-header-ul-li-shorties");
const FeedForVideosLi = document.querySelector("#feed-header-ul-li-videos");
const FeedForAllLi = document.querySelector("#feed-header-ul-li-all");

const FeedHeaderLiBottomBorder = document.querySelector("#feed-header-ul-li-bottom-border-id");

const FeedForImages = document.querySelector("#feed-for-images-id");
const FeedForShorties = document.querySelector("#feed-for-shorties-id");
const FeedForVideos = document.querySelector("#feed-for-videos-id");
const FeedForAll = document.querySelector("#feed-for-all-id");


// FeedForImages.style.display = "none";
FeedForShorties.style.display = "none";
FeedForVideos.style.display = "none";

// got to All section 
const goToAllSection = () => {
    // color 
    FeedForAllLi.style.color = "navy";
    FeedForImagesLi.style.color = "#ddd";
    FeedForShortiesLi.style.color = "#ddd";
    FeedForVideosLi.style.color = "#ddd";

    // position 
    FeedHeaderLiBottomBorder.style.left = "0";

    // display 
    FeedForAll.style.left = "0%";
    FeedForImages.style.left = "100%";
    FeedForShorties.style.left = "200%";
    FeedForVideos.style.left = "300%";
}


FeedForAllLi.addEventListener("click",
    function () {
        goToAllSection();
    }
)


// go to images section 
const goToImagesSection = () => {
    // color 
    FeedForAllLi.style.color = "#ddd";
    FeedForImagesLi.style.color = "navy";
    FeedForShortiesLi.style.color = "#ddd";
    FeedForVideosLi.style.color = "#ddd";

    // position 
    FeedHeaderLiBottomBorder.style.left = "25%";

    // position 
    FeedForAll.style.left = "-100%";
    FeedForImages.style.left = "0%";
    FeedForShorties.style.left = "100%";
    FeedForVideos.style.left = "200%";
}


FeedForImagesLi.addEventListener("click",
    function () {
        goToImagesSection();
    }
)

// got to shorties 
const goToShortiesSection = () => {
    // color 
    FeedForAllLi.style.color = "#ddd";
    FeedForImagesLi.style.color = "#ddd";
    FeedForShortiesLi.style.color = "navy";
    FeedForVideosLi.style.color = "#ddd";

    // position 
    FeedHeaderLiBottomBorder.style.left = "50%";

    // position 
    FeedForAll.style.left = "-200%";
    FeedForImages.style.left = "-100%";
    FeedForShorties.style.left = "0%";
    FeedForVideos.style.left = "100%";
}


FeedForShortiesLi.addEventListener("click",
    function () {
        goToShortiesSection();
    }
)


// got to videos section 
const goToVideosSection = () => {
    // color 
    FeedForAllLi.style.color = "#ddd";
    FeedForImagesLi.style.color = "#ddd";
    FeedForShortiesLi.style.color = "#ddd";
    FeedForVideosLi.style.color = "navy";

    // position 
    FeedHeaderLiBottomBorder.style.left = "75%";

    // position 
    FeedForAll.style.left = "-300%";
    FeedForImages.style.left = "-200%";
    FeedForShorties.style.left = "-100%";
    FeedForVideos.style.left = "0%";
}

FeedForVideosLi.addEventListener("click",
    function () {
        goToVideosSection();
    }
)
