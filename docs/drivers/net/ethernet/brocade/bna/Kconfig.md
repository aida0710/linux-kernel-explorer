---
sidebar_position: 28
---
# Kconfig

### ファイル情報

- パス: `drivers/net/ethernet/brocade/bna/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# QLogic BR-series network device configuration
#

config BNA
	tristate "QLogic BR-series 1010/1020/1860 10Gb Ethernet Driver support"
	depends on PCI
	help
	  This driver supports QLogic BR-series 1010/1020/1860 10Gb CEE capable
	  Ethernet cards.
	  To compile this driver as a module, choose M here: the module
	  will be called bna.

	  For general information and support, go to the QLogic support
	  website at:

	  <http://support.qlogic.com>

```
