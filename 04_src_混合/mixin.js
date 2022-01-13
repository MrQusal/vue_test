// 此文件，用于将不同组件的相同配置提起出来
export const mixin = {
  // 1. 提取不同组件的公共部分。可以包含很多配置项
  methods: {
    showName() {
      alert(this.name);
    },
  },
  data() {
    return {
      x: 100,
      y: 100
    }
  },
}