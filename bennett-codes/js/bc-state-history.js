		$(function(){
			// Fetch the elements
			var $result = $('#result'),
				$menu = $('#menu'),
				$content = $('#content'),
				$apricots = $('#apricots'),
				$bananas = $('#bananas'),
				$coconuts = $('#coconuts'),
				$current = $('#current');
			
			// Get the tabs
			var $tabs = $content.children();
			
			// Hide all our tabs initially
			$tabs.hide();
			
			// Fetch our original document title
			var document_title = document.title;
			
			// Define our update menu function - as this is used a lot
			var updateMenu = function(state){
				// Update out tab menu
				$menu.children('li:has(a[href="#'+state+'"])').addClass('active').siblings('.active').removeClass('active');
			};
			
			// Bind a handler for ALL hash/state changes
			$.History.bind(function(state){
				// Update the current element to indicate which state we are now on
				$current.text('Our current state is: ['+state+']');
				// Update the page's title with our current state on the end
				document.title = document_title + ' | ' + state;
			});
			
			// Bind a handler for state: apricots
			$.History.bind('/apricots',function(state){
				// Update Menu
				updateMenu(state);
				// Show apricots tab, hide the other tabs
				$tabs.hide();
				$apricots.stop(true,true).fadeIn(200);
			});
		
			// Bind a handler for state: bananas
			$.History.bind('/bananas',function(state){
				// Update Menu
				updateMenu(state);
				// Show bananas tab, hide the other tabs
				$tabs.hide();
				$bananas.stop(true,true).fadeIn(200);
			});
			
			// Bind a handler for state: coconuts
			$.History.bind('/coconuts',function(state){
				// Update Menu
				updateMenu(state);
				// Show coconuts tab, hide the other tabs
				$tabs.hide();
				$coconuts.stop(true,true).fadeIn(200);
			});
		});
		