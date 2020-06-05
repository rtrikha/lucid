'use strict';

function _instanceof(left, right) {
	if (right != null && typeof Symbol !== 'undefined' && right[Symbol.hasInstance]) {
		return !!right[Symbol.hasInstance](left);
	} else {
		return left instanceof right;
	}
}

function _classCallCheck(instance, Constructor) {
	if (!_instanceof(instance, Constructor)) {
		throw new TypeError('Cannot call a class as a function');
	}
}

function _defineProperties(target, props) {
	for (var i = 0; i < props.length; i++) {
		var descriptor = props[i];
		descriptor.enumerable = descriptor.enumerable || false;
		descriptor.configurable = true;
		if ('value' in descriptor) descriptor.writable = true;
		Object.defineProperty(target, descriptor.key, descriptor);
	}
}

function _createClass(Constructor, protoProps, staticProps) {
	if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	if (staticProps) _defineProperties(Constructor, staticProps);
	return Constructor;
}

// ——————————————————————————————————————————————————
// TextScramble
// ——————————————————————————————————————————————————
var TextScramble = /*#__PURE__*/ (function () {
	function TextScramble(el) {
		_classCallCheck(this, TextScramble);

		this.el = el;
		this.chars = '!<>-_\\/[]{}—=+*^?#________';
		this.update = this.update.bind(this);
	}

	_createClass(TextScramble, [
		{
			key: 'setText',
			value: function setText(newText) {
				var _this = this;

				var oldText = this.el.innerText;
				var length = Math.max(oldText.length, newText.length);
				var promise = new Promise(function (resolve) {
					return (_this.resolve = resolve);
				});
				this.queue = [];

				for (var i = 0; i < length; i++) {
					var from = oldText[i] || '';
					var to = newText[i] || '';
					var start = Math.floor(Math.random() * 60);
					var end = start + Math.floor(Math.random() * 60);
					this.queue.push({
						from: from,
						to: to,
						start: start,
						end: end,
					});
				}

				cancelAnimationFrame(this.frameRequest);
				this.frame = 0;
				this.update();
				return promise;
			},
		},
		{
			key: 'update',
			value: function update() {
				var output = '';
				var complete = 0;

				for (var i = 0, n = this.queue.length; i < n; i++) {
					var _this$queue$i = this.queue[i],
						from = _this$queue$i.from,
						to = _this$queue$i.to,
						start = _this$queue$i.start,
						end = _this$queue$i.end,
						char = _this$queue$i.char;

					if (this.frame >= end) {
						complete++;
						output += to;
					} else if (this.frame >= start) {
						if (!char || Math.random() < 0.28) {
							char = this.randomChar();
							this.queue[i].char = char;
						}

						output += '<span class="dud">'.concat(char, '</span>');
					} else {
						output += from;
					}
				}

				this.el.innerHTML = output;

				if (complete === this.queue.length) {
					this.resolve();
				} else {
					this.frameRequest = requestAnimationFrame(this.update);
					this.frame++;
				}
			},
		},
		{
			key: 'randomChar',
			value: function randomChar() {
				return this.chars[Math.floor(Math.random() * this.chars.length)];
			},
		},
	]);

	return TextScramble;
})(); // ——————————————————————————————————————————————————
// Example
// ——————————————————————————————————————————————————

function callBlackBox() {
	var phrases = ['welcome to lucid'];

	var el = document.querySelector('.heading');
	var fx = new TextScramble(el);
	var counter = 0;

	var next = function next() {
		fx.setText(phrases[counter]).then(function () {
			setTimeout(() => {}, 8000);
		});
		counter = (counter + 1) % phrases.length;
	};

	next();
}
