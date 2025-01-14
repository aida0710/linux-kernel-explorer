---
sidebar_position: 7
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/clk/zynqmp/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
# Zynq Ultrascale+ MPSoC clock specific Makefile

obj-$(CONFIG_ARCH_ZYNQMP)	+= pll.o clk-gate-zynqmp.o divider.o clk-mux-zynqmp.o clkc.o

```
