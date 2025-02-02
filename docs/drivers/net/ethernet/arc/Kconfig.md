---
sidebar_position: 5
---
# Kconfig

### ファイル情報

- パス: `drivers/net/ethernet/arc/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# ARC EMAC network device configuration
#

config NET_VENDOR_ARC
	bool "ARC devices"
	default y
	help
	  If you have a network (Ethernet) card belonging to this class, say Y.

	  Note that the answer to this question doesn't directly affect the
	  kernel: saying N will just cause the configurator to skip all
	  the questions about ARC cards. If you say Y, you will be asked for
	  your specific card in the following questions.

if NET_VENDOR_ARC

config ARC_EMAC_CORE
	tristate
	depends on ARC || ARCH_ROCKCHIP || COMPILE_TEST
	select MII
	select PHYLIB
	select CRC32

config EMAC_ROCKCHIP
	tristate "Rockchip EMAC support"
	select ARC_EMAC_CORE
	depends on OF_IRQ && REGULATOR
	depends on ARCH_ROCKCHIP || COMPILE_TEST
	help
	  Support for Rockchip RK3036/RK3066/RK3188 EMAC ethernet controllers.
	  This selects Rockchip SoC glue layer support for the
	  emac device driver. This driver is used for RK3036/RK3066/RK3188
	  EMAC ethernet controller.

endif # NET_VENDOR_ARC

```
