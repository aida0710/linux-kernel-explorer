---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/net/packetdrill/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0

TEST_INCLUDES := ksft_runner.sh \
		 defaults.sh \
		 set_sysctls.py \
		 ../../kselftest/ktap_helpers.sh

TEST_PROGS := $(wildcard *.pkt)

include ../../lib.mk

```
