---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/soc/cirrus/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only

if ARCH_EP93XX

config EP93XX_SOC
	bool "Cirrus EP93xx chips SoC"
	select SOC_BUS
	select AUXILIARY_BUS
	default y
	help
	  Enable support SoC for Cirrus EP93xx chips.

	  Cirrus EP93xx chips have several swlocked registers,
	  this driver provides locked access for reset, pinctrl
	  and clk devices implemented as auxiliary devices.

endif

```
