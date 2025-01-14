---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/kcmp/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
CFLAGS += $(KHDR_INCLUDES)

TEST_GEN_PROGS := kcmp_test

EXTRA_CLEAN := $(OUTPUT)/kcmp-test-file

include ../lib.mk


```
