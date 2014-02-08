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
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         // insert code here// Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("start");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'SunMoon'
   (function(symbolName) {   
   
      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "play", function(sym, e) {
         // insert code to be run at timeline play here
         
      });
      //Edge binding end

   })("SunMoon");
   //Edge symbol end:'SunMoon'

   //=========================================================
   
   //Edge symbol: 'SunMoonWithBackground'
   (function(symbolName) {   
   
   })("SunMoonWithBackground");
   //Edge symbol end:'SunMoonWithBackground'

   //=========================================================
   
   //Edge symbol: 'BackgroundMask'
   (function(symbolName) {   
   
   })("BackgroundMask");
   //Edge symbol end:'BackgroundMask'

   //=========================================================
   
   //Edge symbol: 'TestShape'
   (function(symbolName) {   
   
   })("TestShape");
   //Edge symbol end:'TestShape'

})(jQuery, AdobeEdge, "EDGE-171195031");