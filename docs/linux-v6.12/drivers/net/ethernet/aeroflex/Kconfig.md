---
sidebar_position: 3
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/net/ethernet/aeroflex/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Aeroflex Gaisler network device configuration
#

config GRETH
	tristate "Aeroflex Gaisler GRETH Ethernet MAC support"
	depends on SPARC
	select PHYLIB
	select CRC32
	help
	  Say Y here if you want to use the Aeroflex Gaisler GRETH Ethernet MAC.

```
