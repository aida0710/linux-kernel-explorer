---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/safesetid/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
# Makefile for SafeSetID selftest.
CFLAGS = -Wall -O2
LDLIBS = -lcap

TEST_PROGS := safesetid-test.sh
TEST_GEN_FILES := safesetid-test

include ../lib.mk

```
