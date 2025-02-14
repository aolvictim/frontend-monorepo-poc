<script lang="ts">
	import { MyCounterButton } from '@repo/svelte-components';

	let currentPage = '';
	let content = '';
	let isMenuOpen = false;

	async function loadPage(url: string) {
		currentPage = url;
		try {
			const response = await fetch(url);
			content = await response.text();
			if (window.innerWidth < 768) {
				isMenuOpen = false;
			}
		} catch (error) {
			console.error('Failed to load page:', error);
			content = 'Failed to load content';
		}
	}

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function handleKeyDown(event: KeyboardEvent) {
		if (event.key === 'Escape' && isMenuOpen) {
			toggleMenu();
		}
	}
</script>

<div class="layout">
	<button class="menu-toggle" on:click={toggleMenu} aria-label="Toggle menu"> ☰ </button>

	{#if isMenuOpen}
		<button
			class="overlay"
			on:click={toggleMenu}
			on:keydown={handleKeyDown}
			aria-label="Close menu overlay"
		></button>
	{/if}

	<nav class:open={isMenuOpen}>
		<h2>shell-app</h2>
		<h3>Remote Apps</h3>
		<ul>
			<li>
				<button
					on:click={() => loadPage('https://aolvictim.github.io/frontend-monorepo-poc/react-app')}
					class:active={currentPage ===
						'https://aolvictim.github.io/frontend-monorepo-poc/react-app'}
				>
					Remote React App
				</button>
			</li>
			<li>
				<button
					on:click={() => loadPage('https://aolvictim.github.io/frontend-monorepo-poc/svelte-app')}
					class:active={currentPage ===
						'https://aolvictim.github.io/frontend-monorepo-poc/svelte-app'}
				>
					Remote SvelteKit App
				</button>
			</li>
		</ul>
		<h3>@repo/svelte-components</h3>
		<ul>
			<li>Counter 1: <MyCounterButton /></li>
			<li>Counter 2: <MyCounterButton /></li>
			<li>Counter 3: <MyCounterButton /></li>
		</ul>
		<h3>Remote svelte components</h3>
		<ul>
			<li></li>
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
		flex-direction: column;
		min-height: 100vh;
		position: relative;
	}

	.menu-toggle {
		position: fixed;
		top: 1rem;
		left: 1rem;
		z-index: 1000;
		padding: 0.5rem;
		font-size: 1.5rem;
		background: white;
		border: 1px solid #ccc;
		border-radius: 4px;
		cursor: pointer;
		display: block;
	}

	.overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
		z-index: 90;
		border: none;
		cursor: pointer;
	}

	nav {
		background-color: #f0f0f0;
		position: fixed;
		top: 0;
		left: -100%;
		width: 80%;
		max-width: 300px;
		height: 100vh;
		transition: left 0.3s ease;
		z-index: 100;
		padding: 4rem 1rem 1rem;
		box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
	}

	nav.open {
		left: 0;
	}

	main {
		flex: 1;
		width: 100%;
		padding-top: 4rem;
	}

	ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	li {
		margin-bottom: 0.5rem;
	}

	button {
		width: 100%;
		padding: 0.8rem;
		text-align: left;
		border: none;
		background: none;
		cursor: pointer;
		border-radius: 4px;
		transition:
			background-color 0.2s,
			color 0.2s;
	}

	button:hover {
		background: #e0e0e0;
	}

	button.active {
		background: #d0d0d0;
		font-weight: bold;
	}

	.content-frame {
		width: 100%;
		height: calc(100vh - 4rem);
		border: none;
	}

	@media (min-width: 768px) {
		.layout {
			flex-direction: row;
		}

		.menu-toggle {
			display: none;
		}

		.overlay {
			display: none !important;
		}

		nav {
			position: relative;
			left: 0;
			width: 250px;
			padding-top: 1rem;
			box-shadow: none;
			border-right: 1px solid #ddd;
		}

		main {
			padding-top: 0;
		}

		.content-frame {
			height: 100vh;
		}
	}
</style>
