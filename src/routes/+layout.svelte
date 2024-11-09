<script lang="ts">
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import '../app.css';
	import { theme } from '$lib/stores/theme';
	import { onMount } from 'svelte';
	let { children } = $props();

	onMount(() => {
		// システムのテーマ設定の監視を開始
		const unsubscribe = theme.initThemeWatcher();
		return () => unsubscribe?.();
	});
</script>

<ParaglideJS {i18n}>
	{@render children()}
</ParaglideJS>
