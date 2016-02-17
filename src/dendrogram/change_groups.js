var build_color_groups = require('./build_color_groups');

/* Changes the groupings (x- and y-axis color bars).
 */
module.exports = function (params, inst_rc, inst_index) {

  var group_colors = build_color_groups(params);

  if (inst_rc=='row'){
    var dom_class = 'row_class_rect';
  } else {
    var dom_class = 'col_class_rect'
  }

  d3.selectAll('.' + dom_class)
    .style('fill', function(d) {
      var inst_group = d.group[inst_index];
      return group_colors[ inst_group ];
    });

  if (inst_rc==='row'){
    params.group_level.row = inst_index;
  } else if (inst_rc==='col'){
    params.group_level.col = inst_index;
  }
}
