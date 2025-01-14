---
sidebar_position: 3
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/arch/arm/mach-lpc32xx/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only

config ARCH_LPC32XX
	bool "NXP LPC32XX"
	depends on ARCH_MULTI_V5
	depends on CPU_LITTLE_ENDIAN
	select ARM_AMBA
	select CLKSRC_LPC32XX
	select CPU_ARM926T
	select GPIOLIB
	select LPC32XX_DMAMUX if AMBA_PL08X
	help
	  Support for the NXP LPC32XX family of processors

```
