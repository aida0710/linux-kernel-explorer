---
sidebar_position: 5
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/efivarfs/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
CFLAGS = -Wall

TEST_GEN_FILES := open-unlink create-read
TEST_PROGS := efivarfs.sh

include ../lib.mk


```
