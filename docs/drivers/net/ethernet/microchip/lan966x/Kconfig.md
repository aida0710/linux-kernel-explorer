---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `drivers/net/ethernet/microchip/lan966x/Kconfig`

### コンテンツ

```txt
config LAN966X_SWITCH
	tristate "Lan966x switch driver"
	depends on PTP_1588_CLOCK_OPTIONAL
	depends on HAS_IOMEM
	depends on OF
	depends on NET_SWITCHDEV
	depends on BRIDGE || BRIDGE=n
	select PHYLINK
	select PAGE_POOL
	select VCAP
	select FDMA
	help
	  This driver supports the Lan966x network switch device.

config LAN966X_DCB
	bool "Data Center Bridging (DCB) support"
	depends on LAN966X_SWITCH && DCB
	default y
	help
	  Say Y here if you want to use Data Center Bridging (DCB) in the
	  driver. This can be used to assign priority to traffic, based on
	  DSCP and PCP.

	  If unsure, set to Y.

```
