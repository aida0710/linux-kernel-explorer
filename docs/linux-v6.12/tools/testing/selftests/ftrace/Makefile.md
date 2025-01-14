---
sidebar_position: 5
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/ftrace/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
all:

TEST_PROGS_EXTENDED := ftracetest
TEST_PROGS := ftracetest-ktap
TEST_FILES := test.d settings
EXTRA_CLEAN := $(OUTPUT)/logs/*

include ../lib.mk

```
