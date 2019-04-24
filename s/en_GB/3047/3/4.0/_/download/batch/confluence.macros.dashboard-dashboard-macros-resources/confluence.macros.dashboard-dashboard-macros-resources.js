/*
 This js file allows to mark a space as a favourite (global or personal) by clicking the star icon.
*/
AJS.toInit(function($) {

    var waiting = []; // used to prevent the user from triggering off another labelling operation when one is in progress

    /**
     * Check whether a space is favourited given the favourite icon for that space
     * @param button the space's favourite icon (jQuery object)
     */
    var spaceIsFavourited = function(button) {
        return button.hasClass("icon-remove-fav"); // Anchor version
    };

    /**
     * Add/Remove a space from the user's favourites. This is used when displaying spaces on the dashboard (in dash macros).
     * @param spaceKey - The space key of the space to add as favourite
     * @param button - The button that was clicked (anchor element jQuery object)
     */
    var toggleFavouriteSpace = function(spaceKey, button) {
        var wasFavourited = spaceIsFavourited(button),
            waitIndicator = button.parent().find(".icon-wait");
        var url = AJS.Meta.get("context-path") + "/json/" +
                  (wasFavourited ? "removespacefromfavourites.action" : "addspacetofavourites.action");

        button.addClass("hidden");
        waitIndicator.removeClass("hidden");

        AJS.safe.ajax({
            url: url,
            type: "POST",
            data: { "key" : spaceKey },
            success: function(labelsArr) {
                AJS.log(labelsArr);
                waitIndicator.addClass("hidden");
                button.parent().find(wasFavourited? ".icon-add-fav" : ".icon-remove-fav").removeClass("hidden");
                delete waiting[spaceKey];
            },
            error: function(xhr, text, error) {
                // TODO CONF-20780 Notify the user of the problem (will need to be internationalised)
                waitIndicator.addClass("hidden");
                button.parent().find(wasFavourited? ".icon-remove-fav" : ".icon-add-fav").removeClass("hidden");
                AJS.log("Error Toggling Favourite Space: " + text);
                delete waiting[spaceKey];
            }
        });
    };

    /**
     * If the user switches tabs while spaces are still being labelled, this function will prevent this from
     * happening. Allowing a location change in the middle of xmlhttp requests causes exceptions to be thrown in
     * Firefox (although, they seem to be ignored by IE). This is important in high latency environments where
     * users may get impatient.
     */
    var gotoUrl = function(url) {
        if ($.isEmptyObject(waiting)) {
            AJS.log("Busy toggling favourite for space '" + spaceKey + "'. Ignoring request to change tab.");
            return;
        }
        window.location = url;
    };


    $(".spaceList .tabs a").click(function() {
        gotoUrl(this.href);
        return false;
    });

    $(".spaceList").delegate(".icon-add-fav, .icon-remove-fav", "click", function(e) {
        var button = $(e.target);
        var spaceKey = button.closest("tr").attr("data-space-key");
        if (waiting[spaceKey]) {
            AJS.log("Already busy toggling favourite space for '" + spaceKey + "'. Ignoring request.");
            return;
        }
        waiting[spaceKey] = true;
        toggleFavouriteSpace(spaceKey, button);
        return false;
    });

    $("#recent-updates").delegate("li.update-item .update-item-arrow a", "click", function(e) {
        var thumbnailId = $(e.currentTarget).attr("data-thumbnail-id");

        $('#twixie-' + thumbnailId).toggleClass("icon-section-opened icon-section-closed");
        $('#thumbnail-' + thumbnailId).toggle();
        return false;
    });

    $(".spaceList select.selectedTeam").change(function() {
        var dropDown = $(this);
        var baseUrl = dropDown.attr("data-base-url");
        var selectedTab = dropDown.attr("data-selected-tab");
        window.location = baseUrl + 'spacesSelectedTab=' + selectedTab + '&spacesSelectedTeam=' + encodeURIComponent(this.value);
    });

    $('#recent-updates').find('select[name="updatesSelectedTeam"]').change(function() {
        var dropDown = $(this);
        var baseUrl = dropDown.attr("data-base-url");
        var selectedTab = dropDown.attr("data-selected-tab");
        window.location = baseUrl + 'updatesSelectedTab=' + selectedTab + '&updatesSelectedTeam=' + encodeURIComponent(this.value);
    });

    // Override AUI tab click behaviour for spaces list and recent updates because we don't use AJAX or preload tabs (yet)
    $("#recent-updates.aui-tabs ul.tabs-menu a").unbind("click");
    $(".spaceList.aui-tabs ul.tabs-menu a").unbind("click");
});

