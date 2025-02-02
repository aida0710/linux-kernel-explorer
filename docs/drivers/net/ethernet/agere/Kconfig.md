---
sidebar_position: 3
---
# Kconfig

### ファイル情報

- パス: `drivers/net/ethernet/agere/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Agere device configuration
#

config NET_VENDOR_AGERE
	bool "Agere devices"
	default y
	depends on PCI
	help
	  If you have a network (Ethernet) card belonging to this class, say Y.

	  Note that the answer to this question doesn't directly affect the
	  kernel: saying N will just cause the configurator to skip all
	  the questions about Agere devices. If you say Y, you will be asked
	  for your specific card in the following questions.

if NET_VENDOR_AGERE

config ET131X
	tristate "Agere ET-1310 Gigabit Ethernet support"
	depends on PCI
	select PHYLIB
	select CRC32
	help
	  This driver supports Agere ET-1310 ethernet adapters.

	  To compile this driver as a module, choose M here. The module
	  will be called et131x.

endif # NET_VENDOR_AGERE

```
