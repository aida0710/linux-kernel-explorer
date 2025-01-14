---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/mqueue/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
CFLAGS += -O2
LDLIBS = -lrt -lpthread -lpopt

TEST_GEN_PROGS := mq_open_tests mq_perf_tests

include ../lib.mk

```
