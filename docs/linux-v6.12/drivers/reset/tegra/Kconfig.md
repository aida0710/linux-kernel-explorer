---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/reset/tegra/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config RESET_TEGRA_BPMP
	bool "Tegra BPMP Reset Driver" if COMPILE_TEST
	default TEGRA_BPMP

```
