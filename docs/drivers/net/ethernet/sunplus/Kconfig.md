---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `drivers/net/ethernet/sunplus/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Sunplus network device configuration
#

config NET_VENDOR_SUNPLUS
	bool "Sunplus devices"
	default y
	depends on ARCH_SUNPLUS || COMPILE_TEST
	help
	  If you have a network (Ethernet) card belonging to this
	  class, say Y here.

	  Note that the answer to this question doesn't directly
	  affect the kernel: saying N will just cause the configurator
	  to skip all the questions about Sunplus cards. If you say Y,
	  you will be asked for your specific card in the following
	  questions.

if NET_VENDOR_SUNPLUS

config SP7021_EMAC
	tristate "Sunplus Dual 10M/100M Ethernet devices"
	depends on SOC_SP7021 || COMPILE_TEST
	select PHYLIB
	help
	  If you have Sunplus dual 10M/100M Ethernet devices, say Y.
	  The network device creates two net-device interfaces.
	  To compile this driver as a module, choose M here. The
	  module will be called sp7021_emac.

endif # NET_VENDOR_SUNPLUS

```
