---
sidebar_position: 9
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/clk/x86/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_X86_AMD_PLATFORM_DEVICE)	+= clk-fch.o
obj-$(CONFIG_X86_INTEL_LPSS)	+= clk-lpss-atom.o clk-pmc-atom.o
obj-$(CONFIG_CLK_LGM_CGU)	+= clk-cgu.o clk-cgu-pll.o clk-lgm.o

```
