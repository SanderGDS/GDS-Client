xui.Class('App', 'xui.Module',{
    Instance:{
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Panel")
                .setHost(host,"xui_ui_panel4")
                .setDock("none")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("66.66666666666667em")
                .setHeight("50em")
                .setCaption("Grand Dog Studio Client")
            );
            
            host.xui_ui_panel4.append(
                xui.create("xui.UI.ButtonViews")
                .setHost(host,"xui_ui_buttonviews2")
                .setItems([
                    {
                        "id":"a",
                        "caption":"Home",
                        "imageClass":"xui-icon-xui"
                    },
                    {
                        "id":"b",
                        "caption":"Libary"
                    },
                    {
                        "id":"c",
                        "caption":"Support"
                    },
                    {
                        "id":"d",
                        "caption":"Forums",
                        "closeBtn":true,
                        "optBtn":"xui-uicmd-opt",
                        "popBtn":true
                    }
                ])
                .setLeft("0em")
                .setTop("0em")
                .setBarLocation("left")
                .setBarSize("11.666666666666666em")
                .setValue("a")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        }
    }
});