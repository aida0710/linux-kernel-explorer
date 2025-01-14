---
sidebar_position: 10
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/usb/gadget/udc/bdc/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0

config USB_BDC_UDC
	tristate "Broadcom USB3.0 device controller IP driver(BDC)"
	depends on USB_GADGET && HAS_DMA
	default ARCH_BRCMSTB

	help
	BDC is Broadcom's USB3.0 device controller IP. If your SOC has a BDC IP
	then select this driver.

	Say "y" here to link the driver statically, or "m" to build a dynamically
	linked module called "bdc".

```
