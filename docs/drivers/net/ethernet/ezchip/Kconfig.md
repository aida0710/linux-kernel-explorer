---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `drivers/net/ethernet/ezchip/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# EZchip network device configuration
#

config NET_VENDOR_EZCHIP
	bool "EZchip devices"
	default y
	help
	  If you have a network (Ethernet) device belonging to this class, say Y.

	  Note that the answer to this question doesn't directly affect the
	  kernel: saying N will just cause the configurator to skip all
	  the questions about EZchip devices. If you say Y, you will be asked for
	  your specific device in the following questions.

if NET_VENDOR_EZCHIP

config EZCHIP_NPS_MANAGEMENT_ENET
	tristate "EZchip NPS management enet support"
	depends on OF_IRQ
	depends on HAS_IOMEM
	help
	  Simple LAN device for debug or management purposes.
	  Device supports interrupts for RX and TX(completion).
	  Device does not have DMA ability.

endif

```
