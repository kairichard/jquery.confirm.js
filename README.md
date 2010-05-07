jQuery.confirm lets you add a confirmation-layer to any element on any event.

Depends on:
    http://github.com/brandonaaron/livequery
    
--------
Usage:

    jQuery('a.delete').confirm({});

Options:
    confirm_class:"blueButton",
    abort_class:"greyButton",
    confirm_text:"L&ouml;schen",
    abort_text:"Abbrechen",
    event:"click"
    callbacks:{
        clicked_confirmation:function(event){
            event.preventDefault();
            jQuery.ajax({
                url:event.data.href,
                dataType:"script"
            });                    
        }
    }
    
--------    
Than it looks like this

![Alt text](http://pickhost.eu/images/0003/4559/Picture_3.png)

If you click on the "X"

![Alt text](http://pickhost.eu/images/0003/4560/Picture_4.png)



