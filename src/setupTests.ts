import '@testing-library/jest-dom';

// テスト全体に共通して事前に設定したい内容をここでimportしたり、設定などします
// dayjsのlocale設定や汎用的なmockやスタブの定義をここでしたりします
if (!HTMLDivElement.prototype.animate) {
	HTMLDivElement.prototype.animate = function () {
		return {
			onfinish: () => {},
			cancel: () => {},
			currentTime: 0,
			effect: null,
			finished: Promise.resolve(),
			id: '',
			pause: () => {},
			play: () => {},
			playState: 'idle',
			reverse: () => {},
			commitStyles: () => {},
			updatePlaybackRate: () => {}
			// 他に必要なプロパティがあれば追加
		} as unknown as Animation;
	};
}
