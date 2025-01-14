---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/dma/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
CFLAGS += -I../../../../usr/include/
CFLAGS += -I../../../../include/

TEST_GEN_PROGS := dma_map_benchmark

include ../lib.mk

```
