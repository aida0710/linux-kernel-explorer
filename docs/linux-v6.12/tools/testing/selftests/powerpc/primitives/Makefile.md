---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/powerpc/primitives/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
TEST_GEN_PROGS := load_unaligned_zeropad

top_srcdir = ../../../../..
include ../../lib.mk
include ../flags.mk

CFLAGS += -I$(CURDIR)

$(TEST_GEN_PROGS): ../harness.c

```
