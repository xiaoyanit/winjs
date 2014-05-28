define(['WinJS/Core', 'WinJS/Promise', 'WinJS/Scheduler', 'WinJS/Utilities', 
    'WinJS/Fragments', 'WinJS/Application', 'WinJS/Navigation', 'WinJS/Animations', 
    'WinJS/Binding', 'WinJS/BindingTemplate', 'WinJS/BindingList', 'WinJS/Res',
    'WinJS/Pages', 'WinJS/ControlProcessor', 'WinJS/Controls/HtmlControl'], function() {


    WinJS.Namespace.define("WinJS.Utilities", {
        _require: require,
        _define: define
    });

    return WinJS;
});