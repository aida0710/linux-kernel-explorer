---
sidebar_position: 7
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/clk/pxa/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-y				+= clk-pxa.o
obj-$(CONFIG_PXA25x)		+= clk-pxa25x.o
obj-$(CONFIG_PXA27x)		+= clk-pxa27x.o
obj-$(CONFIG_PXA3xx)		+= clk-pxa3xx.o

```
