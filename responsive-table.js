$(document).ready(function(){

    function initTable($table) {
        
        var $head = $table.find('head tr');
                
        if(!$head.length) {
            $head = $table.find('tr').first();
        }

        $head.addClass('rt-head');

        var labels = [];
        $head.find('th,td').each(function(){
            labels.push($(this).text());
        });
        
        $table.find('tr').each(function(){
            var $tr = $(this);
            if(!$tr.hasClass('tr-head')) {
                $tr.find('th,td').each(function(i, item){
                    $(item).attr("data-label", labels[i]);
                });
            }
        });
    }

    $(".responsive-tables table").addClass('responsive');

    $('table.responsive').each(function() {
        initTable($(this));
    })
})