---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `drivers/net/ethernet/cisco/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Cisco device configuration
#

config NET_VENDOR_CISCO
	bool "Cisco devices"
	default y
	depends on PCI
	help
	  If you have a network (Ethernet) card belonging to this class, say Y.

	  Note that the answer to this question doesn't directly affect the
	  kernel: saying N will just cause the configurator to skip all
	  the questions about Cisco cards. If you say Y, you will be asked for
	  your specific card in the following questions.

if NET_VENDOR_CISCO

source "drivers/net/ethernet/cisco/enic/Kconfig"

endif # NET_VENDOR_CISCO

```
