---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/mount_setattr/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
# Makefile for mount selftests.
CFLAGS = -g $(KHDR_INCLUDES) -Wall -O2 -pthread

TEST_GEN_PROGS := mount_setattr_test

include ../lib.mk

```
