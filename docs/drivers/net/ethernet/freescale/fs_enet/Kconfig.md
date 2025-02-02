---
sidebar_position: 4
---
# Kconfig

### ファイル情報

- パス: `drivers/net/ethernet/freescale/fs_enet/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config FS_ENET
	tristate "Freescale Ethernet Driver"
	depends on NET_VENDOR_FREESCALE && (CPM1 || CPM2 || PPC_MPC512x)
	select MII
	select PHYLINK

config FS_ENET_MPC5121_FEC
	def_bool y if (FS_ENET && PPC_MPC512x)
	select FS_ENET_HAS_FEC

config FS_ENET_HAS_SCC
	bool "Chip has an SCC usable for ethernet"
	depends on FS_ENET && (CPM1 || CPM2)
	default y

config FS_ENET_HAS_FCC
	bool "Chip has an FCC usable for ethernet"
	depends on FS_ENET && CPM2
	default y

config FS_ENET_HAS_FEC
	bool "Chip has an FEC usable for ethernet"
	depends on FS_ENET && (CPM1 || FS_ENET_MPC5121_FEC)
	select FS_ENET_MDIO_FEC
	default y

config FS_ENET_MDIO_FEC
	tristate "MDIO driver for FEC"
	depends on FS_ENET && (CPM1 || FS_ENET_MPC5121_FEC)

config FS_ENET_MDIO_FCC
	tristate "MDIO driver for FCC"
	depends on FS_ENET && CPM2
	select MDIO_BITBANG

```
