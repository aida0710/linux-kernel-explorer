---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `drivers/net/ethernet/pensando/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
# Copyright (c) 2019 Pensando Systems, Inc
#
# Pensando device configuration
#

config NET_VENDOR_PENSANDO
	bool "Pensando devices"
	default y
	help
	  If you have a network (Ethernet) card belonging to this class, say Y.

	  Note that the answer to this question doesn't directly affect the
	  kernel: saying N will just cause the configurator to skip all
	  the questions about Pensando cards. If you say Y, you will be asked
	  for your specific card in the following questions.

if NET_VENDOR_PENSANDO

config IONIC
	tristate "Pensando Ethernet IONIC Support"
	depends on 64BIT && PCI
	depends on PTP_1588_CLOCK_OPTIONAL
	select NET_DEVLINK
	select DIMLIB
	select PAGE_POOL
	help
	  This enables the support for the Pensando family of Ethernet
	  adapters.  More specific information on this driver can be
	  found in
	  <file:Documentation/networking/device_drivers/ethernet/pensando/ionic.rst>.

	  To compile this driver as a module, choose M here. The module
	  will be called ionic.

endif # NET_VENDOR_PENSANDO

```
