---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `drivers/net/ethernet/moxa/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# MOXART device configuration
#

config NET_VENDOR_MOXART
	bool "MOXA ART devices"
	default y
	depends on (ARM && ARCH_MOXART)
	help
	  If you have a network (Ethernet) card belonging to this class, say Y.

	  Note that the answer to this question doesn't directly affect the
	  kernel: saying N will just cause the configurator to skip all
	  the questions about MOXA ART devices. If you say Y, you will be asked
	  for your specific card in the following questions.

if NET_VENDOR_MOXART

config ARM_MOXART_ETHER
	tristate "MOXART Ethernet support"
	depends on ARM && ARCH_MOXART
	select NET_CORE
	help
	  If you wish to compile a kernel for a hardware with MOXA ART SoC and
	  want to use the internal ethernet then you should answer Y to this.


endif # NET_VENDOR_MOXART

```
