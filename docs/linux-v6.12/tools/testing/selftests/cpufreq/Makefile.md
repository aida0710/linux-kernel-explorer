---
sidebar_position: 6
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/cpufreq/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
all:

TEST_PROGS := main.sh
TEST_FILES := cpu.sh cpufreq.sh governor.sh module.sh special-tests.sh

include ../lib.mk

clean:

```
