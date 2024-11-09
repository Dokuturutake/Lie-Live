import { paraglide } from '@inlang/paraglide-sveltekit/vite';
import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig(({ mode }) => ({
	plugins: [
		sveltekit(),
		paraglide({
			project: './project.inlang',
			outdir: './src/lib/paraglide'
		})
	],

	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
		exclude: ['src/**/*.e2e.spec.ts', 'e2e/**/*'],
		globals: true,
		environment: 'jsdom',
		setupFiles: './src/setupTests.ts'
	},
	resolve: {
		conditions: mode === 'test' ? ['browser'] : []
	}
}));
