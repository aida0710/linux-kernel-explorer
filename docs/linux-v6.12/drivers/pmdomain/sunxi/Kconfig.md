---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/pmdomain/sunxi/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only

config SUN20I_PPU
	bool "Allwinner D1 PPU power domain driver"
	depends on ARCH_SUNXI || COMPILE_TEST
	depends on PM
	select PM_GENERIC_DOMAINS
	help
	  Say y to enable the PPU power domain driver. This saves power
	  when certain peripherals, such as the video engine, are idle.

```
