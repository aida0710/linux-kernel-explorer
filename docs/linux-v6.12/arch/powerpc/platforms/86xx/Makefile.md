---
sidebar_position: 6
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/powerpc/platforms/86xx/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Makefile for the PowerPC 86xx linux kernel.
#

obj-y				:= pic.o common.o
obj-$(CONFIG_SMP)		+= mpc86xx_smp.o
obj-$(CONFIG_GEF_SBC610)	+= gef_sbc610.o
obj-$(CONFIG_GEF_SBC310)	+= gef_sbc310.o
obj-$(CONFIG_GEF_PPC9A)		+= gef_ppc9a.o
obj-$(CONFIG_MVME7100)          += mvme7100.o

```
