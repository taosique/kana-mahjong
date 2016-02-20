adjacencyType = {
	left: [
			{ coords: new Coords(0, 0, -1), stop: true },
			{ coords: new Coords(0, -0.5, -1), stop: false },
			{ coords: new Coords(0, 0.5, -1), stop: false }
		],
	right: [
			{ coords: new Coords(0, 0, 1), stop: true },
			{ coords: new Coords(0, -0.5, 1), stop: false },
			{ coords: new Coords(0, 0.5, 1), stop: false }
		],
	top: [
			{ coords: new Coords(1, 0, 0), stop: true },
			{ coords: new Coords(1, -0.5, -0.5), stop: false }, { coords: new Coords(1, -0.5, 0.5), stop: false },
			{ coords: new Coords(1, 0.5, -0.5), stop: false },  { coords: new Coords(1, 0.5, 0.5), stop: false },
			{ coords: new Coords(1, 0, -0.5), stop: false }, { coords: new Coords(1, 0, 0.5), stop: false }, 
			{ coords: new Coords(1, 0.5, 0), stop: false }, { coords: new Coords(1, -0.5, 0), stop: false }
		],
	bottom: [
			{ coords: new Coords(-1, 0, 0), stop: true },
			{ coords: new Coords(-1, -0.5, -0.5), stop: false }, { coords: new Coords(-1, -0.5, 0.5), stop: false },
			{ coords: new Coords(-1, 0.5, -0.5), stop: false },  { coords: new Coords(-1, 0.5, 0.5), stop: false },
			{ coords: new Coords(-1, 0, -0.5), stop: false }, { coords: new Coords(-1, 0, 0.5), stop: false }, 
			{ coords: new Coords(-1, 0.5, 0), stop: false }, { coords: new Coords(-1, -0.5, 0), stop: false }
		]
}

function Layout(descriptor) {

	var generateMatrix = function(layers, rows) {
		var matrix = [];
		for (var z = 0; z < layers; z++) {
			matrix[z] = [];
			for (var y = 0; y < rows - 0.5; y += 0.5) {
				matrix[z][y] = [];
			}
		}
		return matrix;
	}

	var _zIndexDescriptor = {
		start: descriptor.zIndexDescriptor.start,
		layer: descriptor.zIndexDescriptor.layer,
		row: descriptor.zIndexDescriptor.row,
		column: descriptor.zIndexDescriptor.column
	}
	
	BOARD.innerHTML = "";
	var _tileMatrix = generateMatrix(descriptor.layers, descriptor.rows);
	var _tileList = [];

	this.getTile = function(coords) {
		try {
			var result = _tileMatrix[coords.layer][coords.row][coords.column];
			if (result) {
				return result;
			}
		} catch(e) {}
		return null;
	}
	this.addTile = function(coords) {
		var newTile = new Tile(coords, _zIndexDescriptor);
		_tileMatrix[coords.layer][coords.row][coords.column] = newTile;
		_tileList.push(newTile);
	}
	this.fillRow = function(coords, width) {
		for(var x = coords.column; x < coords.column + width; x++) {
			this.addTile(new Coords(coords.layer, coords.row, x));
		}
	}
	this.fillRect = function(coords, width, height) {
		for(var y = coords.row; y < coords.row + height; y++) {
			this.fillRow(new Coords(coords.layer, y, coords.column), width);
		}
	}
	this.removeTile = function(coords) {
	}

	this.hasNeighbors = function(coords, adjacency, callback) {
		for (direction in adjacency) {
			try {
				var tile = this.getTile(coords.add(adjacency[direction].coords));
				if (tile && (typeof callback!="function" || callback(tile))) {
					return true;
				}
			} catch(e) {}
		}
		return false;
	}
	this.getNeighbors = function(coords, callback) {
		var result = [];
		var adjacency = [adjacencyType.left, adjacencyType.right, adjacencyType.bottom];
		for (var i = 0; i < adjacency.length; i++) {
			for (direction in adjacency[i]) {
				try {
					var tile = this.getTile(coords.add(adjacency[i][direction].coords));
					if (tile && (typeof callback!="function" || callback(tile))) {
						result.push(tile);
						if (direction.stop) {
							break;
						}
					}
				} catch(e) {}
			}
		}
		return result;		
	}
	this.isTileFree = function(coords, callback) {
		return this.getTile(coords) && !(
			this.hasNeighbors(coords, adjacencyType.left, callback)
			&& this.hasNeighbors(coords, adjacencyType.right, callback)
			|| this.hasNeighbors(coords, adjacencyType.top, callback));
	}

	this.forEachTile = function(callback) {
		for (var i = 0; i < _tileList.length; i++) {
			callback(_tileList[i]);
		}
	}

	this.drawTiles = function() {
		this.forEachTile(function(tile) {
			tile.draw();
		});
	}

    Object.defineProperty(this, "tileCount", {
		get: function() {
			return _tileList.length;
		}
	});
}

function turtleLayoutGenerator() {
	var rows = [12, 8, 10, 12, 12, 10, 8, 12];
	var rects = [
					{ layer: 1, size: 6 },
					{ layer: 2, size: 4 },
					{ layer: 3, size: 2 }
				];
	var extraTiles = [
					new Coords(0, 3.5, 0),
					new Coords(0, 3.5, 13),
					new Coords(0, 3.5, 14),
					new Coords(4, 3.5, 6.5),
				];
	var layout = new Layout({
		layers: 5,
		rows: 8,
		zIndexDescriptor: { start: 1, layer: 240, row: 2, column: 16 }
		});

	rows.forEach(function(length, index) {
			layout.fillRow(new Coords(0, index, 7 - length / 2), length);
		});
	rects.forEach(function(item) {
			layout.fillRect(new Coords(item.layer, 4 - item.size / 2, 7 - item.size / 2), item.size, item.size);
		});
	extraTiles.forEach(function(item) {
			layout.addTile(item);
		});
	
	return layout;
}