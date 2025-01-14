---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/syscall_user_dispatch/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
top_srcdir = ../../../..
INSTALL_HDR_PATH = $(top_srcdir)/usr
LINUX_HDR_PATH = $(INSTALL_HDR_PATH)/include/

CFLAGS += -Wall -I$(LINUX_HDR_PATH)

TEST_GEN_PROGS := sud_test sud_benchmark
include ../lib.mk

```
