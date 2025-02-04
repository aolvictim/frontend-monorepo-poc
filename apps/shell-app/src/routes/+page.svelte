<script lang="ts">
	let currentPage = '';
	let content = '';

	async function loadPage(url: string) {
		currentPage = url;
		try {
			const response = await fetch(url);
			content = await response.text();
		} catch (error) {
			console.error('Failed to load page:', error);
			content = 'Failed to load content';
		}
	}
</script>

<div class="layout">
	<nav>
		<ul>
			<li>
				<button
					on:click={() => loadPage('https://aolvictim.github.io/frontend-monorepo-poc/react-app')}
					class:active={currentPage === 'http://localhost:5173/frontend-monorepo-poc/react-app/'}
				>
					Remote React App
				</button>
			</li>
			<li>
				<button
					on:click={() => loadPage('https://aolvictim.github.io/frontend-monorepo-poc/sk-app')}
					class:active={currentPage === 'https://aolvictim.github.io/frontend-monorepo-poc/sk-app'}
				>
					Remote SvelteKit App
				</button>
			</li>
		</ul>
	</nav>
	<main>
		{#if content}
			<iframe title="content" src={currentPage} class="content-frame"></iframe>
		{:else}
			<p>Select an app from the menu</p>
		{/if}
	</main>
</div>

<style>
	.layout {
		display: flex;
		height: 100vh;
	}
	nav {
		width: 200px;
		padding: 20px;
		border-right: 1px solid #ccc;
	}
	main {
		flex: 1;
		padding: 20px;
	}
	ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}
	li {
		margin-bottom: 10px;
	}
	button {
		width: 100%;
		padding: 8px;
		text-align: left;
		border: none;
		background: none;
		cursor: pointer;
	}
	button:hover {
		background: #f0f0f0;
	}
	button.active {
		background: #e0e0e0;
	}
	.content-frame {
		width: 100%;
		height: 100%;
		border: none;
	}
</style>
