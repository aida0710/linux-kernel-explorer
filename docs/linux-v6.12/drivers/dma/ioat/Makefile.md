---
sidebar_position: 6
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/dma/ioat/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_INTEL_IOATDMA) += ioatdma.o
ioatdma-y := init.o dma.o prep.o dca.o sysfs.o

```
