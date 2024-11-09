import { browser } from '$app/environment';
import { writable } from 'svelte/store';

type Theme = 'light' | 'dark' | 'nature';

// ローカルストレージからテーマを取得する初期化関数
const getInitialTheme = (): Theme => {
	if (!browser) return 'light';
	return (localStorage.getItem('theme') as Theme) || 'light';
};

// テーマストアの作成
const createThemeStore = () => {
	const { subscribe, set } = writable<Theme>(getInitialTheme());

	return {
		subscribe,
		setTheme: (theme: Theme) => {
			if (browser) {
				localStorage.setItem('theme', theme);
				document.documentElement.className = theme;
			}
			set(theme);
		},
		// システムのカラーモード設定を監視
		initThemeWatcher: () => {
			if (browser) {
				const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
				const handleChange = (e: MediaQueryListEvent) => {
					const theme = e.matches ? 'dark' : 'light';
					document.documentElement.className = theme;
					set(theme);
				};
				mediaQuery.addEventListener('change', handleChange);
				return () => mediaQuery.removeEventListener('change', handleChange);
			}
		}
	};
};

export const theme = createThemeStore();
