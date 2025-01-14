---
sidebar_position: 9
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/gpio/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0

TEST_PROGS := gpio-mockup.sh gpio-sim.sh
TEST_FILES := gpio-mockup-sysfs.sh
TEST_GEN_PROGS_EXTENDED := gpio-mockup-cdev gpio-chip-info gpio-line-name
CFLAGS += -O2 -g -Wall $(KHDR_INCLUDES)

include ../lib.mk

```
