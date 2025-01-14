---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/lib/reed_solomon/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# This is a modified version of reed solomon lib,
#

obj-$(CONFIG_REED_SOLOMON) += reed_solomon.o
obj-$(CONFIG_REED_SOLOMON_TEST) += test_rslib.o

```
