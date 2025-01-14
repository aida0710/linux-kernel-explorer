---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/ptrace/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
CFLAGS += -std=c99 -pthread -Wall $(KHDR_INCLUDES)

TEST_GEN_PROGS := get_syscall_info peeksiginfo vmaccess get_set_sud

include ../lib.mk

```
