<p align="center">
  <img src="https://github.com/CoinSwap-Space/telegram-stellar-ride/blob/develop/public/images/icon.png?raw=true" width="20%" alt="<code>Stellar-Ride-Challenges</code>-logo">
</p>
<p align="center">
    <h1 align="center"><code>Stellar Ride Challenges</code></h1>
</p>
<p align="center">
    <em>Telegram Mini App</em>
</p>
<p align="center">
	<!-- Shields.io badges disabled, using skill icons. --></p>
<p align="center">
		<em>Built with the tools and technologies:</em>
</p>
<p align="center">
	<a href="https://skillicons.dev">
		<img src="https://skillicons.dev/icons?i=css,md,react&theme=light">
	</a>
</p>
<br>

## 🔗 Table of Contents

- [📍 Overview](#-overview)
- [👾 Features](#-features)
- [📁 Project Structure](#-project-structure)
  - [📂 Project Index](#-project-index)
- [🚀 Getting Started](#-getting-started)
  - [☑️ Prerequisites](#-prerequisites)
  - [⚙️ Installation](#-installation)
  - [🤖 Usage](#🤖-usage)

---

## 📍 Overview

The Telegram mini-app is seamlessly integrated with the Metapro ecosystem, offering a gamified user experience that includes wallet-based login, leaderboards, challenges, and a referral system. Users authenticate via the Metapro Wallet, which provides secure access to personalized challenges and enables management of their digital assets across web3 platforms.

---

## 👾 Features

|     |     Feature      | Summary                                                                                                                                                                                                                                                          |
| :-- | :--------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 🔩  | **Code Quality** | <ul><li>Primary language: TypeScript (78% of files)</li><li>Consistent coding styles enforced with ESLint and Prettier</li></ul>                                                                                                                                 |
| 🔌  | **Integrations** | <ul><li>Integrates with WalletConnect for mobile wallet connectivity</li><li>Uses Telegram Web Apps for bot integration</li><li>Supports internationalization with i18next and next-i18next</li></ul>                                                            |
| 🧩  |  **Modularity**  | <ul><li>Highly modular with microfrontends architecture</li><li>Uses React Router Dom for component-based routing</li><li>State management with Redux Toolkit and Redux Thunk</li></ul>                                                                          |
| ⚡️ | **Performance**  | <ul><li>Next.js optimized for performance with automatic code splitting</li><li>Uses Framer Motion and React Motion for smooth animations</li><li>Lighthouse score not explicitly mentioned but can be improved by optimizing images and cache control</li></ul> |
| 📦  | **Dependencies** | <ul><li>Over 50 dependencies, including both npm and yarn packages</li><li>Contains both production and development dependencies</li></ul>                                                                                                                       |
| 🚀  | **Scalability**  | <ul><li>Next.js optimized for serverless functions and static site generation</li><li>React Query used for data fetching with caching and pagination</li></ul>                                                                                                   |

**Installation and Usage Commands:**

```sh
# Using yarn
❯ yarn install
```

---

## 📁 Project Structure

```sh
└── /
    ├── api
    │   └── axios.ts
    ├── components
    │   ├── GeneralPlayerBox
    │   └── PlayersView
    ├── context
    │   ├── Providers.tsx
    │   ├── RefreshContext.tsx
    │   ├── ThemeContext.tsx
    │   └── Web3ProviderContext.tsx
    ├── global.d.ts
    ├── hooks
    │   ├── useChallenges.ts
    │   ├── useInitialFetch.ts
    │   ├── useRefresh.ts
    │   └── useSignMessage.tsx
    ├── layouts
    │   ├── AppLayout.tsx
    │   └── TopBar.tsx
    ├── next-i18next.config.js
    ├── next.config.mjs
    ├── package.json
    ├── pages
    │   ├── _app.tsx
    │   ├── _document.tsx
    │   ├── challenges
    │   ├── index.tsx
    │   ├── leaderboard
    │   ├── login
    │   └── profile
    ├── postcss.config.mjs
    ├── providers
    │   ├── index.ts
    │   ├── ModalProvider.tsx
    │   └── StoreProvider.tsx
    ├── public
    │   ├── favicon.ico
    │   ├── fonts
    │   ├── images
    │   └── locales
    ├── README.md
    ├── sdk
    │   └── interfaces
    ├── store
    │   ├── app
    │   ├── hooks.ts
    │   ├── leaderboard
    │   ├── nft
    │   ├── referral
    │   ├── store.ts
    │   └── user
    ├── styled.d.ts
    ├── styles
    │   ├── Global.tsx
    │   └── globals.css
    ├── tailwind.config.ts
    ├── tsconfig.json
    ├── uikit
    │   ├── components
    │   ├── index.ts
    │   ├── ResetCSS.tsx
    │   └── theme
    ├── utils
    │   ├── areStringsEqual.ts
    │   ├── determinateChallengeStatus.ts
    │   ├── formatDateRange.ts
    │   ├── getApiHeaders.ts
    │   ├── getMetaproDeepLink.ts
    │   ├── getSignature.ts
    │   ├── getTimeDifferenceDuration.ts
    │   ├── getURLParams.ts
    │   ├── handleQueryErrorMessage.ts
    │   ├── handleStaticAssetOperations.ts
    │   ├── index.ts
    │   ├── isArrayPopulated.ts
    │   ├── logMessage.ts
    │   ├── shortenText.ts
    │   ├── translation.ts
    │   └── useExplorerItems.ts
    ├── views
    │   ├── Challenges
    │   ├── Leaderboard
    │   ├── Loading
    │   ├── Login
    │   └── Profile
    └── yarn.lock
```

### 📂 Project Index

<details open>
	<summary><b><code>/</code></b></summary>
	<details> <!-- __root__ Submodule -->
		<summary><b>__root__</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='/global.d.ts'>global.d.ts</a></b></td>
				<td>"Defines global type definitions for Ethereum wallet interaction via `window.ethereum` object, enabling seamless integration with MetaMask and other compatible wallets across the project."</td>
			</tr>
			<tr>
				<td><b><a href='/next-i18next.config.js'>next-i18next.config.js</a></b></td>
				<td>"Manages internationalization (i18n) for the project, defining locales and their paths, enabling unescaped interpolation."</td>
			</tr>
			<tr>
				<td><b><a href='/next.config.mjs'>next.config.mjs</a></b></td>
				<td>"next.config.mjs configures Next.js app for React Strict Mode disablement, styled-components compilation, global HTTPS image fetching, and English locale."</td>
			</tr>
			<tr>
				<td><b><a href='/package.json'>package.json</a></b></td>
				<td>" package.json manages project metadata and dependencies, enabling Next.js development and build scripts with environment-specific configurations."</td>
			</tr>
			<tr>
				<td><b><a href='/postcss.config.mjs'>postcss.config.mjs</a></b></td>
				<td>Manages PostCSS configuration for Tailwind CSS integration across the project.</td>
			</tr>
			<tr>
				<td><b><a href='/styled.d.ts'>styled.d.ts</a></b></td>
				<td>**Defines styled-components theme interface based on MetaprotocolTheme.**</td>
			</tr>
			<tr>
				<td><b><a href='/tailwind.config.ts'>tailwind.config.ts</a></b></td>
				<td>"Defines Tailwind CSS configuration for content paths and theme extensions, enabling custom color variables."</td>
			</tr>
			<tr>
				<td><b><a href='/tsconfig.json'>tsconfig.json</a></b></td>
				<td>- **Defines TypeScript configuration for the project**, enabling experimental features like decorators and class fields, targeting ES5 with DOM library support, and configuring module resolution for better import handling<br>- It includes all .ts and .tsx files while excluding node_modules.</td>
			</tr>
			</table>
		</blockquote>
	</details>
	<details> <!-- api Submodule -->
		<summary><b>api</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='/api/axios.ts'>axios.ts</a></b></td>
				<td>"Establishes an authenticated API client using Axios, configured to communicate with the user service via `NEXT_PUBLIC_USERS_SERVICE_API_URL`, enabling secure interaction with authentication-related endpoints."</td>
			</tr>
			</table>
		</blockquote>
	</details>
	<details> <!-- components Submodule -->
		<summary><b>components</b></summary>
		<blockquote>
			<details>
				<summary><b>GeneralPlayerBox</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='/components/GeneralPlayerBox/general.tsx'>general.tsx</a></b></td>
						<td>"Defines a loading animation using CSS keyframes via styled-components, applying a blur effect that pulsates between zero and two pixels."</td>
					</tr>
					<tr>
						<td><b><a href='/components/GeneralPlayerBox/index.tsx'>index.tsx</a></b></td>
						<td>"Renders GeneralPlayerBox view for Telegram mini-app, displaying player info (username, avatar, score), handling loading state, and adjusting text opacity based on leaderboard emptiness."</td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>PlayersView</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='/components/PlayersView/index.tsx'>index.tsx</a></b></td>
						<td>- "Manages player data retrieval and display for Telegram mini-app's Players view<br>- Implements infinite scrolling, loading indicator, and animated list using Framer Motion."</td>
					</tr>
					<tr>
						<td><b><a href='/components/PlayersView/types.ts'>types.ts</a></b></td>
						<td>"The PlayersView/types.ts file defines interfaces and enums governing scores data types, enabling structured handling of leaderboard and challenge-related information throughout the application."</td>
					</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
	<details> <!-- context Submodule -->
		<summary><b>context</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='/context/Providers.tsx'>Providers.tsx</a></b></td>
				<td>**Centralizes Context Providers**: Manages ThemeContextProvider, StoreProvider, and ModalProvider to ensure all child components across the Telegram mini-app have access to these contexts, enabling consistent state management.</td>
			</tr>
			<tr>
				<td><b><a href='/context/RefreshContext.tsx'>RefreshContext.tsx</a></b></td>
				<td>"Manages shared state via context API: increments 'slow' every minute, 'fast' every ten seconds, providing real-time updates to child components."</td>
			</tr>
			<tr>
				<td><b><a href='/context/ThemeContext.tsx'>ThemeContext.tsx</a></b></td>
				<td>- The ThemeContextProvider manages the theme state (dark/light) across the Telegram mini-app<br>- It retrieves user preference from local storage, toggles themes on demand, and persists preferences<br>- This context enables consistent theming throughout the app.</td>
			</tr>
			<tr>
				<td><b><a href='/context/Web3ProviderContext.tsx'>Web3ProviderContext.tsx</a></b></td>
				<td>- Manages Web3 provider connection, WalletConnect initialization and session handling<br>- Provides context for account, chain ID, QR URI, active status, connect/disconnect functions, and event listeners for WalletConnect updates.</td>
			</tr>
			</table>
		</blockquote>
	</details>
	<details> <!-- hooks Submodule -->
		<summary><b>hooks</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='/hooks/useChallenges.ts'>useChallenges.ts</a></b></td>
				<td>- "Manages challenges data retrieval for Telegram mini-app<br>- Filters challenges by maps and statuses, fetches related scores and user profiles, handles errors, and provides loading state."</td>
			</tr>
			<tr>
				<td><b><a href='/hooks/useInitialFetch.ts'>useInitialFetch.ts</a></b></td>
				<td>"Manages initial fetch and login process for Telegram mini-app, retrieving user data from Redux store, initializing Telegram login mutation, checking Telegram WebApp availability, and navigating to login page upon successful login."</td>
			</tr>
			<tr>
				<td><b><a href='/hooks/useRefresh.ts'>useRefresh.ts</a></b></td>
				<td>"Provides access to fast and slow refresh functions from the RefreshContext."</td>
			</tr>
			<tr>
				<td><b><a href='/hooks/useSignMessage.tsx'>useSignMessage.tsx</a></b></td>
				<td>"Manages message signing via Web3 provider, handling state and errors for secure user interactions."</td>
			</tr>
			</table>
		</blockquote>
	</details>
	<details> <!-- layouts Submodule -->
		<summary><b>layouts</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='/layouts/AppLayout.tsx'>AppLayout.tsx</a></b></td>
				<td>- **Manages user authentication and navigation in the Telegram mini-app's main layout.** It retrieves user data and Web3 context, checks if the user's wallet is added, redirects to a loading screen if unauthenticated, and polls user data at regular intervals<br>- Conditionally renders the main layout with stars background and TopBar upon successful authentication.</td>
			</tr>
			<tr>
				<td><b><a href='/layouts/TopBar.tsx'>TopBar.tsx</a></b></td>
				<td>- **Manages user navigation and referral code generation.** The TopBar component retrieves user data and Web3 context, checks wallet status, fetches referral codes, and handles button display based on route and user status<br>- It enables users to generate and copy referral links.</td>
			</tr>
			</table>
		</blockquote>
	</details>
	<details> <!-- pages Submodule -->
		<summary><b>pages</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='/pages/index.tsx'>index.tsx</a></b></td>
				<td>"Facilitates internationalization at runtime by fetching translations on the server side during Next.js static page generation."</td>
			</tr>
			<tr>
				<td><b><a href='/pages/_app.tsx'>_app.tsx</a></b></td>
				<td>"Manages Telegram WebApp initialization, provides Web3 context, renders pages within a global layout after ensuring the WebApp is ready."</td>
			</tr>
			<tr>
				<td><b><a href='/pages/_document.tsx'>_document.tsx</a></b></td>
				<td>"Customizes Next.js's default HTML document structure for Telegram mini-app, setting language to English, integrating Telegram Web App SDK with lazy loading, and rendering main content with Next.js scripts."</td>
			</tr>
			</table>
			<details>
				<summary><b>challenges</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='/pages/challenges/index.tsx'>index.tsx</a></b></td>
						<td>"Renders Challenges view for Telegram mini-app, fetching game data by ID, leaderboard ID, and challenges, displaying loading state, and conditionally rendering Challenges component."</td>
					</tr>
					</table>
					<details>
						<summary><b>[challengeId]</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='/pages/challenges/[challengeId]/index.tsx'>index.tsx</a></b></td>
								<td>- The ChallengePage component fetches and displays a specific challenge's details within the Telegram mini-app<br>- It retrieves the challenge ID from the URL query parameters, fetches associated game data using an environment variable, and acquires challenge-specific data via query hooks<br>- The fetched game and challenge data are then passed to the Challenge view for rendering<br>- A loading state is displayed while fetching data.</td>
							</tr>
							</table>
							<details>
								<summary><b>players</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='/pages/challenges/[challengeId]/players/index.tsx'>index.tsx</a></b></td>
										<td>The ChallengePlayersPage component fetches game and challenge data based on IDs from URL query parameters and environment variables, then displays the Players view with these fetched data while showing a loading state during retrieval.</td>
									</tr>
									</table>
								</blockquote>
							</details>
						</blockquote>
					</details>
				</blockquote>
			</details>
			<details>
				<summary><b>leaderboard</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='/pages/leaderboard/index.tsx'>index.tsx</a></b></td>
						<td>**Renders Leaderboard view for Telegram mini-app**, fetching game data by ID from env vars, displaying loading state, and wrapping Leaderboard component in PageWrapper for loading handling.</td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>login</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='/pages/login/index.tsx'>index.tsx</a></b></td>
						<td>"Pages/Login/Index.tsx handles user login, providing static props for internationalization ('i18n') support."</td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>profile</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='/pages/profile/index.tsx'>index.tsx</a></b></td>
						<td>"Renders the Profile view for a Telegram mini-app, fetching game data by ID and displaying it with a loading state."</td>
					</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
	<details> <!-- providers Submodule -->
		<summary><b>providers</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='/providers/index.ts'>index.ts</a></b></td>
				<td>**Manages state and modal components across providers.**</td>
			</tr>
			<tr>
				<td><b><a href='/providers/ModalProvider.tsx'>ModalProvider.tsx</a></b></td>
				<td>"Manages modals across the Telegram mini-app, handling opening/closing, content/configuration, and providing context functions to child components."</td>
			</tr>
			<tr>
				<td><b><a href='/providers/StoreProvider.tsx'>StoreProvider.tsx</a></b></td>
				<td>The StoreProvider component initializes and provides a singleton Redux store instance to its child components within the Telegram mini-app.</td>
			</tr>
			</table>
		</blockquote>
	</details>
	<details> <!-- public Submodule -->
		<summary><b>public</b></summary>
		<blockquote>
			<details>
				<summary><b>locales</b></summary>
				<blockquote>
					<details>
						<summary><b>en</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='/public/locales/en/common.json'>common.json</a></b></td>
								<td>- **Translates English common phrases into game-specific language.** This JSON file houses game-related text strings like "Connect", "Challenge", "Leaderboard", and user interactions such as "Join space battle"<br>- It supports the localization of the game's interface, enabling users to engage with common functionalities in their preferred language.</td>
							</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
		</blockquote>
	</details>
	<details> <!-- sdk Submodule -->
		<summary><b>sdk</b></summary>
		<blockquote>
			<details>
				<summary><b>interfaces</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='/sdk/interfaces/app.interface.ts'>app.interface.ts</a></b></td>
						<td>- **Defines enumerations and interfaces for applications**, including statuses, platforms, engines, categories, and base properties<br>- **Structures application data** with items, schemas, and extended base properties<br>- **Exports these definitions** for use across the SDK.</td>
					</tr>
					<tr>
						<td><b><a href='/sdk/interfaces/auction.interface.ts'>auction.interface.ts</a></b></td>
						<td>- The Auction Interface defines enumerations for auction states, progress, types, filter keys and an interface for auction schema<br>- It facilitates structured management of NFT auctions within the broader SDK architecture.</td>
					</tr>
					<tr>
						<td><b><a href='/sdk/interfaces/authorization.interface.ts'>authorization.interface.ts</a></b></td>
						<td>"Manages user authentication data across the SDK, encapsulating userId, accessToken and optional account details."</td>
					</tr>
					<tr>
						<td><b><a href='/sdk/interfaces/customLazyQuery.interface.ts'>customLazyQuery.interface.ts</a></b></td>
						<td>"Defines custom lazy query interface for RTK Query, encapsulating state, timestamps, and last promise info."</td>
					</tr>
					<tr>
						<td><b><a href='/sdk/interfaces/index.ts'>index.ts</a></b></td>
						<td>**Manages and exports key interfaces** for various aspects of the SDK, including user management, authorization, app configuration, referrals, leaderboard tracking, NFT tokens, sorting parameters, auction details, and custom lazy query definitions.</td>
					</tr>
					<tr>
						<td><b><a href='/sdk/interfaces/leaderboard.interface.ts'>leaderboard.interface.ts</a></b></td>
						<td>"Defines interfaces for Leaderboard states, Challenge statuses, various scoring models (Challenge, Score, ScoreTotal), and maps used within the game's leaderboard system."</td>
					</tr>
					<tr>
						<td><b><a href='/sdk/interfaces/nftToken.interface.ts'>nftToken.interface.ts</a></b></td>
						<td>- **Defines enumerations and interfaces for NFT tokens**, enabling structured representation of token details like creator, contract address, and properties<br>- It facilitates management and processing of NFT metadata within the broader SDK architecture.</td>
					</tr>
					<tr>
						<td><b><a href='/sdk/interfaces/referrals.interface.ts'>referrals.interface.ts</a></b></td>
						<td>**Defines enum for referral statuses and interface for referral settings**, enabling project-wide configuration of referral systems.</td>
					</tr>
					<tr>
						<td><b><a href='/sdk/interfaces/sort.interface.ts'>sort.interface.ts</a></b></td>
						<td>"Defines interfaces for sorting options, direction, change events, pagination parameters, and sort params, enabling consistent data handling across the SDK's interface layer."</td>
					</tr>
					<tr>
						<td><b><a href='/sdk/interfaces/user.interface.ts'>user.interface.ts</a></b></td>
						<td>"Defines interfaces for user-related data and operations within the SDK's interface layer."</td>
					</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
	<details> <!-- store Submodule -->
		<summary><b>store</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='/store/hooks.ts'>hooks.ts</a></b></td>
				<td>"Centralizes Redux hook types for consistent usage across the application."</td>
			</tr>
			<tr>
				<td><b><a href='/store/store.ts'>store.ts</a></b></td>
				<td>"Coordinates Redux store configuration with middleware for RTK query APIs (user, referral, nft, leaderboard, app) and thunk, enabling async actions."</td>
			</tr>
			</table>
			<details>
				<summary><b>app</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='/store/app/app.ts'>app.ts</a></b></td>
						<td>- "Manages app-specific API interactions within the store<br>- Facilitates retrieval of apps by ID via REST calls to 'teams_service_api'."</td>
					</tr>
					<tr>
						<td><b><a href='/store/app/index.ts'>index.ts</a></b></td>
						<td>"Exports the main application API for use across the store application."</td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>leaderboard</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='/store/leaderboard/index.ts'>index.ts</a></b></td>
						<td>**Coordinates leaderboard functionality across the store.**</td>
					</tr>
					<tr>
						<td><b><a href='/store/leaderboard/leaderboard.ts'>leaderboard.ts</a></b></td>
						<td>- **Manages leaderboard API interactions**, facilitating retrieval of challenges, scores, maps, and totals via Redux Toolkit's query middleware<br>- Supports filtering, pagination, and personal score tracking.</td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>nft</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='/store/nft/index.ts'>index.ts</a></b></td>
						<td>"The NFT index file exports the `nftApi`, facilitating unified access to Non-Fungible Token functionalities across the store module."</td>
					</tr>
					<tr>
						<td><b><a href='/store/nft/nft.api.ts'>nft.api.ts</a></b></td>
						<td>"Manages user NFT retrieval, offering filtered querying via address, contract, standard, protocol, network, pagination, sorting, and more, returning a count and list of NFTs."</td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>referral</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='/store/referral/index.ts'>index.ts</a></b></td>
						<td>"Manages referral-related state and API interactions within the store."</td>
					</tr>
					<tr>
						<td><b><a href='/store/referral/referral.api.ts'>referral.api.ts</a></b></td>
						<td>- **Manages referral service API interactions.** This module exports a Redux Toolkit query API named `referralApi` that handles communication with the referral service backend<br>- It includes endpoints to fetch referral settings, retrieve or generate user referral codes, and create new referral codes.</td>
					</tr>
					<tr>
						<td><b><a href='/store/referral/referral.slice.ts'>referral.slice.ts</a></b></td>
						<td>- "Handles referral settings state management within the Redux Toolkit slice 'referral_slice'<br>- Fetches and stores project referral settings upon successful API retrieval."</td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>user</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='/store/user/index.ts'>index.ts</a></b></td>
						<td>"Orchestrates user-related functionality and API interactions within the store."</td>
					</tr>
					<tr>
						<td><b><a href='/store/user/user.api.ts'>user.api.ts</a></b></td>
						<td>- **Handles user-related API operations.** This file exports an RTK Query instance `userApi` that defines endpoints for fetching and manipulating user data, including user profiles, wallets, and authentication methods like Telegram login<br>- It also provides hooks to interact with these endpoints in components throughout the application.</td>
					</tr>
					<tr>
						<td><b><a href='/store/user/user.slice.ts'>user.slice.ts</a></b></td>
						<td>"Manages user state & Redux Toolkit slice for user-related actions, integrating with userApi for async data flow."</td>
					</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
	<details> <!-- styles Submodule -->
		<summary><b>styles</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='/styles/Global.tsx'>Global.tsx</a></b></td>
				<td>"Centralizes global styles like fonts, background colors, and scrollbar customizations using themed variables."</td>
			</tr>
			<tr>
				<td><b><a href='/styles/globals.css'>globals.css</a></b></td>
				<td>"Centralizes global styles using Tailwind CSS's base layers and custom fonts MagistralCond-Medium and Magistral-ExtraBold."</td>
			</tr>
			</table>
		</blockquote>
	</details>
	<details> <!-- uikit Submodule -->
		<summary><b>uikit</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='/uikit/index.ts'>index.ts</a></b></td>
				<td>**Exports UI Kit components and theme for project-wide usage.**</td>
			</tr>
			<tr>
				<td><b><a href='/uikit/ResetCSS.tsx'>ResetCSS.tsx</a></b></td>
				<td>"Resets browser defaults styles and standardizes font family across the UI Kit."</td>
			</tr>
			</table>
			<details>
				<summary><b>components</b></summary>
				<blockquote>
					<details>
						<summary><b>AuctionTimeframe</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='/uikit/components/AuctionTimeframe/AuctionTimeframe.tsx'>AuctionTimeframe.tsx</a></b></td>
								<td>"Manages auction timeframe display, formatting duration based on current auction state, supporting various sizes and layouts."</td>
							</tr>
							<tr>
								<td><b><a href='/uikit/components/AuctionTimeframe/index.ts'>index.ts</a></b></td>
								<td>"Defines and exports the AuctionTimeframe component and its size type, integral to Uikit's composable architecture."</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>Button</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='/uikit/components/Button/Button.tsx'>Button.tsx</a></b></td>
								<td>**Defines a reusable Button component with optional startIcon, endIcon, varying sizes and styles.**</td>
							</tr>
							<tr>
								<td><b><a href='/uikit/components/Button/IconButton.tsx'>IconButton.tsx</a></b></td>
								<td>The IconButton component enhances UI Kit's Button with custom styling and size management, enabling icon display alongside text.</td>
							</tr>
							<tr>
								<td><b><a href='/uikit/components/Button/index.tsx'>index.tsx</a></b></td>
								<td>"Exports UI Kit's Button component with variants and sizes, along with IconButton, facilitating button customization across the project."</td>
							</tr>
							<tr>
								<td><b><a href='/uikit/components/Button/StyledButton.tsx'>StyledButton.tsx</a></b></td>
								<td>- **Defines and exports StyledButton component**, a styled `button` with customizable variants (e.g., PRIMARY, SECONDARY), sizes (SM, DEFAULT), and states (loading, disabled)<br>- It includes hover effects and adjusts styles based on variant theme.</td>
							</tr>
							<tr>
								<td><b><a href='/uikit/components/Button/theme.ts'>theme.ts</a></b></td>
								<td>"Defines button themes for UI Kit's dark and light modes."</td>
							</tr>
							<tr>
								<td><b><a href='/uikit/components/Button/types.ts'>types.ts</a></b></td>
								<td>**Defines Button component props and theme for UI Kit.**</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>ChallengeRow</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='/uikit/components/ChallengeRow/ChallengeRow.tsx'>ChallengeRow.tsx</a></b></td>
								<td>- **Manages Challenge Row Display**: This component renders a challenge row with status badge, timeframe indicator, personal score, prize pool, and a 'Challenge Details' button<br>- It dynamically switches display based on challenge status (active or not), using memoization for performance optimization.</td>
							</tr>
							<tr>
								<td><b><a href='/uikit/components/ChallengeRow/index.ts'>index.ts</a></b></td>
								<td>"Manages display of challenge rows with associated status badges."</td>
							</tr>
							</table>
							<details>
								<summary><b>components</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='/uikit/components/ChallengeRow/components/ChallengeStatusBadge.tsx'>ChallengeStatusBadge.tsx</a></b></td>
										<td>"Manages challenge status badges, using given status to determine color scheme."</td>
									</tr>
									</table>
								</blockquote>
							</details>
						</blockquote>
					</details>
					<details>
						<summary><b>Checkbox</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='/uikit/components/Checkbox/Checkbox.tsx'>Checkbox.tsx</a></b></td>
								<td>- **Manages Checkbox UI**: Renders a styled checkbox with optional label<br>- Utilizes React Motion for animated checkmark appearance based on checked state<br>- Triggers onChange event upon click, supporting controlled usage.</td>
							</tr>
							<tr>
								<td><b><a href='/uikit/components/Checkbox/index.ts'>index.ts</a></b></td>
								<td>**Provides reusable Checkbox UI component**.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>ContentCard</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='/uikit/components/ContentCard/ContentCard.tsx'>ContentCard.tsx</a></b></td>
								<td>"Defines reusable ContentCard component with Flex layout, accepting props like children, disabled, and styled-components theme for custom styling."</td>
							</tr>
							<tr>
								<td><b><a href='/uikit/components/ContentCard/index.ts'>index.ts</a></b></td>
								<td>"Provides the default export for ContentCard component from its source file."</td>
							</tr>
							<tr>
								<td><b><a href='/uikit/components/ContentCard/types.ts'>types.ts</a></b></td>
								<td>- **Defines props for ContentCard component**, extending FlexProps and BackgroundProps<br>- Enables passing ReactNode children and optional disabled boolean prop<br>- Crucial for UIKit's card-based layouts.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>ErrorMessage</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='/uikit/components/ErrorMessage/index.tsx'>index.tsx</a></b></td>
								<td>**Styles Error Message**: Applies theming and formatting to display error messages consistently across UI Kit components.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>FallbackImage</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='/uikit/components/FallbackImage/FallbackImage.tsx'>FallbackImage.tsx</a></b></td>
								<td>- The `FallbackImage.tsx` component dynamically handles image display, ensuring a default or placeholder image (`defaultImageSrc`) is shown when the primary image (`src`) fails to load<br>- It uses Next.js's Image component with lazy loading and error handling to switch to the fallback image upon failure.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>Flex</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='/uikit/components/Flex/Box.tsx'>Box.tsx</a></b></td>
								<td>"Defines reusable 'Box' component using styled-components, importing themeable props from styled-system for layout customization."</td>
							</tr>
							<tr>
								<td><b><a href='/uikit/components/Flex/Flex.tsx'>Flex.tsx</a></b></td>
								<td>"Defines Flex component using styled-components, applying flexbox utilities and optional props like fullWidth, gap, clickable."</td>
							</tr>
							<tr>
								<td><b><a href='/uikit/components/Flex/index.tsx'>index.tsx</a></b></td>
								<td>"Exports reusable 'Box' and 'Flex' components from the UI Kit, enabling layout configuration across the application."</td>
							</tr>
							<tr>
								<td><b><a href='/uikit/components/Flex/types.ts'>types.ts</a></b></td>
								<td>"Defines props for Flex component, combining styled-system props with custom ones like 'gap', 'fullWidth', and 'clickable' to enable advanced layout control."</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>IconWrapper</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='/uikit/components/IconWrapper/IconWrapper.tsx'>IconWrapper.tsx</a></b></td>
								<td>"Wraps and styles React icons within Flex components, supporting color and width customization."</td>
							</tr>
							<tr>
								<td><b><a href='/uikit/components/IconWrapper/index.ts'>index.ts</a></b></td>
								<td>"Exports default IconWrapper component from ./IconWrapper, facilitating consistent icon usage across UI Kit."</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>Input</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='/uikit/components/Input/index.ts'>index.ts</a></b></td>
								<td>"Exports the Input component and its assets, facilitating consistent UI input across the project."</td>
							</tr>
							<tr>
								<td><b><a href='/uikit/components/Input/Input.tsx'>Input.tsx</a></b></td>
								<td>- **Manages user input fields**: This component handles various types of inputs (text, number), with options for labels, icons, error messages, and restrictions<br>- It supports multiline text areas with character limits displayed.</td>
							</tr>
							<tr>
								<td><b><a href='/uikit/components/Input/InputAssets.tsx'>InputAssets.tsx</a></b></td>
								<td>- **Defines reusable UI components for inputs**, including labels with optional bold text, side texts, top/bottom descriptions, error messages, and success messages<br>- These components facilitate building flexible and informative input fields within the UI Kit.</td>
							</tr>
							<tr>
								<td><b><a href='/uikit/components/Input/types.ts'>types.ts</a></b></td>
								<td>"Defines reusable input component types, combining Material UI's TextFieldProps with project-specific props like label customization, error handling, and conditional icon display."</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>MessageBox</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='/uikit/components/MessageBox/index.tsx'>index.tsx</a></b></td>
								<td>"Exports the MessageBox component from its source file, enabling UIkit's message display functionality across the application."</td>
							</tr>
							<tr>
								<td><b><a href='/uikit/components/MessageBox/MessageBox.tsx'>MessageBox.tsx</a></b></td>
								<td>- The MessageBox.tsx file exports a functional component 'MessageBox' that displays a centered message within an SVG icon wrapper<br>- It accepts children (message text) and an optional width prop, providing basic styling and accessibility features like pointer events adjustment based on disabled state.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>PageLoader</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='/uikit/components/PageLoader/index.tsx'>index.tsx</a></b></td>
								<td>"Manages UIKit's PageLoader component, facilitating loading state display across the application."</td>
							</tr>
							<tr>
								<td><b><a href='/uikit/components/PageLoader/PageLoader.tsx'>PageLoader.tsx</a></b></td>
								<td>"Renders a full-screen loading spinner using themed colors."</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>PageWrapper</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='/uikit/components/PageWrapper/index.ts'>index.ts</a></b></td>
								<td>"PageWrapper: Enables modular page composition by exporting a default component."</td>
							</tr>
							<tr>
								<td><b><a href='/uikit/components/PageWrapper/PageWrapper.tsx'>PageWrapper.tsx</a></b></td>
								<td>"Wraps pages with conditional loading indicator."</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>Svg</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='/uikit/components/Svg/index.ts'>index.ts</a></b></td>
								<td>**Exports SVG icons for UI components**, facilitating consistent visual branding across the project's user interfaces.</td>
							</tr>
							<tr>
								<td><b><a href='/uikit/components/Svg/Svg.tsx'>Svg.tsx</a></b></td>
								<td>"Defines a styled SVG component with configurable color, size, and spacing props, ensuring cross-browser compatibility."</td>
							</tr>
							<tr>
								<td><b><a href='/uikit/components/Svg/types.ts'>types.ts</a></b></td>
								<td>"Defines props interface for SVG components, extending React's SVGAttributes & styled-system's SpaceProps, and adding optional theme & fill properties."</td>
							</tr>
							</table>
							<details>
								<summary><b>icons</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='/uikit/components/Svg/icons/AvatarBorder.tsx'>AvatarBorder.tsx</a></b></td>
										<td>"Export Default SvgComponent: A complex SVG with clipRule 'evenodd', mixBlendMode 'screen', and eight radial gradients used for various transformations and color transitions."</td>
									</tr>
									<tr>
										<td><b><a href='/uikit/components/Svg/icons/BackIcon.tsx'>BackIcon.tsx</a></b></td>
										<td>The BackIcon.tsx file exports an SVG component representing a back icon with gradient fills and unique path definitions, used extensively within the UI Kit's components library for navigation purposes across various screens.</td>
									</tr>
									<tr>
										<td><b><a href='/uikit/components/Svg/icons/ButtonSmallCircleWrapper.tsx'>ButtonSmallCircleWrapper.tsx</a></b></td>
										<td>"Defines seven radial gradients with varied colors and transformations for button small circles, plus a clipPath for a circular mask."</td>
									</tr>
									<tr>
										<td><b><a href='/uikit/components/Svg/icons/ButtonSmallWrapper.tsx'>ButtonSmallWrapper.tsx</a></b></td>
										<td>"Defines an SVG component with a complex polygon shape filled with gradient colors, using six radial gradients and one clip path."</td>
									</tr>
									<tr>
										<td><b><a href='/uikit/components/Svg/icons/ButtonWrapper.tsx'>ButtonWrapper.tsx</a></b></td>
										<td>"Defines five radial gradients with varying colors and transformations, used likely for button styling."</td>
									</tr>
									<tr>
										<td><b><a href='/uikit/components/Svg/icons/ChallengeBox.tsx'>ChallengeBox.tsx</a></b></td>
										<td>"This SVG file contains two paths defining a complex shape with gradients 'a-challengeBox' to 'd-challengeBox', all using matrix transformations and blend modes."</td>
									</tr>
									<tr>
										<td><b><a href='/uikit/components/Svg/icons/LeaderboardBox.tsx'>LeaderboardBox.tsx</a></b></td>
										<td>- "This SVG file defines a complex graphic with multiple linear gradients ('a' to 'e') and one radial gradient ('f')<br>- It also includes a clip path for intricate shapes."</td>
									</tr>
									<tr>
										<td><b><a href='/uikit/components/Svg/icons/MessageBoxWrapper.tsx'>MessageBoxWrapper.tsx</a></b></td>
										<td>- **Defines a reusable SVG component "MessageBoxWrapper"**, rendering a complex message box icon with blend modes and radial gradients<br>- It's part of the Svg library within the UIKit components, contributing to UI elements in the project.</td>
									</tr>
									<tr>
										<td><b><a href='/uikit/components/Svg/icons/ModalBg.tsx'>ModalBg.tsx</a></b></td>
										<td>- **Summary:**

The `ModalBg.tsx` file serves as a reusable SVG component for rendering the background of modal windows within the UI Kit (uikit) library<br>- This component is designed to display a gradient fill, indicated by the `fill="url(#a-modalBg)"`, contributing to the visual consistency and branding across different modals in the project<br>- It's part of the Svg folder under the components directory, suggesting that it's one of several SVG-based UI elements maintained within the uikit library.</td>

</tr>
<tr>
<td><b><a href='/uikit/components/Svg/icons/ProfileBorder.tsx'>ProfileBorder.tsx</a></b></td>
<td>- This SVG component renders a complex path with various points and a mix blend mode of 'screen'<br>- It defines six radial gradients with different colors and transformations for use within the SVG.</td>
</tr>
<tr>
<td><b><a href='/uikit/components/Svg/icons/SettingsIcon.tsx'>SettingsIcon.tsx</a></b></td>
<td>"Renders an SVG component with intricate path data defining a complex shape, featuring multiple radial gradients for color transitions."</td>
</tr>
<tr>
<td><b><a href='/uikit/components/Svg/icons/SettingsIconSmall.tsx'>SettingsIconSmall.tsx</a></b></td>
<td>This file exports a React component displaying a colorful settings icon with complex gradients, blending modes, and intricate paths.</td>
</tr>
<tr>
<td><b><a href='/uikit/components/Svg/icons/Stars.tsx'>Stars.tsx</a></b></td>
<td>- "Exports an SVG component depicting a collection of shapes: a circle, two rectangles, and three smaller circles<br>- The clipPath 'a' defines a rectangular clipping region."</td>
</tr>
<tr>
<td><b><a href='/uikit/components/Svg/icons/StellarRideLogo.tsx'>StellarRideLogo.tsx</a></b></td>
<td>- **Summary:**

The `StellarRideLogo.tsx` file, located in the `uikit/components/Svg/icons` directory, defines a reusable SVG component named `StellarRideLogo`<br>- This component is used throughout the project to display the Stellar Ride logo, maintaining consistency in branding across all user interfaces<br>- The main purpose of this file is to encapsulate the logo's visual design and make it easily accessible for use in various parts of the application.</td>

</tr>
<tr>
<td><b><a href='/uikit/components/Svg/icons/TelegramIcon.tsx'>TelegramIcon.tsx</a></b></td>
<td>"Generates SVG icons; specifically, the TelegramIcon with customizable width and height."</td>
</tr>
<tr>
<td><b><a href='/uikit/components/Svg/icons/TikTokIcon.tsx'>TikTokIcon.tsx</a></b></td>
<td>"Defines a TikTok icon SVG component for UI kit."</td>
</tr>
<tr>
<td><b><a href='/uikit/components/Svg/icons/TrashIcon.tsx'>TrashIcon.tsx</a></b></td>
<td>- The TrashIcon.tsx file exports a functional React component named TrashIcon that renders an SVG icon of a trash can<br>- This reusable icon is defined with optional width and height props, defaulting to '24' and '25' respectively, and uses a complex path for its shape filled with the color #5B44D1<br>- It's part of the UIkit library's Svg components, contributing to the project's modular and composable nature for building user interfaces.</td>
</tr>
<tr>
<td><b><a href='/uikit/components/Svg/icons/UsernameBoxWrapper.tsx'>UsernameBoxWrapper.tsx</a></b></td>
<td>"Defines an SVG component 'UsernameBoxWrapper' for UI Kit, combining two paths with radial gradients to create a complex visual effect."</td>
</tr>
<tr>
<td><b><a href='/uikit/components/Svg/icons/XIcon.tsx'>XIcon.tsx</a></b></td>
<td>- The XIcon.tsx file defines a React functional component for displaying an SVG icon of an "X" mark, used for closing or dismissing elements<br>- It's part of the UIkit library's Svg components, and accepts width and height props with default values of 24.</td>
</tr>
<tr>
<td><b><a href='/uikit/components/Svg/icons/YoutubeIcon.tsx'>YoutubeIcon.tsx</a></b></td>
<td>- The `YoutubeIcon.tsx` file exports the `YoutubeIcon` component which renders a SVG representation of a YouTube icon with customizable width and height, maintaining its aspect ratio<br>- It's part of the UI Kit's Svg components library, contributing to consistent visual language across the project.</td>
</tr>
</table>
</blockquote>
</details>
</blockquote>
</details>
<details>
<summary><b>Text</b></summary>
<blockquote>
<table>
<tr>
<td><b><a href='/uikit/components/Text/index.ts'>index.ts</a></b></td>
<td>**Exports UIKIT's Text component and its types.**</td>
</tr>
<tr>
<td><b><a href='/uikit/components/Text/Text.tsx'>Text.tsx</a></b></td>
<td>- "Defines styled Text component with variant-specific styles and optional trimming<br>- Accepts props for customization like linesToDisplay, hoverColor, clickable, and textTransform."</td>
</tr>
<tr>
<td><b><a href='/uikit/components/Text/theme.ts'>theme.ts</a></b></td>
<td>- **Defines default font styles for UI Kit's Text component**, supporting various variants like H1-H5, body sizes, and special cases like highlighted and trimmed text<br>- This theme file enables consistent typography across the application.</td>
</tr>
<tr>
<td><b><a href='/uikit/components/Text/types.ts'>types.ts</a></b></td>
<td>"Defines text styles and props for UI Kit's Text component, supporting variants like headings, body texts, captions, and buttons, along with transform options."</td>
</tr>
</table>
</blockquote>
</details>
<details>
<summary><b>ThumbnailImage</b></summary>
<blockquote>
<table>
<tr>
<td><b><a href='/uikit/components/ThumbnailImage/index.ts'>index.ts</a></b></td>
<td>"Manages thumbnail display for both images and videos within the UI Kit components."</td>
</tr>
<tr>
<td><b><a href='/uikit/components/ThumbnailImage/ThumbnailImage.tsx'>ThumbnailImage.tsx</a></b></td>
<td>- **Manages dynamic thumbnail images.** This component renders an image with specified border radius and crop, using a fallback mechanism to handle loading states and errors<br>- It supports optional wrapping and provides customizable container types via asset paths.</td>
</tr>
<tr>
<td><b><a href='/uikit/components/ThumbnailImage/ThumbnailVideo.tsx'>ThumbnailVideo.tsx</a></b></td>
<td>"The ThumbnailVideo component styles video thumbnails within the UI Kit, ensuring they maintain aspect ratio and positioning."</td>
</tr>
</table>
</blockquote>
</details>
<details>
<summary><b>UsernameBox</b></summary>
<blockquote>
<table>
<tr>
<td><b><a href='/uikit/components/UsernameBox/index.tsx'>index.tsx</a></b></td>
<td>"Manages user display name input and validation within the UI Kit."</td>
</tr>
<tr>
<td><b><a href='/uikit/components/UsernameBox/UsernameBox.tsx'>UsernameBox.tsx</a></b></td>
<td>"Manages user display and interaction within the UsernameBox component, allowing modal opening via settings icon click."</td>
</tr>
</table>
</blockquote>
</details>
<details>
<summary><b>widgets</b></summary>
<blockquote>
<details>
<summary><b>Modal</b></summary>
<blockquote>
<table>
<tr>
<td><b><a href='/uikit/components/widgets/Modal/index.ts'>index.ts</a></b></td>
<td>"Exports Modal component and useModal hook, along with type definitions, facilitating reusable modal functionality across the UI Kit."</td>
</tr>
<tr>
<td><b><a href='/uikit/components/widgets/Modal/Modal.tsx'>Modal.tsx</a></b></td>
<td>"Manages UI modal interactions, rendering a backdrop and container when open, handling overlay close events."</td>
</tr>
<tr>
<td><b><a href='/uikit/components/widgets/Modal/types.ts'>types.ts</a></b></td>
<td>"Defines Modal types ('center', 'bottom') for UIKit's widget components."</td>
</tr>
<tr>
<td><b><a href='/uikit/components/widgets/Modal/useModal.tsx'>useModal.tsx</a></b></td>
<td>"Manages modal display logic, accepting custom content, type, and behavior configurations, then triggers opening/closing via context."</td>
</tr>
</table>
</blockquote>
</details>
<details>
<summary><b>UsernameSetupModal</b></summary>
<blockquote>
<table>
<tr>
<td><b><a href='/uikit/components/widgets/UsernameSetupModal/index.ts'>index.ts</a></b></td>
<td>"Manages user username setup via a modal interface within the UI Kit's widget components."</td>
</tr>
<tr>
<td><b><a href='/uikit/components/widgets/UsernameSetupModal/UsernameSetupModal.tsx'>UsernameSetupModal.tsx</a></b></td>
<td>- **Handles user username setup/modification via a modal**<br>- Validates input against availability and length constraints, offering real-time feedback using debounced API calls<br>- Upon submission, updates the user's profile and closes the modal.</td>
</tr>
</table>
</blockquote>
</details>
</blockquote>
</details>
</blockquote>
</details>
<details>
<summary><b>theme</b></summary>
<blockquote>
<table>
<tr>
<td><b><a href='/uikit/theme/base.ts'>base.ts</a></b></td>
<td>**Defines UI theme constants**: Breakpoints, media queries, spacing, shadows, radii, z-indices, backgrounds, and grid layouts for responsive design using styled-components.</td>
</tr>
<tr>
<td><b><a href='/uikit/theme/colors.ts'>colors.ts</a></b></td>
<td>"Defines color palettes for UI elements, including primary, secondary, gray, red, green, orange, white, brand colors and gradients, supporting both light and dark themes."</td>
</tr>
<tr>
<td><b><a href='/uikit/theme/dark.ts'>dark.ts</a></b></td>
<td>"Defines dark theme for UI Kit, incorporating base styles, color palette, button and text themes."</td>
</tr>
<tr>
<td><b><a href='/uikit/theme/index.ts'>index.ts</a></b></td>
<td>"Defines the theming structure for UI Kit components, combining colors, spacing, typography, and other styling aspects into a cohesive theme (light/dark) with customizable site width."</td>
</tr>
<tr>
<td><b><a href='/uikit/theme/light.ts'>light.ts</a></b></td>
<td>- **Defines light theme for UI Kit**, combining base styles, custom colors, button and text themes<br>- Used across the project for light mode user interfaces.</td>
</tr>
<tr>
<td><b><a href='/uikit/theme/types.ts'>types.ts</a></b></td>
<td>- **Defines UI design system tokens**: This file exports TypeScript types for breakpoints, media queries, grids, spacing, radii, shadows, gradients, contrasts, colors, backgrounds, and z-indices<br>- These types serve as the foundation for consistent UI styling across the project's components library (uikit).</td>
</tr>
</table>
</blockquote>
</details>
</blockquote>
</details>
<details> <!-- utils Submodule -->
<summary><b>utils</b></summary>
<blockquote>
<table>
<tr>
<td><b><a href='/utils/areStringsEqual.ts'>areStringsEqual.ts</a></b></td>
<td>"Compares two strings case-insensitively, handling null/undefined inputs."</td>
</tr>
<tr>
<td><b><a href='/utils/determinateChallengeStatus.ts'>determinateChallengeStatus.ts</a></b></td>
<td>The `determinateChallengeStatus` function assesses challenge status based on current date and provided start/end dates, classifying challenges as 'INCOMING', 'ACTIVE', or 'ENDED'.</td>
</tr>
<tr>
<td><b><a href='/utils/formatDateRange.ts'>formatDateRange.ts</a></b></td>
<td>"Formats date ranges into human-readable strings based on start/end relationships."</td>
</tr>
<tr>
<td><b><a href='/utils/getApiHeaders.ts'>getApiHeaders.ts</a></b></td>
<td>"Generates API headers dynamically, handling content type, authorization, account details, and blob-related data, streamlining authenticated requests."</td>
</tr>
<tr>
<td><b><a href='/utils/getMetaproDeepLink.ts'>getMetaproDeepLink.ts</a></b></td>
<td>- **Generates deep links for Metapro wallet**, removing expiry timestamps from WalletConnect URLs and constructing new links compatible with the Metapro wallet's requirements<br>- Ensures smooth connection by handling URL formatting issues.</td>
</tr>
<tr>
<td><b><a href='/utils/getSignature.ts'>getSignature.ts</a></b></td>
<td>- "The `getSignature.ts` utility retrieves a signature for a given Ethereum account, facilitating secure user verification within the Telegram WebApp<br>- It fetches a hash from an authentication API, constructs a signing message, opens a link in the Telegram WebApp for signing, and returns the wallet address, signature, and hash."</td>
</tr>
<tr>
<td><b><a href='/utils/getTimeDifferenceDuration.ts'>getTimeDifferenceDuration.ts</a></b></td>
<td>- The `getTimeDifferenceDuration.ts` file exports a function that calculates the time difference between two dates and returns the duration as an object with properties for months, days, hours, minutes, and seconds<br>- This reusable utility aids in date manipulation across the project.</td>
</tr>
<tr>
<td><b><a href='/utils/getURLParams.ts'>getURLParams.ts</a></b></td>
<td>**Generates URL search parameters**, handling filters, sorting, unique tokens/collections, and array parameters for the Telegram mini-app.</td>
</tr>
<tr>
<td><b><a href='/utils/handleQueryErrorMessage.ts'>handleQueryErrorMessage.ts</a></b></td>
<td>"Handles query error messages for the Telegram mini-app, processing FetchBaseQueryError and SerializedError types to retrieve appropriate translated error messages."</td>
</tr>
<tr>
<td><b><a href='/utils/handleStaticAssetOperations.ts'>handleStaticAssetOperations.ts</a></b></td>
<td>"Manages static asset operations across various containers (avatars, banners, logos) and services (users, teams), handling IPFS asset paths."</td>
</tr>
<tr>
<td><b><a href='/utils/index.ts'>index.ts</a></b></td>
<td>"Defines a generic function type 'Fn', enabling uniform handling of callbacks throughout the project."</td>
</tr>
<tr>
<td><b><a href='/utils/isArrayPopulated.ts'>isArrayPopulated.ts</a></b></td>
<td>"Validates array population by ensuring non-null/undefined input with at least one element."</td>
</tr>
<tr>
<td><b><a href='/utils/logMessage.ts'>logMessage.ts</a></b></td>
<td>**Centralizes environment-specific logging.** This function enables developers to log messages conditionally based on the environment tag ('dev' in this case), promoting consistent and controlled debugging across different environments within the project.</td>
</tr>
<tr>
<td><b><a href='/utils/shortenText.ts'>shortenText.ts</a></b></td>
<td>- The 'shortenText.ts' file exports utility functions to validate Ethereum addresses and shorten text strings<br>- It includes 'isAddress', which checks if a given value is a valid address, returning the address or false<br>- Additionally, it provides 'shortenText', which truncates long texts by keeping specified characters from both ends and replacing the middle part with ellipsis<br>- Lastly, 'shortenAddress' validates Ethereum addresses and uses 'shortenText' to format them for display purposes.</td>
</tr>
<tr>
<td><b><a href='/utils/translation.ts'>translation.ts</a></b></td>
<td>"Centralizes string translations in the project, supporting custom values or functions."</td>
</tr>
<tr>
<td><b><a href='/utils/useExplorerItems.ts'>useExplorerItems.ts</a></b></td>
<td>- **Manages paginated data fetching**: This hook initializes and increments the number of items to fetch based on a user-defined amount or default value<br>- It returns these items count and a function to load more items after a one-second delay, enabling lazy loading in React components.</td>
</tr>
</table>
</blockquote>
</details>
<details> <!-- views Submodule -->
<summary><b>views</b></summary>
<blockquote>
<details>
<summary><b>Challenges</b></summary>
<blockquote>
<table>
<tr>
<td><b><a href='/views/Challenges/index.tsx'>index.tsx</a></b></td>
<td>"Manages challenges view for Telegram mini-app, displaying a list of challenges with loading animation and navigation to detailed challenge views."</td>
</tr>
</table>
<details>
<summary><b>Challenge</b></summary>
<blockquote>
<table>
<tr>
<td><b><a href='/views/Challenges/Challenge/index.tsx'>index.tsx</a></b></td>
<td>- "This component renders a challenge page with details like title, prize pool, timeframe, status badge, player count, gameplay count, best players view, and personal score view<br>- It also includes a join button to participate in the challenge."</td>
</tr>
</table>
<details>
<summary><b>Players</b></summary>
<blockquote>
<table>
<tr>
<td><b><a href='/views/Challenges/Challenge/Players/index.tsx'>index.tsx</a></b></td>
<td>- The Players component renders the leaderboard view within the Telegram mini-app's Challenge interface<br>- It displays challenge-specific details like title and prize pool, lists all participating players, and delegates player-specific rendering to PlayerView with appropriate props (game, challenge, score type).</td>
</tr>
</table>
</blockquote>
</details>
</blockquote>
</details>
</blockquote>
</details>
<details>
<summary><b>Leaderboard</b></summary>
<blockquote>
<table>
<tr>
<td><b><a href='/views/Leaderboard/index.tsx'>index.tsx</a></b></td>
<td>"Renders the Leaderboard view for Telegram mini-app, displaying title and player scores using PlayerView component."</td>
</tr>
<tr>
<td><b><a href='/views/Leaderboard/leaderboard.logic.ts'>leaderboard.logic.ts</a></b></td>
<td>- "The `useLazyRichScores` hook fetches user scores and profiles, combining them into rich user score objects for the Leaderboard view in a Telegram mini-app<br>- It manages loading states and handles errors during fetching."</td>
</tr>
</table>
</blockquote>
</details>
<details>
<summary><b>Loading</b></summary>
<blockquote>
<table>
<tr>
<td><b><a href='/views/Loading/index.tsx'>index.tsx</a></b></td>
<td>**Handles initial loading view**: This file manages the display of a page loader during the initial fetch phase using React hooks and UI components from the project's library (`@/uikit/components`).</td>
</tr>
</table>
</blockquote>
</details>
<details>
<summary><b>Login</b></summary>
<blockquote>
<table>
<tr>
<td><b><a href='/views/Login/index.tsx'>index.tsx</a></b></td>
<td>- **Login view for Telegram mini-app**: Handles user authentication and wallet connection<br>- Retrieves user data, checks if the wallet is added, opens QR URI links in Telegram, and provides functions to add a wallet or disconnect<br>- Conditionally renders buttons based on wallet status and connection state.</td>
</tr>
</table>
</blockquote>
</details>
<details>
<summary><b>Profile</b></summary>
<blockquote>
<table>
<tr>
<td><b><a href='/views/Profile/index.tsx'>index.tsx</a></b></td>
<td>- **Manages user profile display**: Fetches and exhibits user data, avatar, username (with setup modal), total score, and gameplay count within the Telegram mini-app's Profile view<br>- Utilizes Web3 context, Redux store, and API queries for seamless user-specific information retrieval.</td>
</tr>
</table>
</blockquote>
</details>
</blockquote>
</details>

</details>

---

## 🚀 Getting Started

### ☑️ Prerequisites

Before getting started with , ensure your runtime environment meets the following requirements:

- **Programming Language:** TypeScript
- **Package Manager:** Npm, Yarn

### ⚙️ Installation

Install using one of the following methods:

**Build from source:**

1. Clone the repository:

```sh
❯ git clone ../
```

2. Navigate to the project directory:

```sh
❯ cd
```

3. Install the project dependencies:

**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm install
```

**Using `yarn`**

```sh
❯ yarn install
```

### 🤖 Usage

Run using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm run dev
```

**Using `yarn`**

```sh
❯ yarn dev
```

---
