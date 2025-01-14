---
sidebar_position: 7
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/resctrl/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0

CFLAGS = -g -Wall -O2 -D_FORTIFY_SOURCE=2
CFLAGS += $(KHDR_INCLUDES)

TEST_GEN_PROGS := resctrl_tests

LOCAL_HDRS += $(wildcard *.h)

include ../lib.mk

$(OUTPUT)/resctrl_tests: $(wildcard *.c)

```
