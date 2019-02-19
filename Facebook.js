// JavaScript source code

var imgsOff = ["like-off.png", "comment-off.png", "share-off.png"],
    imgsOn = ["like-on.png", "comment-on.png", "share-on.png"],
    btns = document.getElementsByClassName("btn"),
    emojiBox = document.getElementById("likeEmoji"),
    likeEmojiComments = document.getElementById("likeEmojiComments"),
    reactToComment = document.getElementById("reactToComment"),
    timer,
    likeEmoji = document.getElementsByClassName("likeEmoji");
for (var i = 0; i < btns.length; i++) {

    btns[i].addEventListener("mouseenter", function () {
        this.childNodes[1].style.background = "url(" + imgsOn[parseInt(this.classList[1])] + ") center no-repeat";
        this.classList.add("activeBtn");
    });

    btns[i].addEventListener("mouseleave", function () {
        this.childNodes[1].style.background = "url(" + imgsOff[parseInt(this.classList[1])] + ") center no-repeat";
        this.classList.remove("activeBtn");
    });

}

btns[0].addEventListener("mouseenter", function() {
    timer = setTimeout(function () {
        emojiBox.style.display = "block";
    }, 500);
});
btns[0].addEventListener("mouseleave", function() {
    emojiBox.style.display = "none";
    clearTimeout(timer);
});
console.log(reactToComment.childNodes);
reactToComment.childNodes[1].addEventListener("mouseenter", function () {
    timer = setTimeout(function () {
        likeEmojiComments.style.display = "block";
    }, 500);
});
reactToComment.addEventListener("mouseleave", function() {
    likeEmojiComments.style.display = "none";
    clearTimeout(timer);
});


for (var i = 0; i < likeEmoji.length; i++) {
    likeEmoji[i].addEventListener("mouseenter", function () {
        this.style.transition = "transform .3s";
        this.style.transform = "scale(0.18)";
    });
    likeEmoji[i].addEventListener("mouseleave", function () {
        this.style.transform = "scale(0.12)";
    });
    likeEmoji[i].addEventListener("click", function () {
        likeEmojiComments.style.display = "none";
        emojiBox.style.display = "none";
    });
}

var commentArea = document.getElementById("commentArea"),
    pressed = false;
commentArea.addEventListener("input", function() {
    if (this.value.length === 45 && !pressed) {
        this.style.width = "100%";
        this.style.marginBottom = "25px";
        pressed = true;
    }
    else if ((this.value.length <= 44 && pressed) || (this.value.length == 0)) {
        this.style.width = "350px";
        this.style.marginBottom = "0px";
        pressed = false;
    }
    this.style.height = "auto";
    this.style.height = (this.scrollHeight) + 'px';
});
commentArea.addEventListener("keypress", function(e) {
    if (e.which === 13) {
        e.preventDefault();
    }
});

var commentImgs = document.getElementsByClassName("commentBoxTools"),
    commentImgsOn = {
        "emoji": "emoji-on.png",
        "photo": "photo-on.png",
        "gif": "gif-on.png",
        "sticker": "sticker-on.png"
    },
    commentImgsOff = {
        "emoji": "emoji-off.png",
        "photo": "photo-off.png",
        "gif": "gif-off.png",
        "sticker": "sticker-off.png"
    },
    path;
for (var i = 0; i < commentImgs.length; i++) {

    commentImgs[i].addEventListener("mouseover", function () {
        this.style.cursor = "pointer";
        path = this.classList[1];
        path = commentImgsOn[path];
        this.style.background = "url(" + path + ") no-repeat";
        this.childNodes[1].open = true;
    });
    commentImgs[i].addEventListener("mouseleave", function () {
        this.style.cursor = "pointer";
        path = this.classList[1];
        path = commentImgsOff[path];
        this.style.background = "url(" + path + ") no-repeat";
        this.childNodes[1].open = false;
    });
}
