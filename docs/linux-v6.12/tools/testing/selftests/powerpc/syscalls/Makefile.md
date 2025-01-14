---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/powerpc/syscalls/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
TEST_GEN_PROGS := ipc_unmuxed rtas_filter

top_srcdir = ../../../../..
include ../../lib.mk
include ../flags.mk

CFLAGS += $(KHDR_INCLUDES)

$(TEST_GEN_PROGS): ../harness.c ../utils.c

```
