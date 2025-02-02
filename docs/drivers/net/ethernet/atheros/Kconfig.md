---
sidebar_position: 2
---
# Kconfig

### ファイル情報

- パス: `drivers/net/ethernet/atheros/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Atheros device configuration
#

config NET_VENDOR_ATHEROS
	bool "Atheros devices"
	default y
	depends on PCI || ATH79 || COMPILE_TEST
	help
	  If you have a network (Ethernet) card belonging to this class, say Y.

	  Note that the answer to this question doesn't directly affect the
	  kernel: saying N will just cause the configurator to skip all
	  the questions about Atheros devices. If you say Y, you will be asked
	  for your specific card in the following questions.

if NET_VENDOR_ATHEROS

config AG71XX
	tristate "Atheros AR7XXX/AR9XXX built-in ethernet mac support"
	depends on ATH79 || COMPILE_TEST
	select PHYLINK
	imply NET_SELFTESTS
	help
	  If you wish to compile a kernel for AR7XXX/91XXX and enable
	  ethernet support, then you should always answer Y to this.

config ATL2
	tristate "Atheros L2 Fast Ethernet support"
	depends on PCI
	select CRC32
	select MII
	help
	  This driver supports the Atheros L2 fast ethernet adapter.

	  To compile this driver as a module, choose M here.  The module
	  will be called atl2.

config ATL1
	tristate "Atheros/Attansic L1 Gigabit Ethernet support"
	depends on PCI
	select CRC32
	select MII
	help
	  This driver supports the Atheros/Attansic L1 gigabit ethernet
	  adapter.

	  To compile this driver as a module, choose M here.  The module
	  will be called atl1.

config ATL1E
	tristate "Atheros L1E Gigabit Ethernet support"
	depends on PCI
	select CRC32
	select MII
	help
	  This driver supports the Atheros L1E gigabit ethernet adapter.

	  To compile this driver as a module, choose M here.  The module
	  will be called atl1e.

config ATL1C
	tristate "Atheros L1C Gigabit Ethernet support"
	depends on PCI
	select CRC32
	select MII
	help
	  This driver supports the Atheros L1C gigabit ethernet adapter.

	  To compile this driver as a module, choose M here.  The module
	  will be called atl1c.

config ALX
	tristate "Qualcomm Atheros AR816x/AR817x support"
	depends on PCI
	select CRC32
	select MDIO
	help
	  This driver supports the Qualcomm Atheros L1F ethernet adapter,
	  i.e. the following chipsets:

	  1969:1091 - AR8161 Gigabit Ethernet
	  1969:1090 - AR8162 Fast Ethernet
	  1969:10A1 - AR8171 Gigabit Ethernet
	  1969:10A0 - AR8172 Fast Ethernet

	  To compile this driver as a module, choose M here.  The module
	  will be called alx.

endif # NET_VENDOR_ATHEROS

```
