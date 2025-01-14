---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/net/ethernet/nxp/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config LPC_ENET
	tristate "NXP ethernet MAC on LPC devices"
	depends on ARCH_LPC32XX || COMPILE_TEST
	select PHYLIB
	select CRC32
	help
	  Say Y or M here if you want to use the NXP ethernet MAC included on
	  some NXP LPC devices. You can safely enable this option for LPC32xx
	  SoC. Also available as a module.

```
