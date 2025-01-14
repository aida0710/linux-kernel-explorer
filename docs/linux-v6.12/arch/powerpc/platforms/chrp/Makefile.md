---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/powerpc/platforms/chrp/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-y				+= setup.o time.o pegasos_eth.o pci.o
obj-$(CONFIG_SMP)		+= smp.o
obj-$(CONFIG_NVRAM:m=y)		+= nvram.o

```
