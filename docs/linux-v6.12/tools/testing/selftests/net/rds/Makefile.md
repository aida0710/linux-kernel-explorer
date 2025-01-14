---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/net/rds/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0

all:
	@echo mk_build_dir="$(shell pwd)" > include.sh

TEST_PROGS := run.sh \
	test.py

TEST_FILES := include.sh

EXTRA_CLEAN := /tmp/rds_logs include.sh

include ../../lib.mk

```
