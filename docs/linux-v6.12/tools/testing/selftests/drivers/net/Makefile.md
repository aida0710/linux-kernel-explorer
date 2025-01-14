---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/drivers/net/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0

TEST_INCLUDES := $(wildcard lib/py/*.py) \
		 ../../net/net_helper.sh \
		 ../../net/lib.sh \

TEST_PROGS := \
	netcons_basic.sh \
	ping.py \
	queues.py \
	stats.py \
# end of TEST_PROGS

include ../../lib.mk

```
