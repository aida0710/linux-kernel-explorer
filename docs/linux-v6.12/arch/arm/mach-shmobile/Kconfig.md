---
sidebar_position: 6
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/arch/arm/mach-shmobile/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
menuconfig ARCH_RENESAS
	bool "Renesas ARM SoCs"
	depends on ARCH_MULTI_V7
	select ARM_GIC
	select NO_IOPORT_MAP
	select ZONE_DMA if ARM_LPAE

```
