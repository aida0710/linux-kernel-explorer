---
sidebar_position: 6
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/clk/ux500/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Makefile for ux500 clocks
#

# Clock types
obj-y += clk-prcc.o
obj-y += clk-prcmu.o
obj-y += clk-sysctrl.o

# Reset control
obj-y += reset-prcc.o

# Clock definitions
obj-y += u8500_of_clk.o

# ABX500 clock driver
obj-y += abx500-clk.o

```
