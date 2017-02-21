/**
 * Created by lf on 2017/2/21.
 */
// badge封顶
(function ($) {
    function Badge(options) {
        this.init(options);
    }

    $.extend(Badge.prototype, {
        init: function (options) {
            var self = this;
            self.defaults = {
                number: '',     // 消息实际数量
                selector: ''    // bagde 的 className
            };
            $.extend(true, this.defaults, options || {});
            self.maxMsg(self.defaults);
            return self;
        },
        maxMsg: function (defaults) {
            var self = this,
                n = defaults.number;
            $(defaults.selector).each(function () {
                var $self = $(this),
                    m = Number($self.attr('max-number'));   // 最大显示消息数量
                if (isNaN(m)) return true;
                $self.text(m > n ? m : m + '+');
            });

            return self;
        }
    });
    $(function () {
        new Badge({
            selector: ".icon-badge",
            number: 1000
        });
    })
})(jQuery);