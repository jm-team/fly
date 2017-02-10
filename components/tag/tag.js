$(function() {

    // 删除input框 增加添加标签
    function addTag(selector) {
        var oAdd = $('<a href="javascript:;">').addClass('tag-add');
        oAdd.append($('<i class="jm-icon jm-icon-add">'));
        oAdd.append($('<em>').text('添加标签'));
        $(selector).parent().append(oAdd).end().remove();
    }

    // 删除标签
    $('.tag-dynamic').on('click', 'i', function(e) {
        e.preventDefault();
        $(this).parent().remove();
    });

    // 添加自定义标签的输入框
    $('.tag-dynamic').on('click', '.tag-add', function(e) {
        e.preventDefault();
        var self = $(this);
        var oInput = $('<input>').addClass('custom').css({ width: $(this).width() }).prop('autofocus', true);
        self.parent().append(oInput);
        oInput.focus();
        self.remove();
    });

    // input 失去焦点添加新的标签
    $('.tag-dynamic').on('blur', 'input', function(e) {
        e.preventDefault();
        var self = $(this);
        var value = self.val();
        if (value) {
            var oTag = $('<a href="javascript:;">').text(value);
            // 添加自定义标签
            oTag.append($('<i class="jm-icon jm-icon-wrong">'));
            self.parent().append(oTag);
            addTag(self);
        } else {
            addTag(self);
        }
    });

    // input 回车事件添加新的标签
    $('.tag-dynamic').on('keyup', 'input', function(e) {
        e.preventDefault();
        var self = $(this);
        if(e.which === 13){
            self.trigger('blur');
        }     
    });

    // tag 可点击
    $('.tag-clear').on('click', 'a', function(e){
    	var self = $(this);
    	self.toggleClass('active');
    })
})
