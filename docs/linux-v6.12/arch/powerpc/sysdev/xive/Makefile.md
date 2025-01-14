---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/powerpc/sysdev/xive/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only

obj-y				+= common.o
obj-$(CONFIG_PPC_XIVE_NATIVE)	+= native.o
obj-$(CONFIG_PPC_XIVE_SPAPR)	+= spapr.o

```
