---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `drivers/net/ethernet/oki-semi/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# OKI Semiconductor device configuration
#

config NET_VENDOR_OKI
	bool "OKI Semiconductor devices"
	default y
	depends on PCI
	help
	  If you have a network (Ethernet) card belonging to this class, say Y.

	  Note that the answer to this question doesn't directly affect the
	  kernel: saying N will just cause the configurator to skip all
	  the questions about OKI Semiconductor cards. If you say Y, you will
	  be asked for your specific card in the following questions.

if NET_VENDOR_OKI

source "drivers/net/ethernet/oki-semi/pch_gbe/Kconfig"

endif # NET_VENDOR_OKI

```
