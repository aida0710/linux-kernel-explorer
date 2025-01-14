---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/powerpc/platforms/82xx/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Makefile for the PowerPC 82xx linux kernel.
#
obj-$(CONFIG_CPM2) += pq2.o
obj-$(CONFIG_EP8248E) += ep8248e.o
obj-$(CONFIG_MGCOGE) += km82xx.o

```
