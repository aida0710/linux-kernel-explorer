---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/block/mtip32xx/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# mtip32xx device driver configuration
#

config BLK_DEV_PCIESSD_MTIP32XX
	tristate "Block Device Driver for Micron PCIe SSDs"
	depends on PCI
	help
          This enables the block driver for Micron PCIe SSDs.

```
