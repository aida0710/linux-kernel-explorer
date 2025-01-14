---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/samples/coresight/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only

obj-$(CONFIG_SAMPLE_CORESIGHT_SYSCFG) += coresight-cfg-sample.o
ccflags-y += -I$(srctree)/drivers/hwtracing/coresight

```
