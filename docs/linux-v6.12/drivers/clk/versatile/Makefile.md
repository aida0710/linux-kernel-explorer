---
sidebar_position: 10
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/clk/versatile/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
# Makefile for Versatile-specific clocks
obj-$(CONFIG_CLK_ICST)		+= icst.o clk-icst.o clk-versatile.o
obj-$(CONFIG_INTEGRATOR_IMPD1)	+= clk-impd1.o
obj-$(CONFIG_CLK_SP810)		+= clk-sp810.o
obj-$(CONFIG_CLK_VEXPRESS_OSC)	+= clk-vexpress-osc.o

```
