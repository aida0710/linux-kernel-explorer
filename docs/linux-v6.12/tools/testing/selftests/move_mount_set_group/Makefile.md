---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/move_mount_set_group/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
# Makefile for mount selftests.
CFLAGS = -g $(KHDR_INCLUDES) -Wall -O2

TEST_GEN_FILES += move_mount_set_group_test

include ../lib.mk

```
