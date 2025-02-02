---
sidebar_position: 3
---
# Kconfig

### ファイル情報

- パス: `drivers/net/ethernet/seeq/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# SEEQ device configuration
#

config NET_VENDOR_SEEQ
	bool "SEEQ devices"
	default y
	depends on HAS_IOMEM
	help
	  If you have a network (Ethernet) card belonging to this class, say Y.

	  Note that the answer to this question doesn't directly affect the
	  kernel: saying N will just cause the configurator to skip all
	  the questions about SEEQ devices. If you say Y, you will be asked for
	  your specific card in the following questions.

if NET_VENDOR_SEEQ

config ARM_ETHER3
	tristate "Acorn/ANT Ether3 support"
	depends on ARM && ARCH_ACORN
	help
	  If you have an Acorn system with one of these network cards, you
	  should say Y to this option if you wish to use it with Linux.

config SGISEEQ
	tristate "SGI Seeq ethernet controller support"
	depends on SGI_HAS_SEEQ
	help
	  Say Y here if you have an Seeq based Ethernet network card. This is
	  used in many Silicon Graphics machines.

endif # NET_VENDOR_SEEQ

```
