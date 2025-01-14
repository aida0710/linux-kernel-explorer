---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/pid_namespace/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
CFLAGS += -g $(KHDR_INCLUDES)

TEST_GEN_PROGS = regression_enomem

LOCAL_HDRS += $(selfdir)/pidfd/pidfd.h

include ../lib.mk

```
