---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/memory-hotplug/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
all:

include ../lib.mk

TEST_PROGS := mem-on-off-test.sh

run_full_test:
	@/bin/bash ./mem-on-off-test.sh -r 10 && echo "memory-hotplug selftests: [PASS]" || echo "memory-hotplug selftests: [FAIL]"

clean:

```
