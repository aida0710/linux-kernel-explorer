---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/rlimits/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-or-later

CFLAGS += -Wall -O2 -g
TEST_GEN_PROGS := rlimits-per-userns

include ../lib.mk

```
