---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/kmod/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
# Makefile for kmod loading selftests

# No binaries, but make sure arg-less "make" doesn't trigger "run_tests"
all:

TEST_PROGS := kmod.sh

include ../lib.mk

# Nothing to clean up.
clean:

```
