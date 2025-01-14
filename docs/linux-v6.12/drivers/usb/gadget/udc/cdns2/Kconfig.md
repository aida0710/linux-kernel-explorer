---
sidebar_position: 8
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/usb/gadget/udc/cdns2/Kconfig`

### コンテンツ

```txt
config USB_CDNS2_UDC
	tristate "Cadence USBHS Device Controller"
	depends on USB_PCI && ACPI && HAS_DMA
	help
	  Cadence USBHS Device controller is a PCI based USB peripheral
	  controller which supports both full and high speed USB 2.0
	  data transfers.

	  Say "y" to link the driver statically, or "m" to build a
	  dynamically linked module called "cdns2-udc-pci.ko" and to
	  force all gadget drivers to also be dynamically linked.

```
