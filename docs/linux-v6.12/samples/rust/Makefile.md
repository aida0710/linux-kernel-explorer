---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/samples/rust/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0

obj-$(CONFIG_SAMPLE_RUST_MINIMAL)		+= rust_minimal.o
obj-$(CONFIG_SAMPLE_RUST_PRINT)			+= rust_print.o

subdir-$(CONFIG_SAMPLE_RUST_HOSTPROGS)		+= hostprogs

```
