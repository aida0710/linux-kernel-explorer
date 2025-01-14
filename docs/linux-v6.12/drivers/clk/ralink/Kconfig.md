---
sidebar_position: 3
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/clk/ralink/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# MediaTek Mt7621 Clock Driver
#
config CLK_MT7621
	bool "Clock driver for MediaTek MT7621"
	depends on SOC_MT7621 || COMPILE_TEST
	default SOC_MT7621
	select MFD_SYSCON
	help
	  This driver supports MediaTek MT7621 basic clocks.

config CLK_MTMIPS
	bool "Clock driver for MTMIPS SoCs"
	depends on SOC_RT305X || SOC_RT288X || SOC_RT3883 || SOC_MT7620 || COMPILE_TEST
	select MFD_SYSCON
	help
	  This driver supports MTMIPS basic clocks.

```
