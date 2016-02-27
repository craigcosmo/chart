/**
 * chart generator
 * 
 * @example
 * var chart = new Chart({
 		// this option take an array of data
		wave: [],
		// svgId is the id of the target svg, it takes string
		svgId: chart_id
		// columnWidth is the width of the column measure in px, default 30
		columnWidth: 30
		// columnMaxHeight is maximum height of the column measuared in px, default 200
		columnMaxHeight: 200
		// gap is the gap among column measured in px, default 40
		gap: 40

 	});
 * 
 */


(function(window){

	var Chart = function(options){
		this.options = extend({}, this.options);
		extend(this.options, options);
		this.init();
	};

	Chart.prototype.init = function() {
		if (!this.options.wave) {
			throw new Error("please provide data, check documentation for more info");
		}
		else if (!this.options.svgId) {
			throw new Error("please provide data, check documentation for more info");
		}
		else{ this.gen();}
	};

	function extend(a, b) {
		for(var key in b) { 
			if(b.hasOwnProperty(key)) {
				a[key] = b[key];
			}
		}
		return a;
	}

	Chart.prototype.options = {
		wave: '',
		svgId: '',
		columnWidth: 30,
		columnMaxHeight:200,
		gap:45
	};

	Chart.prototype.gen = function() {
		var base_x = 10; // the left margin of first column

		for (var i=0; i < this.options.wave.length; i++){
			// console.log(this.options.wave[i]);
			
			var svg = document.getElementById(this.options.svgId); //Get svg element
			var g = document.createElementNS('http://www.w3.org/2000/svg', 'g'); // create g tag
			var r = document.createElementNS('http://www.w3.org/2000/svg', 'rect'); // create rect tag

			g.setAttributeNS(null, 'class', 'bar');
			r.setAttributeNS(null, 'height', this.options.wave[i]);
			r.setAttributeNS(null, 'width', this.options.columnWidth);
			r.setAttributeNS(null, 'y', this.options.columnMaxHeight - this.options.wave[i]);
			r.setAttributeNS(null, 'x', base_x);

			g.appendChild(r);
			svg.appendChild(g); // adding the g tag to svg

			base_x += this.options.gap; // adding gap 
		}
	};
	window.Chart = Chart;
})(window);

