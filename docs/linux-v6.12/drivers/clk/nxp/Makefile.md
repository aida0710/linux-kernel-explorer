---
sidebar_position: 5
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/clk/nxp/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_ARCH_LPC18XX)	+= clk-lpc18xx-cgu.o
obj-$(CONFIG_ARCH_LPC18XX)	+= clk-lpc18xx-ccu.o
obj-$(CONFIG_ARCH_LPC18XX)	+= clk-lpc18xx-creg.o
obj-$(CONFIG_ARCH_LPC32XX)	+= clk-lpc32xx.o

```
