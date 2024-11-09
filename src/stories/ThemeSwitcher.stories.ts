import type { Meta, StoryObj } from '@storybook/svelte';
import ThemeSwitcher from '$lib/components/ThemeSwitcher.svelte';

const meta = {
	title: 'Components/ThemeSwitcher',
	component: ThemeSwitcher,
	tags: ['autodocs']
} satisfies Meta<ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
