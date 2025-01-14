---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/filesystems/binderfs/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0

CFLAGS += $(KHDR_INCLUDES) -pthread
TEST_GEN_PROGS := binderfs_test

include ../../lib.mk

```
