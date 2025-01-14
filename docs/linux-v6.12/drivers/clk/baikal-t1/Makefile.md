---
sidebar_position: 10
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/clk/baikal-t1/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_CLK_BT1_CCU_PLL) += ccu-pll.o clk-ccu-pll.o
obj-$(CONFIG_CLK_BT1_CCU_DIV) += ccu-div.o clk-ccu-div.o
obj-$(CONFIG_CLK_BT1_CCU_RST) += ccu-rst.o

```
