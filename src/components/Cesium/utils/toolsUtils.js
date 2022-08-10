/*
 * @Author: quling
 * @Date: 2022-08-08 17:25:50
 * @LastEditors: quling
 * @LastEditTime: 2022-08-10 14:37:43
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
        position: Cesium.Cartesian3.fromDegrees(103.37515728753266,30.59996766676398,100), // 指定实体位置的属性
        point: {
          show:true, // 是否可见
          pixelSize: 10, // 以像素为单位指定大小
          // fromCssColorString根据CSS颜色值创建一个Color实例
          color: Cesium.Color.fromCssColorString("#ff0000"), 
        }
      })
    }
  }

}