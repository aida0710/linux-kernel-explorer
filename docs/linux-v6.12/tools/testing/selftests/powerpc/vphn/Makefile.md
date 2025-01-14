---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/powerpc/vphn/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
TEST_GEN_PROGS := test-vphn

top_srcdir = ../../../../..
include ../../lib.mk
include ../flags.mk

CFLAGS += -m64 -I$(CURDIR)

$(TEST_GEN_PROGS): ../harness.c


```
