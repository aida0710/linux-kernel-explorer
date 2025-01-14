---
sidebar_position: 2
---
# a.rs

### ファイル情報

- パス: `linux-v6.12/samples/rust/hostprogs/a.rs`

### コンテンツ

```rs
// SPDX-License-Identifier: GPL-2.0

//! Rust single host program sample: module `a`.

pub(crate) fn f(x: i32) {
    println!("The number is {}.", x);
}

```
