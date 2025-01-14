---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/net/can/rockchip/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0

config CAN_ROCKCHIP_CANFD
	tristate "Rockchip CAN-FD controller"
	depends on OF
	depends on ARCH_ROCKCHIP || COMPILE_TEST
	select CAN_RX_OFFLOAD
	help
	  Say Y here if you want to use CAN-FD controller found on
	  Rockchip SoCs.

```
