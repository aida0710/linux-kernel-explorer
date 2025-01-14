---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/phy/sunplus/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only

config PHY_SUNPLUS_USB
	tristate "Sunplus SP7021 USB 2.0 PHY driver"
	depends on OF && (SOC_SP7021 || COMPILE_TEST)
	select GENERIC_PHY
	help
	  Enable this to support the USB 2.0 PHY on Sunplus SP7021
	  SoC. The USB 2.0 PHY controller supports battery charger
	  and synchronous signals, various power down modes including
	  operating, partial and suspend modes, and high-speed,
	  full-speed and low-speed data transfer.

```
