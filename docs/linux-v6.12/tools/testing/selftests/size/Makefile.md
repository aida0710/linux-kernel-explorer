---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/size/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
CFLAGS := -static -ffreestanding -nostartfiles -s

TEST_GEN_PROGS := get_size

include ../lib.mk

```
