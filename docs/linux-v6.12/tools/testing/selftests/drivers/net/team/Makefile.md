---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/drivers/net/team/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
# Makefile for net selftests

TEST_PROGS := dev_addr_lists.sh

TEST_INCLUDES := \
	../bonding/lag_lib.sh \
	../../../net/forwarding/lib.sh \
	../../../net/lib.sh

include ../../../lib.mk

```
