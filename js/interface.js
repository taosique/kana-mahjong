SPLASH = document.getElementById("splash");
PLAYBUTTON = document.getElementById("playbutton");

BOARD = document.getElementById("board");
SCORECARD = document.getElementById("scorecard");
SCORECARD_COMPLETE = document.getElementById("scorecard_complete");
SCORECARD_TOTAL = document.getElementById("scorecard_total");
SCORECARD_MISTAKES = document.getElementById("scorecard_mistakes");
MENUDIV = document.getElementById("menudiv");
MENUCONTENT = document.getElementById("menucontent");
MENUFORM = document.forms["menuform"];
MENUBUTTON = document.getElementById("menubutton");
MENUOPEN = true;

BOARD_OFFSET_TOP = 0;
BOARD_OFFSET_LEFT = 0;

DECAL_WIDTH = 61;
DECAL_HEIGHT = 86;

FACE_WIDTH = 54;
FACE_HEIGHT = 72;
FACE_OFFSET_TOP = 0;
FACE_OFFSET_LEFT = 0;

LAYER_OFFSET_TOP = -14;
LAYER_OFFSET_LEFT = -7;

cssClass = {
	tile: "tile",
	highlighted: "highlighted",
	hidden: "hidden",
	tileGood: "good",
	tileBad: "bad"
}


Element.prototype.hasClassName = function(name) {
    return new RegExp("(?:^|\\s+)" + name + "(?:\\s+|$)").test(this.className);
};
Element.prototype.addClassName = function(name) {
    if (!this.hasClassName(name)) {
        this.className = this.className ? [this.className, name].join(' ') : name;
    }
};
Element.prototype.removeClassName = function(name) {
    if (this.hasClassName(name)) {
        var c = this.className;
        this.className = c.replace(new RegExp("(?:^|\\s+)" + name + "(?:\\s+|$)", "g"), "");
    }
};

function setAttributes(element, attributes) {
	for (var item in attributes) {
		element.setAttribute(item, attributes[item]);
	}
}
function setStyleProperties(element, properties) {
	for (var item in properties) {
		element.style[item] = properties[item];
	}
}

function getRandomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function getRandomIndex(length) {
    return Math.floor(Math.random() * (length));
}

function Coords(z, y, x) {
	this.layer = parseFloat(z);
	this.row = parseFloat(y);
	this.column = parseFloat(x);
	this.add = function(coords) {
		return new Coords(this.layer + coords.layer, this.row + coords.row, this.column + coords.column);
	}
	this.toId = function() {
		return this.layer + "-" + this.row + "-" + this.column;
	}
}
function getCoordsFromId(id) {
	splitArr = id.split("-");
	return new Coords(splitArr[0], splitArr[1], splitArr[2]);
}



MENUBUTTON.onclick = function() {
    if (MENUOPEN) {
        var matching;
        var variants = [];
        for (var i = 0; i <= 4; i++) {
            e = MENUFORM["matching_" + i];
            if (e.checked) {
                matching = matchingType[i];
                break;
            }
        }
        VARIANTS.forEach(function(item) {
           e = MENUFORM[item.name];
           if (e.checked) {
               variants = variants.concat(item.contents);
           }
        });
        if (variants.length == 0) {
            alert("Select at least one variant to start game!");
        } else {
            var layout = turtleLayoutGenerator();
            var game = new Game(layout, variants, matching);
            game.start();

            MENUOPEN = false;
            MENUBUTTON.innerHTML = "NEW GAME"
            MENUCONTENT.addClassName("hidden");
            SCORECARD.removeClassName("hidden");
        }
    } else {
        MENUOPEN = true;
        MENUBUTTON.innerHTML = "GO!"
        MENUCONTENT.removeClassName("hidden");
    }
}

PLAYBUTTON.onclick = function() {
    PLAYBUTTON.addClassName("hidden");
    SPLASH.addClassName("hidden");
    MENUDIV.removeClassName("hidden");
}