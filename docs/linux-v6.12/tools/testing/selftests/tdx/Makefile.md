---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/tdx/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0

CFLAGS += -O3 -Wl,-no-as-needed -Wall $(KHDR_INCLUDES) -static

TEST_GEN_PROGS := tdx_guest_test

include ../lib.mk

```
