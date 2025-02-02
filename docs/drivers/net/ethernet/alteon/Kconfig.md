---
sidebar_position: 3
---
# Kconfig

### ファイル情報

- パス: `drivers/net/ethernet/alteon/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Alteon network device configuration
#

config NET_VENDOR_ALTEON
	bool "Alteon devices"
	default y
	depends on PCI
	help
	  If you have a network (Ethernet) card belonging to this class, say Y.

	  Note that the answer to this question doesn't directly affect the
	  kernel: saying N will just cause the configurator to skip all
	  the questions about Alteon cards. If you say Y, you will be asked for
	  your specific card in the following questions.

if NET_VENDOR_ALTEON

config ACENIC
	tristate "Alteon AceNIC/3Com 3C985/NetGear GA620 Gigabit support"
	depends on PCI
	help
	  Say Y here if you have an Alteon AceNIC, 3Com 3C985(B), NetGear
	  GA620, SGI Gigabit or Farallon PN9000-SX PCI Gigabit Ethernet
	  adapter. The driver allows for using the Jumbo Frame option (9000
	  bytes/frame) however it requires that your switches can handle this
	  as well. To enable Jumbo Frames, add `mtu 9000' to your ifconfig
	  line.

	  To compile this driver as a module, choose M here: the
	  module will be called acenic.

config ACENIC_OMIT_TIGON_I
	bool "Omit support for old Tigon I based AceNICs"
	depends on ACENIC
	help
	  Say Y here if you only have Tigon II based AceNICs and want to leave
	  out support for the older Tigon I based cards which are no longer
	  being sold (ie. the original Alteon AceNIC and 3Com 3C985 (non B
	  version)).  This will reduce the size of the driver object by
	  app. 100KB.  If you are not sure whether your card is a Tigon I or a
	  Tigon II, say N here.

	  The safe and default value for this is N.

endif # NET_VENDOR_ALTEON

```
