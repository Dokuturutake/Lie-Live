<script lang="ts">
	import { Sun, Moon, TreePine } from 'lucide-svelte';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { theme } from '$lib/stores/theme';

	interface ThemeOption {
		value: string;
		label: string;
		icon: typeof Sun; // `icon`の型に`typeof`を使います
	}

	const themes: ThemeOption[] = [
		{ value: 'light', label: 'Light', icon: Sun },
		{ value: 'dark', label: 'Dark', icon: Moon },
		{ value: 'nature', label: 'Nature', icon: TreePine }
	];
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger>
		<button
			class="inline-flex items-center justify-center rounded-md p-2.5 text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
			aria-label="Select theme"
		>
			{#each themes as t}
				{#if $theme === t.value}
					<svelte:component this={t.icon} class="h-5 w-5" aria-hidden="true" />
				{/if}
			{/each}
		</button>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content>
		{#each themes as t}
			<DropdownMenu.Item
				on:click={() => theme.setTheme(t.value)}
				class="flex items-center gap-2"
				role="menuitem"
			>
				<svelte:component this={t.icon} class="h-4 w-4" />
				{t.label}
			</DropdownMenu.Item>
		{/each}
	</DropdownMenu.Content>
</DropdownMenu.Root>
