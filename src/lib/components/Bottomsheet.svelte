<main>
	<div class="drag"></div>
	<slot />
</main>

<style>
	main {
		position: absolute;
		z-index: 1000;
		inset: auto 0 0;
		border-radius: 24px 24px 0 0;
		background: var(--background);
		padding: 24px 16px;
		display: flex;
		align-items: center;
		flex-direction: column;
		gap: 16px;
	}
	.drag {
		height: 6px;
		width: 56px;
		background: var(--input);
		border-radius: 3px;
	}
</style>