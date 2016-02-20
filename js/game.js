function Game(layout, variants, matching) {
	var _layout = layout;
	var _buffer;

	var getSolutionSequence = function(layout) {

		layout.forEachTile(function(tile) {
			tile.sequenced = false;
		});

		var getFreeTiles = function(layout) {
			var result = [];
			layout.forEachTile(function(tile) {
				if (!tile.sequenced && layout.isTileFree(tile.coords)) {
					tile.sequenced = true;
					tile.active = true;
					result.push(tile);
				}
			});
			return result;
		}

		var sequence = [];
		var complete = false;

		var freeTiles = getFreeTiles(layout);
		while (freeTiles.length > 0) {
			var neighbors = [];
			for (var j = 0; j < 32 && freeTiles.length > 0; j++) {
				var i = getRandomIndex(freeTiles.length);
				var tile = freeTiles[i];
				neighbors = neighbors.concat(layout.getNeighbors(tile.coords, function(tile) {
					if (!tile.sequenced && layout.isTileFree(tile.coords, function(tile) {
							return !tile.sequenced;
						})) {
						tile.sequenced = true;
						return true;
					};
				}));
				sequence.push(tile);
				freeTiles.splice(i, 1);
			}
			freeTiles = freeTiles.concat(neighbors);
		}
		return sequence;
	}

	var score = function(tile1, tile2) {
		if (tile1.value == -tile2.value) {
			[tile1, tile2].forEach(function(tile) {
				tile.hidden = true;
				blinkForTime(tile.coords.toId(), cssClass.tileGood, cssClass.hidden);
			});
			var score = parseInt(SCORECARD_COMPLETE.innerHTML) + 2;
			if (score == _layout.tileCount) {
				SCORECARD.addClassName("hidden");
				alert("Congratulations! You won!")
			}
			SCORECARD_COMPLETE.innerHTML = score;
		} else {
			[tile1, tile2].forEach(function(tile) {
				tile.highlighted = false;
				blinkForTime(tile.coords.toId(), cssClass.tileBad, "");
			});
			var mistakes = parseInt(SCORECARD_MISTAKES.innerHTML) + 1;
			SCORECARD_MISTAKES.innerHTML = mistakes;

		}
	}
	var tileClickHandler = function(event) {
		var decalId = event.target.id;
		var coords = getCoordsFromId(decalId);
		var tile = _layout.getTile(coords);
		if (_buffer) {
			if (_buffer === tile) {
				tile.highlighted = false;
			} else {
				score(_buffer, tile)
			}
			_buffer = null;
		} else {
			tile.highlighted = true;
			_buffer = tile;
		}
	}

	var applyVariants = function(sequence, variants, matching) {
		var bag = [];
		var indexes = [];
		for (var i = 0; i <= sequence.length / variants.length / 2; i++) {
			bag = bag.concat(variants);
		}
		for (var i = 0; i < sequence.length; i++) {
			indexes.splice(getRandomIndex(indexes.length), 0, i);
		}
		for (var i = 0; i < sequence.length;) {
			n = getRandomIndex(bag.length);
			for (var j = 0; j < matching.items.length; j++, i++) {
				var tile = sequence[i];
				tile.value = bag[n][0] * (j == 0 ? 1 : -1);
				tile.text = bag[n][matching.items[j].index];
				tile.style = matching.items[j].style;
			}
			bag.splice(n, 1);
		}
	}

	this.start = function() {
		var sequence = getSolutionSequence(_layout);
		applyVariants(sequence, variants, matching);	
		_layout.drawTiles();
		_layout.forEachTile(function(tile) {
			tile.activate(tileClickHandler);
		});
		SCORECARD_COMPLETE.innerHTML = 0;
		SCORECARD_TOTAL.innerHTML = _layout.tileCount;
		SCORECARD_MISTAKES.innerHTML = 0;
	}
}