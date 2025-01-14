---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/filesystems/fat/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0

TEST_PROGS := run_fat_tests.sh
TEST_GEN_PROGS_EXTENDED := rename_exchange
CFLAGS += -O2 -g -Wall $(KHDR_INCLUDES)

include ../../lib.mk

```
