---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/ptp/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
CFLAGS += $(KHDR_INCLUDES)
TEST_GEN_PROGS := testptp
LDLIBS += -lrt
TEST_PROGS = phc.sh

include ../lib.mk

```
