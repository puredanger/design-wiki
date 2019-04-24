(function ($) {
    var pageDialog,blogPostDialog,
        dialogOptions = {
            hideCallback: hideCallback,
            width: 270,
            offsetY: 15,
            hideDelay: 36e5
        },

    loadTemplates = function(spaceKey) {
        $.getJSON(contextPath + "/plugins/dashboard/getTemplates.action?spaceKey=" + spaceKey, function(data) {
            var $spaceOptGroup = $("#spacePageTemplates").empty(),
                $globalOptGroup = $("#globalPageTemplates").empty(),
                that;

            data.spaceTemplates.length ? $spaceOptGroup.show() : $spaceOptGroup.hide();
            data.globalTemplates.length ? $globalOptGroup.show() : $globalOptGroup.hide();

            for (var i = 0, ii = data.spaceTemplates.length; i < ii; i++) {
                that = data.spaceTemplates[i];
                $("<option></option>").attr("value", that.id).text(that.name).appendTo($spaceOptGroup);
            }
            for (var i = 0, ii = data.globalTemplates.length; i < ii; i++) {
                that = data.globalTemplates[i];
                $("<option></option>").attr("value", that.id).text(that.name).appendTo($globalOptGroup);
            }
        });
    };

    var onContentsLoaded = function (shouldLoadTemplates, dialog, $contents) {
        var $spaceSelect = $(".space-key-selector", dialog), oneOptionSelected = false;
        var previousSpaceSelection = getCookie("dashboard-actions-space");
        if (previousSpaceSelection) {
            $spaceSelect.val(previousSpaceSelection);

            // if cookie value does not match any space in the drop down then ensure at least one option is selected
            $spaceSelect.each(function () {
                if (this.selected) {
                    oneOptionSelected = true;
                    return false;
                }
            });
            !oneOptionSelected && ($spaceSelect[0].selectedIndex = 0);
        }
        shouldLoadTemplates && loadTemplates($spaceSelect.val());
        $(".cancel-link", dialog).click(function (e) {
            dialog.hide();
            return AJS.stopEvent(e);
        });

        $(".expand-explanation-link", dialog).click(function (e) {
            $(this).parent().siblings(".explanation").slideToggle();
            return AJS.stopEvent(e);
        });

        $spaceSelect.change(function () {
            var selectedValue = $(this).val();
            setCookie("dashboard-actions-space", selectedValue);
            shouldLoadTemplates && loadTemplates(selectedValue);
        });
        dialog.refresh();
    };

    var hideCallback = function () {
        $(".dashboard-actions .explanation").hide();
    };

    var generatePopupDisplayCoordinator = function (type) {
        var dialog = type == "page" ? pageDialog : blogPostDialog;
        return function ($contents, trigger, doShowPopup) {
            $contents.html('<div style="padding: 15px 10px; text-align: center"><img style="vertical-align: middle" src="' + contextPath + '/images/icons/wait.gif"/></div>');
            doShowPopup();
            $.ajax({url: contextPath + "/plugins/dashboard/add.action?type=" + type, type: "GET", dataType: "html",success: function(data) {
                $contents.html(data);
                if(type =="page") {
                    onContentsLoaded(true,pageDialog,$contents);
                } else {
                    onContentsLoaded(false,blogPostDialog,$contents);
                }
            } });
       
        };
    };

    AJS.toInit(function ($) {
        pageDialog = AJS.InlineDialog($("#addPageLink"), "addPagePopup", generatePopupDisplayCoordinator("page"), dialogOptions);
        blogPostDialog = AJS.InlineDialog($("#addBlogLink"), "addBlogPopup", generatePopupDisplayCoordinator("blogpost"), dialogOptions);
    });
})(AJS.$);

