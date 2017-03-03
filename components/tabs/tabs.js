(function ($) {
    function Tabs(options) {
        this.init(options);
    }

    Tabs.prototype = {
        /**
         *
         * @param type   {string}    类型    default 干净样式  card 卡片样式
         * @param close  {boolean}   可关闭
         * @param add    {boolean}   可添加
         * @param selector  {string}    classname
         * @param disabled  {boolean}   可禁用
         * @param icon  {string}    iconfont classname
         * @param current   {number}    当前索引
         * */
        defaults: {
            selector: '.tabs',
            current: 1,
            active: 'active',
            attrs: {
                type: 'tab-type',
                close: 'tab-close',
                add: 'tab-add',
                context: 'tab-context',
                disabled: 'tab-disabled',
                icon: 'tab-icon',
            }
        },
        init: function (options) {
            var self = this;

            $.extend(true, self.defaults, options || {});

            $(self.defaults.selector).each(function(){

                var $self = $(this),
                    active = self.defaults.active,
                    current = $self.attr('current') || self.defaults.current;

                $self.find('li').eq(current - 1).addClass(active)
                    .siblings('li').removeClass(active);
            });

            self.jmtabsType().jmDisabled().jmIcon().jmTabs();
            self.jmAdd().jmClose().jmAddFn().jmCloseFn();

            return self;
        },
        // tabs类型
        jmtabsType: function () {
            var self = this;

            $(self.defaults.selector).each(function () {
                var $self = $(this);

                if($self.attr(self.defaults.attrs.type) === 'card'){
                    $self.addClass('tab-card');

                }else {
                    $self.addClass('tab-clear');
                }
            });

            return self;
        },
        // tab 切换
        jmTabs: function(){
            var self = this;

            $(self.defaults.selector).on('click', 'a', function (event) {
                event.stopPropagation();

                var $self = $(this),
                    active = self.defaults.active;

                $self.parent().not('.tab-disabled').addClass(active).siblings().removeClass(active);

            });

            return self;
        },
        // 禁用
        jmDisabled: function () {
            var self = this;

            $(self.defaults.selector).find('li').each(function () {
                var $self = $(this);

                if($self.attr(self.defaults.attrs.disabled)){
                    $self.addClass('tab-disabled');
                }
            });

            return self;
        },
        // icon
        jmIcon: function () {
            var self = this;

            $(self.defaults.selector).find('li').each(function () {
                var $self = $(this),
                    iconClass = $self.attr(self.defaults.attrs.icon);

                if(iconClass){

                    var iEle = $(`<i class="jm-icon ${iconClass}"></i>`);

                    $self.find('a').prepend(iEle);
                }
            });

            return self;
        },
        // close
        jmClose: function(){
            var self = this;

            $(self.defaults.selector).find('li').each(function () {
                var $self = $(this),
                    isClose = $self.parents(self.defaults.selector).attr(self.defaults.attrs.close);

                isClose = isClose === 'false' ? undefined : isClose;

                if(isClose){

                    var iEle = $('<i class="jm-icon jm-icon-wrong"></i>');

                    $self.find('a').append(iEle);
                }
            });

            return self;
        },
        jmCloseFn: function(){
            var self = this;

            $(self.defaults.selector).on('click', '.jm-icon-wrong', function(){
               var $self = $(this);
               var $li = $self.parents('li'),
                   $ul = $li.parent(),
                   active = self.defaults.active,
                   index = $li.parent().find(".active").index(),
                   len = $li.siblings('li').length;

               $li.remove();

               if(index === len ){
                   $ul.children().eq(index - 1).addClass(active);
               }else{
                   $ul.children().eq(index).addClass(active);
               }

            });

            return self;
        },
        // 可添加
        jmAdd: function(){
            var self = this;

            $(self.defaults.selector).each(function () {
                var $self = $(this),
                    isAdd = $self.parents(self.defaults.selector).attr(self.defaults.attrs.add);

                isAdd = isAdd === 'false' ? undefined : isAdd;

                if(isAdd){

                    var aEle = $("<a></a>").attr('href', 'javascript:;');

                    aEle.addClass('jm-icon jm-icon-add fn-right tab-card-add-icon');

                    $self.children('ul').append(aEle);
                }
            });

            return self;
        },
        jmAddFn: function () {
            var self = this;

            $(self.defaults.selector).on('click', '.tab-card-add-icon', function(){

                var oLi = $('<li class="fn-left"></li>'),
                    oA = $('<a href="javascript:;"></a>'),
                    iEle = $('<i class="jm-icon jm-icon-wrong"></i>'),
                    sEle = $('<span class="tab-title">新标签</span>');
                var $self = $(this);

                oA.append(sEle).append(iEle);
                oLi.append(oA);
                oLi.insertBefore($self);

                var $ele =  $self.parents(self.defaults.selector).find('li'),
                    last = $ele.length - 1,
                    active = self.defaults.active;

                $ele.eq(last).addClass(active).siblings('li').removeClass(active);

            });

            return self;
        }
    };

    $(function(){
        new Tabs();
    })
})(jQuery);
