---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/dmabuf-heaps/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
CFLAGS += -static -O3 -Wl,-no-as-needed -Wall $(KHDR_INCLUDES)

TEST_GEN_PROGS = dmabuf-heap

include ../lib.mk

```
