---
sidebar_position: 12
---
# net.rs

### ファイル情報

- パス: `linux-v6.12/rust/kernel/net.rs`

### コンテンツ

```rs
// SPDX-License-Identifier: GPL-2.0

//! Networking.

#[cfg(CONFIG_RUST_PHYLIB_ABSTRACTIONS)]
pub mod phy;

```
