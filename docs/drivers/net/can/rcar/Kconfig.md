---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `drivers/net/can/rcar/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
config CAN_RCAR
	tristate "Renesas R-Car and RZ/G CAN controller"
	depends on ARCH_RENESAS || COMPILE_TEST
	help
	  Say Y here if you want to use CAN controller found on Renesas R-Car
	  or RZ/G SoCs.

	  To compile this driver as a module, choose M here: the module will
	  be called rcar_can.

config CAN_RCAR_CANFD
	tristate "Renesas R-Car CAN FD controller"
	depends on ARCH_RENESAS || COMPILE_TEST
	help
	  Say Y here if you want to use CAN FD controller found on
	  Renesas R-Car SoCs. The driver puts the controller in CAN FD only
	  mode, which can interoperate with CAN2.0 nodes but does not support
	  dedicated CAN 2.0 mode.

	  To compile this driver as a module, choose M here: the module will
	  be called rcar_canfd.

```
