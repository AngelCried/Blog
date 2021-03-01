layui.use(['table', 'jquery'], function () {
  var table = layui.table;
  var $ = layui.$;

  $(window).resize(function () {
    var panelHeight = $('.yz-panel-group').height();
    var winHeight = $(this).height();
    $('.fix-height').css('min-height', (winHeight - panelHeight - 100) + 'px')
  });
  $(window).trigger('resize');


  //展示已知数据
  table.render({
    elem: '#demo',
    skin: "line",
    cols: [
      [ //标题栏
        {
          field: 'process',
          title: '任务名称',
          align: 'center'
        }, {
          field: 'manager',
          title: '项目经理',
          align: 'center',
          minWidth: 150
        }, {
          field: 'time',
          title: '时间',
          align: 'center',
          minWidth: 160
        }
      ]
    ],
    data: [{
      "id": "10001",
      "process": "名称名称年度计划名称名称名称年度名称名称名",
      "manager": "张三三",
      "time": "2019-06-15 11:30:45",
    }, {
      "id": "10002",
      "process": "名称名称年度计划名称名称名称年度名称名称年度计划名称名称名称年度名称名称名名称名",
      "manager": "周雨季",
      "time": "2019-06-15 11:30:45",
    }, {
      "id": "10003",
      "process": "名称名称年度计划名称名称名称年度名称名称名",
      "manager": "张三三",
      "time": "2019-06-15 11:30:45",
    }, {
      "id": "10004",
      "process": "名称名称年度计划名称名称名称年度名称名称名",
      "manager": "张三三",
      "time": "2019-06-15 11:30:45",
    }, {
      "id": "10005",
      "process": "名称名称年度计划名称名称名称年度名称名称名",
      "manager": "张三三",
      "time": "2019-06-15 11:30:45",
    }, {
      "id": "10006",
      "process": "名称名称年度计划名称名称名称年度名称名称名",
      "manager": "张三三",
      "time": "2019-06-15 11:30:45",
    }, ]
    //,page: true //是否显示分页
    //,limits: [5, 7, 10]
    //,limit: 5 //每页默认显示的数量
  });
});