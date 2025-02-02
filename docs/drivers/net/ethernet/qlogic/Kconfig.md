---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `drivers/net/ethernet/qlogic/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# QLogic network device configuration
#

config NET_VENDOR_QLOGIC
	bool "QLogic devices"
	default y
	depends on PCI
	help
	  If you have a network (Ethernet) card belonging to this class, say Y.

	  Note that the answer to this question doesn't directly affect the
	  kernel: saying N will just cause the configurator to skip all
	  the questions about QLogic cards. If you say Y, you will be asked for
	  your specific card in the following questions.

if NET_VENDOR_QLOGIC

config QLA3XXX
	tristate "QLogic QLA3XXX Network Driver Support"
	depends on PCI
	help
	  This driver supports QLogic ISP3XXX gigabit Ethernet cards.

	  To compile this driver as a module, choose M here: the module
	  will be called qla3xxx.

config QLCNIC
	tristate "QLOGIC QLCNIC 1/10Gb Converged Ethernet NIC Support"
	depends on PCI
	select FW_LOADER
	help
	  This driver supports QLogic QLE8240 and QLE8242 Converged Ethernet
	  devices.

config QLCNIC_SRIOV
	bool "QLOGIC QLCNIC 83XX family SR-IOV Support"
	depends on QLCNIC && PCI_IOV
	default y
	help
	  This configuration parameter enables Single Root Input Output
	  Virtualization support for QLE83XX Converged Ethernet devices.
	  This allows for virtual function acceleration in virtualized
	  environments.

config QLCNIC_DCB
	bool "QLOGIC QLCNIC 82XX and 83XX family DCB Support"
	depends on QLCNIC && DCB
	default y
	help
	  This configuration parameter enables DCB support in QLE83XX
	  and QLE82XX Converged Ethernet devices. This allows for DCB
	  get operations support through rtNetlink interface. Only CEE
	  mode of DCB is supported. PG and PFC values are related only
	  to Tx.

config QLCNIC_HWMON
	bool "QLOGIC QLCNIC 82XX and 83XX family HWMON support"
	depends on QLCNIC && HWMON && !(QLCNIC=y && HWMON=m)
	default y
	help
	  This configuration parameter can be used to read the
	  board temperature in Converged Ethernet devices
	  supported by qlcnic.

	  This data is available via the hwmon sysfs interface.

config NETXEN_NIC
	tristate "NetXen Multi port (1/10) Gigabit Ethernet NIC"
	depends on PCI
	select FW_LOADER
	help
	  This enables the support for NetXen's Gigabit Ethernet card.

config QED
	tristate "QLogic QED 25/40/100Gb core driver"
	depends on PCI
	select ZLIB_INFLATE
	select CRC8
	select CRC32
	select NET_DEVLINK
	help
	  This enables the support for Marvell FastLinQ adapters family.

config QED_LL2
	bool

config QED_SRIOV
	bool "QLogic QED 25/40/100Gb SR-IOV support"
	depends on QED && PCI_IOV
	default y
	help
	  This configuration parameter enables Single Root Input Output
	  Virtualization support for QED devices.
	  This allows for virtual function acceleration in virtualized
	  environments.

config QEDE
	tristate "QLogic QED 25/40/100Gb Ethernet NIC"
	depends on QED
	depends on PTP_1588_CLOCK_OPTIONAL
	help
	  This enables the support for Marvell FastLinQ adapters family,
	  ethernet driver.

config QED_RDMA
	bool

config QED_ISCSI
	bool

config QED_NVMETCP
	bool

config QED_FCOE
	bool

config QED_OOO
	bool

endif # NET_VENDOR_QLOGIC

```
