<script>
	export let id, text, type, placeholder, action, value;
</script>

<div class="input-container">
	<label for={id}>{text}</label>
	<input
		{type}
		{id}
		name={id}
		{placeholder}
		on:click={action}
		value={value ?? ""}
		required
		autocomplete="off"
	/>
</div>

<style>
	.input-container {
		display: flex;
		flex-direction: column;
		gap: 8px;
		width: 100%;
	}
</style>
