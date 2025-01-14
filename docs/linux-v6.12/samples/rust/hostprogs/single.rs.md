---
sidebar_position: 5
---
# single.rs

### ファイル情報

- パス: `linux-v6.12/samples/rust/hostprogs/single.rs`

### コンテンツ

```rs
// SPDX-License-Identifier: GPL-2.0

//! Rust single host program sample.

mod a;
mod b;

fn main() {
    println!("Hello world!");

    a::f(b::CONSTANT);
}

```
