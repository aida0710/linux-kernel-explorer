---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/cachestat/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
TEST_GEN_PROGS := test_cachestat

CFLAGS += $(KHDR_INCLUDES)
CFLAGS += -Wall
LDLIBS += -lrt

include ../lib.mk

```
