---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/connector/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
CFLAGS += -Wall $(KHDR_INCLUDES)

TEST_GEN_PROGS = proc_filter

include ../lib.mk

```
