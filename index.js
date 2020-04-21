
var r = {
    shape: {}
};

var isZrender = 'zrender' in window;
var isEcharts = 'echarts' in window;

var shape = ['Arc', 'BezierCurve', 'Line', 'Rect', 'Polyline', 'Polygon', 'Ring', 'Sector', 'Circle', 'Text', 'Image', 'Group'];


if(isZrender) {
    r.init = zrender.init;
    shape.forEach(m => {
        r.shape[m] = zrender[m];
    })
    r.shape.extendShape = zrender.Path.extend;
} else if(isEcharts) {
    r.init = echarts.zrender.init;
    shape.forEach(m => {
        r.shape[m] = echarts.graphic[m];
    });
    r.shape.extendShape = echarts.graphic.extendShape;
} else {
    throw new Error('Need zrender or echarts');
}

export default r;