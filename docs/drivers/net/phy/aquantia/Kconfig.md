---
sidebar_position: 6
---
# Kconfig

### ファイル情報

- パス: `drivers/net/phy/aquantia/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config AQUANTIA_PHY
	tristate "Aquantia PHYs"
	select CRC_ITU_T
	help
	  Currently supports the Aquantia AQ1202, AQ2104, AQR105, AQR405

```
