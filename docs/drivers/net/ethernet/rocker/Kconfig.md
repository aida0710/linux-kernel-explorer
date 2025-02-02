---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `drivers/net/ethernet/rocker/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Rocker device configuration
#

config NET_VENDOR_ROCKER
	bool "Rocker devices"
	default y
	help
	  If you have a network device belonging to this class, say Y.

	  Note that the answer to this question doesn't directly affect the
	  kernel: saying N will just cause the configurator to skip all
	  the questions about Rocker devices. If you say Y, you will be asked for
	  your specific card in the following questions.

if NET_VENDOR_ROCKER

config ROCKER
	tristate "Rocker switch driver (EXPERIMENTAL)"
	depends on PCI && NET_SWITCHDEV && BRIDGE
	select CRC32
	help
	  This driver supports Rocker switch device.

	  To compile this driver as a module, choose M here: the
	  module will be called rocker.

endif # NET_VENDOR_ROCKER

```
