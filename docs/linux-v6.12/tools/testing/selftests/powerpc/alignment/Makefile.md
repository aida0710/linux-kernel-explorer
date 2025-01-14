---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/powerpc/alignment/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
TEST_GEN_PROGS := copy_first_unaligned alignment_handler

top_srcdir = ../../../../..
include ../../lib.mk
include ../flags.mk

$(TEST_GEN_PROGS): ../harness.c ../utils.c

```
