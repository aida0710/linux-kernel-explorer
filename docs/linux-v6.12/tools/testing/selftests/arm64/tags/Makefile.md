---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/arm64/tags/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0

CFLAGS += $(KHDR_INCLUDES)
TEST_GEN_PROGS := tags_test

include ../../lib.mk

```
