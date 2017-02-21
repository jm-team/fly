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
                overflow: '',                // 最大显示信息数量
                selector: '.icon-badge',     // bagde 的 className
                count: '',                   // 实际数量
                attrs: {
                    count: 'count',
                    overflow: 'overflow'
                }
            };
            $.extend(true, this.defaults, options || {});
            self.maxMsg();
            return self;
        },
        maxMsg: function () {
            var self = this;
            $(self.defaults.selector).each(function () {

                var $self = $(this),
                    m = Number($self.attr(self.defaults.attrs.overflow)) || self.defaults.overflow,
                    n = $self.attr(self.defaults.attrs.count);

                $self.text(m >= n ? n : m + '+');

            });

            return self;
        }
    });
    $(function () {
        new Badge({
            overflow: 99,
            count: ''
        });
    })
})(jQuery);