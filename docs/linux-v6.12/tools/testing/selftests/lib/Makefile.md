---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/lib/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
# Makefile for lib/ function selftests

# No binaries, but make sure arg-less "make" doesn't trigger "run_tests"
all:

TEST_PROGS := printf.sh bitmap.sh prime_numbers.sh scanf.sh
include ../lib.mk

```
