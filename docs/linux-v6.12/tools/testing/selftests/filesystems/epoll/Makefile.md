---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/filesystems/epoll/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0

CFLAGS += $(KHDR_INCLUDES)
LDLIBS += -lpthread
TEST_GEN_PROGS := epoll_wakeup_test

include ../../lib.mk

```
