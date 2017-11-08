function game() {
    var seconds_all = 0
    var seconds_timer = 0
    var minutes_timer = 0
    var hours_timer = 0
    var time
    var chronometer = setInterval(function() {
        seconds_all++;
        hours = Math.floor(seconds_all / 3600)
        hours_timer = Math.floor(seconds_all / 3600)
        if (hours_timer < 10) {
            hours_timer = "0" + hours
        }
        minutes = Math.floor(seconds_all / 60)
        minutes_timer = Math.floor(seconds_all / 60)
        if (minutes_timer < 10) {
            minutes_timer = "0" + minutes
        }
        seconds = seconds_all % 60
        seconds_timer = seconds_all % 60
        if (seconds_timer < 10) {
            seconds_timer = "0" + seconds
        }
        time = hours_timer + ":" + minutes_timer + ":" + seconds_timer
        $('.timer').text(time)
    }, 1000);
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
        /*I obtained this function from:
        stackoverflow and added the color parameter */
    function drawStar(cx, cy, spikes, outerRadius, innerRadius, color) {
        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");
        var rot = Math.PI / 2 * 3;
        var x = cx;
        var y = cy;
        var step = Math.PI / spikes;

        ctx.beginPath();
        ctx.moveTo(cx, cy - outerRadius)
        for (i = 0; i < spikes; i++) {
            x = cx + Math.cos(rot) * outerRadius;
            y = cy + Math.sin(rot) * outerRadius;
            ctx.lineTo(x, y)
            rot += step

            x = cx + Math.cos(rot) * innerRadius;
            y = cy + Math.sin(rot) * innerRadius;
            ctx.lineTo(x, y)
            rot += step
        }
        ctx.lineTo(cx, cy - outerRadius);
        ctx.closePath();
        ctx.lineWidth = 5;
        ctx.strokeStyle = 'blue';
        ctx.stroke();
        ctx.fillStyle = color;
        ctx.fill();
    }

    /*I obtained this function from: 
    https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array */
    function shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
    }

    shuffle(list_images)


    $('th').each(function(index) {
        $(this).children().append(list_images[index])
    })

    $('.home').click(function() {
        location.reload();
    });

    var clicks, image_id, image_src, image_class, count;
    moves = 0
    clicks = 0
    image_id = []
    image_src = []
    image_class = []
    drawStar(123, 102, 5, 30, 15, 'yellow');
    drawStar(193, 102, 5, 30, 15, 'yellow');
    drawStar(263, 102, 5, 30, 15, 'yellow');
    $('.metrics').text("Number of moves: " + moves)
    $("a").click(function() {
        moves = moves + 1
        $('.metrics').text("Number of moves: " + moves)
        count = 0
        clicks = clicks + 1
        image_id.push("#" + $(this).children().attr("id"))
        image_src.push($(this).children().attr("src"))
        $(this).children().toggleClass("invisible visible")
        if (moves <= 25) {
            rating = 3;
            drawStar(123, 102, 5, 30, 15, 'yellow');
            drawStar(193, 102, 5, 30, 15, 'yellow');
            drawStar(263, 102, 5, 30, 15, 'yellow');
        } else if (moves > 25 & moves <= 30) {
            rating = 2;
            drawStar(123, 102, 5, 30, 15, 'yellow');
            drawStar(193, 102, 5, 30, 15, 'yellow');
            drawStar(263, 102, 5, 30, 15, 'white');
        } else {
            rating = 1;
            drawStar(123, 102, 5, 30, 15, 'yellow');
            drawStar(193, 102, 5, 30, 15, 'white');
            drawStar(263, 102, 5, 30, 15, 'white');
        }
        setTimeout(function() {
            if (clicks === 2) {
                clicks = 0;
                if (image_src[0] === image_src[1] & image_id[0] !== image_id[1]) {
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
                        $('body').empty()
                        $('body').html(`
                        <div class="main-element">
                        <span>
                            <b>CONGRATULATIONS!! YOU WON!!</b>
                        </span>
                        </br>
                        <span class="message"></span>
                        </br>
                        </br>
                        <div class="wraper">
                            <button onclick="reload()">Play Again</button>
                        </div>
                
                        </div>
                        `)
                        if (minutes === 0) {
                            $('.message').text(moves + " moves" + ", " + rating + " star rating" + "and " +
                                seconds + " seconds.")
                        } else if (minutes === 1) {
                            $('.message').text(moves + " moves" + ", " + rating + " star rating" + ", " +
                                seconds + " seconds and " + minutes + " minute.")
                        } else {
                            $('.message').text(moves + " moves" + ", " + rating + " star rating" + ", " +
                                seconds + " seconds and " + minutes + " minutes.")
                        }

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
    $('.starter').remove()
    $('.game-container').css('visibility', 'visible')
}

function reload() {
    location.reload();
}