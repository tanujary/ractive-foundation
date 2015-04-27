RactiveF.components['ux-accordion'] = Ractive.extend({

	template: RactiveF.templates['ux-accordion'],

	computed: {
		guid: function () {
			return this._guid;
		}
	},

	oninit: function () {

		this.set('componentItems', this.findAllChildComponents('ux-accordionitem'));

		this.on('*.changeAccordion', function (srcItem) {

			_.each(this.get('componentItems'), function (component) {

				// Is this the item the user clicked on?
				if (component._guid === srcItem._guid) {

					// Support open and close behaviours with repeated clicking by User.
					component.toggle('active');

				} else {

					// Not where the User clicked, so close it (if open).
					component.set('active', false);

				}

			});

			// Stop bubbling.
			return false;

		});

	}

});

RactiveF.components['ux-accordionitem'] = Ractive.extend({

	template: RactiveF.templates['ux-accordionitem'],

	computed: {
		guid: function () {
			return this._guid;
		}
	},

	oninit: function () {

		var anchorComponent = this.findComponent('ux-anchor');
		var contentComponent = this.findComponent('ux-content');

		// Link the anchor to the content by the content's id for nice html.
		anchorComponent.set({
			href: '#' + contentComponent._guid
		});

		contentComponent.set({
			active: this.get('active') || false
		});

		// Listen for click event on accordion title element, and then fire a semantic event for accordion.
		anchorComponent.on('anchorClicked', function (e) {
			this.fire('changeAccordion', this);
			return false;
		}.bind(this));

		this.set({
			contentComponent: contentComponent,
			initialized: true
		});

	},

	onchange: function () {

		if (!this.get('initialized')) {
			// Not ready yet for onchange.
			return;
		}

		this.get('contentComponent').set({
			active: this.get('active')
		});

	}

});

RactiveF.components['ux-anchor'] = Ractive.extend({
	template: RactiveF.templates['ux-anchor'],
	computed: {
		guid: function () {
			return this._guid;
		}
	}
});

RactiveF.components['ux-button'] = Ractive.extend({
	template: RactiveF.templates['ux-button'],
	clickHandler: function () {

		// if a click event is specified propagate the click event

		console.log('Button event');

		if (this.get('onclick')) {
			console.log('Firing event');
			this.fire(this.get('onclick'), this);
		}

		// prevent bubbling
		return true;
	}
});

RactiveF.components['ux-col'] = Ractive.extend({
	template: RactiveF.templates['ux-col']
});

RactiveF.components['ux-content'] = Ractive.extend({
	template: RactiveF.templates['ux-content'],
	computed: {
		guid: function () {
			return this._guid;
		}
	}
});

RactiveF.components['ux-header'] = Ractive.extend({
	template: RactiveF.templates['ux-header']
});

RactiveF.components['ux-iconbar'] = Ractive.extend({

	getUpNumClass: function (num) {

		var supportedWords = [
			'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'
		];

		if (!supportedWords[num]) {
			//console.error('ux-iconbar#numberToWord: num NOT supported: ' + num);
			return '';
		}

		return supportedWords[num] + '-up';

	},

	template: RactiveF.templates['ux-iconbar'],

	data: {

		getItemData: function (itemData) {
			// Nothing needs to be mapped, but we don't want parent data leaking down.
			return itemData;
		}

	},

	computed: {

		/**
		* TODO Move to generic helpers location?
		* @returns {string} The number of child items as a css class, e.g. "one-up", "three-up", etc.
		*/
		upNumClass: function () {

			var items = this.get('items');

			if (!items) {
				return '';
			}

			// Data-driven component has items data.
			return this.getUpNumClass(items.length);

		}

	},

	oninit: function () {

		// Only needed for markup mode.
		if (!this.get('isDataModel')) {
			var itemComponents = this.findAllChildComponents('ux-iconbaritem');
			var cssClass = this.get('class') || '';
			this.set('class', cssClass + ' ' + this.getUpNumClass(itemComponents.length));
		}

	}

});

RactiveF.components['ux-iconbaritem'] = Ractive.extend({

	template: RactiveF.templates['ux-iconbaritem'],

	computed: {
		guid: function () {
			return this._guid;
		}
	}

});

RactiveF.components['ux-li'] = Ractive.extend({
	template: RactiveF.templates['ux-li']
});

RactiveF.components['ux-off-canvas'] = Ractive.extend({

	template: RactiveF.templates['ux-off-canvas'],

	data: function () {
		return {
			expandedState: '',
			leftItems: [],
			rightItems: [],
			mainContent: ''
		};
	},

	computed: {

		/**
		 * @returns {string} CSS class: left = move-right or right = move-left.
		 */
		getExpandedClass: function () {

			// Default is empty string for no css class.
			var classMap = {
				'left': 'move-right',
				'right': 'move-left'
			};

			return classMap[this.get('expandedState')] || '';

		}

	},

	oninit: function () {

		// You can expand from left or right, or none. Can't do both at the same time.
		this.on('updateMenu', function (event, direction) {
			this.set('expandedState', direction);
		});

	}

});

RactiveF.components['ux-panel'] = Ractive.extend({
	template: RactiveF.templates['ux-panel']
});

RactiveF.components['ux-pricingtable'] = Ractive.extend({
	template: RactiveF.templates['ux-pricingtable'],
	oninit: function () {

		this.on('buyNow', function (syntheticEvent) {

			if (!syntheticEvent.context.status || 'buynow' === syntheticEvent.context.status) {
				return;
			}

			// Else - it's in a disabled state, so stop the browser's default action for an anchor.
			syntheticEvent.original.preventDefault();

		});

	}
});

RactiveF.components['ux-row'] = Ractive.extend({
	template: RactiveF.templates['ux-row']
});

RactiveF.components['ux-sidenav'] = Ractive.extend({
	template: RactiveF.templates['ux-sidenav']
});

RactiveF.components['ux-tablinks'] = Ractive.extend({
	template: RactiveF.templates['ux-tablinks'],
	oninit: function () {

		// If there is a hash. We want to check deeplinking.
		if (window.location.hash.length) {
			var hash = window.location.hash.substr(1);
			var components = this.findAllChildComponents('ux-tablink');
			_.each(components, function (component) {
				var isActive = component.get('id') === hash;
				component.set('active', isActive);
				component.get('tabPane').set('active', isActive);
			});

		}

		this.on('*.changeTab', function (event) {
			var components = this.findAllChildComponents('ux-tablink');

			_.each(components, function (component) {
					var isActive = component._guid === event.context.uid;
					component.set('active', isActive);
					component.get('tabPane').set('active', isActive);
			});

			return false;
		});
	}
});

RactiveF.components['ux-tabarea'] = Ractive.extend({

	template: RactiveF.templates['ux-tabarea'],

	data: {
		tabPaneDataModel: function (item) {
			return {
				content: item.content
			};
		}
	},

	oninit: function () {

		var tabLinks = this.findComponent('ux-tablinks');
		var tabPanes = this.findComponent('ux-tabpanes');

		if (!tabLinks || !tabPanes) {
			// Because datamodel driven components can trigger this too early?
			return;
		}

		var tabLink = tabLinks.findAllChildComponents('ux-tablink');
		var tabPane = tabPanes.findAllChildComponents('ux-tabpane');

		_.each(tabLink, function (link, i) {
			var childPane = tabPane[i];
			if (childPane) {
				link.set({
					tabPane: childPane,
					uid: link._guid
				});
			}
		});
	}

});

RactiveF.components['ux-tablink'] = Ractive.extend({
	template: RactiveF.templates['ux-tablink'],
	components: RactiveF.components,
	isolated: true,
	oninit: function () {
		var active = this.get('active') || false;
		var tabPane = this.get('tabPane') || null;

		if (tabPane) {
			tabPane.set('active', active);
		}
	}
});

RactiveF.components['ux-tabpanes'] = Ractive.extend({
	template: RactiveF.templates['ux-tabpanes']
});

RactiveF.components['ux-tabpane'] = Ractive.extend({

	template: RactiveF.templates['ux-tabpane'],

	onconfig: function () {
		var datamodel = this.get('datamodel');
		if (datamodel) {
			// For datamodel driven components, the tab content can be html containing more ux components.
			// Therefore, we have to evaluate this, so we do that by injecting a partial here.
			// See http://docs.ractivejs.org/latest/partials#updating
			this.partials.dynamicContent = Ractive.parse(datamodel.content);
		}
	}

});
