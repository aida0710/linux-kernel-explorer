---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/powerpc/mce/Makefile`

### コンテンツ

```txt
#SPDX-License-Identifier: GPL-2.0-or-later

TEST_GEN_PROGS := inject-ra-err

include ../../lib.mk
include ../flags.mk

$(TEST_GEN_PROGS): ../harness.c

```
