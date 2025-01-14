---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/capabilities/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
TEST_GEN_FILES := validate_cap
TEST_GEN_PROGS := test_execve

CFLAGS += -O2 -g -std=gnu99 -Wall $(KHDR_INCLUDES)
LDLIBS += -lcap-ng -lrt -ldl

include ../lib.mk


```
