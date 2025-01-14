---
sidebar_position: 5
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/tc-testing/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0

TEST_PROGS += tdc.sh
TEST_FILES := action-ebpf tdc*.py Tdc*.py plugins plugin-lib tc-tests scripts

include ../lib.mk

```
