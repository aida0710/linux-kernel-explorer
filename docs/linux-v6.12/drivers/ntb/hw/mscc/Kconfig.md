---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/ntb/hw/mscc/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config NTB_SWITCHTEC
	tristate "MicroSemi Switchtec Non-Transparent Bridge Support"
	select PCI_SW_SWITCHTEC
	help
	 Enables NTB support for Switchtec PCI switches. This also
	 selects the Switchtec management driver as they share the same
	 hardware interface.

	 If unsure, say N.

```
