<script>
/**
  * @name WebSocket
  * @description 全双工通讯的协议
  */
export default {
  name: 'CommonMixinWebsocket',
  data() {
    return {
      // WebSocket-URL
      mixinSocketUrl: null,
      // WebSocket
      mixinSocket: null,
    };
  },
  deactivated() {
    // 连接关闭
    this.mixinSocketClose();
  },
  beforeDestroy() {
    // 连接关闭
    this.mixinSocketClose();
  },
  methods: {
    // 初始化
    mixinInitWebsocket(url = this.mixinSocketUrl, fnAfterOpen = this.mixinSocketAfterOpen) {
      if (url) {
        this.mixinSocket = new WebSocket(url);
        this.mixinSocket.onopen = this.mixinSocketOnopen(fnAfterOpen);
        this.mixinSocket.onmessage = this.mixinSocketOnmessage;
        this.mixinSocket.onerror = this.mixinSocketOnerror;
        this.mixinSocket.onclose = this.mixinSocketOnclose;
      }
    },
    // 事件-连接建立
    mixinSocketOnopen(fnAfterOpen) {
      return () => {
        // 后置函数
        fnAfterOpen && fnAfterOpen();
      }
    },
    // 连接建立-后置函数
    mixinSocketAfterOpen() { },
    // 事件-接收数据
    mixinSocketOnmessage() { },
    // 事件-连接错误
    mixinSocketOnerror() { },
    // 事件-连接关闭
    mixinSocketOnclose() { },
    // 方法-发送数据
    mixinSocketSend(data) {
      if (this.mixinSocket && this.mixinSocket.readyState === 1) {
        this.mixinSocket.send(data);
      }
    },
    // 方法-连接关闭
    mixinSocketClose() {
      if (this.mixinSocket) {
        this.mixinSocket.close();
        this.mixinSocket = null;
      }
    },
  },
}
</script>