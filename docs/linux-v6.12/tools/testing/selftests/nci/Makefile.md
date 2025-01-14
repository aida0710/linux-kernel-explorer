---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/nci/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
CFLAGS += -Wl,-no-as-needed -Wall
LDFLAGS += -lpthread

TEST_GEN_PROGS := nci_dev
include ../lib.mk

```
