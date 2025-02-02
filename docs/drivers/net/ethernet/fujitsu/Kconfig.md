---
sidebar_position: 2
---
# Kconfig

### ファイル情報

- パス: `drivers/net/ethernet/fujitsu/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Fujitsu Network device configuration
#

config NET_VENDOR_FUJITSU
	bool "Fujitsu devices"
	default y
	depends on PCMCIA
	help
	  If you have a network (Ethernet) card belonging to this class, say Y.

	  Note that the answer to this question doesn't directly affect the
	  the questions about Fujitsu cards. If you say Y, you will be asked for
	  your specific card in the following questions.

if NET_VENDOR_FUJITSU

config PCMCIA_FMVJ18X
	tristate "Fujitsu FMV-J18x PCMCIA support"
	depends on PCMCIA && HAS_IOPORT
	select CRC32
	help
	  Say Y here if you intend to attach a Fujitsu FMV-J18x or compatible
	  PCMCIA (PC-card) Ethernet card to your computer.

	  To compile this driver as a module, choose M here: the module will be
	  called fmvj18x_cs.  If unsure, say N.

endif # NET_VENDOR_FUJITSU

```
