/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
	var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
      yepnope( {
      	nope: [ 
      		'lib/greensock/TweenMax.min.js', 
      		'lib/greensock/plugins/CSSPlugin.min.js',
      		'lib/greensock/easing/EasePack.min.js' 
      		],
      	complete: init
      } );
      
      // styling fixes
      $( 'html, body' ).css( {
      	width: '100%',
      	height: '100%',
      	backgroundImage: 'linear-gradient(rgb(87, 178, 255) 0%, rgb(39, 115, 179) 100%)',
      	pointerEvents: 'none'
      } );
      
      sym.$( 'Light_Group' ).css( 'z-index', 99999 );
      sym.$( 'Battery' ).css( 'z-index', 99999 );
      sym.$( 'Switch_Cable').css( '-webkit-transform-origin', '0% 50%' );
      sym.$( 'Light_Bulb_Wire_Left').css( '-webkit-transform-origin', '50% 0%' );
      
      function init () {
      	sym.play();
      
      	// global variables
         window.electronsCount = 480,
         window.electronsDelay = 500,
         window.electronsArray = new Array( electronsCount ),
         window.stopTime = 3000;
      
         // generate electrons 
         for ( var i = 0; i < electronsCount; i++ ) {
         	var $electronSymbol = sym.createChildSymbol( 'Electron_Container', 'Stage');
      
         	$electronSymbol
         		.setVariable( 'id', 'Electron_Container_' + i )
         		.getSymbolElement().css( {
         			position: 'absolute',
         			left: '131px',
         			top: '80px'
         		} );
      
         	electronsArray[ i ] = { 
         		symbol: $electronSymbol,
         		index: i,
         		active: false,
         		wasStarted: true // set to false in loop
         	};
      
         	if ( stopTime - i * electronsDelay > 0 ) {
         		setTimeout( function ( $electron, pos ) {
         			$electron.play();
         			electronsArray[ pos ].active = true;
      
         			setTimeout( function ( $electron, pos ) {
         				$electron.stop();
         				electronsArray[ pos ].active = false;
         			}, stopTime - electronsDelay * pos, $electron, pos );
         		}, electronsDelay * i, $electronSymbol, i );
         	} else {
         		electronsArray[ i ].wasStarted = false;
         	}
         }
      }

      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${Switch_Overlay}", "click", function(sym, e) {
         if (window.mainSwitchCableOpened) {
         	sym.$("Switch_Cable").css('transform', 'rotate(-36deg)');
         	window.mainSwitchCableOpened = false;
         
         	sym.stop(3000);
         
         	for ( var i = 0; i < electronsCount; i++) {
      			var electronObj = electronsArray[ i ];
      
      			if ( electronObj.symbol.getPosition() < 3000 ) {
      				electronObj.active = false;
      				electronObj.symbol.stop();
      			}
      		}
         } else {
         	var tempIndex = 0;
      
         	sym.$("Switch_Cable").css('transform', 'rotate(0)');
         	window.mainSwitchCableOpened = true;
      
         	sym.play(3000);
      
         	setTimeout( function() {
         		for ( var i = 0; i < electronsCount; i++) {
         			var electronObj = electronsArray[ i ];
      
      				if ( electronObj.wasStarted ) {
      					electronObj.active = true;
      					electronObj.symbol.play();
      				} else {
      					setTimeout( function ( electron ) {
      						electronObj.wasStarted = true;
      						electron.symbol.play();
      					}, tempIndex * electronsDelay, electronObj );
      
      					tempIndex++;
      				}
         		}
         	}, 1000 );
         }

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();
         
         // styling fixes
         $( 'html, body' ).css( {
         	pointerEvents: 'all'
         } );

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 28000, function(sym, e) {
         // insert code here
         var $ropeSymbol = sym.getSymbol("Nail_Rope");
         $ropeSymbol.stop();
         
         console.log($ropeSymbol);
         window.test = $ropeSymbol;
         
         TweenMax.to( $( $ropeSymbol.lookupSelector("Rope") ), 1, { rotation: -11, ease: Bounce.easeOut } );

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Battery'
   (function(symbolName) {   
   
   })("Battery");
   //Edge symbol end:'Battery'

   //=========================================================
   
   //Edge symbol: 'Electron_Container'
   (function(symbolName) {   
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20250, function(sym, e) {
         sym.stop();
         
         // insert code here
         var maxXR = 278,
         	 minXR = 268,
         	 minYR = -54,
         	 maxYR = 47,
         	 randomXR = minXR + Math.random() * ( maxXR - minXR ),
         	 randomYR = minYR + Math.random() * ( maxYR - minYR ),
         
         	 maxXL = 245,
         	 minXL = 230,
         	 maxYL = 47,
         	 minYL = -54,
         	 randomXL = minXL + Math.random() * ( maxXL - minXL ),
         	 randomYL = minYL + Math.random() * ( maxYL - minYL ),
         
         	 pointOut = { x: 235, y: -54 };
         
         // Show an element 
         TweenMax.to( $( sym.lookupSelector( 'Electron' ) ), 0.4, { y: randomYR, x: randomXR } );
         TweenMax.to( $( sym.lookupSelector( 'Electron' ) ), 0.4, { x: randomXL, delay: 0.5 } );
         TweenMax.to( $( sym.lookupSelector( 'Electron' ) ), 0.4, { y: pointOut.y, x: pointOut.x, delay: 1, onComplete: function () { sym.play(22750); } } );

      });
      //Edge binding end

   })("Electron_Container");
   //Edge symbol end:'Electron_Container'

   //=========================================================
   
   //Edge symbol: 'Nail_Rope'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         // insert code here
         sym.play(1000);

      });
      //Edge binding end

   })("Nail_Rope");
   //Edge symbol end:'Nail_Rope'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-344489210");