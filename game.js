var list_images
list_images = ['<img id="1" class="invisible" src="png\\penguin\\penguin-96.png" alt="pinguino">',
    '<img id="2" class="invisible" src="png\\christmas_tree\\christmas_tree-96.png" alt="christmas tree">',
    '<img id="3" class="invisible" src="png\\deer\\deer-96.png" alt="deer">',
    '<img id="4" class="invisible" src="png\\candy_cane\\candy_cane-96.png" alt="candy"></a>',
    '<img id="5" class="invisible" src="png\\deer\\deer-96.png" alt="deer">',
    '<img id="6" class="invisible" src="png\\christmas_ball\\christmas_ball-96.png" alt="christmas ball">',
    '<img id="7" class="invisible" src="png\\penguin\\penguin-96.png" alt="pinguino">',
    '<img id="8" class="invisible" src="png\\gift\\gift-96.png" alt="gift">',
    '<img id="9" class="invisible" src="png\\gift\\gift-96.png" alt="gift">',
    '<img id="10" class="invisible" src="png\\star\\star-96.png" alt="star">',
    '<img id="11" class="invisible" src="png\\santa\\santa-96.png" alt="santa">',
    '<img id="12" class="invisible" src="png\\christmas_ball\\christmas_ball-96.png" alt="christmas ball">',
    '<img id="13" class="invisible" src="png\\candy_cane\\candy_cane-96.png" alt="candy cane">',
    '<img id="14" class="invisible" src="png\\christmas_tree\\christmas_tree-96.png" alt="christmas tree">',
    '<img id="15" class="invisible" src="png\\santa\\santa-96.png" alt="santa">',
    '<img id="16" class="invisible" src="png\\star\\star-96.png" alt="star">'
]

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
}

function myFunction() {
    self.close()
}

shuffle(list_images)


$('th').each(function(index) {
    $(this).children().append(list_images[index])
})

$('.home').click(function() {
    location.reload();
});

var clicks, image_id, image_src, image_class, count, moves;
moves = 0
count = 0
clicks = 0
image_id = []
image_src = []
image_class = []
$("a").click(function() {
    count = 0
    clicks = clicks + 1
    image_id.push("#" + $(this).children().attr("id"))
    image_src.push($(this).children().attr("src"))
    $(this).children().toggleClass("invisible visible")
    setTimeout(function() {
        if (clicks === 2) {
            moves = moves + 1
            clicks = 0;
            if (image_src[0] === image_src[1] & image_id[0] !== image_id) {
                $(image_id[0]).removeClass().addClass("final")
                $(image_id[1]).removeClass().addClass("final")
                $(image_id[0]).parent().removeClass().addClass("final")
                $(image_id[1]).parent().removeClass().addClass("final")
                $(image_id[0]).parent().removeClass().addClass("final")
                $(image_id[1]).parent().removeClass().addClass("final")
                image_class = $('img').each(function() {
                    image_class.push($(this))
                })
                for (var i = 0; i < image_class.length; ++i) {
                    image_class[i] = $(image_class[i]).attr("class")
                }
                for (var i = 0; i < image_class.length; ++i) {
                    if (image_class[i] === "final") {
                        image_class[i] = 0
                    } else {
                        image_class[i] = 1
                    }
                }
                for (var i = 0; i < image_class.length; ++i) {
                    count = count + image_class[i]
                }
                if (count === 0) {
                    window.open("win.html")
                }
            } else {
                $(image_id[0]).removeClass().addClass("invisible")
                $(image_id[1]).removeClass().addClass("invisible")
            }
            image_id = [];
            image_src = [];
        }
    }, 1000);
});