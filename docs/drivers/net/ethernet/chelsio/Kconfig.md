---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `drivers/net/ethernet/chelsio/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Chelsio device configuration
#

config NET_VENDOR_CHELSIO
	bool "Chelsio devices"
	default y
	depends on PCI
	help
	  If you have a network (Ethernet) card belonging to this class, say Y.

	  Note that the answer to this question doesn't directly affect the
	  kernel: saying N will just cause the configurator to skip all
	  the questions about Chelsio devices. If you say Y, you will be asked for
	  your specific card in the following questions.

if NET_VENDOR_CHELSIO

config CHELSIO_T1
	tristate "Chelsio 10Gb Ethernet support"
	depends on PCI
	select CRC32
	select MDIO
	help
	  This driver supports Chelsio gigabit and 10-gigabit
	  Ethernet cards. More information about adapter features and
	  performance tuning is in
	  <file:Documentation/networking/device_drivers/ethernet/chelsio/cxgb.rst>.

	  For general information about Chelsio and our products, visit
	  our website at <http://www.chelsio.com>.

	  For customer support, please visit our customer support page at
	  <http://www.chelsio.com/support.html>.

	  Please send feedback to <linux-bugs@chelsio.com>.

	  To compile this driver as a module, choose M here: the module
	  will be called cxgb.

config CHELSIO_T1_1G
	bool "Chelsio gigabit Ethernet support"
	depends on CHELSIO_T1
	help
	  Enables support for Chelsio's gigabit Ethernet PCI cards.  If you
	  are using only 10G cards say 'N' here.

config CHELSIO_T3
	tristate "Chelsio Communications T3 10Gb Ethernet support"
	depends on PCI && INET
	select FW_LOADER
	select MDIO
	help
	  This driver supports Chelsio T3-based gigabit and 10Gb Ethernet
	  adapters.

	  For general information about Chelsio and our products, visit
	  our website at <http://www.chelsio.com>.

	  For customer support, please visit our customer support page at
	  <http://www.chelsio.com/support.html>.

	  Please send feedback to <linux-bugs@chelsio.com>.

	  To compile this driver as a module, choose M here: the module
	  will be called cxgb3.

config CHELSIO_T4
	tristate "Chelsio Communications T4/T5/T6 Ethernet support"
	depends on PCI && (IPV6 || IPV6=n) && (TLS || TLS=n)
	depends on PTP_1588_CLOCK_OPTIONAL
	select FW_LOADER
	select MDIO
	select ZLIB_DEFLATE
	help
	  This driver supports Chelsio T4, T5 & T6 based gigabit, 10Gb Ethernet
	  adapter and T5/T6 based 40Gb and T6 based 25Gb, 50Gb and 100Gb
	  Ethernet adapters.

	  For general information about Chelsio and our products, visit
	  our website at <http://www.chelsio.com>.

	  For customer support, please visit our customer support page at
	  <http://www.chelsio.com/support.html>.

	  Please send feedback to <linux-bugs@chelsio.com>.

	  To compile this driver as a module choose M here; the module
	  will be called cxgb4.

config CHELSIO_T4_DCB
	bool "Data Center Bridging (DCB) Support for Chelsio T4/T5/T6 cards"
	default n
	depends on CHELSIO_T4 && DCB
	help
	  Enable DCB support through rtNetlink interface.
	  Say Y here if you want to enable Data Center Bridging (DCB) support
	  in the driver.

	  If unsure, say N.

config CHELSIO_T4_FCOE
	bool "Fibre Channel over Ethernet (FCoE) Support for Chelsio T5 cards"
	default n
	depends on CHELSIO_T4 && CHELSIO_T4_DCB && FCOE
	help
	  Enable FCoE offload features.
	  Say Y here if you want to enable Fibre Channel over Ethernet (FCoE) support
	  in the driver.

	  If unsure, say N.

config CHELSIO_T4VF
	tristate "Chelsio Communications T4/T5/T6 Virtual Function Ethernet support"
	depends on PCI
	help
	  This driver supports Chelsio T4, T5 & T6 based gigabit, 10Gb Ethernet
	  adapters and T5/T6 based 40Gb and T6 based 25Gb, 50Gb and 100Gb
	  Ethernet adapters with PCI-E SR-IOV Virtual Functions.

	  For general information about Chelsio and our products, visit
	  our website at <http://www.chelsio.com>.

	  For customer support, please visit our customer support page at
	  <http://www.chelsio.com/support.html>.

	  Please send feedback to <linux-bugs@chelsio.com>.

	  To compile this driver as a module choose M here; the module
	  will be called cxgb4vf.

config CHELSIO_LIB
	tristate
	help
	Common library for Chelsio drivers.

source "drivers/net/ethernet/chelsio/inline_crypto/Kconfig"

endif # NET_VENDOR_CHELSIO

```
