game = {
    player: {
        x: 0,
        y: 0,
        vx: 0,
        vy: 0,
    },
    gravity: 1,
};

function showMenu(id) {
    if (!id)
        id = 'menu';
    $('#' + id).show();
}

function hideMenus() {
    $('.overlay').hide();
}

function hideTopMenu() {
    $('.overlay:visible:last').hide();
}

$(function() {
    $('button').on('click', function() {
        window[$(this).attr('id')].apply(this);
    });
    $('body').on('keydown keyup', input);
    $('.overlay#menu').click(play);
    $('.overlay .menu').click(function(e) {
        e.stopPropagation();
    })
    hideMenus();
    showMenu();
    $('body').show();
});

function play() {
    hideMenus();
}

function select() {
    showMenu('levels');
}

function back() {
    $(this).closest('.wrapper').hide();
}

function input(event) {
    var key = String.fromCharCode(event.which).toLowerCase();
    if (event.type == 'keydown') {
        if (key == 'm')
            showMenu();
        else if (event.which == 27)
            hideTopMenu();
    }
    if (event.which >= 37 && event.which <= 40) {
        var dir = event.which - 37;
        game.player['v' + ['x', 'y', 'x', 'y'][dir]] = (event.type == 'keydown') * [-1, 1, 1, -1][dir];
        console.log(game.player)
    }
}
