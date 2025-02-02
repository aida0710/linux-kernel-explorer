---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `drivers/net/ethernet/alacritech/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config NET_VENDOR_ALACRITECH
	bool "Alacritech devices"
	default y
	help
	  If you have a network (Ethernet) card belonging to this class, say Y.

	  Note that the answer to this question doesn't directly affect the
	  kernel: saying N will just cause the configurator to skip all the
	  questions about Alacritech devices. If you say Y, you will be asked
	  for your specific device in the following questions.

if NET_VENDOR_ALACRITECH

config SLICOSS
	tristate "Alacritech Slicoss support"
	depends on PCI
	select CRC32
	help
	  This driver supports Gigabit Ethernet adapters based on the
	  Session Layer Interface (SLIC) technology by Alacritech.

	  Supported are Mojave (1 port) and Oasis (1, 2 and 4 port) cards,
	  both copper and fiber.

	  To compile this driver as a module, choose M here: the module
	  will be called slicoss. This is recommended.

endif # NET_VENDOR_ALACRITECH

```
