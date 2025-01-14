---
sidebar_position: 5
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/splice/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
TEST_PROGS := default_file_splice_read.sh short_splice_read.sh
TEST_GEN_PROGS_EXTENDED := default_file_splice_read splice_read

include ../lib.mk

```
