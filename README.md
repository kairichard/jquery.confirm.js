jQuery.confirm lets you add a confirmation-layer to any element on any event.

Depends on:
    http://github.com/brandonaaron/livequery
    
--------
Usage:

    jQuery('a.delete').confirm({});

Now if you click the "a.delete" Link it will replace the parent with the confirmation markup.
If you the decide to confirm your deletetion it will fire the callback.
When you cancel the confirmation it will replace the confirmation markup with the previous parent's content.

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



