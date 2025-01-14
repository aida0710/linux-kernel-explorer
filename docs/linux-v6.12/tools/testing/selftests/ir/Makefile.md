---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/ir/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
TEST_PROGS := ir_loopback.sh
TEST_GEN_PROGS_EXTENDED := ir_loopback
APIDIR := ../../../include/uapi
CFLAGS += -Wall -O2 -I$(APIDIR)

include ../lib.mk

```
