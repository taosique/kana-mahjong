function Tile(coords, zIndexDescriptor) {

	var _coords = coords;
	var _value;
	var _hidden = false;
	var _decal;

	this.sequenced = false;

	var _decal = document.createElement("div");
	setAttributes(_decal, {
		"class": cssClass.tile,
		"id": _coords.toId() });
	setStyleProperties(_decal, {
		"width": DECAL_WIDTH + "px",
		"height": DECAL_HEIGHT + "px",
		"top": BOARD_OFFSET_TOP + _coords.row * FACE_HEIGHT + _coords.layer * LAYER_OFFSET_TOP + "px",
		"left": BOARD_OFFSET_LEFT + _coords.column * FACE_WIDTH + _coords.layer * LAYER_OFFSET_LEFT + "px",
		"z-index":
		zIndexDescriptor.start + Math.floor(
				_coords.layer * zIndexDescriptor.layer
				+ _coords.column * zIndexDescriptor.column
				+ _coords.row * zIndexDescriptor.row )
			});

	this.toString = function() {
		return _coords.toId();
	}

	this.draw = function() {
		BOARD.appendChild(_decal);
	}

	this.activate = function(callback) {
		_decal.addEventListener("click", callback, false)
	}

	Object.defineProperty(this, "coords", {
		get: function() {
			return _coords;
		}
	});

	Object.defineProperty(this, "value", {
		set: function(value) {
			_value = value;
		},
		get: function() {
			return _value;
		}
	});

	Object.defineProperty(this, "text", {
		set: function(value) {
			_decal.innerHTML = value;
		},
		get: function() {
			return _decal.innerHTML;
		}
	});

	Object.defineProperty(this, "style", {
		set: function(value) {
			_decal.className = cssClass.tile + ' ' + value;
		}
	});

	Object.defineProperty(this, "hidden", {
		set: function(value) {
			_hidden = value;
			var zIndex = parseInt(_decal.getAttribute("z-index"));
			if (value) {
//				_decal.addClassName(cssClass.hidden);
				if (zIndex < 0) {
					zIndex = -zIndex;
				}
			} else {
				_decal.removeClassName(cssClass.hidden);
				if (zIndex > 0) {
					zIndex = -zIndex;
				}
			}
			_decal.setAttribute("z-index", zIndex);
		},
		get: function() {
			return _hidden;
		}
	});

	Object.defineProperty(this, "highlighted", {
		set: function(value) {
			if (value) {
				_decal.addClassName(cssClass.highlighted);
			} else {
				_decal.removeClassName(cssClass.highlighted);
			}
		}
	});
}