---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/ntb/hw/intel/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config NTB_INTEL
	tristate "Intel Non-Transparent Bridge support"
	depends on X86_64
	help
	 This driver supports Intel NTB on capable Xeon and Atom hardware.

	 If unsure, say N.

```
