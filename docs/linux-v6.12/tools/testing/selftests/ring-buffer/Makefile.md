---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/ring-buffer/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
CFLAGS += -Wl,-no-as-needed -Wall
CFLAGS += $(KHDR_INCLUDES)

TEST_GEN_PROGS = map_test

include ../lib.mk

```
