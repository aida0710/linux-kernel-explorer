---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/powerpc/cache_shape/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
TEST_GEN_PROGS := cache_shape

top_srcdir = ../../../../..
include ../../lib.mk
include ../flags.mk

$(TEST_GEN_PROGS): ../harness.c ../utils.c

```
