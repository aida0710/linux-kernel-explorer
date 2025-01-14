---
sidebar_position: 5
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/net/hsr/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0

top_srcdir = ../../../../..

TEST_PROGS := hsr_ping.sh hsr_redbox.sh
TEST_FILES += hsr_common.sh

include ../../lib.mk

```
