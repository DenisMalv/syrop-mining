var $ = jQuery.noConflict();

$(document).ready(function () {
    $('.header__burger').click(function () {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
    tippy('.popover', {
        allowHTML: true,
        maxWidth: 600
    });
    const element = document.querySelectorAll('.select-default');
    element.forEach(item => {
        const example = new Choices(item);
    })

    function Init_Range(){
        let ranges_input = $(".range-input");
        if(ranges_input.length) {

            $.each(ranges_input, function(index, element){

                var $range = $(element);
                const $double_bool = $range.attr("data-double");
                if($double_bool !== false && $double_bool !== undefined){

                    $range.ionRangeSlider({
                        type: "double",
                        grid: true,
                        
                    });
                }else{
                    $range.ionRangeSlider({
                        grid: true
                    });
                }

            })
            
            
        }
    }
    let range_init = Init_Range();
    let droddown = toggleClicker(
        "[data-dropdown--action]",
        "active--dropdown",
        "[data-dropdown]",
        false,
        null
    );
    $('[data-dropdown--action] .btn').click(function(e) {
        e.stopPropagation()
    })
    let control_btn = toggleClicker(
        ".btn--controls",
        "active--controls",
        ".controls-panel-js",
        false,
        null
    );
    $('[data-select-btn]').click(function (e) {
        e.preventDefault();
        var $this = $(this)
        var parent = $this.closest('[data-select]');
        if (parent.hasClass('active')) {
            parent.removeClass('active');
            
        } else {
           
            $('[data-select]').removeClass('active');
            parent.addClass('active');

            if(parent.hasClass("fixed--select")){
                pos(parent.offset());
                window.addEventListener(
                    "resize", 
                    function(){
                        let parent_params_offset = parent.offset();
                        let drop_body = parent.find("[data-select-drop]");

                        drop_body.css("top", 
                            ((parent_params_offset.top + parent.height()) + "px")
                        );
                        drop_body.css("left", 
                            ((parent_params_offset.left - drop_body.width() + parent.width()) + "px")
                        );
                    }
                )
            }
            

            let scroller = parent.closest(".js-scroller");
            let scroller_main = scroller.closest(".content");
            if(scroller){
                scroller.on("scroll", function(event){
                    if (parent.hasClass('active')) {
                        parent.removeClass('active');
                    }
                })
            }
            if(scroller_main){
                scroller_main.on("scroll", function(event){
                    if (parent.hasClass('active')) {
                        parent.removeClass('active');
                    }
                })
            }

            

        }
        function pos(coordinates){
            let parent_params_offset = coordinates;
            let drop_body = parent.find("[data-select-drop]");

            drop_body.css("top", 
                ((parent_params_offset.top + parent.height()) + "px")
            );
            drop_body.css("left", 
                ((parent_params_offset.left - drop_body.width() + parent.width()) + "px")
            );
        }
    })

    $('[data-select-option]').click(function (e) {
        e.preventDefault();
        var $this = $(this);
        var dropDown = $this.closest('[data-select-drop]');
        var parent = $this.closest('[data-select]');
        var currentValue = parent.find('[data-select-current]');
        var selectCotent = $this.html();
        var allOptions = dropDown.find('[data-select-option]');
        if (!$this.hasClass('current')) {
            allOptions.removeClass('current');
            $this.addClass('current')
            currentValue.html(selectCotent);
            parent.removeClass('active')
        } else {
            return false;
        }

    })
});     

// javascript
document.addEventListener('DOMContentLoaded', function () {

	initCollapse();
    initSideToggle()
});

function initSideToggle() {
	const sidebar = document.querySelector('.sidebar');
	const btn = document.querySelectorAll('.sidebar__toggler');

	for (var i = 0; i < btn.length; i++) {
		btn[i].addEventListener('click', function() {
			const TOGGLE_CLASS = 'show';
			const BTN_TOGGLE_CLASS = 'collapsed';
			const OPENED_CLASS = 'sidebar--opened';
			const CLOSED_CLASS = 'sidebar--closed';

			sidebar.querySelectorAll('[data-toggle="collapse"]').forEach(function(btn) {
				if (btn.classList.contains(BTN_TOGGLE_CLASS)) {
					setHeight(btn);
					btn.classList.remove(BTN_TOGGLE_CLASS);
					document.querySelector(btn.hash).classList.add(TOGGLE_CLASS);
				}
			});

			if (window.innerWidth > 1200) {
				document.body.classList.toggle('sidebar-collapsed');
				sidebar.classList.toggle(CLOSED_CLASS);
				
			} else {
				sidebar.classList.toggle(OPENED_CLASS);
			}
		});
	}
}

function initCollapse() {
	const TOGGLE_CLASS = 'show';
	const BTN_TOGGLE_CLASS = 'collapsed';

	document.querySelectorAll('[data-toggle="collapse"]').forEach(function(btn) {
		if (!btn.classList.contains(BTN_TOGGLE_CLASS)) {
			setHeight(btn);
		}

		btn.addEventListener('click', function(e) {
			e.preventDefault();
			let targetId = btn.hash;
			let targetEl = document.querySelector(targetId);

			if (targetEl) {
				if (targetEl.classList.contains(TOGGLE_CLASS)) {
					targetEl.style.height = '0px';
					targetEl.classList.remove(TOGGLE_CLASS);
					btn.classList.add(BTN_TOGGLE_CLASS);
				} else {
					setHeight(btn);
					targetEl.classList.add(TOGGLE_CLASS);
					btn.classList.remove(BTN_TOGGLE_CLASS);
				}
			}
		});
	});
}

function setHeight(handlerEl) {
	let targetId = handlerEl.hash;
	let targetEl = document.querySelector(targetId);
	targetEl.style.height = targetEl.children[0].offsetHeight + 'px';
}