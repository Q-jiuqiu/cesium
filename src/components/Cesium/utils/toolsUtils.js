/*
 * @Author: quling
 * @Date: 2022-08-08 17:25:50
 * @LastEditors: quling
 * @LastEditTime: 2022-08-19 17:06:36
 * @Description: 
 */
import * as Cesium from "cesium";
export default {
  data() {
    return {}
  },

  methods: {
    addPoint() {
      this.viewer.entities.add({
        // fromDegrees(经度,纬度,高度,椭球,结果) 从以度为单位的经度和纬度值返回Cartesian
        position: Cesium.Cartesian3.fromDegrees(103,30,100), // 指定实体位置的属性
        point: {
          show:true, // 是否可见
          pixelSize: 10, // 以像素为单位指定大小
          // fromCssColorString根据CSS颜色值创建一个Color实例
          color: Cesium.Color.fromCssColorString("#ff0000"), 
        }
      })
    },
    addPolyline() {
      this.viewer.entities.add({
        polyline: {
          positions:Cesium.Cartesian3.fromDegreesArray([103,30,106,35]),
          show: true,
          width: 10,
          // 颜色
          material:Cesium.Color.fromCssColorString("#ff0000")
        }
      })
    },
    addPolygon() {
      this.viewer.entities.add({
        position: Cesium.Cartesian3.fromDegrees(103,30,100),
        polygon: {
          show:true
        }
      })
    }
  }

}