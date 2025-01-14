---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/filesystems/statmount/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-or-later

CFLAGS += -Wall -O2 -g $(KHDR_INCLUDES)
TEST_GEN_PROGS := statmount_test statmount_test_ns

include ../../lib.mk

```
