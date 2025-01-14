---
sidebar_position: 5
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/powerpc/eeh/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
noarg:
	$(MAKE) -C ../

TEST_PROGS := eeh-basic.sh
TEST_FILES := eeh-functions.sh settings

top_srcdir = ../../../../..
include ../../lib.mk
include ../flags.mk

```
