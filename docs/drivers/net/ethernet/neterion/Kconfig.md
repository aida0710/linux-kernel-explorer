---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `drivers/net/ethernet/neterion/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Exar device configuration
#

config NET_VENDOR_NETERION
	bool "Neterion (Exar) devices"
	default y
	depends on PCI
	help
	  If you have a network (Ethernet) card belonging to this class, say Y.

	  Note that the answer to this question doesn't directly affect the
	  kernel: saying N will just cause the configurator to skip all
	  the questions about Neterion/Exar cards. If you say Y, you will be
	  asked for your specific card in the following questions.

if NET_VENDOR_NETERION

config S2IO
	tristate "Neterion (Exar) Xframe 10Gb Ethernet Adapter"
	depends on PCI
	help
	  This driver supports Exar Corp's Xframe Series 10Gb Ethernet Adapters.
	  These were originally released from S2IO, which renamed itself
	  Neterion.  So, the adapters might be labeled as either one, depending
	  on its age.

	  More specific information on configuring the driver is in
	  <file:Documentation/networking/device_drivers/ethernet/neterion/s2io.rst>.

	  To compile this driver as a module, choose M here. The module
	  will be called s2io.

endif # NET_VENDOR_NETERION

```
