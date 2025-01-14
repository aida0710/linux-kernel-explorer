---
sidebar_position: 2
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/amba/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
config ARM_AMBA
	bool

if ARM_AMBA

config TEGRA_AHB
	bool
	default y if ARCH_TEGRA
	help
	  Adds AHB configuration functionality for NVIDIA Tegra SoCs,
	  which controls AHB bus master arbitration and some performance
	  parameters (priority, prefetch size).

endif

```
