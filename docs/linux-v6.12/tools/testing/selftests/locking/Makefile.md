---
sidebar_position: 1
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/locking/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Makefile for locking/ww_mutx selftests

# No binaries, but make sure arg-less "make" doesn't trigger "run_tests"
all:

TEST_PROGS := ww_mutex.sh

include ../lib.mk

```
