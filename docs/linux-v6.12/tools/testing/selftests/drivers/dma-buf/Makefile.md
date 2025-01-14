---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/drivers/dma-buf/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
CFLAGS += $(KHDR_INCLUDES)

TEST_GEN_PROGS := udmabuf

top_srcdir ?=../../../../..

include ../../lib.mk

```
