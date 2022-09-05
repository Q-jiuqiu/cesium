/*
 * @Author: quling
 * @Date: 2022-08-08 17:25:50
 * @LastEditors: quling
 * @LastEditTime: 2022-09-05 11:02:31
 * @Description: 
 */
import * as Cesium from "cesium";
export default {
  data() {
    return {}
  },

  methods: {
    addPoint() {
     const entity= this.viewer.entities.add({
        // fromDegrees(经度,纬度,高度,椭球,结果) 从以度为单位的经度和纬度值返回Cartesian
        position: Cesium.Cartesian3.fromDegrees(103, 30, 100), // 指定实体位置的属性
        point: {
          show: true, // 是否可见
          pixelSize: 10, // 以像素为单位指定大小
          // fromCssColorString根据CSS颜色值创建一个Color实例
          color: Cesium.Color.fromCssColorString("#ffff00"),
        }
     })
      this.viewer.zoomTo(entity)
    },
    addPolyline() {
      const entity = this.viewer.entities.add({
        polyline: {
          positions: Cesium.Cartesian3.fromDegreesArray([103, 30, 106, 35]),
          show: true,
          width: 10,
          // 颜色
          material: Cesium.Color.fromCssColorString("#ff0000")
        }
      })
      this.viewer.zoomTo(entity)
    },
    addPolygon() {
      console.log("addPolygon");
      const entity = this.viewer.entities.add({
        polygon: {
        // 获取指定属性（positions，holes（图形内需要挖空的区域））
        hierarchy: {
          positions: Cesium.Cartesian3.fromDegreesArray([
            120.9677706, 30.7985748,
            110.20, 34.55,
            120.20, 50.55
          ]),
          holes: [{
            positions: Cesium.Cartesian3.fromDegreesArray([
              119, 32,
              115, 34,
              119, 40
            ])
          }]
        },
        // 边框
        outline: true,
        // 边框颜色
        outlineColor: Cesium.Color.WHITE,
        // 边框尺寸
        outlineWidth: 2,
        // 填充的颜色，withAlpha透明度
        material: Cesium.Color.GREEN.withAlpha(0.5),
        // 是否被提供的材质填充
        fill: true,
        // 恒定高度
        height: 5000,
        // 显示在距相机的距离处的属性，多少区间内是可以显示的
        distanceDisplayCondition: new Cesium.DistanceDisplayCondition(1000, 10000000),
        // 是否显示
        show: true,
        // 顺序,仅当`clampToGround`为true并且支持地形上的折线时才有效。
        zIndex: 10
      }
      })
      this.viewer.zoomTo(entity)
    }
  }

}