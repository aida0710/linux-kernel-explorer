---
sidebar_position: 11
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/clk/uniphier/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config CLK_UNIPHIER
	bool "Clock driver for UniPhier SoCs"
	depends on ARCH_UNIPHIER || COMPILE_TEST
	depends on OF && MFD_SYSCON
	default ARCH_UNIPHIER
	help
	  Support for clock controllers on UniPhier SoCs.
	  Say Y if you want to control clocks provided by System Control
	  block, Media I/O block, Peripheral Block.

```
