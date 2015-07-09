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
         // Show an element 
         sym.$("Cables").css("pointer-events", "none");
         sym.$("Background")
         	.css("background-image", "url('images/blue-grid.jpg')")
         	.css("background-size", "100px 100px")
         	.css("background-repeat", "repeat");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Spot}", "click", function(sym, e) {
         // insert code for mouse click here
         // Set a toggle to hide or show an element 
         if (sym.$("Light_Off").is(":visible")) {
         	sym.$("Light_Off").hide();
         } else {
         	sym.$("Light_Off").show();
         }
         
         
         // Set a toggle to hide or show an element 
         if (sym.$("Light_On").is(":visible")) {
         	sym.$("Light_On").hide();
         } else {
         	sym.$("Light_On").show();
         }
         
         // Set a toggle to hide or show an element 
         if (sym.$("Light_Bulb").is(":visible")) {
         	sym.$("Light_Bulb").hide();
         } else {
         	sym.$("Light_Bulb").show();
         }
         
         
         // Set a toggle to hide or show an element 
         if (sym.$("Switch_On").is(":visible")) {
         	sym.$("Switch_On").hide();
         } else {
         	sym.$("Switch_On").show();
         }
         
         
         // Set a toggle to hide or show an element 
         if (sym.$("Switch_Off").is(":visible")) {
         	sym.$("Switch_Off").hide();
         } else {
         	sym.$("Switch_Off").show();
         }

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${Spot}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Show an element 
         sym.$("Tooltip_Light_Switch").show();
         
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getSymbol("Tooltip_Light_Switch").play(0);
         

      });
      //Edge binding end

      

      

      Symbol.bindElementAction(compId, symbolName, "${SpotCopy}", "mouseover", function(sym, e) {
         // Show an element 
         sym.$("Tooltip_Resistor").show();
         sym.getSymbol("Tooltip_Resistor").play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${SpotCopy}", "mouseout", function(sym, e) {
         // Show an element 
         sym.$("Tooltip_Resistor").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${SpotCopy3}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Show an element 
         sym.$("Tooltip_Capacitor").show();
         
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getSymbol("Tooltip_Capacitor").play(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${SpotCopy3}", "mouseout", function(sym, e) {
         sym.$("Tooltip_Capacitor").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${spot}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Show an element 
         sym.$("Tooltip_Light").show();
         
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getSymbol("Tooltip_Light").play(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${spot}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         // Hide an element 
         sym.$("Tooltip_Light").hide();
         sym.getSymbol("Tooltip_Capacitor").stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Spot}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         sym.$("Tooltip_Light_Switch").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${spot2}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         
         // Show an element 
         sym.$("Tooltip_Battery").show();
         
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getSymbol("Tooltip_Battery").play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${spot2}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         sym.$("Tooltip_Battery").hide();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'spot'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("spot");
   //Edge symbol end:'spot'

   //=========================================================
   
   //Edge symbol: 'Tooltip_Light_Switch'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4833, function(sym, e) {
         // insert code here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(3656);

      });
      //Edge binding end

   })("Tooltip_Light_Switch");
   //Edge symbol end:'Tooltip_Light_Switch'

   //=========================================================
   
   //Edge symbol: 'Tooltip_Light_Switch_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 19750, function(sym, e) {
         // insert code here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("Tooltip_Resistor");
   //Edge symbol end:'Tooltip_Resistor'

   //=========================================================
   
   //Edge symbol: 'Tooltip_Capacitor'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9750, function(sym, e) {
         // insert code here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("Tooltip_Capacitor");
   //Edge symbol end:'Tooltip_Capacitor'

   //=========================================================
   
   //Edge symbol: 'Tooltip_Light'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         // insert code here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(9000);

      });
      //Edge binding end

   })("Tooltip_Light");
   //Edge symbol end:'Tooltip_Light'

   //=========================================================
   
   //Edge symbol: 'Tooltip_Battery'
   (function(symbolName) {   
   
   })("Tooltip_Battery");
   //Edge symbol end:'Tooltip_Battery'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-246452348");