---
sidebar_position: 2
---
# Kconfig

### ファイル情報

- パス: `drivers/net/ethernet/nvidia/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# NVIDIA network device configuration
#

config NET_VENDOR_NVIDIA
	bool "NVIDIA devices"
	default y
	depends on PCI
	help
	  If you have a network (Ethernet) card belonging to this class, say Y.

	  Note that the answer to this question doesn't directly affect the
	  kernel: saying N will just cause the configurator to skip all
	  the questions about NVIDIA cards. If you say Y, you will be asked for
	  your specific card in the following questions.

if NET_VENDOR_NVIDIA

config FORCEDETH
	tristate "nForce Ethernet support"
	depends on PCI
	help
	  If you have a network (Ethernet) controller of this type, say Y here.

	  To compile this driver as a module, choose M here. The module
	  will be called forcedeth.

endif # NET_VENDOR_NVIDIA

```
