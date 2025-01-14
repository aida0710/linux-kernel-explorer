---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/tmpfs/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
CFLAGS += -Wall -O2

TEST_GEN_PROGS :=
TEST_GEN_PROGS += bug-link-o-tmpfile

include ../lib.mk

```
