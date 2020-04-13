<template>
	<view>
		<button @click="toPage">跳转到首页页面</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods: {
			toPage() {
				// 跳到index的页面
				// 不传参数可以简写成如下
				this.$openPage('index')
			}
		}
	}
</script>

<style lang="less">

</style>
