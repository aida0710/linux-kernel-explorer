---
sidebar_position: 5
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/clk/pistachio/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0

config COMMON_CLK_PISTACHIO
	bool "Support for IMG Pistachio SoC clock controllers"
	depends on MIPS || COMPILE_TEST
	help
	  Support for the IMG Pistachio SoC clock controller.
	  Say Y if you want to include clock support.

```
