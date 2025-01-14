---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/ia64/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
TEST_PROGS := aliasing-test

all: $(TEST_PROGS)

include ../lib.mk

clean:
	rm -fr $(TEST_PROGS)

```
