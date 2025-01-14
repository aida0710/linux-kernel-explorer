---
sidebar_position: 6
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/user_events/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
CFLAGS += -Wl,-no-as-needed -Wall $(KHDR_INCLUDES)
LDLIBS += -lrt -lpthread -lm

TEST_GEN_PROGS = ftrace_test dyn_test perf_test abi_test

TEST_FILES := settings

include ../lib.mk

```
