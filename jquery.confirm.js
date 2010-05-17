/*
    jQuery 1.3.2+ confirm Plugin v 0.1 by Kai Richard Koenig May 2010
    http://github.com/kairichard/jquery.confirm.js
    http://kairichardkoenig.com
*/
;(function($){
    $.fn.confirm = function(options){
        var defaults = {
            confirm_class:"blueButton",
            abort_class:"greyButton",
            confirm_text:"L&ouml;schen",
            abort_text:"Abbrechen",
            event:"click",
            callbacks:{
                clicked_confirmation:function(event){
                    event.preventDefault();
                    jQuery.ajax({
                        url:event.data.self.attr("href"),
                        dataType:"script"
                    });                    
                }
            }
        };
        
        options = jQuery.extend(true,{},defaults, options);                
        options.selector = this.selector
        return this.each(function(){
            jQuery(options.selector).livequery(options.event,function(event){
                event.preventDefault();
                
                var self = jQuery(this);
                var parent = self.parent();
                
                var confirmation = jQuery("<a></a>").attr("href","javascript:void(0)").addClass(options.confirm_class).append(jQuery("<span></span>").html(options.confirm_text));
                var cancel = jQuery("<a></a>").attr("href","javascript:void(0)").addClass(options.abort_class).append(jQuery("<span></span>").html(options.abort_text));
                
                confirmation.bind("click",{self:self},options.callbacks.clicked_confirmation);
                cancel.bind("click",{restore:parent.html()},function(event){
                    jQuery(this).parent().html(event.data.restore);
                });
                parent.html(confirmation).append("&nbsp;").append(cancel);
            });
        });
    };
    
})(jQuery);

