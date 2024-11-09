import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent, waitFor } from '@testing-library/svelte';
import ThemeSwitcher from '$lib/components/ThemeSwitcher.svelte';
import { theme } from '$lib/stores/theme';

describe('ThemeSwitcher', () => {
	it('should change theme when clicked', async () => {
		const { getByLabelText, getAllByRole } = render(ThemeSwitcher);

		// テーマボタンをクリック
		const themeButton = getByLabelText('Select theme');
		await fireEvent.click(themeButton);
		await fireEvent.mouseDown(themeButton);

		// ドロップダウンメニューの項目をクリック
		const menuItems = await waitFor(() => getAllByRole('menuitem'));
		await fireEvent.click(menuItems[1]); // Darkテーマを選択

		let currentTheme;
		theme.subscribe((value) => {
			currentTheme = value;
		})();

		expect(currentTheme).toBe('dark');
	});
});
