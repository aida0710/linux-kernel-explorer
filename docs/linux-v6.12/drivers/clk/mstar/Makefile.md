---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/clk/mstar/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Makefile for mstar specific clk
#

obj-$(CONFIG_MSTAR_MSC313_CPUPLL) += clk-msc313-cpupll.o
obj-$(CONFIG_MSTAR_MSC313_MPLL) += clk-msc313-mpll.o

```
