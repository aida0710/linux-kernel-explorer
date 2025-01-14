---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/fpu/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0+

LDLIBS := -lm

TEST_GEN_PROGS := test_fpu

TEST_PROGS := run_test_fpu.sh

include ../lib.mk

```
