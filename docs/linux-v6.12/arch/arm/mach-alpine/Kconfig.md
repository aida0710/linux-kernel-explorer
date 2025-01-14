---
sidebar_position: 5
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/arch/arm/mach-alpine/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
config ARCH_ALPINE
	bool "Annapurna Labs Alpine platform"
	depends on ARCH_MULTI_V7
	select ALPINE_MSI
	select ARM_AMBA
	select ARM_GIC
	select GENERIC_IRQ_CHIP
	select HAVE_ARM_ARCH_TIMER
	select MFD_SYSCON
	select FORCE_PCI
	select PCI_HOST_GENERIC
	help
	  This enables support for the Annapurna Labs Alpine V1 boards.

```
