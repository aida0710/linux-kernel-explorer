---
sidebar_position: 6
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/usb/gadget/udc/aspeed-vhub/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0+
config USB_ASPEED_VHUB
	tristate "Aspeed vHub UDC driver"
	depends on ARCH_ASPEED || COMPILE_TEST
	depends on USB_LIBCOMPOSITE
	help
	  USB peripheral controller for the Aspeed AST2400, AST2500 and
	  AST2600 family SoCs supporting the "vHub" functionality and USB2.0

```
