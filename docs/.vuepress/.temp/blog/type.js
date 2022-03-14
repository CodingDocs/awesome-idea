export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-79fdd481","v-43ef8de4","v-2755dc00","v-643c2b2c","v-25d3dd86","v-360a4bde","v-7d35759d","v-3013d9f0","v-5240ec8c","v-4fa8e86c","v-b9bb4c76","v-6f23902b","v-4adc4ab8","v-71c7320e","v-8c704c46","v-4adc8b8a","v-4a5b8c94","v-80eed500","v-f0347cb4","v-6a2decb5","v-9c1365d8"]}},"encrypted":{"/":{"path":"/encrypted/","keys":[]}},"slide":{"/":{"path":"/slides/","keys":[]}},"star":{"/":{"path":"/star/","keys":[]}},"timeline":{"/":{"path":"/timeline/","keys":[]}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogType) {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  })
}
