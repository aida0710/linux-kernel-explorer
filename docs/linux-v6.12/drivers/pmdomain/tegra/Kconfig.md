---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/pmdomain/tegra/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only

config SOC_TEGRA_POWERGATE_BPMP
	def_bool y
	depends on PM_GENERIC_DOMAINS
	depends on TEGRA_BPMP

```
