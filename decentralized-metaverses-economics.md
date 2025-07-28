**Metaverse Economics & the Economics of Decentralized Metaverses (Web3 Focus)**
*(with emphasis on Ethereum-based worlds, plus emerging L2/L3 and non-Ethereum chains; includes a section on decentralized identity)*

---

## 1. Executive Snapshot

* **Core economic primitives** across metaverses are scarce digital land/assets (NFTs), utility/governance tokens, creator marketplaces, and sinks/sources that regulate token supply. Ethereum projects like **Decentraland (MANA + LAND NFTs)** and **The Sandbox (SAND + LAND NFTs)** pioneered this model, later migrating much activity to **Polygon/L2s** to cut fees. ([decentraland.org][1], [Wikipedia][2], [Medium][3], [CoinDesk][4])
* **Governance** is increasingly DAO-based (e.g., Decentraland DAO controls marketplace fees & core contracts), but many “decentralized” worlds still rely on centralized infrastructure for rendering and moderation. ([docs.decentraland.org][5], [docs.decentraland.org][6])
* **Speculation vs. utility**: 2019–22 land/NFT booms drove prices up \~879% for blockchain virtual real estate, then cooled; sustainable economies hinge on real use (events, games, services) not just scarcity. ([Chainalysis][7], [voicesofvr.com][8])
* **Scaling trade-offs**: Ethereum mainnet offers security/liquidity but high gas; L2 rollups (Optimistic & ZK) slash costs and inherit security, while sidechains (Polygon), app-chains (Ronin, Flow), or alt-L1s (Solana) trade some decentralization for speed/cost. L3s are emerging for app-specific customization, but even Vitalik warns they should serve specialized functions, not “stacked rollups” for scaling alone. ([ethereum.org][9], [ethereum.org][10], [eip4844.com][11], [vitalik.eth.limo][12], [Helius][13], [Investopedia][14])
* **Decentralized identity (DID)** is becoming foundational: W3C DIDs, **ENS names**, **Lens/Farcaster social graphs**, **soulbound tokens (SBTs)**, and **ERC-6551 token-bound accounts** enable portable, reputation-rich identities across worlds. ([W3C][15], [ens.domains][16], [Axios][17], [SSRN][18], [Gate.com][19], [Mitosis University][20])

---

## 2. Economic Building Blocks of Web3 Metaverses

**2.1 Scarcity & Property Rights (NFTs):**

* Land, wearables, avatars, and tickets are minted as **ERC-721/1155 NFTs**, giving provable ownership & transferability. Decentraland fixed land at **90,601 parcels**; Sandbox capped LAND at **166,464 parcels** to engineer scarcity. ([decentraland.org][1], [Wikipedia][2], [installers.sandbox.game][21], [Coin Bureau][22])
* Smart contracts can **burn tokens (MANA) on land buys** or route marketplace fees to treasuries, aligning incentives and creating sinks. ([decentraland.org][1], [docs.decentraland.org][5])

**2.2 Native Currencies & GDP:**

* Convertible tokens (MANA, SAND, CUBE) act as mediums of exchange, governance chips, and sometimes staking assets. Second Life’s \$650M GDP proves a mature virtual economy can rival small nations. ([Medium][23], [World Economic Forum][24])
* Transaction fees & royalties fund platform ops; OpenSea’s standard 2.5% illustrates secondary-market take rates in NFT ecosystems. ([docs.opensea.io][25])

**2.3 Creator Economies & Marketplaces:**

* Success correlates with **UGC tooling + monetization rails**. Decentraland’s wearables editor on Polygon means gasless minting; Sandbox’s Game Maker lets LAND owners monetize mini-games. ([decentraland.org][26], [Medium][3])
* Somnium Space’s **CUBE** updates and native marketplace aim to deepen peer-to-peer trade without platform cuts. ([Medium][23], [somniumtimes.com][27])

**2.4 Governance & Treasury Management:**

* DAOs vote on fee structures, grants, and upgrades (Decentraland DAO controls wearables & marketplace contracts; off-chain voting + multisig execution mitigates gas costs). ([docs.decentraland.org][5], [docs.decentraland.org][6])
* Token-weighted voting risks whale domination; projects experiment with quadratic voting or reputation-weighting via SBTs/DIDs. ([SSRN][18])

---

## 3. Ethereum-Native Case Studies (Tokenomics & Design Choices)

| World                     | Core Assets                                    | Economic Sinks / Sources                                 | Governance                                    | Tech Stack / Scaling                                 | Notable Issues / Lessons                                               |
| ------------------------- | ---------------------------------------------- | -------------------------------------------------------- | --------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------------------------- |
| **Decentraland**          | MANA (ERC-20), LAND (ERC-721), Names (ERC-721) | LAND auction burn (MANA), marketplace fees; creator fees | DAO (MANA/LAND/NAME vote), multisig execution | Ethereum mainnet + Polygon (wearables, low-fee UX)   | Low daily active users vs. hype; off-chain voting needed to dodge gas. |
| **The Sandbox**           | SAND (ERC-20), LAND (ERC-721), ASSET NFTs      | LAND sales; marketplace commissions; staking rewards     | Transitioning to DAO                          | Ethereum + Polygon (gasless LAND sales via Biconomy) | Heavy brand/speculator presence; need more playable content.           |
| **Somnium Space**         | CUBE (ERC-20), Land/Avatars NFTs               | Avatar mint fees, land sales; no platform cut on P2P     | Centralized ops, no formal DAO yet            | Ethereum + Polygon                                   | Small but loyal VR community; deep immersion focus.                    |
| **Voxels (Cryptovoxels)** | Parcel NFTs, wearables                         | Parcel sales; simple marketplace                         | Founder-led, no DAO                           | Ethereum; lightweight web client                     | Speculation boom/bust; accessibility (no install) is a strength.       |
| **Otherside (Yuga Labs)** | Otherdeed land NFTs, APE token                 | Land mint; ecosystem royalties                           | Yuga + community councils (DAO-lite)          | Ethereum + Improbable’s M² for massive concurrency   | Tech demos: 4k+ concurrent players; still pre-launch economy.          |

([decentraland.org][1], [Wikipedia][2], [installers.sandbox.game][21], [Coin Bureau][22], [Medium][23], [voicesofvr.com][8], [otherside.xyz][28], [Improbable][29], [Medium][3], [CoinDesk][4])

---

## 4. Up-and-Coming & Non-Ethereum / L2/L3 Metaverses: Pros & Cons

### 4.1 Ethereum Rollups & Sidechains (L2/L3)

**Optimistic rollups (Arbitrum, Optimism):**

* **Pros:** Huge fee cuts, inherit Ethereum security, EVM compatibility.
* **Cons:** Withdrawal delays (fraud proofs), centralized sequencers can reorder txs. ([ethereum.org][9])

**ZK-rollups (zkSync, StarkNet, Immutable X):**

* **Pros:** Fast finality, no challenge periods, strong data integrity; gas-free NFT minting (Immutable X).
* **Cons:** More complex proving, still early tooling, some centralized prover risks. ([ethereum.org][10], [immutable.com][30], [immutable.com][31])

**EIP-4844 / Proto-Danksharding (2024):**

* Cuts rollup data costs “by orders of magnitude”, targeting \~10–100x cheaper L2 fees; critical for metaverse-scale microtransactions. ([eip4844.com][11], [Investopedia][14], [Consensys][32])

**Polygon (PoS sidechain & zkEVM):**

* **Pros:** Low fees, mature tooling, widely adopted by DCL/Sandbox.
* **Cons:** Sidechain security weaker than L1; validator set relatively small (though zkEVM improves trust assumptions). ([CoinDesk][4], [Medium][3], [docs.decentraland.org][33])

**Layer 3 / App-specific rollups:**

* **Pros:** Custom economics, privacy, ultra-low fees for high-volume metaverse actions (e.g., in-world micropayments).
* **Cons:** Fragmentation, added complexity; Vitalik argues L3s should serve specialized functions, not generic scaling. ([vitalik.eth.limo][12], [CryptoSlate][34])

### 4.2 Alt L1 / App-Chains

| Chain                     | Pros for Metaverse                                     | Cons / Risks                                                                                   | Example Projects                                                            |
| ------------------------- | ------------------------------------------------------ | ---------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| **Solana**                | High throughput, low fees, growing NFT/gaming scene    | Multiple full-network outages (7 major in 5 years); monolithic design trade-offs               | Magic Eden, various DePIN & game projects ([Helius][13], [StatusGator][35]) |
| **Flow (Dapper Labs)**    | NFT-focused UX, high TPS, mainstream IP (NBA Top Shot) | Non-EVM, smaller dev pool/liquidity; centralized validator start                               | NBA Top Shot, NFL All Day ([Gemini][36], [NFT Plazas][37], [Filecoin][38])  |
| **Ronin (Axie Infinity)** | Tailored for gaming, ultra-low fees                    | Bridge hack (\$600M) exposed security trade-offs; economy collapse after Ponzi-like tokenomics | Axie Infinity ([TIME][39], [Axios][40])                                     |
| **Immutable X (L2)**      | Gas-free NFT minting, gamer SDKs, carbon-neutral       | Custodial-ish UX layers; depends on StarkEx proven circuits                                    | Gods Unchained, Illuvium ([immutable.com][30], [CCN.com][41])               |

---

## 5. Designing Sustainable Token Economies (Checklist)

1. **Demand-side utility > speculation:** Ensure assets unlock experiences (events, gameplay, status) rather than only trade. Use **token sinks** (crafting, upgrades, tickets) to counter inflation. ([voicesofvr.com][8], [Chainalysis][7])
2. **Fair launch & distribution:** Avoid concentrated token treasuries; use vesting & transparent emissions. (Messari highlights inflation control as key in game economies). ([Messari][42])
3. **Composable finance:** Allow staking/LP but beware reflexive loops (overlevered NFT collateral).
4. **Regulatory readiness:** AML/KYC on ramps, tax/GDP reporting (McKinsey, Citi note regulation will tighten as value grows). ([McKinsey & Company][43], [Citi][44])
5. **Fee strategy:** Balance platform sustainability & creator share (OpenSea fee cuts/royalty wars show misaligned incentives can hurt creators). ([docs.opensea.io][25], [Vogue Business][45])

---

## 6. Decentralized Identity (DID) in Crypto Metaverses

**6.1 Standards & Primitives**

* **W3C DIDs & Verifiable Credentials:** Self-sovereign identifiers controlled by users, proven via cryptographic signatures. Widely supported by Ceramic, Polygon ID, Verite. ([W3C][15], [The Ceramic Blog][46], [polygon.technology][47])
* **ENS (.eth) & Project-specific names (Decentraland Names):** Human-readable addresses double as metaverse usernames; DCL Names integrate ENS and are ERC-721 NFTs. ([ens.domains][16], [decentraland.org][48], [Medium][49])
* **Soulbound Tokens (SBTs):** Non-transferable tokens for credentials/reputation – propose sybil-resistant governance and richer identity graphs. ([SSRN][18], [Metaneo][50])
* **ERC-6551 Token-Bound Accounts:** Let an NFT (e.g., your avatar) own assets and act autonomously – powerful for avatar-centric economies and composable identity. ([Gate.com][19], [docs.vechain.org][51])
* **Social Graph Protocols (Lens, Farcaster):** Profiles as NFTs/keys; portable followers & posts. Lens (Polygon) & Farcaster (Ethereum + IPFS) exemplify “wallet = identity + content”. ([Axios][17], [Mitosis University][20], [The Block][52])

**6.2 Why It Matters**

* **Portability:** Bring your name, rep, achievements across worlds (no lock-in).
* **Trust & Safety:** Verifiable credentials (age, KYC, skill badges) create safer spaces without centralized data silos. ([Cointelegraph][53])
* **Economics:** Reputation-weighted airdrops, credit scoring for creator loans, DAO voting power tied to SBTs rather than pure token balance.

**6.3 Implementation Tips**

* Start with wallet + ENS for baseline identity; layer on DIDs/VCs for privacy-preserving proofs (e.g., zero-knowledge age proof for adult zones). ([W3C][15], [polygon.technology][47])
* Use ERC-6551 or similar to let avatars “own” inventories, enabling richer RPG-like progress systems on-chain. ([Gate.com][19])
* Plan for **recovery & anti-sybil**: community recovery wallets (as in SBT paper) or biometric-backed systems if acceptable to users. ([SSRN][18])

---

## 7. Pros & Cons Summary: Chains / Scaling Choices for Metaverses

**Ethereum L1**

* **+** Security, liquidity, standards, composability.
* **–** High gas, congestion.

**Polygon (PoS & zkEVM)**

* **+** Low fees, EVM, mature ecosystem.
* **–** Sidechain trust assumptions; still pay L1 costs for zk proofs. ([Medium][3], [docs.decentraland.org][33])

**Optimistic Rollups**

* **+** Cheap, easy to deploy.
* **–** 7-day exits; centralized sequencers. ([ethereum.org][9])

**ZK Rollups**

* **+** Fast finality, strong security.
* **–** Complex, prover costs, limited EVM equivalence (improving). ([ethereum.org][10], [immutable.com][30])

**Layer 3 / App Rollups**

* **+** Tailored UX, fee control, privacy.
* **–** Fragmentation, extra trust layers. ([vitalik.eth.limo][12], [CryptoSlate][34])

**Alt L1 (Solana, Flow, Sui/Aptos, etc.)**

* **+** High throughput, low costs, custom VMs.
* **–** Outage risk (Solana), less composability with EVM, smaller dev tools. ([Helius][13], [Gemini][36])

**App-Specific Sidechains (Ronin, Immutable X)**

* **+** Fully tuned for game/metaverse UX, gasless minting.
* **–** Security incidents (Ronin hack), dependence on operator. ([Axios][40], [immutable.com][30])

---

## 8. Key Takeaways for Builders & Investors

1. **Design for participation before speculation.** Make sure land/items unlock activity and status—not just flipping. ([voicesofvr.com][8])
2. **Use modular scaling.** Start on Ethereum for liquidity, offload heavy TXs to L2s/Polygon; consider L3/app-rollup once you have product-market fit. ([eip4844.com][11], [vitalik.eth.limo][12])
3. **Govern like a product, not a polity—at first.** Progressive decentralization (off-chain votes → on-chain control) avoids UX friction while you iterate. ([docs.decentraland.org][6])
4. **Identity is infrastructure.** Implement ENS/DIDs early to future-proof interoperability and reputation systems. ([W3C][15], [ens.domains][16])
5. **Plan economic sinks, transparency, and treasury policy from day one.** Publish token emission schedules, fee flows, and DAO budget rules (Messari, McKinsey highlight transparency as trust-driver). ([Messari][42], [McKinsey & Company][43])
6. **Mitigate platform risk.** Multi-hosted content (IPFS/Filecoin), open standards (USD/glTF), and export tools reduce single-point failure fears. ([Filecoin][38])

---

### Further Reading / Data (selected)

* Decentraland & Sandbox whitepapers (token/land economics). ([decentraland.org][1], [installers.sandbox.game][21])
* Ethereum.org docs on rollups & scaling. ([ethereum.org][9], [ethereum.org][10])
* Vitalik on Layer 3 design. ([vitalik.eth.limo][12])
* W3C DID spec; Soulbound Tokens paper. ([W3C][15], [SSRN][18])
* Chainalysis virtual real estate data. ([Chainalysis][7])
* McKinsey “Value creation in the metaverse” & Citi “Metaverse and Money”. ([McKinsey & Company][43], [Citi][44])

---

*If you need this distilled into spreadsheets (tokenomics, fee models, treasury sizes) or a decision framework for choosing a chain/L2, let me know and I’ll generate it.*

[1]: https://decentraland.org/whitepaper.pdf?utm_source=chatgpt.com "[PDF] Decentraland Whitepaper"
[2]: https://en.wikipedia.org/wiki/Decentraland?utm_source=chatgpt.com "Decentraland - Wikipedia"
[3]: https://medium.com/sandbox-game/the-sandbox-is-deploying-on-polygon-c44e026afeb2?utm_source=chatgpt.com "The Sandbox is deploying on Polygon - Medium"
[4]: https://www.coindesk.com/tech/2021/04/01/decentraland-launches-dapp-portal-with-polygon-to-bypass-high-gas-fees?utm_source=chatgpt.com "Decentraland Launches Dapp Portal With Polygon to Bypass High ..."
[5]: https://docs.decentraland.org/player/general/dao/overview/what-smart-contracts-does-the-dao-control/?utm_source=chatgpt.com "The DAO Smart Contracts | Decentraland Documentation"
[6]: https://docs.decentraland.org/decentraland/how-does-the-dao-work/?utm_source=chatgpt.com "How the DAO works | Decentraland Documentation"
[7]: https://www.chainalysis.com/blog/virtual-real-estate-web3/?utm_source=chatgpt.com "Virtual Real Estate on the Rise in the Metaverse - Chainalysis"
[8]: https://voicesofvr.com/1117-deconstructing-voxels-formerly-cryptovoxels-virtual-land-speculation-the-experiential-gap-of-crypto-based-metaverse-neighborhoods/?utm_source=chatgpt.com "1117: Deconstructing “Voxels (formerly Cryptovoxels)”: Virtual Land ..."
[9]: https://ethereum.org/en/developers/docs/scaling/optimistic-rollups/?utm_source=chatgpt.com "Optimistic Rollups - Ethereum.org"
[10]: https://ethereum.org/en/developers/docs/scaling/zk-rollups/?utm_source=chatgpt.com "Zero-knowledge rollups - Ethereum.org"
[11]: https://www.eip4844.com/?utm_source=chatgpt.com "EIP-4844: Proto-Danksharding"
[12]: https://vitalik.eth.limo/general/2022/09/17/layer_3.html?utm_source=chatgpt.com "What kind of layer 3s make sense?"
[13]: https://www.helius.dev/blog/solana-outages-complete-history?utm_source=chatgpt.com "A Complete History of Solana Outages: Causes and Fixes - Helius"
[14]: https://www.investopedia.com/what-you-need-to-know-ahead-of-ethereum-dencun-update-wednesday-8607518?utm_source=chatgpt.com "What You Need To Know Ahead of Ethereum's Dencun Update Wednesday"
[15]: https://www.w3.org/TR/did-1.0/?utm_source=chatgpt.com "Decentralized Identifiers (DIDs) v1.0 - W3C"
[16]: https://ens.domains/?utm_source=chatgpt.com "ENS"
[17]: https://www.axios.com/2022/05/18/aaves-social-media-fix?utm_source=chatgpt.com "Aave's Social Media Fix"
[18]: https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4105763&utm_source=chatgpt.com "Decentralized Society: Finding Web3's Soul"
[19]: https://www.gate.com/learn/articles/erc-6551-and-token-bound-accounts/992?utm_source=chatgpt.com "A New Era: ERC-6551 And Token-Bound Accounts (TBAs) - Gate.com"
[20]: https://university.mitosis.org/farcaster-decentralized-social-protocol/?utm_source=chatgpt.com "Farcaster: Decentralized Social Protocol - Mitosis University"
[21]: https://installers.sandbox.game/The_Sandbox_Whitepaper_2020.pdf?utm_source=chatgpt.com "[PDF] The_Sandbox_Whitepaper (August 2020) v3 - The Sandbox Game"
[22]: https://coinbureau.com/review/the-sandbox/?utm_source=chatgpt.com "The Sandbox: Do You NEED LAND and SAND?!? - Coin Bureau"
[23]: https://somniumspace.medium.com/transforming-the-somnium-economy-cube-updates-native-marketplace-karma-system-more-pt-1-33e6b4f28277?utm_source=chatgpt.com "$CUBE Updates, Native Marketplace, Karma System & more! Pt.1 ..."
[24]: https://www.weforum.org/stories/2023/10/second-life-virtual-world-metaverse/?utm_source=chatgpt.com "Metaverse: How 20 years of Second Life could help shape it"
[25]: https://docs.opensea.io/docs/opensea-fees?utm_source=chatgpt.com "OpenSea Fees"
[26]: https://decentraland.org/blog/announcements/introducing-wearables-editor?utm_source=chatgpt.com "Introducing the Wearables Editor - Decentraland"
[27]: https://somniumtimes.com/2024/12/14/transforming-the-somnium-economy-new-horizons-for-a-decentralized-metaverse/?utm_source=chatgpt.com "Transforming the Somnium Economy: New Horizons for a ..."
[28]: https://otherside.xyz/litepaper?utm_source=chatgpt.com "Litepaper - Otherside"
[29]: https://www.improbable.io/news/otherside-metaverse-game-is-coming-normal-rules-do-not-apply?utm_source=chatgpt.com "Otherside Metaverse Game Is Coming; Normal Rules Do Not Apply"
[30]: https://www.immutable.com/products/immutable-x?utm_source=chatgpt.com "Optimized game-specific ZK-rollup - Immutable X"
[31]: https://www.immutable.com/blog/immutablex-scaling-web3-games-with-starkware?utm_source=chatgpt.com "ImmutableX: Scaling Web3 Games with StarkWare | Immutable Blog"
[32]: https://consensys.io/blog/ethereum-evolved-dencun-upgrade-part-5-eip-4844?utm_source=chatgpt.com "Ethereum Evolved: Dencun Upgrade Part 5, EIP-4844 - Consensys"
[33]: https://docs.decentraland.org/player/blockchain-integration/transactions-in-polygon/?utm_source=chatgpt.com "Transactions in Polygon | Decentraland Documentation"
[34]: https://cryptoslate.com/layer-1-2-3-parachain-sidechain-whats-the-difference/?utm_source=chatgpt.com "Layer 1, 2, 3, parachain, sidechain – What's the difference?"
[35]: https://statusgator.com/blog/solana-outage-history/?utm_source=chatgpt.com "Solana Outage History: A Timeline of Network Downtime and Failures"
[36]: https://www.gemini.com/cryptopedia/flow-blockchain-flow-crypto-flow-coin-dapper-labs-axiom-zen?utm_source=chatgpt.com "FLOW Coin & the Flow Blockchain: Gaming & NFTs | Gemini"
[37]: https://nftplazas.com/flow-blockchain-guide-2024/?utm_source=chatgpt.com "A Complete Guide to the Flow Blockchain in 2024 - NFT Plazas"
[38]: https://filecoin.io/blog/posts/dapper-labs-integrates-filecoin/?utm_source=chatgpt.com "Dapper Labs Integrates Filecoin to Propel the Future of the NFT and ..."
[39]: https://time.com/6199385/axie-infinity-crypto-game-philippines-debt/?utm_source=chatgpt.com "A Crypto Game Promised to Lift Filipinos Out of Poverty. Here's What Happened Instead"
[40]: https://www.axios.com/2022/04/14/north-korea-crypto-theft-620?utm_source=chatgpt.com "$620 million crypto theft linked to North Korea"
[41]: https://www.ccn.com/education/crypto/immutable-x-nft-gaming-layer2/?utm_source=chatgpt.com "Immutable X Explained: Gas-Free NFT Minting & Web3 Gaming ..."
[42]: https://messari.io/report/state-of-decentral-games-q4-2022?utm_source=chatgpt.com "State of Decentral Games Q4 2022 - Messari"
[43]: https://www.mckinsey.com/capabilities/growth-marketing-and-sales/our-insights/value-creation-in-the-metaverse?utm_source=chatgpt.com "Value creation in the metaverse - McKinsey"
[44]: https://www.citigroup.com/global/insights/metaverse-and-money_20220330?utm_source=chatgpt.com "Metaverse and Money - CitiGPS"
[45]: https://www.voguebusiness.com/technology/without-royalties-wheres-the-money-in-nfts?utm_source=chatgpt.com "Without royalties, where's the money in NFTs?"
[46]: https://blog.ceramic.network/how-web3-apps-are-building-composable-trust/?utm_source=chatgpt.com "How Web3 apps are building composable trust - The Ceramic Blog"
[47]: https://polygon.technology/blog/polygon-id-integrates-verite-decentralized-identity-solution?utm_source=chatgpt.com "Polygon ID Integrates Verite Decentralized Identity Solution"
[48]: https://decentraland.org/blog/announcements/id-goes-di/?utm_source=chatgpt.com "ID goes DI - Decentraland"
[49]: https://medium.com/blockchain-biz/ens-domain-names-decentraland-avatar-names-explained-ddca64dc5a63?utm_source=chatgpt.com "ENS Domain Names & Decentraland Avatar Names Explained"
[50]: https://www.metaneo.fr/content/files/2022/06/SSRN-id4105763.pdf?utm_source=chatgpt.com "[PDF] Decentralized Society: Finding Web3's Soul 1 - Metaneo"
[51]: https://docs.vechain.org/core-concepts/token-bound-accounts?utm_source=chatgpt.com "Token Bound Accounts - VeChain Docs"
[52]: https://www.theblock.co/post/347606/decentralized-social-media-protocol-farcaster-launches-blockchain-like-data-layer-snapchain?utm_source=chatgpt.com "Decentralized social media protocol Farcaster launches 'blockchain ..."
[53]: https://cointelegraph.com/magazine/decentralized-identity-proving-you-are-real/?utm_source=chatgpt.com "Decentralized identity: Proving it's really you in the 21st Century"
