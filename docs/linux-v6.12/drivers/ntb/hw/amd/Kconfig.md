---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/ntb/hw/amd/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config NTB_AMD
	tristate "AMD Non-Transparent Bridge support"
	depends on X86_64
	help
	 This driver supports AMD NTB on capable Zeppelin hardware.

	 If unsure, say N.

```
