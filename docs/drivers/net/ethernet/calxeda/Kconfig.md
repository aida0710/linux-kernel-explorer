---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `drivers/net/ethernet/calxeda/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config NET_CALXEDA_XGMAC
	tristate "Calxeda 1G/10G XGMAC Ethernet driver"
	depends on HAS_IOMEM
	depends on ARCH_HIGHBANK || COMPILE_TEST
	select CRC32
	help
	  This is the driver for the XGMAC Ethernet IP block found on Calxeda
	  Highbank platforms.

```
