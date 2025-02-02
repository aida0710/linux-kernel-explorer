---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `drivers/net/ethernet/dec/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Digital Equipment Inc network device configuration
#

config NET_VENDOR_DEC
	bool "Digital Equipment devices"
	default y
	depends on PCI || EISA || CARDBUS
	help
	  If you have a network (Ethernet) card belonging to this class, say Y.

	  Note that the answer to this question doesn't directly affect the
	  kernel: saying N will just cause the configurator to skip all
	  the questions about DEC cards. If you say Y, you will be asked for
	  your specific card in the following questions.

if NET_VENDOR_DEC
source "drivers/net/ethernet/dec/tulip/Kconfig"
endif # NET_VENDOR_DEC

```
