---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/powerpc/papr_sysparm/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
noarg:
	$(MAKE) -C ../

TEST_GEN_PROGS := papr_sysparm

top_srcdir = ../../../../..
include ../../lib.mk
include ../flags.mk

$(TEST_GEN_PROGS): ../harness.c ../utils.c

$(OUTPUT)/papr_sysparm: CFLAGS += $(KHDR_INCLUDES)

```
