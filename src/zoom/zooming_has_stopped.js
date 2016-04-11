var constrain_font_size = require('./constrain_font_size');
var trim_text = require('./trim_text');

module.exports = function zooming_has_stopped(params, zoom_info){
  
  var inst_zoom = Number(d3.select(params.root+' .viz_svg').attr('is_zoom'));

  if (inst_zoom === 0){

    var check_stop = Number(d3.select(params.root+' .viz_svg').attr('stopped_zoom'));
    if (check_stop!=0){

      d3.selectAll('.row_label_group').select('text').style('display','none');
      d3.selectAll('.row_label_group').select('text').style('display','block');

      constrain_font_size(params);

      d3.select(params.root+' .viz_svg').attr('stopped_zoom',0);

      d3.selectAll('.row_label_group').select('text').style('display','block')
      d3.selectAll('.col_label_group').select('text').style('display','block')
      
      d3.selectAll('.tile').style('display','block')

      // console.log('NOT zooming - only run once')
      // console.log('zooming has stopped and running text trim ')

      d3.selectAll(params.root+' .row_label_group' )
        .each(function() { trim_text(params, this, 'row'); });
      d3.selectAll(params.root+' .col_label_group')
        .each(function() { trim_text(params, this, 'col'); });

      setTimeout( text_patch, 500 );

    }
  }

  function text_patch(){
    console.log('text patch')
    d3.selectAll('.row_label_group')
      .select('text')
      .style('font-size',function(){
        var fs = d3.select(this).style('font-size'); 
        return fs;
      })
  }

};