---
sidebar_position: 2
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/arch/arm/mach-digicolor/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
config ARCH_DIGICOLOR
	bool "Conexant Digicolor SoC Support"
	depends on ARCH_MULTI_V7
	select CLKSRC_MMIO
	select DIGICOLOR_TIMER
	select GENERIC_IRQ_CHIP
	select GPIOLIB
	select MFD_SYSCON
	select PINCTRL
	select PINCTRL_DIGICOLOR

```
