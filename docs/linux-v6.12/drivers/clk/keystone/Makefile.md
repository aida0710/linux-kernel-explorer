---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/clk/keystone/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_COMMON_CLK_KEYSTONE)	+= pll.o gate.o
obj-$(CONFIG_TI_SCI_CLK)		+= sci-clk.o
obj-$(CONFIG_TI_SYSCON_CLK)		+= syscon-clk.o

```
