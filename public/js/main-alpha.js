var $ = jQuery.noConflict();

$(document).ready(function () {
    var uaTwo = window.navigator.userAgent;
    var isIETwo = /MSIE|Trident/.test(uaTwo);

    if (isIETwo) {
        document.documentElement.classList.add('ie');
    }

    if (navigator.userAgent.indexOf('Safari') !== -1 &&
        navigator.userAgent.indexOf('Chrome') === -1) {
        $("body").addClass("safari");
    }

    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.scroll_to_top').addClass('active');
        } else {
            $('.scroll_to_top').removeClass('active');
        }
    });

    $('.scroll_to_top').click(function () {
        $("html, body").animate({scrollTop: 0}, "slow");
        return false;
    });


    let mobileMenu = toggleClicker(
        "[data-mobile-menu--btn]",
        "menu-open",
        "[data-mobile-menu]",
        true
    );
    let droddown_header = toggleClicker(
        "[data-dropdown-header-btn]",
        "header__btn-wrap--active",
        "[data-dropdown-header]",
        true
    );
    let droddownSupport = toggleClicker(
        "[data-dropdown-support--btn]",
        "header-support__question--active",
        "[data-dropdown-support]",
        true
    );

    $('.tab-nav li').on('click', function(ev) {
        $([$(this)[0], $($(this).data('href'))[0]]).addClass('active').siblings('.active').removeClass('active');
    });
});
document.addEventListener('DOMContentLoaded', function () {
	initTabs();
});
function initTabs() {
    const tabBtn = document.querySelectorAll('.header-support__nav-btn');
    

    tabBtn.forEach(function(item) {
        item.addEventListener('click', function() {
            let currentBtn = this;
            const parentTab = this.closest('[data-tabs]');
            const buttonsThisTab = parentTab.querySelectorAll('.header-support__nav-btn');
            const tabPane = parentTab.querySelectorAll('.header-support__content-item');
            let tabId = currentBtn.getAttribute('data-tab');
            let currentTab = parentTab.querySelector(tabId);

            if (!currentBtn.classList.contains('active')) {
                buttonsThisTab.forEach(function(item) {
                    item.classList.remove('header-support__nav-btn--active');
                });
    
                tabPane.forEach(function(item) {
                    item.classList.remove('header-support__content-item--active');
                });
    
                currentBtn.classList.add('header-support__nav-btn--active');
                currentTab.classList.add('header-support__content-item--active');
            }			
        });
    });
}
