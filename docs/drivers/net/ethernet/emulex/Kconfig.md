---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `drivers/net/ethernet/emulex/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Emulex driver configuration
#

config NET_VENDOR_EMULEX
	bool "Emulex devices"
	default y
	depends on PCI
	help
	  If you have a network (Ethernet) card belonging to this class, say Y.

	  Note that the answer to this question doesn't directly affect the
	  kernel: saying N will just cause the configurator to skip all
	  the questions about Emulex cards. If you say Y, you will be asked for
	  your specific card in the following questions.

if NET_VENDOR_EMULEX

source "drivers/net/ethernet/emulex/benet/Kconfig"

endif # NET_VENDOR_EMULEX

```
