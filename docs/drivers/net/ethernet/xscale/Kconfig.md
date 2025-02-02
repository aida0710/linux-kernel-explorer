---
sidebar_position: 3
---
# Kconfig

### ファイル情報

- パス: `drivers/net/ethernet/xscale/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Intel XScale IXP device configuration
#

config NET_VENDOR_XSCALE
	bool "Intel XScale IXP devices"
	default y
	depends on NET_VENDOR_INTEL && (ARM && ARCH_IXP4XX && \
		   IXP4XX_NPE && IXP4XX_QMGR)
	help
	  If you have a network (Ethernet) card belonging to this class, say Y.

	  Note that the answer to this question does not directly affect the
	  kernel: saying N will just cause the configurator to skip all
	  the questions about XScale IXP devices. If you say Y, you will be
	  asked for your specific card in the following questions.

if NET_VENDOR_XSCALE

config IXP4XX_ETH
	tristate "Intel IXP4xx Ethernet support"
	depends on ARM && ARCH_IXP4XX && IXP4XX_NPE && IXP4XX_QMGR && OF
	select PHYLIB
	select OF_MDIO
	select NET_PTP_CLASSIFY
	help
	  Say Y here if you want to use built-in Ethernet ports
	  on IXP4xx processor.

config PTP_1588_CLOCK_IXP46X
	bool "Intel IXP46x as PTP clock"
	depends on IXP4XX_ETH
	depends on PTP_1588_CLOCK=y || PTP_1588_CLOCK=IXP4XX_ETH
	default y
	help
	  This driver adds support for using the IXP46X as a PTP
	  clock. This clock is only useful if your PTP programs are
	  getting hardware time stamps on the PTP Ethernet packets
	  using the SO_TIMESTAMPING API.

	  To compile this driver as a module, choose M here: the module
	  will be called ptp_ixp46x.

endif # NET_VENDOR_XSCALE

```
