---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/arch/arm/mach-realtek/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-or-later
menuconfig ARCH_REALTEK
	bool "Realtek SoCs"
	depends on ARCH_MULTI_V7
	select ARM_GIC
	select ARM_GLOBAL_TIMER
	select CLKSRC_ARM_GLOBAL_TIMER_SCHED_CLOCK
	select GENERIC_IRQ_CHIP
	select RESET_CONTROLLER
	help
	  This enables support for the Realtek RTD1195 SoC family.

```
