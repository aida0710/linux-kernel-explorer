---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `drivers/net/ethernet/actions/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only

config NET_VENDOR_ACTIONS
	bool "Actions Semi devices"
	depends on ARCH_ACTIONS || COMPILE_TEST
	default ARCH_ACTIONS
	help
	  If you have a network (Ethernet) card belonging to this class, say Y.

	  Note that the answer to this question doesn't directly affect the
	  kernel: saying N will just cause the configurator to skip all the
	  questions about Actions Semi devices.  If you say Y, you will be
	  asked for your specific card in the following questions.

if NET_VENDOR_ACTIONS

config OWL_EMAC
	tristate "Actions Semi Owl Ethernet MAC support"
	select PHYLIB
	help
	  This driver supports the Actions Semi Ethernet Media Access
	  Controller (EMAC) found on the S500 and S900 SoCs.  The controller
	  is compliant with the IEEE 802.3 CSMA/CD standard and supports
	  both half-duplex and full-duplex operation modes at 10/100 Mb/s.

endif # NET_VENDOR_ACTIONS

```
